// src/pages/AboutPage.jsx
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { FaAward, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/Jeep Renegade 1.8 Sport.jpeg'; // Vamos usar uma imagem de exemplo

function AboutPage() {
  
  // Efeito para garantir que a página comece no topo
  useEffect(() => {
    window.scrollTo(0, 0);

    // Reutilizando nossa função de animação de scroll
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    };

    setTimeout(observeElements, 100);
  }, []);

  return (
    <>
      {/* Seção Hero - Padrão do site */}
      <section className="hero-section" style={{ padding: '140px 0 80px', minHeight: 'auto' }}>
        <Container>
          <div className="hero-content" style={{ animation: 'none' }}>
            <h1 className="hero-title scroll-animate">
              15 Anos de Paixão
              <br />
              <span style={{background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Por Automóveis
              </span>
            </h1>
            <p className="hero-subtitle scroll-animate" style={{animationDelay: '0.2s'}}>
              Conheça a história e os valores que fazem da AutoTop a sua melhor escolha.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção Nossa História */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="scroll-animate">
              <Image 
                src={aboutImage}
                alt="Fachada da Concessionária AutoTop"
                rounded
                fluid
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  border: '10px solid white'
                }}
              />
            </Col>
            <Col lg={6} className="scroll-animate" style={{animationDelay: '0.2s'}}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#2c3e50' }}>
                Nossa Trajetória
              </h2>
              <p style={{ color: '#5d6c7b', marginBottom: '1rem', lineHeight: '1.8' }}>
                Fundada em 2010, a AutoTop nasceu do sonho de oferecer uma experiência de compra de veículos seminovos transparente, justa e segura. Ao longo de mais de uma década, construímos uma reputação sólida baseada na confiança e na satisfação dos nossos clientes.
              </p>
              <p style={{ color: '#5d6c7b', lineHeight: '1.8' }}>
                Nossa missão é simples: selecionar os melhores veículos do mercado, garantir sua procedência e qualidade através de inspeções rigorosas, e oferecer as melhores condições para que você realize o sonho do carro novo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção Nossos Valores */}
      <section style={{ padding: '80px 0', background: 'var(--background-light)' }}>
        <Container>
          <div className="section-header scroll-animate">
            <h2 className="section-title">Nossos Pilares</h2>
            <p className="section-subtitle">
              O que nos move todos os dias
            </p>
          </div>
          <Row className="g-4">
            {/* Card de Valor 1 */}
            <Col md={4} className="scroll-animate">
              <div className="text-center p-4" style={{ background: 'white', borderRadius: '20px', height: '100%', boxShadow: 'var(--shadow-light)' }}>
                <FaShieldAlt size={50} style={{ color: '#dc2626', marginBottom: '1.5rem' }} />
                <h4 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem'}}>Confiança</h4>
                <p style={{color: '#5d6c7b'}}>Total transparência em cada etapa da negociação. Nossos veículos possuem laudo cautelar aprovado.</p>
              </div>
            </Col>
            {/* Card de Valor 2 */}
            <Col md={4} className="scroll-animate" style={{animationDelay: '0.2s'}}>
              <div className="text-center p-4" style={{ background: 'white', borderRadius: '20px', height: '100%', boxShadow: 'var(--shadow-light)' }}>
                <FaAward size={50} style={{ color: '#dc2626', marginBottom: '1.5rem' }} />
                <h4 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem'}}>Qualidade</h4>
                <p style={{color: '#5d6c7b'}}>Apenas os melhores seminovos. Cada carro é inspecionado e preparado para garantir sua máxima satisfação.</p>
              </div>
            </Col>
            {/* Card de Valor 3 */}
            <Col md={4} className="scroll-animate" style={{animationDelay: '0.4s'}}>
              <div className="text-center p-4" style={{ background: 'white', borderRadius: '20px', height: '100%', boxShadow: 'var(--shadow-light)' }}>
                <FaHandshake size={50} style={{ color: '#dc2626', marginBottom: '1.5rem' }} />
                <h4 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem'}}>Relacionamento</h4>
                <p style={{color: '#5d6c7b'}}>Nossos clientes são nossos maiores parceiros. Oferecemos um pós-venda dedicado e suporte contínuo.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção CTA */}
      <section style={{ padding: '80px 0', background: 'var(--background-dark)', color: 'white' }}>
        <Container className="text-center scroll-animate">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
            Pronto para encontrar seu próximo carro?
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Explore nosso estoque completo e encontre o veículo perfeito que está esperando por você.
          </p>
          <Button 
            as={Link} 
            to="/estoque" 
            className="btn-modern" 
            style={{fontSize: '1.1rem', padding: '16px 32px'}}
          >
            Ver Nosso Estoque
          </Button>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;