import { Facebook, Linkedin, Instagram, Twitter, Youtube, Watch } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    }
  ];

  return (
    <footer className="bg-gray-900 pt-12 pb-6 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Watch size={24} />
              </div>
              <div className="text-xl font-black tracking-tighter uppercase">
                Tech<span className="text-blue-600">Store</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Inovação e tecnologia ao seu alcance. A melhor seleção de gadgets inteligentes com garantia e suporte especializado.
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
            <div key={index}>
              <h4 className="font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
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
