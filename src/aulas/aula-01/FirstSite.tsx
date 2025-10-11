import Image from 'next/image';

export default function FirstSite() {
  // Dados dinâmicos para hobbies
  const hobbies = [
    { id: 1, name: 'Gaming', icon: '⚡', color: 'bg-yellow-100' },
    { id: 2, name: 'Design', icon: '★', color: 'bg-purple-100' },
    { id: 3, name: 'Natureza', icon: '●', color: 'bg-green-100' },
    { id: 4, name: 'Culinária', icon: '▲', color: 'bg-red-100' }
  ];

  return (
    <div className="bg-blue-500 min-h-screen p-5 flex flex-col items-center">
      {/* Cabeçalho */}
      <header className="text-center mb-10 max-w-4xl w-full">
        <h1 className="text-white text-3xl mb-2">
          Olá! Eu sou [SEU NOME]
        </h1>
        <p className="text-blue-200 text-lg">
          Desenvolvedor em formação ⚡
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-4xl w-full mx-auto">
        {/* Sobre Mim */}
        <section className="bg-white p-8 mb-8 rounded-lg">
          <h2 className="text-gray-800 text-2xl mb-4">Sobre Mim</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </section>

        {/* Galeria de fotos */}
        <section className="bg-white p-8 mb-8 rounded-lg">
          <h2 className="text-gray-800 text-2xl mb-4">Minhas Fotos</h2>
          <div className="flex gap-4 flex-wrap">
            <div className="w-48 h-36 relative rounded-lg overflow-hidden border-2 border-red-500">
              <Image 
                src="/images/photo1.jpg" 
                alt="Lago Moraine, Banff, Canadá" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 text-center">
                ● Lago Moraine
              </div>
            </div>
            <div className="w-48 h-36 relative rounded-lg overflow-hidden border-2 border-green-500">
              <Image 
                src="/images/photo2.jpg" 
                alt="Paisagem natural" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 text-center">
                ● Paisagem
              </div>
            </div>
            <div className="w-48 h-36 relative rounded-lg overflow-hidden border-2 border-blue-500">
              <Image 
                src="/images/photo3.jpg" 
                alt="Manhã ensolarada" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 text-center">
                ● Manhã
              </div>
            </div>
          </div>
        </section>

        {/* Seção de hobbies */}
        <section className="bg-white p-8 mb-8 rounded-lg">
          <h2 className="text-gray-800 text-2xl mb-4">Meus Hobbies</h2>
          <div className="flex gap-4 flex-wrap">
            {hobbies.map(hobby => (
              <div key={hobby.id} className={`${hobby.color} text-center p-5 rounded-lg w-36`}>
                <div className="text-3xl mb-2">{hobby.icon}</div>
                <h3 className="text-gray-800 font-bold">{hobby.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center text-white mt-10 max-w-4xl w-full">
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div className="mt-4">
          <span className="text-blue-200 mx-2">⚡</span>
          <span className="text-purple-200 mx-2">★</span>
          <span className="text-red-200 mx-2">●</span>
        </div>
      </footer>
    </div>
  );
}