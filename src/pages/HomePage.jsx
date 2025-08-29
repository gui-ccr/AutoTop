// src/pages/HomePage.jsx - Design Moderno
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';
import { FaCar, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HomePage() {
  const [animatedStats, setAnimatedStats] = useState({
    vehicles: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Animação dos números das estatísticas
    const stats = {
      vehicles: 500,
      clients: 2500,
      years: 15,
      satisfaction: 98
    };

    const duration = 2000; // 2 segundos
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(stats).forEach(key => {
      const finalValue = stats[key];
      const increment = finalValue / steps;
      let currentValue = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        currentValue += increment;

        if (step >= steps) {
          currentValue = finalValue;
          clearInterval(timer);
        }

        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    // Animação de scroll
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

    // Delay para garantir que os elementos estejam renderizados
    setTimeout(observeElements, 100);
  }, []);

  return (
    <>
      {/* Seção Hero */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">
              Encontre o Veículo dos
              <br />
              <span style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Seus Sonhos
              </span>
            </h1>
            <p className="hero-subtitle">
              Seminovos selecionados, garantia total e as melhores condições de pagamento
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">+{animatedStats.vehicles}</span>
                <span className="stat-label">Veículos Disponíveis</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+{animatedStats.clients}</span>
                <span className="stat-label">Clientes Satisfeitos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{animatedStats.years}</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{animatedStats.satisfaction}%</span>
                <span className="stat-label">Satisfação</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Seção de Diferenciais */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <Container>
          <div className="section-header scroll-animate">
            <h2 className="section-title">Por que escolher a AutoTop?</h2>
            <p className="section-subtitle">
              Tradição, qualidade e confiança em cada negócio
            </p>
          </div>

          <Row className="g-4">
            <Col md={3} sm={6} className="scroll-animate">
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  <FaCar />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: '#2c3e50' }}>
                  Veículos Selecionados
                </h4>
                <p style={{ color: '#5d6c7b', lineHeight: '1.6' }}>
                  Todos os nossos seminovos passam por rigorosa inspeção de qualidade
                </p>
              </div>
            </Col>

            <Col md={3} sm={6} className="scroll-animate">
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#dc2626',
                  fontSize: '2rem'
                }}>
                  <FaAward />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: '#2c3e50' }}>
                  Garantia Total
                </h4>
                <p style={{ color: '#5d6c7b', lineHeight: '1.6' }}>
                  1 ano de garantia em todos os veículos para sua tranquilidade
                </p>
              </div>
            </Col>

            <Col md={3} sm={6} className="scroll-animate">
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  <FaUsers />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: '#2c3e50' }}>
                  Atendimento Especializado
                </h4>
                <p style={{ color: '#5d6c7b', lineHeight: '1.6' }}>
                  Equipe experiente para ajudar na escolha do veículo ideal
                </p>
              </div>
            </Col>

            <Col md={3} sm={6} className="scroll-animate">
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#dc2626',
                  fontSize: '2rem'
                }}>
                  <FaHandshake />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: '#2c3e50' }}>
                  Melhores Condições
                </h4>
                <p style={{ color: '#5d6c7b', lineHeight: '1.6' }}>
                  Financiamento facilitado e as melhores condições de pagamento
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção de Veículos */}
      <section className="vehicles-section">
        <Container>
          <div className="section-header scroll-animate">
            <h2 className="section-title">Nossa Vitrine de Veículos</h2>
            <p className="section-subtitle">
              Seminovos selecionados com procedência garantida e as melhores condições do mercado
            </p>
          </div>

          <Row className="g-4">
            {vehicles
              .filter(carro => carro.featured === true) // 1. Filtra apenas os veículos com 'featured: true'
              .slice(0, 3)                             // 2. Pega apenas os 3 primeiros resultados do filtro
              .map((carro, index) => (                 // 3. Mapeia e renderiza os 3 veículos filtrados
                <Col
                  key={carro.id}
                  lg={4}
                  md={6}
                  sm={12}
                  className="scroll-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <VehicleCard vehicle={carro} />
                </Col>
              ))}
          </Row>

          <div className="text-center mt-5 scroll-animate">

            <Button
              as={Link}
              to="/estoque"
              className="btn-modern"
              style={{ fontSize: '1.1rem', padding: '16px 32px' }}
            >
              Ver Todos os Veículos
              <FaCar />
            </Button>
          </div>
        </Container>
      </section>

      {/* Seção de CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 80%, #dc2626 100%)',
        color: 'white',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 20\\"><defs><radialGradient id=\\"a\\" cx=\\"50\\" cy=\\"50\\" r=\\"50\\"><stop offset=\\"0\\" stop-color=\\"rgba(255,255,255,.1)\\"/><stop offset=\\"100\\" stop-color=\\"rgba(255,255,255,0)\\"/></radialGradient></defs><circle cx=\\"10\\" cy=\\"10\\" r=\\"1\\" fill=\\"url(%23a)\\"/><circle cx=\\"30\\" cy=\\"5\\" r=\\"1\\" fill=\\"url(%23a)\\"/><circle cx=\\"60\\" cy=\\"15\\" r=\\"1\\" fill=\\"url(%23a)\\"/><circle cx=\\"80\\" cy=\\"8\\" r=\\"1\\" fill=\\"url(%23a)\\"/></svg>") repeat',
          opacity: 0.3
        }} />

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="scroll-animate">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                  Pronto para encontrar seu próximo veículo?
                </h2>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: 0 }}>
                  Entre em contato conosco e descubra as melhores oportunidades em seminovos
                </p>
              </div>
            </Col>
            <Col lg={4} className="text-lg-end">
              <div className="scroll-animate">
                <a
                  href="https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre os veículos disponíveis!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern"
                  style={{
                    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                    fontSize: '1.1rem',
                    padding: '16px 32px'
                  }}
                >
                  Falar no WhatsApp
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                  </svg>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;