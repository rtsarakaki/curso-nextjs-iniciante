import Card from '@/components/aula-01/Card/Card';
import ImageCard from '@/components/aula-01/ImageCard/ImageCard';
import HobbyCard from '@/components/aula-01/HobbyCard/HobbyCard';
import Header from '@/components/aula-01/Header/Header';
import Footer from '@/components/aula-01/Footer/Footer';

export default function FirstSite() {
  // Dados dinâmicos para fotos
  const photos = [
    { id: 1, src: "/images/photo1.jpg", alt: "Lago Moraine", label: "Lago Moraine", borderColor: "red" as const },
    { id: 2, src: "/images/photo2.jpg", alt: "Paisagem", label: "Paisagem", borderColor: "green" as const },
    { id: 3, src: "/images/photo3.jpg", alt: "Manhã", label: "Manhã", borderColor: "blue" as const }
  ];

  // Dados dinâmicos para hobbies
  const hobbies = [
    { id: 1, name: 'Gaming', icon: '⚡', color: 'bg-yellow-100' },
    { id: 2, name: 'Design', icon: '★', color: 'bg-purple-100' },
    { id: 3, name: 'Natureza', icon: '●', color: 'bg-green-100' },
    { id: 4, name: 'Culinária', icon: '▲', color: 'bg-red-100' }
  ];

  return (
    <div className="bg-blue-500 min-h-screen p-5 flex flex-col items-center">
      <Header 
        name="[SEU NOME]" 
        subtitle="Desenvolvedor em formação ⚡" 
      />
      
      {/* Conteúdo principal */}
      <main className="max-w-4xl w-full mx-auto">
        <Card title="Sobre Mim">
          <p className="text-gray-600 text-base leading-relaxed">
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </Card>

        {/* Galeria de fotos */}
        <Card title="Minhas Fotos">
          <div className="flex gap-4 flex-wrap">
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
          <div className="flex gap-4 flex-wrap">
            {hobbies.map(hobby => (
              <HobbyCard key={hobby.id} hobby={hobby} />
            ))}
          </div>
        </Card>
      </main>

      <Footer 
        copyright="© 2024 - Feito com ❤️ e muito aprendizado!"
        icons={['⚡', '★', '●']}
      />
    </div>
  );
}