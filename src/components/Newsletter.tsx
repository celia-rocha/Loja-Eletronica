import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.12)] text-center space-y-10">
          
          <div className="space-y-4">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px]">Fique por dentro</span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              Assine nossa Newsletter
            </h3>
            <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
              Receba atualizações exclusivas sobre novos lançamentos e ofertas especiais toda semana.
            </p>
          </div>

          <form 
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Seu endereço de e-mail" 
              className="flex-1 px-6 py-4 bg-gray-50 border-none rounded-2xl text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm font-medium"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100"
            >
              Inscrever-se
              <Send size={18} />
            </button>
          </form>

          <p className="text-xs text-gray-400">
            Respeitamos sua privacidade. Cancele a assinatura a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
