import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Coins,
  Facebook,
  Image as ImageIcon,
  Instagram,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  Ticket,
  Trophy,
  X,
  Zap,
} from 'lucide-react';

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-zinc-800 to-zinc-900 flex flex-col items-center justify-center border border-yellow-500/10`}
      >
        <ImageIcon className="text-yellow-500/20 mb-2" size={48} />
        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500/40">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

const CompanyLogo = ({ size = 'md' }) => {
  const containerClasses =
    size === 'md' ? 'w-14 h-14 md:w-16 md:h-16' : 'w-28 h-28';
  const textLarge = size === 'md' ? 'text-[14px]' : 'text-[24px]';
  const textSmall = size === 'md' ? 'text-[8px]' : 'text-[12px]';

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-black border border-yellow-500/40 ${containerClasses} shadow-[0_0_20px_rgba(212,175,55,0.4)]`}
    >
      <div className="absolute top-1 right-2 opacity-80">
        <Coins size={size === 'md' ? 12 : 18} className="text-yellow-500" />
      </div>
      <div className="text-center font-serif leading-none select-none">
        <div className={`font-bold text-yellow-500 tracking-tight ${textLarge}`}>
          Peso
        </div>
        <div className="flex items-center justify-center gap-1 my-0.5">
          <div className="h-[1px] w-2 bg-yellow-500/50"></div>
          <div className={`font-black text-yellow-600 ${textSmall}`}>POR</div>
          <div className="h-[1px] w-2 bg-yellow-500/50"></div>
        </div>
        <div className={`font-bold text-yellow-500 tracking-tight ${textLarge}`}>
          Premio
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [purchaseNotification, setPurchaseNotification] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const notifications = [
      'Juan M. compró 5 boletos para el iPhone',
      '¡Nueva participación desde La Romana!',
      'Solo quedan 12 boletos en este bloque',
      '¡Alguien acaba de comprar 20 boletos!',
    ];

    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * notifications.length);
      setPurchaseNotification(notifications[randomIdx]);
      setTimeout(() => setPurchaseNotification(null), 5000);
    }, 15000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const raffles = [
    {
      id: 1,
      title: 'iPhone 17 Pro Max',
      specs: 'Desert Titanium / 1TB / Nuevo',
      price: '150',
      image:
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800',
      soldPercent: 89,
    },
    {
      id: 2,
      title: 'Toyota Hilux 2024',
      specs: '4x4 Turbo Diesel / Blanca',
      price: '500',
      image:
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800',
      soldPercent: 62,
    },
    {
      id: 3,
      title: 'Smart TV 85" 4K',
      specs: 'Samsung Crystal UHD 2024',
      price: '200',
      image:
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800',
      soldPercent: 94,
    },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-yellow-500 selection:text-black">
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 py-2 overflow-hidden border-b border-yellow-200/10 relative z-[60]">
        <div className="flex justify-center items-center gap-16 whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <span className="text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} fill="black" /> SORTEO 100% TRANSPARENTE
              </span>
              <span className="text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} /> SIN ENGAÑOS - CON PRUEBAS
              </span>
              <span className="text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Trophy size={14} fill="black" /> GANADORES REALES EN RD
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-yellow-500/20 py-2'
            : 'bg-transparent py-6 md:py-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <CompanyLogo size="md" />
            <div className="hidden md:flex flex-col -space-y-1">
              <span className="text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-600">
                PESO POR PREMIO
              </span>
              <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
                Dominicana
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 font-black text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="text-yellow-500 hover:text-white transition-colors">
              Sorteos
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Ganadores
            </a>
            <button className="flex items-center gap-2 text-white hover:text-yellow-500 transition-all">
              <MessageCircle size={18} className="text-green-500" /> WhatsApp
            </button>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-8 py-3 rounded-xl font-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              ACCESO
            </button>
          </div>

          <button
            className="lg:hidden text-yellow-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </nav>

      <section className="relative pt-8 md:pt-16 pb-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 relative z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-[2px] w-12 bg-yellow-500"></div>
              <p className="text-yellow-500 font-black tracking-[0.3em] uppercase text-[10px]">
                La rifa más transparente
              </p>
            </div>

            <h1 className="text-6xl md:text-[105px] font-black leading-[0.8] tracking-tighter italic uppercase text-white drop-shadow-2xl">
              ¡IPHONE 17 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-600">
                PRO MAX!
              </span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-black/80 border border-red-600 px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-[11px] font-black uppercase text-white tracking-widest">
                  En Vivo
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/80 border border-yellow-500 px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Check size={14} className="text-yellow-500" strokeWidth={3} />
                <span className="text-[11px] font-black uppercase text-white tracking-widest">
                  Sin Engaños
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/80 border border-yellow-500 px-5 py-2.5 rounded-xl">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-[11px] font-black uppercase text-white tracking-widest">
                  Con Pruebas
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start">
              <div className="bg-black border-2 border-dashed border-yellow-500/50 p-8 rounded-[40px] text-center shadow-3xl relative overflow-hidden group">
                <p className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-2">
                  Boletos a solo:
                </p>
                <p className="text-6xl font-black text-white tracking-tighter italic leading-none">
                  RD$150
                </p>
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-black p-2 rounded-full shadow-xl">
                  <Zap size={18} fill="black" />
                </div>
              </div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3 text-green-400 font-black text-sm uppercase tracking-widest">
                  <CheckCircle2 size={20} strokeWidth={3} /> 100% Seguro
                </div>
                <div className="flex items-center gap-3 text-yellow-500 font-black text-sm uppercase tracking-widest">
                  <Trophy size={20} strokeWidth={3} /> Sorteo Real
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto lg:mx-0 space-y-4">
              <p className="text-xs font-black text-white uppercase italic tracking-[0.2em] text-center lg:text-left">
                ¡Hazlo desde el inicio!
              </p>
              <div className="relative h-10 bg-white/5 rounded-2xl border border-white/10 p-1.5 backdrop-blur-sm overflow-hidden">
                <div className="h-full w-[35%] bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-600 rounded-xl animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.6)]"></div>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase italic tracking-[0.3em] text-white/40">
                  Estamos Comenzando
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-14 py-6 rounded-[24px] font-black text-2xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(212,175,55,0.4)] uppercase tracking-tighter active:scale-95">
                Comprar Boletos
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-20 bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="relative group w-full max-w-[480px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800"
                alt="iPhone 17 Pro Max Gold"
                className="relative z-10 w-full h-auto drop-shadow-[0_0_60px_rgba(212,175,55,0.25)] transform transition-all duration-1000 group-hover:scale-105 rounded-[40px]"
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-yellow-500/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <p className="text-yellow-500 font-black tracking-[0.4em] text-[10px] uppercase mb-2">
              Próximas Oportunidades
            </p>
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">
              Rifas Disponibles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {raffles.map((raffle) => (
              <div
                key={raffle.id}
                className="bg-[#0A0A0A] rounded-[40px] overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all duration-500 group shadow-2xl flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-zinc-900">
                  <SafeImage
                    src={raffle.image}
                    alt={raffle.title}
                    className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                </div>
                <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">
                      {raffle.title}
                    </h3>
                    <p className="text-[10px] font-black uppercase text-white/30 tracking-widest leading-none">
                      {raffle.specs}
                    </p>
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between text-[10px] font-black uppercase text-white/40 italic">
                        <span>Vendido</span>
                        <span className="text-white">{raffle.soldPercent}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                          style={{ width: `${raffle.soldPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <p className="text-3xl font-black text-yellow-500 tracking-tighter italic leading-none">
                      RD${raffle.price}
                    </p>
                    <button className="bg-white text-black p-4 rounded-2xl hover:bg-yellow-500 transition-all shadow-xl group-hover:scale-110">
                      <ArrowRight size={24} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <CompanyLogo size="md" />
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black italic tracking-tighter text-yellow-500 uppercase">
                  Peso por Premio
                </span>
                <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">
                  Dominicana
                </span>
              </div>
            </div>
            <p className="text-white/40 font-bold text-lg max-w-sm leading-relaxed">
              La marca de rifas más prestigiosa de RD. Seguridad, confianza y
              transparencia total garantizada.
            </p>
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h5 className="text-[11px] font-black text-yellow-500 uppercase tracking-[0.5em]">
              Enlaces
            </h5>
            <ul className="space-y-4 text-sm font-black text-white/40 uppercase tracking-widest">
              <li>
                <a href="#" className="hover:text-white">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Ganadores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h5 className="text-[11px] font-black text-yellow-500 uppercase tracking-[0.5em]">
              Social
            </h5>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="#"
                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all border border-white/5"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all border border-white/5"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] leading-relaxed">
            © 2024 PESO POR PREMIO RD. EL SORTEO MÁS TRANSPARENTE DEL PAÍS. <br />
            PROHIBIDA LA VENTA A MENORES DE 18 AÑOS.
          </p>
        </div>
      </footer>

      {purchaseNotification && (
        <div className="fixed bottom-10 left-6 right-6 md:left-10 md:right-auto z-[100] animate-slide-up">
          <div className="bg-[#111] border-2 border-yellow-500/40 shadow-3xl rounded-[32px] p-6 flex items-center gap-6 max-w-[400px] backdrop-blur-xl mx-auto md:mx-0">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-2xl text-black shrink-0 shadow-lg shadow-yellow-500/20">
              <Ticket size={24} fill="black" strokeWidth={3} />
            </div>
            <div>
              <p className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-1 italic">
                ¡Nueva Compra!
              </p>
              <p className="text-sm font-black text-white leading-tight uppercase italic tracking-tighter">
                {purchaseNotification}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(120px); opacity: 0; scale: 0.9; }
          100% { transform: translateY(0); opacity: 1; scale: 1; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-slide-up {
          animation: slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
