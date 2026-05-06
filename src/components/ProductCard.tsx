import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  image: string;
  categories: string;
  title: string;
  price: string;
  oldPrice?: string;
  isNew?: boolean;
}

const ProductCard = ({ image, categories, title, price, oldPrice, isNew }: ProductProps) => {
  return (
    <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative cursor-pointer">
      {/* Badge "Novo" */}
      {isNew && (
        <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full z-10 shadow-lg shadow-red-200">
          Novo
        </span>
      )}

      {/* Imagem do Produto */}
      <div className="aspect-square w-full mb-6 overflow-hidden rounded-2xl flex items-center justify-center p-4">
        <img 
          src={image} 
          alt={title} 
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Informações */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{categories}</p>
        <h4 className="text-lg font-bold text-gray-800 leading-tight h-14 line-clamp-2">{title}</h4>
        
        <div className="pt-2 flex items-end gap-3">
          <span className={`text-2xl font-black ${oldPrice ? 'text-red-500' : 'text-gray-900'}`}>
            {price}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through mb-1 font-medium">
              {oldPrice}
            </span>
          )}
        </div>

        {/* Botão de Compra */}
        <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all group-hover:bg-blue-600 active:scale-95">
          <ShoppingCart size={18} />
          Adicionar à sacola
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
