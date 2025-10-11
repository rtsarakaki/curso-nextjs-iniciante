import Image from 'next/image';

export default function FirstSite() {
  return (
    <div style={{ backgroundColor: '#3B82F6', minHeight: '100vh', padding: '20px' }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}>
          Olá! Eu sou [SEU NOME]
        </h1>
        <p style={{ color: '#DBEAFE', fontSize: '18px' }}>
          Desenvolvedor em formação ⚡
        </p>
      </header>

      {/* Conteúdo principal */}
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '15px' }}>
            Sobre Mim
          </h2>
          <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>
            Estou aprendendo a criar sites incríveis! 
            Meu objetivo é combinar design bonito com programação funcional.
            Cada dia é uma nova descoberta no mundo da programação web.
          </p>
        </section>

        {/* Galeria de fotos */}
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '20px' }}>
            Minhas Fotos
          </h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ width: '200px', height: '150px', position: 'relative', border: '2px solid #EF4444' }}>
              <Image 
                src="/images/photo1.jpg" 
                alt="Lago Moraine, Banff, Canadá" 
                width={200}
                height={150}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '5px', 
                textAlign: 'center' 
              }}>
                ● Lago Moraine
              </div>
            </div>
            <div style={{ width: '200px', height: '150px', position: 'relative', border: '2px solid #10B981' }}>
              <Image 
                src="/images/photo2.jpg" 
                alt="Paisagem natural" 
                width={200}
                height={150}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '5px', 
                textAlign: 'center' 
              }}>
                ● Paisagem
              </div>
            </div>
            <div style={{ width: '200px', height: '150px', position: 'relative', border: '2px solid #3B82F6' }}>
              <Image 
                src="/images/photo3.jpg" 
                alt="Manhã ensolarada" 
                width={200}
                height={150}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '5px', 
                textAlign: 'center' 
              }}>
                ● Manhã
              </div>
            </div>
          </div>
        </section>

        {/* Seção de hobbies */}
        <section style={{ backgroundColor: 'white', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '24px', marginBottom: '20px' }}>
            Meus Hobbies
          </h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#FEF3C7', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚡</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Gaming</h3>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#E9D5FF', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>★</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Design</h3>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#D1FAE5', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>●</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Natureza</h3>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              backgroundColor: '#FEE2E2', 
              borderRadius: '8px',
              width: '150px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>▲</div>
              <h3 style={{ color: '#1F2937', fontWeight: 'bold' }}>Culinária</h3>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer style={{ textAlign: 'center', color: 'white', marginTop: '40px' }}>
        <p>© 2024 - Feito com ❤️ e muito aprendizado!</p>
        <div style={{ marginTop: '15px' }}>
          <span style={{ margin: '0 10px', color: '#DBEAFE' }}>⚡</span>
          <span style={{ margin: '0 10px', color: '#E9D5FF' }}>★</span>
          <span style={{ margin: '0 10px', color: '#FECACA' }}>●</span>
        </div>
      </footer>
    </div>
  );
}