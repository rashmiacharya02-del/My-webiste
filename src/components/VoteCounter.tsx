import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io } from 'socket.io-client';
import { ThumbsUp } from 'lucide-react';

const socket = io();

export default function VoteCounter() {
  const [votes, setVotes] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [showParticle, setShowParticle] = React.useState<{ id: number; x: number; y: number }[]>([]);

  React.useEffect(() => {
    socket.on('voteUpdate', (count: number) => {
      setVotes(count);
    });

    return () => {
      socket.off('voteUpdate');
    };
  }, []);

  const handleVote = (e: React.MouseEvent) => {
    socket.emit('vote');
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);

    const newParticle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setShowParticle(prev => [...prev, newParticle]);
    setTimeout(() => {
      setShowParticle(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

  const logoUrl = "/uml-logo.svg";

  return (
    <>
      {/* Floating Counter Icon */}
      <div className="fixed right-6 bottom-32 z-50 flex flex-col items-center gap-2">
        <motion.div
          animate={isAnimating ? { scale: [1, 1.3, 1] } : {}}
          className="relative group"
        >
          <div className="absolute -top-4 -right-2 bg-red-600 text-white text-xs font-black px-2 py-1 rounded-full shadow-lg border-2 border-white z-10">
            {votes.toLocaleString()}
          </div>
          <div className="w-16 h-16 rounded-full bg-white shadow-2xl border-4 border-red-600 p-2 flex items-center justify-center overflow-hidden">
            <img src={logoUrl} alt="Vote Count" className="w-full h-full object-contain" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
            कुल मत संख्या
          </div>
        </motion.div>
      </div>

      {/* Main Vote Button (Fixed at bottom) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleVote}
          className="w-full bg-red-600 text-white py-4 rounded-2xl font-black text-xl shadow-2xl shadow-red-500/40 flex items-center justify-center gap-3 border-4 border-yellow-400 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          <ThumbsUp className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          रश्मिलाई भोट दिनुहोस्
        </motion.button>
      </div>

      {/* Particles */}
      <AnimatePresence>
        {showParticle.map(particle => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, y: particle.y, x: particle.x, scale: 1 }}
            animate={{ opacity: 0, y: particle.y - 100, scale: 1.5 }}
            exit={{ opacity: 0 }}
            className="fixed pointer-events-none z-[60] text-red-600 font-black text-2xl"
          >
            +1 ☀️
          </motion.div>
        ))}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  );
}
