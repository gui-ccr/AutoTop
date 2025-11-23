// src/components/Footer.jsx - CÓDIGO COMPLETO E CORRIGIDO
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa o Link
import { 
  FaCar, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaClock
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Array de objetos para os links, com distinção de links externos
  const quickLinks = [
    { text: 'Início', path: '/' },
    { text: 'Estoque', path: '/estoque' },
    { text: 'Sobre Nós', path: '/sobre' },
    { text: 'Contato', path: '/contato' },
    { text: 'Financiamento', path: `https://wa.me/553399999999?text=${encodeURIComponent('Olá! Gostaria de informações sobre financiamento.')}`, isExternal: true }, 
  ];
  
  // Função para forçar a rolagem para o topo
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="modern-footer">
      <Container>
        <Row className="g-4">
          {/* Informações da Empresa */}
          <Col lg={4} md={6}>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontSize: '1.8rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                <FaCar style={{ color: '#dc2626' }} />
                AutoTop
              </h4>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                Sua concessionária de confiança há 15 anos. Oferecemos os melhores seminovos 
                com qualidade garantida e atendimento especializado.
              </p>
              {/* Redes Sociais */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="#"
                  style={{ width: '45px', height: '45px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#3b5998'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  style={{ width: '45px', height: '45px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  style={{ width: '45px', height: '45px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </Col>

          {/* Links Rápidos */}
          <Col lg={2} md={6}>
            <h5 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Links Rápidos
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.text} style={{ marginBottom: '0.8rem' }}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-block' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#dc2626'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-block' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#dc2626'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Col>

          {/* Contato */}
          <Col lg={3} md={6}>
            <h5 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Contato
            </h5>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <div style={{ width: '35px', height: '35px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    Av. Principais, 123<br />
                    Centro, Teófilo Otoni - MG
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <div style={{ width: '35px', height: '35px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
                  <FaPhone />
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  (33) 9999-9999
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <div style={{ width: '35px', height: '35px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
                  <FaEnvelope />
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  contato@autotop.com.br
                </div>
              </div>
            </div>
          </Col>

          {/* Horário de Funcionamento */}
          <Col lg={3} md={6}>
            <h5 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Funcionamento
            </h5>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: '#4285f4' }}>
                <FaClock />
                <span style={{ fontWeight: '600', color: 'white' }}>Horários</span>
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Segunda à Sexta:</strong><br />
                  08:00 - 18:00
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Sábado:</strong><br />
                  08:00 - 16:00
                </div>
                <div>
                  <strong>Domingo:</strong><br />
                  Fechado
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr style={{ border: 'none', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '3rem 0 2rem' }} />
        
        {/* Copyright */}
        <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            &copy; {currentYear} AutoTop Concessionária. Todos os direitos reservados.
            
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;