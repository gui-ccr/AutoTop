// src/pages/VehicleDetailPage.jsx - CÓDIGO COMPLETO COM GALERIA
import { useParams, Link } from 'react-router-dom';
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
  FaTools,
  FaPalette, // Adicionado para cor
  FaDoorOpen // Adicionado para portas
} from 'react-icons/fa';

function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(id));

  // Estado para controlar a imagem ativa na galeria
  const [activeImage, setActiveImage] = useState(vehicle ? vehicle.images[0] : null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Efeito para rolar para o topo e resetar a imagem quando o veículo muda
  useEffect(() => {
    window.scrollTo(0, 0);
    if (vehicle) {
      setActiveImage(vehicle.images[0]);
    }
    
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
  }, [id, vehicle]);

  if (!vehicle) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background-dark)', color: 'white' }}>
        <Container className="text-center">
          <FaCar style={{ fontSize: '4rem', marginBottom: '2rem', color: 'var(--primary-color)' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Veículo não encontrado!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>O veículo que você procura não está disponível.</p>
          <Button as={Link} to="/estoque" className="btn-modern">
            <FaArrowLeft /> Voltar para o Estoque
          </Button>
        </Container>
      </div>
    );
  }

  // Preparando a mensagem para o WhatsApp
  const whatsappNumber = "5533999999999"; // <-- TROQUE PELO SEU NÚMERO REAL
  const message = `Olá! Tenho interesse no veículo ${vehicle.name} (${vehicle.year}) que vi no site. Gostaria de mais informações!`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Hero Section */}
      <section className="detail-hero">
        <Container>
          <div className="scroll-animate">
            <Button as={Link} to="/estoque" variant="outline-light" style={{ borderRadius: '50px', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.3)', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
              <FaArrowLeft /> Voltar para o Estoque
            </Button>
            <div className="text-center" style={{ color: 'white' }}>
              <Badge style={{ background: 'var(--gradient-primary)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {vehicle.condition}
              </Badge>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
                {vehicle.name}
              </h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '2rem' }}>
                {vehicle.brand} {vehicle.model} • {vehicle.year}
              </p>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', background: 'rgba(255, 255, 255, 0.2)', padding: '1rem 2rem', borderRadius: '20px', display: 'inline-block', backdropFilter: 'blur(10px)' }}>
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
            {/* Coluna da Galeria de Imagens */}
            <Col lg={7}>
              <div className="detail-image scroll-animate mb-3">
                <Image src={activeImage} fluid rounded style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
              </div>
              <Row className="g-2 scroll-animate">
                {vehicle.images.map((img, index) => (
                  <Col key={index} xs={3} sm={2}>
                    <Image
                      src={img}
                      fluid
                      rounded
                      style={{
                        cursor: 'pointer',
                        border: activeImage === img ? `3px solid var(--primary-color)` : '3px solid transparent',
                        transition: 'border 0.2s ease',
                        height: '100px',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      onClick={() => setActiveImage(img)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Coluna das Informações */}
            <Col lg={5}>
              <div className="detail-info-card scroll-animate">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: '#2c3e50' }}>
                  Especificações
                </h3>
                <div className="spec-grid">
                  <div className="spec-item"><FaCalendarAlt className="spec-icon" /><div><strong>Ano</strong><div style={{ color: '#5d6c7b' }}>{vehicle.year}</div></div></div>
                  <div className="spec-item"><FaTachometerAlt className="spec-icon" /><div><strong>KM</strong><div style={{ color: '#5d6c7b' }}>{vehicle.km.toLocaleString('pt-BR')} km</div></div></div>
                  <div className="spec-item"><FaGasPump className="spec-icon" /><div><strong>Combustível</strong><div style={{ color: '#5d6c7b' }}>{vehicle.fuel}</div></div></div>
                  <div className="spec-item"><FaCog className="spec-icon" /><div><strong>Câmbio</strong><div style={{ color: '#5d6c7b' }}>{vehicle.transmission}</div></div></div>
                  <div className="spec-item"><FaPalette className="spec-icon" /><div><strong>Cor</strong><div style={{ color: '#5d6c7b' }}>{vehicle.color}</div></div></div>
                  <div className="spec-item"><FaDoorOpen className="spec-icon" /><div><strong>Portas</strong><div style={{ color: '#5d6c7b' }}>{vehicle.doors}</div></div></div>
                </div>
                <div style={{ background: 'var(--gradient-primary)', color: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'center', margin: '2rem 0', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p style={{ margin: 0, fontSize: '1rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                      Preço Especial
                    </p>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', margin: '0.5rem 0', textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
                      R$ {vehicle.price}
                    </h2>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', fontSize: '1.1rem' }}>
                    <FaWhatsapp style={{ fontSize: '1.3rem' }} />
                    Falar com Vendedor
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VehicleDetailPage;