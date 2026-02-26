import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, HeartPulse, Leaf, Landmark, Briefcase } from 'lucide-react';

const manifestoItems = [
  {
    title: 'पर्यटन राजधानी',
    description: 'पोखरालाई विश्वकै उत्कृष्ट पर्यटकीय गन्तव्य बनाउने र पर्यटन पूर्वाधारमा जोड दिने।',
    icon: Leaf,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'गुणस्तरीय शिक्षा',
    description: 'विद्यालय र क्याम्पसहरूको भौतिक पूर्वाधार सुधार र प्राविधिक शिक्षामा विशेष जोड।',
    icon: GraduationCap,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'स्वास्थ्य र खानेपानी',
    description: 'एक घर एक धारा अभियान र वडा-वडामा एकीकृत स्वास्थ्य सेवा केन्द्रहरूको स्थापना।',
    icon: HeartPulse,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'यातायात र पूर्वाधार',
    description: 'पोखरा विमानस्थलबाट नियमित वैदेशिक उडान र सडक सञ्जालको स्तरोन्नति।',
    icon: Landmark,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'कृषि र पशुपालन',
    description: 'पकेट क्षेत्र घोषणा, आधुनिक शीत भण्डार र बाँदर नियन्त्रण नीतिको कार्यान्वयन।',
    icon: Briefcase,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'युवा स्वरोजगार',
    description: 'युवाहरूलाई सीप, तालिम र सहुलियतपूर्ण कर्जा मार्फत उद्यमशीलता प्रवर्द्धन।',
    icon: CheckCircle2,
    color: 'bg-red-50 text-red-600'
  }
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">हाम्रो <span className="text-red-600">प्रतिबद्धता पत्र</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            कास्की-२ का जनताको आवश्यकता र चाहना अनुसार तयार पारिएको नेकपा (एमाले) को संकल्प।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-red-600"
          >
            <img
              src="qr.jpeg"
              alt="Manifesto QR Code"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">मेरो प्रतिबद्धता पत्र</h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              कास्की क्षेत्र नं. २ को समृद्धिको लागि मेरो विस्तृत योजना र प्रतिबद्धताहरू पढ्नको लागि कृपया यो QR कोड स्क्यान गर्नुहोला। 
              हामीले कास्कीको हरेक कुनाको विकासको लागि ठोस योजनाहरू तयार पारेका छौं।
            </p>
            <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
              <p className="text-red-700 font-bold">
                "कास्कीको आवाज, आशा र भरोसा - रश्मि आचार्य"
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] border border-slate-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-50 transition-all group bg-white"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
