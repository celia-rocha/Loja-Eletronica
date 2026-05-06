import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

// Importando imagens/Assets
import watchImg from '../assets/images/tech_watch.png';
import headphoneImg from '../assets/images/Headphone.jpg';
import cameraImg from '../assets/images/Camera (1).jpg';
import iphoneImg from '../assets/images/tech_iphone.png';
import macbookImg from '../assets/images/tech_macbook.png';
import earbudsImg from '../assets/images/tech_earbuds.png';

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Função para controlar os botões de avançar e voltar
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Lista de produtos na ordem correta
  const products = [
    {
      id: 4,
      title: 'iPhone 15 Pro Max 256GB - Titânio',
      categories: 'Smartphones, Apple',
      price: 'R$ 8.299,00',
      oldPrice: 'R$ 10.999,00',
      image: iphoneImg,
      isNew: true
    },
    {
      id: 1,
      title: 'Capa Penom para Apple Watch',
      categories: 'Relógios inteligentes, Capa, Apple',
      price: 'R$ 1.799,99',
      oldPrice: 'R$ 2.100,00',
      image: watchImg,
      isNew: true
    },
    {
      id: 2,
      title: 'Fone de ouvido com cancelamento de ruído',
      categories: 'Fones de ouvido, Áudio, Som',
      price: 'R$ 1.199,90',
      oldPrice: 'R$ 1.600,00',
      image: headphoneImg,
      isNew: true
    },
    {
      id: 3,
      title: 'Câmera Digital SLR EOS Rebel T6',
      categories: 'Câmeras, Kits, Foto & Vídeo',
      price: 'R$ 396,89',
      oldPrice: 'R$ 429,99',
      image: cameraImg,
      isNew: false
    },
    {
      id: 5,
      title: 'MacBook Pro 14" M3 - Space Grey',
      categories: 'Notebooks, Apple, Pro',
      price: 'R$ 14.999,00',
      oldPrice: 'R$ 18.999,00',
      image: macbookImg,
      isNew: true
    },
    {
      id: 6,
      title: 'Fone Bluetooth TWS Pro',
      categories: 'Fones de ouvido, Áudio, TWS',
      price: 'R$ 899,90',
      oldPrice: 'R$ 1.299,00',
      image: earbudsImg,
      isNew: true
    }
  ];

  return (
    <section id="produtos" className="pt-12 pb-16 lg:py-24 bg-transparent relative">
      <div className="container mx-auto px-6 relative">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tighter">Ofertas em Destaque</h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-md">Ofertas em eletrônicos com os maiores descontos do mercado.</p>
        </div>

        {/* Container do Carrossel */}
        <div className="relative group w-full flex items-center">
          {/* Botão Voltar */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 md:-left-4 z-20 p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-gray-800 hover:text-blue-600 hover:scale-110 transition-all flex opacity-80 md:opacity-50 md:group-hover:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>

          {/* Área que Rola (Carrossel) */}
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto gap-6 pb-4 pt-4 w-full snap-x snap-mandatory scroll-smooth hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((item) => (
              <div key={item.id} className="w-[85vw] md:w-[340px] snap-center shrink-0">
                <ProductCard 
                  title={item.title}
                  categories={item.categories}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  image={item.image}
                  isNew={item.isNew}
                />
              </div>
            ))}
          </div>

          {/* Botão Avançar */}
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 md:-right-4 z-20 p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-gray-800 hover:text-blue-600 hover:scale-110 transition-all flex opacity-80 md:opacity-50 md:group-hover:opacity-100"
            aria-label="Próximo"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
