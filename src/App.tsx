import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoScroller from './components/PhotoScroller';
import Manifesto from './components/Manifesto';
import ShadesOfRashmi from './components/ShadesOfRashmi';
import Vision from './components/Vision';
import Footer from './components/Footer';
import VoteCounter from './components/VoteCounter';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <PhotoScroller />
        <Manifesto />
        <ShadesOfRashmi />
        <Vision />
      </main>
      <Footer />
      <VoteCounter />
      <ChatBot />
    </div>
  );
}
