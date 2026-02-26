import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, User, Bot } from 'lucide-react';
import Markdown from 'react-markdown';
import { GoogleGenerativeAI } from "@google/generative-ai";

const MANIFESTO_CONTEXT = `
Candidate Name: Rashmi Acharya (रश्मि आचार्य)
Constituency: Kaski-2 (कास्की क्षेत्र नं. २)
Party: CPN-UML (नेकपा एमाले)
Education: 
- LL.B. (Advocate)
- M.V.Sc. (Political Science) - Note: User mentioned M.V.Sc earlier but also MBS, I will use the most academic sounding one or both if applicable. Actually Hero.tsx says MBS. Let's stick to Hero.tsx: एल.एल.बी. (अधिवक्ता), एम.वि.एस. (राजनीति शास्त्र), पीएचडी स्कलर (अन्तर्राष्ट्रिय सम्बन्ध).
- PhD Scholar (International Relations)

Manifesto Points (प्रतिबद्धताहरू):
1. पर्यटन राजधानी (Tourism Capital): पोखरालाई विश्वकै उत्कृष्ट पर्यटकीय गन्तव्य बनाउने र पर्यटन पूर्वाधारमा जोड दिने।
2. गुणस्तरीय शिक्षा (Quality Education): विद्यालय र क्याम्पसहरूको भौतिक पूर्वाधार सुधार र प्राविधिक शिक्षामा विशेष जोड।
3. स्वास्थ्य र खानेपानी (Health and Drinking Water): एक घर एक धारा अभियान र वडा-वडामा एकीकृत स्वास्थ्य सेवा केन्द्रहरूको स्थापना।
4. यातायात र पूर्वाधार (Transport and Infrastructure): पोखरा विमानस्थलबाट नियमित वैदेशिक उडान र सडक सञ्जालको स्तरोन्नति।
5. कृषि र पशुपालन (Agriculture and Animal Husbandry): पकेट क्षेत्र घोषणा, आधुनिक शीत भण्डार र बाँदर नियन्त्रण नीतिको कार्यान्वयन।
6. युवा स्वरोजगार (Youth Employment): युवाहरूलाई सीप, तालिम र सहुलियतपूर्ण कर्जा मार्फत उद्यमशीलता प्रवर्द्धन।

Vision (दृष्टिकोण):
- कास्की-२ लाई नवप्रवर्तन, सांस्कृतिक संरक्षण र आर्थिक समृद्धिको केन्द्र बनाउने जहाँ हरेक नागरिकले अवसर पाउनेछन्।
- दिगो पूर्वाधार, गुणस्तरीय सार्वजनिक सेवा र प्रत्यक्ष सामुदायिक संलग्नतालाई प्राथमिकता दिने।

Core Values: इमानदारी (Integrity), जवाफदेहिता (Accountability), समावेशिता (Inclusivity).
`;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Rashmi Acharya's election campaign in Kaski-2. 
Your goal is to answer questions from visitors about Rashmi Acharya's vision, manifesto, and background.
Use the provided context to answer questions accurately.
Always be polite, professional, and encouraging.
Respond in Nepali primarily, as the target audience is Nepali. If asked in English, you can respond in English but prefer Nepali.
If you don't know the answer based on the context, politely say that you don't have that specific information but encourage them to contact the campaign office.
Context: ${MANIFESTO_CONTEXT}
`;

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'नमस्ते! म रश्मि आचार्यको अभियान सहायक हुँ। म तपाईंलाई उहाँको भिजन र प्रतिबद्धताहरूको बारेमा कसरी मद्दत गर्न सक्छु?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing. Please ensure VITE_GEMINI_API_KEY is set in your .env file.");
      }
      
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: SYSTEM_INSTRUCTION
});

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const botText = response.text() || "माफ गर्नुहोला, मैले अहिले जवाफ दिन सकिन। कृपया पछि प्रयास गर्नुहोला।";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error: any) {
      console.error('Chat error details:', error);
      let errorMessage = "प्राविधिक समस्याको कारणले जवाफ दिन सकिएन।";
      if (error.message && error.message.includes('404')) {
        errorMessage = "एआई मोडेल फेला परेन। कृपया एपीआई कुञ्जी (API Key) जाँच गर्नुहोस्।";
      }
      setMessages(prev => [...prev, { role: 'bot', text: `${errorMessage} कृपया पछि प्रयास गर्नुहोला।` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-red-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-sm">अभियान सहायक</p>
                  <p className="text-[10px] opacity-80">अनलाइन • रश्मि आचार्य</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-red-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}>
                    <div className="markdown-body">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="तपाईंको प्रश्न सोध्नुहोस्..."
                  className="flex-1 px-4 py-2 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-red-500 text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-all border-4 border-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}