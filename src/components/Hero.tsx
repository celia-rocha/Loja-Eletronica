import heroImage from '../assets/images/Hero_image.jpg';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="sobre" className="relative h-[75vh] lg:h-[90vh] w-full flex items-center overflow-hidden">
      {/* Imagem de Fundo com Zoom Suave */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Relógio Inteligente em destaque" 
          className="w-full h-full object-cover object-[30%_center] lg:object-center scale-105 animate-subtle-zoom"
        />
        {/* Overlay Gradiente para dar contraste ao texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 lg:from-black/80 lg:via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 opacity-100">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Lançamento 2024
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Explore nossa série de <span className="text-blue-500">Relógios</span> inteligentes
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
            Bem-vindo ao seu destino para tudo em tecnologia. Oferecemos uma seleção de dispositivos modernos de alta performance para o seu dia a dia. Aqui você encontra as melhores promoções em um só lugar.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a 
              href="#produtos" 
              className="group relative flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full md:rounded-xl font-bold text-sm md:text-base hover:bg-blue-700 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Ver Produtos
              <ArrowRight size={16} className="md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#newsletter" 
              className="flex items-center justify-center px-5 py-2 md:px-6 md:py-3 rounded-full md:rounded-xl font-bold text-sm md:text-base text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      {/* Detalhe Decorativo: Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
