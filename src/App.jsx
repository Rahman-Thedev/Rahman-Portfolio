import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Globe, 
  Lock, 
  Code2, 
  Zap, 
  ChevronRight,
  Database,
  Layers,
  Activity,
  User,
  Mail,
  ExternalLink,
  Menu,
  X,
  Github,
  Monitor,
  Eye,
  Server,
  ShieldAlert,
  Instagram,
  MessageCircle,
  BarChart3,
  Leaf
} from 'lucide-react';

// --- Background Grid & Particles ---
const BackgroundMatrix = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#05070a]">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#00ffaa 1px, transparent 1px), linear-gradient(90deg, #00ffaa 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }}
      />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full overflow-hidden flex justify-around">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transform -translate-y-full animate-fall"
              style={{ 
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Terminal Logic ---
const CyberTerminal = () => {
  const [lines, setLines] = useState(['> INITIALIZING SECURE HANDSHAKE...']);
  const logs = [
    "> IDENT_CONFIRMED: ABDULRAHMAN ABIDUN SHAMSUDEEN",
    "> LOADING_STACK: [REACT, NODE, MONGODB, PYTHON, C++, C#]",
    "> STATUS: DEFENSIVE_POSTURE_READY",
    "> PROJECT_LOADED: ORACLE_DATATREND",
    "> PROJECT_LOADED: CIPHER_AGRITECH",
    "> READY_FOR_DEPLOYMENT..."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setLines(prev => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/60 border border-emerald-500/30 rounded-lg p-4 font-mono text-xs text-emerald-400 backdrop-blur-md shadow-2xl h-48 overflow-y-auto scrollbar-hide">
      <div className="flex gap-1.5 mb-3 border-b border-emerald-500/20 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
        <span className="ml-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">sys_init.sh</span>
      </div>
      {lines.map((line, idx) => (
        <div key={idx} className="mb-1 animate-in fade-in slide-in-from-left-2 duration-500">
          <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
          {line}
        </div>
      ))}
      <div className="w-2 h-4 bg-emerald-400 animate-pulse inline-block ml-1 align-middle" />
    </div>
  );
};

// --- Navigation ---
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['home', 'expertise', 'projects', 'handshake'];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded group-hover:bg-emerald-500/20 transition-all">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </div>
        <span className="text-white font-bold tracking-tighter text-xl uppercase">Rahman<span className="text-emerald-500">-</span>thedev</span>
      </div>

      <div className="hidden md:flex gap-8">
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => setActiveSection(item)}
            className={`uppercase text-[10px] tracking-[0.2em] font-bold transition-all ${
              activeSection === item ? 'text-emerald-400' : 'text-gray-500 hover:text-white'
            }`}
          >
            {item.replace('_', ' ')}
          </button>
        ))}
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => { setActiveSection(item); setIsOpen(false); }}
              className="uppercase text-xs tracking-widest font-bold text-gray-400 py-2 border-b border-white/5"
            >
              {item.replace('_', ' ')}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- Hero ---
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative z-10 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-6 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            SECURE HANDSHAKE: ACTIVE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Abdulrahman Abiodun <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Shamsudeen</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-emerald-500/80 font-mono mb-6 tracking-wide">
            [Software Developer & Security Aware Architect]
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I design, build, and maintain secure web systems. I approach development with a security-first mindset—understanding how systems break so they can be built stronger.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded transition-all flex items-center gap-2 group">
              VIEW PROJECTS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-4 items-center px-4 border-l border-white/10 ml-2">
              <a href="https://github.com/rahman-thedev" target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors"><Github size={22} /></a>
              <a href="https://www.instagram.com/the_omenvoid_oracle" target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors"><Instagram size={22} /></a>
              <a href="https://wa.me/message/AUPT4YAL4MXBP1" target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors"><MessageCircle size={22} /></a>
            </div>
          </div>
        </div>

        <div className="relative">
          <CyberTerminal />
          <div className="mt-6 space-y-3">
             <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center backdrop-blur-sm">
                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Focus Area</span>
                <span className="text-cyan-400 font-mono text-sm">Full-Stack Security</span>
             </div>
             <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center backdrop-blur-sm">
                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Philosophy</span>
                <span className="text-emerald-400 font-mono text-sm">Understanding System Failure</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Skills/Expertise ---
const Expertise = () => {
  const stack = [
    { cat: "Frontend", items: ["HTML5", "CSS3", "JS", "Tailwind", "React", "Next.js", "Vite"] },
    { cat: "Backend", items: ["Node.js", "Express", "MongoDB", "Python", "Flask", "Oracle"] },
    { cat: "Systems", items: ["C++", "C#", "Linux", "Git", "Three.js", "Deployment"] },
    { cat: "Security", items: ["Vulnerability Assessment", "Secure Handlers", "Input Validation", "Defensive Logic"] }
  ];

  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-tighter">
            <Cpu className="text-emerald-500" /> Technical_Specifications
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mb-8" />
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {stack.map((group, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-emerald-500/30 transition-all group">
              <h3 className="text-emerald-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-4">{group.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] rounded group-hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Project Display ---
const ProjectCard = ({ title, category, tags, link, icon: Icon, description }) => (
  <div className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-emerald-500/[0.03] hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
        <Icon size={24} />
      </div>
      <a href={link} target="_blank" className="text-gray-500 hover:text-white transition-colors">
        <ExternalLink size={20} />
      </a>
    </div>
    <div className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase mb-2">{category}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(tag => (
        <span key={tag} className="text-[9px] text-gray-400 border border-white/10 px-2 py-0.5 rounded uppercase">{tag}</span>
      ))}
    </div>
    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
      <a href={link} target="_blank" className="text-xs font-bold text-emerald-400 flex items-center gap-2 hover:gap-3 transition-all">
        LIVE_DEMO <ChevronRight size={14} />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="py-32 px-6 relative z-10 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic tracking-tight uppercase">Active_Deployments</h2>
          <p className="text-gray-500">Credible systems built with logic-driven feature development.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Oracle_DataTrend"
            category="Data Analytics"
            icon={BarChart3}
            description="A 14-day mobile data monitoring tool for consumption visualization. Features real-time logging and predictive forecasting to avoid overages."
            tags={['Monitoring', 'Charting', 'UX Logic']}
            link="https://rahman-thedev.github.io/Oracle_DataTrend/"
          />
          <ProjectCard 
            title="Cipher Agritech"
            category="AI & Agriculture"
            icon={Leaf}
            description="Exploring the intersection of AI and modern agricultural equipment. A landing page showcasing technological solutions for modern farming problems."
            tags={['AI-Agritech', 'Modern UI', 'Responsive']}
            link="https://rahman-thedev.github.io/Cipher-Agritech-land-page/"
          />
          <ProjectCard 
            title="Oracle VPN v1.0.4"
            category="System Logic"
            icon={ShieldCheck}
            description="A programmed VPN gateway focusing on secure connection protocols and encrypted traffic flow management."
            tags={['Logic', 'Networking', 'Security']}
            link="https://rahman-thedev.github.io/ORACLE_VPN_v1.0.4/"
          />
          <ProjectCard 
            title="Resume Shop"
            category="E-Commerce"
            icon={Monitor}
            description="Standalone freelancing web application with functional user interactions and a focus on clean logic over visual excess."
            tags={['HTML', 'CSS', 'JS', 'Freelance']}
            link="https://wirerichie.github.io/Resume_Shop/"
          />
          <ProjectCard 
            title="Driver Safety System"
            category="Application Logic"
            icon={ShieldAlert}
            description="Safety-focused application designed with specific user-interaction flows and high performance awareness."
            tags={['Vercel', 'UI/UX', 'System Flow']}
            link="https://driver-safety-system-qyls.vercel.app"
          />
        </div>
      </div>
    </section>
  );
};

// --- Contact / Handshake ---
const Contact = () => {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Initiate_Handshake</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Open for professional collaboration, system architecture consultations, and security-aware development roles. Connect via secure channels.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                <Mail className="text-emerald-500" size={20} />
                <span className="font-mono text-sm group-hover:text-emerald-400 transition-colors">abdulrahmanshamsudeen146@gmail.com</span>
              </div>
              <a href="https://wa.me/message/AUPT4YAL4MXBP1" target="_blank" className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                <MessageCircle className="text-emerald-500" size={20} />
                <span className="font-mono text-sm group-hover:text-emerald-400 transition-colors">Direct WhatsApp Inbox</span>
              </a>
              <a href="https://www.instagram.com/the_omenvoid_oracle" target="_blank" className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                <Instagram className="text-emerald-500" size={20} />
                <span className="font-mono text-sm group-hover:text-emerald-400 transition-colors">@the_omenvoid_oracle</span>
              </a>
            </div>
          </div>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest ml-1">Identity</label>
              <input type="text" placeholder="Your Name" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500/50 outline-none transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest ml-1">Secure_Channel</label>
              <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500/50 outline-none transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest ml-1">Message_Body</label>
              <textarea rows="4" placeholder="Brief mission details..." className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500/50 outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/20 uppercase tracking-widest">
              Transmit_Packet
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 relative z-10 text-center">
    <div className="text-[10px] tracking-[0.4em] text-gray-600 font-bold uppercase mb-4">
      Security First • Logic Driven • © 2026 Abdulrahman Abiodun Shamsudeen
    </div>
    <div className="flex justify-center gap-8 text-gray-500 text-xs font-mono uppercase tracking-widest">
      <span className="hover:text-emerald-400 cursor-pointer">Encryption_v2.2</span>
      <span className="hover:text-emerald-400 cursor-pointer">Protocol_GPG</span>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#05070a] text-gray-300 selection:bg-emerald-500/30 selection:text-emerald-200 antialiased font-sans">
      <style>{`
        @keyframes fall {
          from { transform: translateY(-100%); }
          to { transform: translateY(100vh); }
        }
        .animate-fall { animation: fall linear infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
      
      <BackgroundMatrix />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="max-w-[100vw] overflow-x-hidden">
        <div id="home"><Hero /></div>
        <div id="expertise"><Expertise /></div>
        <div id="projects"><Projects /></div>
        <div id="handshake"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
}