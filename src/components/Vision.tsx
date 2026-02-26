import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-red-950 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 tracking-tight">कास्की-२ को लागि <span className="text-yellow-400">दृष्टिकोण</span></h2>
          <p className="text-red-100/70 max-w-2xl mx-auto text-lg font-medium">
            नेकपा (एमाले) को नेतृत्वमा समृद्ध, समावेशी र आधुनिक कास्की निर्माण गर्ने हाम्रो साझा लक्ष्य।
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/20 flex items-center justify-center">
              <Eye className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">दृष्टिकोण</h3>
            <p className="text-red-100/60 leading-relaxed font-medium">
              कास्की-२ लाई नवप्रवर्तन, सांस्कृतिक संरक्षण र आर्थिक समृद्धिको केन्द्र बनाउने जहाँ हरेक नागरिकले अवसर पाउनेछन्।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 flex items-center justify-center">
              <Target className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">लक्ष्य</h3>
            <p className="text-red-100/60 leading-relaxed font-medium">
              दिगो पूर्वाधार, गुणस्तरीय सार्वजनिक सेवा र प्रत्यक्ष सामुदायिक संलग्नतालाई प्राथमिकता दिने नीतिहरू कार्यान्वयन गर्ने।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-400/20 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">मुख्य मूल्यहरू</h3>
            <p className="text-red-100/60 leading-relaxed font-medium">
              इमानदारी, जवाफदेहिता र समावेशिता हाम्रो अभियानको मुटु हो। हामी सुन्ने र पारदर्शिताका साथ काम गर्ने नेतृत्वमा विश्वास गर्छौं।
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-16 rounded-[4rem] bg-gradient-to-br from-red-600 to-red-800 text-center shadow-2xl shadow-red-900/40 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h3 className="text-4xl font-black mb-6 tracking-tight">आउनुहोस्, सँगै भविष्य निर्माण गरौं</h3>
          <p className="text-red-50 mb-12 max-w-xl mx-auto text-xl font-medium">
            तपाईंको साथ र समर्थन नै यो अभियानको मुख्य शक्ति हो। कास्की-२ लाई सबैको लागि राम्रो ठाउँ बनाउन हामीसँग जोडिनुहोस्।
          </p>
          <button className="bg-white text-red-800 px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-red-900 transition-all shadow-xl uppercase tracking-widest">
            अभियानलाई समर्थन गर्नुहोस्
          </button>
        </motion.div>
      </div>
    </section>
  );
}
