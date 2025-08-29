// src/pages/VehicleDetailPage.jsx - Design Moderno
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { vehicles } from '../data/vehicles';
import { useEffect, useState } from 'react';

// Ícones
import { 
  FaCalendarAlt, 
  FaTachometerAlt, 
  FaGasPump, 
  FaCog, 
  FaWhatsapp,
  FaArrowLeft,
  FaCheckCircle,
  FaCar,
  FaShieldAlt,
  FaTools
} from 'react-icons/fa';

function VehicleDetailPage() {
  const { id } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);
  const vehicle = vehicles.find(v => v.id === parseInt(id));

  useEffect(() => {
    // Animação de scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Animação dos elementos
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

  if (!vehicle) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Container className="text-center">
          <FaCar style={{ fontSize: '4rem', marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Veículo não encontrado!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            O veículo que você procura não está disponível
          </p>
          <Button
            href="/"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              padding: '12px 24px',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaArrowLeft /> Voltar para Início
          </Button>
        </Container>
      </div>
    );
  }

  // Preparando a mensagem para o WhatsApp
  const whatsappNumber = "5511999999999"; // TROQUE PELO NÚMERO REAL
  const message = `Olá! Tenho interesse no veículo ${vehicle.name} (${vehicle.year}) que vi no site. Gostaria de mais informações!`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Hero Section */}
      <section className="detail-hero">
        <Container>
          <div className="scroll-animate">
            <Button
              href="/"
              variant="outline-light"
              style={{
                borderRadius: '50px',
                marginBottom: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <FaArrowLeft /> Voltar
            </Button>
            
            <div className="text-center" style={{ color: 'white' }}>
              <Badge 
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  marginBottom: '1rem'
                }}
              >
                Seminovo Selecionado
              </Badge>
              
              <h1 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '1rem',
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}>
                {vehicle.name}
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                opacity: 0.9,
                marginBottom: '2rem'
              }}>
                {vehicle.brand} {vehicle.model} • {vehicle.year}
              </p>
              
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '1rem 2rem',
                borderRadius: '20px',
                display: 'inline-block',
                backdropFilter: 'blur(10px)'
              }}>
                R$ {vehicle.price}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Detalhes do Veículo */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <Container>
          <Row className="g-5">
            {/* Coluna da Imagem */}
            <Col lg={7}>
              <div className="detail-image scroll-animate">
                {!imageLoaded && (
                  <div 
                    className="loading-shimmer"
                    style={{
                      height: '400px',
                      borderRadius: '20px'
                    }}
                  />
                )}
                <Image 
                  src={vehicle.image} 
                  fluid 
                  rounded 
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: imageLoaded ? 'block' : 'none'
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Features do Veículo */}
              <div className="scroll-animate" style={{ marginTop: '3rem' }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#2c3e50'
                }}>
                  Características do Veículo
                </h3>
                
                <Row className="g-3">
                  <Col md={6}>
                    <div style={{
                      background: '#f8fafc',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          <FaShieldAlt />
                        </div>
                        <div>
                          <h5 style={{ margin: 0, color: '#2c3e50' }}>Garantia</h5>
                          <p style={{ margin: 0, color: '#5d6c7b', fontSize: '0.9rem' }}>
                            12 meses de garantia
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <div style={{
                      background: '#f8fafc',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#dc2626'
                        }}>
                          <FaTools />
                        </div>
                        <div>
                          <h5 style={{ margin: 0, color: '#2c3e50' }}>Revisado</h5>
                          <p style={{ margin: 0, color: '#5d6c7b', fontSize: '0.9rem' }}>
                            Inspeção completa
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Coluna das Informações */}
            <Col lg={5}>
              <div className="detail-info-card scroll-animate">
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#2c3e50'
                }}>
                  Especificações
                </h3>
                
                <div className="spec-grid">
                  <div className="spec-item">
                    <FaCalendarAlt className="spec-icon" />
                    <div>
                      <strong>Ano</strong>
                      <div style={{ color: '#5d6c7b' }}>{vehicle.year}</div>
                    </div>
                  </div>
                  
                  <div className="spec-item">
                    <FaTachometerAlt className="spec-icon" />
                    <div>
                      <strong>Quilometragem</strong>
                      <div style={{ color: '#5d6c7b' }}>{vehicle.km.toLocaleString('pt-BR')} km</div>
                    </div>
                  </div>
                  
                  <div className="spec-item">
                    <FaGasPump className="spec-icon" />
                    <div>
                      <strong>Combustível</strong>
                      <div style={{ color: '#5d6c7b' }}>Flex</div>
                    </div>
                  </div>
                  
                  <div className="spec-item">
                    <FaCog className="spec-icon" />
                    <div>
                      <strong>Câmbio</strong>
                      <div style={{ color: '#5d6c7b' }}>Manual</div>
                    </div>
                  </div>
                </div>
                
                {/* Preço em Destaque */}
                <div style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                  margin: '2rem 0',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '1rem', 
                      opacity: 0.9,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: '600'
                    }}>
                      Preço Especial
                    </p>
                    <h2 style={{ 
                      fontSize: '3rem', 
                      fontWeight: '800', 
                      margin: '0.5rem 0',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                    }}>
                      R$ {vehicle.price}
                    </h2>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.9rem', 
                      opacity: 0.8 
                    }}>
                      Financiamento facilitado disponível
                    </p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div style={{ marginTop: '2rem' }}>
                  <Button
                    as="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                    style={{
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.8rem',
                      fontSize: '1.1rem'
                    }}
                  >
                    <FaWhatsapp style={{ fontSize: '1.3rem' }} />
                    Falar com Vendedor via WhatsApp
                  </Button>
                  
                  <Button
                    variant="outline-primary"
                    style={{
                      width: '100%',
                      borderRadius: '50px',
                      padding: '12px 24px',
                      fontWeight: '600',
                      border: '2px solid #dc2626',
                      color: '#dc2626',
                      background: 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#dc2626';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#dc2626';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Agendar Test Drive
                  </Button>
                </div>
                
                {/* Informações Adicionais */}
                <div style={{ 
                  marginTop: '2rem', 
                  padding: '1.5rem',
                  background: '#f8fafc',
                  borderRadius: '15px',
                  border: '1px solid #e2e8f0'
                }}>
                  <h5 style={{ 
                    color: '#2c3e50', 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FaCheckCircle style={{ color: '#dc2626' }} />
                    Vantagens AutoTop
                  </h5>
                  
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    color: '#5d6c7b'
                  }}>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      marginBottom: '0.8rem'
                    }}>
                      <FaCheckCircle style={{ color: '#dc2626', fontSize: '0.9rem' }} />
                      Veículo com procedência garantida
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      marginBottom: '0.8rem'
                    }}>
                      <FaCheckCircle style={{ color: '#dc2626', fontSize: '0.9rem' }} />
                      Documentação em dia
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      marginBottom: '0.8rem'
                    }}>
                      <FaCheckCircle style={{ color: '#dc2626', fontSize: '0.9rem' }} />
                      Financiamento em até 60x
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem'
                    }}>
                      <FaCheckCircle style={{ color: '#dc2626', fontSize: '0.9rem' }} />
                      Aceitamos seu usado como entrada
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção de Veículos Similares */}
      <section style={{
        background: '#f8fafc',
        padding: '80px 0'
      }}>
        <Container>
          <div className="section-header scroll-animate">
            <h2 className="section-title">Veículos Similares</h2>
            <p className="section-subtitle">
              Outras opções que podem interessar você
            </p>
          </div>
          
          <Row className="g-4">
            {vehicles
              .filter(v => v.id !== vehicle.id)
              .slice(0, 2)
              .map((similarVehicle, index) => (
                <Col key={similarVehicle.id} md={6} className="scroll-animate">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                  }}>
                    
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <img 
                        src={similarVehicle.image} 
                        alt={similarVehicle.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                    
                    <div style={{ padding: '1.5rem' }}>
                      <h4 style={{ 
                        color: '#2c3e50',
                        marginBottom: '0.5rem',
                        fontSize: '1.3rem',
                        fontWeight: '700'
                      }}>
                        {similarVehicle.name}
                      </h4>
                      
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '1rem',
                        color: '#5d6c7b',
                        fontSize: '0.9rem'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <FaCalendarAlt />
                          {similarVehicle.year}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <FaTachometerAlt />
                          {similarVehicle.km.toLocaleString('pt-BR')} km
                        </span>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: '#dc2626'
                        }}>
                          R$ {similarVehicle.price}
                        </div>
                        
                        <Button
                          as="a"
                          href={`/veiculo/${similarVehicle.id}`}
                          variant="outline-primary"
                          size="sm"
                          style={{
                            borderRadius: '50px',
                            fontWeight: '600',
                            padding: '6px 16px'
                          }}
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* CTA Final */}
      <section style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 80%, #dc2626 100%)',
        color: 'white',
        padding: '60px 0',
        position: 'relative'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="scroll-animate">
                <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
                  Gostou do {vehicle.name}?
                </h3>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: 0 }}>
                  Entre em contato agora mesmo e garante as melhores condições!
                </p>
              </div>
            </Col>
            <Col md={4} className="text-md-end">
              <div className="scroll-animate">
                <Button
                  as="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '16px 32px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 32px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <FaWhatsapp />
                  Falar Agora
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VehicleDetailPage;