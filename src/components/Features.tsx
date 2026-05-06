import { Battery, Droplets, Smartphone, Zap } from 'lucide-react';

const Features = () => {
  const highlights = [
    {
      icon: <Battery className="text-blue-600" size={32} />,
      title: "Bateria de 10 Dias",
      description: "Esqueça o carregador. Tecnologia de polímero de alta densidade para longa duração."
    },
    {
      icon: <Droplets className="text-blue-600" size={32} />,
      title: "Resistência IP68",
      description: "Pronto para qualquer aventura. Totalmente à prova d'água e poeira."
    },
    {
      icon: <Smartphone className="text-blue-600" size={32} />,
      title: "Conexão Total",
      description: "Sincronização instantânea com iOS e Android para notificações em tempo real."
    },
    {
      icon: <Zap className="text-blue-600" size={32} />,
      title: "Chip Ultra Fast",
      description: "Processamento de última geração para uma interface fluida e sem travamentos."
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start group">
              <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">
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
