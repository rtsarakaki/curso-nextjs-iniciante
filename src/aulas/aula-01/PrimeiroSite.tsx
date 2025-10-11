export default function PrimeiroSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      {/* Cabeçalho */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-2 animate-bounce">
          Olá! Eu sou [SEU NOME]
        </h1>
        <p className="text-xl text-blue-100">
          Desenvolvedor em formação 🚀
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
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 h-48 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <span className="text-pink-600 text-lg font-semibold">📸 Foto 1</span>
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-48 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <span className="text-blue-600 text-lg font-semibold">📸 Foto 2</span>
            </div>
            <div className="bg-gradient-to-br from-green-200 to-green-300 h-48 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <span className="text-green-600 text-lg font-semibold">📸 Foto 3</span>
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
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="font-semibold text-gray-800">Gaming</h3>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800">Design</h3>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-semibold text-gray-800">Natureza</h3>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-lg">
              <div className="text-3xl mb-2">🍕</div>
              <h3 className="font-semibold text-gray-800">Culinária</h3>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center py-8 text-white">
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="text-blue-200">🚀</span>
          <span className="text-purple-200">💻</span>
          <span className="text-pink-200">✨</span>
        </div>
      </footer>
    </div>
  );
}
