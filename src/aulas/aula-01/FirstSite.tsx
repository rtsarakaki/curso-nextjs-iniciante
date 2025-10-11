import Card from '@/components/aula-01/Card/Card';
import ImageCard from '@/components/aula-01/ImageCard/ImageCard';
import HobbyCard from '@/components/aula-01/HobbyCard/HobbyCard';

export default function FirstSite() {
  // Dados dinâmicos para fotos
  const photos = [
    { 
      id: 1, 
      src: "/images/photo1.jpg", 
      alt: "Lago Moraine, Banff, Canadá", 
      label: "Lago Moraine",
      borderColor: "red" as const
    },
    { 
      id: 2, 
      src: "/images/photo2.jpg", 
      alt: "Paisagem natural", 
      label: "Paisagem",
      borderColor: "green" as const
    },
    { 
      id: 3, 
      src: "/images/photo3.jpg", 
      alt: "Manhã ensolarada", 
      label: "Manhã",
      borderColor: "blue" as const
    }
  ];

  // Dados dinâmicos para hobbies
  const hobbies = [
    { id: 1, name: 'Gaming', icon: '⚡', color: '#FEF3C7' },
    { id: 2, name: 'Design', icon: '★', color: '#E9D5FF' },
    { id: 3, name: 'Natureza', icon: '●', color: '#D1FAE5' },
    { id: 4, name: 'Culinária', icon: '▲', color: '#FEE2E2' }
  ];

  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <h1 className="header-title">
          Olá! Eu sou [SEU NOME]
        </h1>
        <p className="header-subtitle">
          Desenvolvedor em formação ⚡
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <Card title="Sobre Mim">
          <p className="card-text">
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </Card>

        {/* Galeria de fotos */}
        <Card title="Minhas Fotos">
          <div className="photos-grid">
            {photos.map(photo => (
              <ImageCard 
                key={photo.id}
                src={photo.src} 
                alt={photo.alt} 
                label={photo.label}
                borderColor={photo.borderColor}
              />
            ))}
          </div>
        </Card>

        {/* Seção de hobbies */}
        <Card title="Meus Hobbies">
          <div className="hobbies-grid">
            {hobbies.map(hobby => (
              <HobbyCard key={hobby.id} hobby={hobby} />
            ))}
          </div>
        </Card>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div className="footer-icons">
          <span className="footer-icon footer-icon-blue">⚡</span>
          <span className="footer-icon footer-icon-purple">★</span>
          <span className="footer-icon footer-icon-red">●</span>
        </div>
      </footer>
    </div>
  );
}