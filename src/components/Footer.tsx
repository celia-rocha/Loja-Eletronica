import { useState } from 'react';
import { Facebook, Linkedin, Instagram, Twitter, Youtube, Watch, ChevronDown } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "Categorias",
      links: ["Relógios", "Câmeras", "Celulares", "Tablets", "Computadores"]
    },
    {
      title: "Sobre Nós",
      links: ["Nossa História", "Imprensa", "Blog", "Prêmios", "Lojas"]
    },
    {
      title: "Atendimento",
      links: ["Chat Online", "Fale Conosco", "Termos e Condições", "Entregas", "Financeiro"]
    },
    {
      title: "Minha Conta",
      links: ["Meu Perfil", "Meus Pedidos", "Favoritos", "Rastreio", "Devoluções"]
    }
  ];

  return (
    <footer className="bg-gray-900 pt-12 pb-6 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-4 lg:gap-12 mb-6 lg:mb-10">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2 space-y-6 lg:mb-0 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Watch size={24} />
              </div>
              <div className="text-xl font-black tracking-tighter uppercase">
                Tech<span className="text-blue-600">Store</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Os melhores descontos em eletrônicos reunidos em um só lugar.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-800 lg:border-none pb-4 lg:pb-0">
              {/* Botão Responsivo: Accordion no Mobile, Título estático no Desktop */}
              <button 
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none"
              >
                <h4 className="font-bold text-lg lg:mb-6">{section.title}</h4>
                <ChevronDown 
                  className={`text-gray-400 lg:hidden transition-transform duration-300 ${openSection === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              {/* Lista Colapsável (Animada via CSS Grid) */}
              <div 
                className={`grid transition-all duration-300 ease-in-out lg:grid-rows-[1fr] ${openSection === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 lg:opacity-100 lg:mt-0'}`}
              >
                <ul className="overflow-hidden space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Divider & Copyright */}
        <div className="lg:border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>© {currentYear} TechStore. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
