import { Battery, Droplets, Smartphone, Zap } from 'lucide-react';

const Features = () => {
  const highlights = [
    {
      icon: <Battery className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />,
      title: "Bateria de 10 Dias",
      description: "Esqueça o carregador. Tecnologia de polímero de alta densidade para longa duração."
    },
    {
      icon: <Droplets className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />,
      title: "Resistência IP68",
      description: "Pronto para qualquer aventura. Totalmente à prova d'água e poeira."
    },
    {
      icon: <Smartphone className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />,
      title: "Conexão Total",
      description: "Sincronização instantânea com iOS e Android para notificações em tempo real."
    },
    {
      icon: <Zap className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />,
      title: "Chip Ultra Fast",
      description: "Processamento de última geração para uma interface fluida e sem travamentos."
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-center md:text-left">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start group">
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
              <p className="text-xs md:text-base text-gray-500 leading-relaxed px-1 md:px-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
