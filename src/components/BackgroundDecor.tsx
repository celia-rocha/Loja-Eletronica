const BackgroundDecor = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Mancha de luz no topo direito - Mais forte */}
      <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-200/50 rounded-full blur-[100px] animate-pulse"></div>
      
      {/* Mancha de luz no meio esquerdo - Mais forte */}
      <div className="absolute top-[30%] -left-[10%] w-[50%] h-[50%] bg-indigo-100/60 rounded-full blur-[80px]"></div>
      
      {/* Mancha de luz no final da página - Mais forte */}
      <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default BackgroundDecor;
