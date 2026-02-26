import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-bold mb-8 border border-red-100 uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              कास्की क्षेत्र नं. २ • नेकपा (एमाले)
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              समृद्ध नेपालको <span className="text-red-600">संकल्प।</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              कास्की-२ को विकास, सुशासन र समृद्धिको लागि रश्मि आचार्यको नेतृत्वमा सहभागी बनौं। नेकपा (एमाले) को भिजन, हाम्रो साझा भविष्य।
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#manifesto" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-3 uppercase tracking-wider">
                प्रतिबद्धता पत्र <ArrowRight className="w-6 h-6" />
              </a>
              <a href="#vision" className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:border-red-600 hover:text-red-600 transition-all uppercase tracking-wider text-center">
                हाम्रो दृष्टिकोण
              </a>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm inline-block">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">शैक्षिक योग्यता</p>
              <div className="flex flex-wrap gap-4 text-slate-900 font-black">
                <span>एल.एल.बी. (अधिवक्ता)</span>
                <span className="text-red-600">•</span>
                <span>एम.वि.एस. (राजनीति शास्त्र)</span>
                <span className="text-red-600">•</span>
                <span>पीएचडी स्कलर (अन्तर्राष्ट्रिय सम्बन्ध)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className=" rounded-[2rem] overflow-hidden shadow-1xl relative border-8 border-white">
              <img
                src="/desh pahiley.jpg"
                alt="Rashmi Acharya"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent text-white">
                <p className="text-4xl font-black tracking-tighter">रश्मि आचार्य</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <img src="/uml-logo.svg" className="w-6 h-6" />
                  </div>
                  <p className="text-yellow-400 font-black uppercase tracking-widest text-sm">नेकपा (एमाले) उम्मेदवार</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
