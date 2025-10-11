export default function FirstSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      {/* Cabeçalho */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-2 animate-bounce">
          Olá! Eu sou [SEU NOME]
        </h1>
        <p className="text-xl text-blue-100">
          Desenvolvedor em formação ⚡
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4">
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </section>

        {/* Galeria de fotos */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Minhas Fotos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-pink-200 to-pink-300">
              <img 
                src="https://gorafa.com.br/wp-content/uploads/2024/05/lago-moraine-banff-canada3-820x546-1.jpeg" 
                alt="Lago Moraine, Banff, Canadá" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">● Lago Moraine</span>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-200 to-blue-300">
              <img 
                src="https://wallpapers.com/images/featured/imagens-de-paisagens-a3hr6gk3xfx36dyg.jpg" 
                alt="Paisagem natural" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">● Paisagem</span>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-green-200 to-green-300">
              <img 
                src="https://cdn.pixabay.com/photo/2019/08/17/04/18/morning-4411421_1280.jpg" 
                alt="Manhã ensolarada" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">● Manhã</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de hobbies */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Meus Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-800">Gaming</h3>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
              <div className="text-3xl mb-2">★</div>
              <h3 className="font-semibold text-gray-800">Design</h3>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
              <div className="text-3xl mb-2">●</div>
              <h3 className="font-semibold text-gray-800">Natureza</h3>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-lg">
              <div className="text-3xl mb-2">▲</div>
              <h3 className="font-semibold text-gray-800">Culinária</h3>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center py-8 text-white">
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="text-blue-200">⚡</span>
          <span className="text-purple-200">★</span>
          <span className="text-pink-200">●</span>
        </div>
      </footer>
    </div>
  );
}
