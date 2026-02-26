import { Facebook, Instagram, Mail, Phone, MapPin, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="/uml-logo.svg" alt="CPN-UML" className="w-10 h-10" />
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter">रश्मि आचार्य</h3>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              कास्की-२ को प्रगति र समृद्धिको लागि समर्पित। नेकपा (एमाले) को सूर्य चिन्ह मुनि हामी परिवर्तन ल्याउन सक्छौं।
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/Rashmi.Acharya.Uml" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all border border-slate-100">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@rashmiacharyaoffical" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all border border-slate-100">
                <Music className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/rashmi.acharya.338/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all border border-slate-100">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">क्विक लिङ्कहरू</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-600 hover:text-red-600 transition-colors font-bold">गृह</a></li>
              <li><a href="#manifesto" className="text-slate-600 hover:text-red-600 transition-colors font-bold">प्रतिबद्धता पत्र</a></li>
              <li><a href="#vision" className="text-slate-600 hover:text-red-600 transition-colors font-bold">दृष्टिकोण</a></li>
              <li><a href="#gallery" className="text-slate-600 hover:text-red-600 transition-colors font-bold">तस्विरहरू</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">सम्पर्क गर्नुहोस्</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                +977 9851132911
              </li>
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                rashmi.pkr037@gmail.com
              </li>
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                पोखरा, कास्की, नेपाल
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">न्यूजलेटर</h4>
            <p className="text-slate-600 mb-6 text-sm font-medium">हाम्रो अभियानको पछिल्लो अपडेटहरू पाउनुहोस्।</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="तपाईंको इमेल ठेगाना"
                className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-red-500 transition-colors shadow-sm"
              />
              <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                सब्सक्राइब गर्नुहोस्
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm font-bold">
            © {new Date().getFullYear()} रश्मि आचार्य अभियान • नेकपा (एमाले) कास्की-२। सबै अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
}
