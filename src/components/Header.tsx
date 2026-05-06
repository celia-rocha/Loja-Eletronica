import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Watch } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para mudar o estilo do header ao dar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Promoções', href: '#produtos' },
    { label: 'Newsletter', href: '#newsletter' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'h-16 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'h-20 bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Modernizada */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Watch size={24} />
          </div>
          <div className="text-xl font-black tracking-tighter text-gray-900 uppercase">
            Tech<span className="text-blue-600">Store</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Lado Direito: Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
            <User size={18} />
            Entrar
          </button>

          {/* Menu Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
        <nav 
          className={`absolute right-0 top-0 h-screen w-3/4 bg-white shadow-2xl p-8 transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6 mt-12">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold text-gray-800 hover:text-blue-600 border-b border-gray-100 pb-4"
              >
                {item.label}
              </a>
            ))}
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 px-4 rounded-xl font-bold text-sm mt-4 hover:bg-blue-700 transition-colors">
              <User size={18} />
              Minha Conta
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
