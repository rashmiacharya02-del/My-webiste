import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import path from 'path';
import AdmZip from 'adm-zip';
import fs from 'fs';



const db = new Database('votes.db');
db.exec('CREATE TABLE IF NOT EXISTS votes (id INTEGER PRIMARY KEY, count INTEGER)');
const row = db.prepare('SELECT count FROM votes WHERE id = 1').get();
if (!row) {
  db.prepare('INSERT INTO votes (id, count) VALUES (1, 0)').run();
}

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    }
  });

  const PORT = 3000;

  // API Route for downloading the project as a zip
  app.get('/api/download', (req, res) => {
    try {
      const zip = new AdmZip();
      const rootDir = process.cwd();
      const files = fs.readdirSync(rootDir);

      files.forEach(file => {
        const filePath = path.join(rootDir, file);
        const stats = fs.statSync(filePath);

        // Exclude node_modules, dist, and other non-source files
        if (['node_modules', 'dist', 'votes.db', '.git', '.next', 'out'].includes(file)) {
          return;
        }

        if (stats.isDirectory()) {
          zip.addLocalFolder(filePath, file);
        } else {
          zip.addLocalFile(filePath);
        }
      });

      const zipBuffer = zip.toBuffer();
      res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="rashmi-acharya-campaign-website.zip"',
        'Content-Length': zipBuffer.length
      });
      res.send(zipBuffer);
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).send('Error generating zip file');
    }
  });

  io.on('connection', (socket) => {
    const currentVotes = db.prepare('SELECT count FROM votes WHERE id = 1').get().count;
    socket.emit('voteUpdate', currentVotes);

    socket.on('vote', () => {
      db.prepare('UPDATE votes SET count = count + 1 WHERE id = 1').run();
      const updatedVotes = db.prepare('SELECT count FROM votes WHERE id = 1').get().count;
      io.emit('voteUpdate', updatedVotes);
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
