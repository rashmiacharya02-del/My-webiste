import { motion } from 'framer-motion';

export default function ShadesOfRashmi() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">7 Shades of <span className="text-red-600">Rashmi</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            नेतृत्व, इमानदारी र प्रतिबद्धताका सात आयामहरू।
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-white"
        >
          <img
            src="/shade.jpg"
            alt="7 Shades of Rashmi Acharya"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}