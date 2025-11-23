// src/components/Header.jsx - Header Atualizado
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCar, FaWhatsapp } from 'react-icons/fa';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      className="modern-header"
      expand="lg" 
      fixed="top"
      style={{
        background: scrolled 
          ? 'rgba(15, 15, 15, 0.98)' 
          : 'rgba(15, 15, 15, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled 
          ? '1px solid rgba(220, 38, 38, 0.5)' 
          : '1px solid rgba(220, 38, 38, 0.3)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.5rem 0' : '1rem 0'
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link}
          to="/"
          style={{
            fontWeight: '800',
            fontSize: '1.8rem',
            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <FaCar style={{ color: '#dc2626' }} />
          AutoTop
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{
            border: 'none',
            padding: '0.25rem 0.5rem'
          }}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link}
              to="/"
              style={{
                fontWeight: '500',
                color: location.pathname === '/' ? '#dc2626' : '#ffffff',
                position: 'relative',
                margin: '0 1rem',
                transition: 'color 0.3s ease',
                textDecoration: 'none'
              }}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/estoque"
              style={{
                fontWeight: '500',
                color: location.pathname === '/estoque' ? '#dc2626' : '#ffffff',
                position: 'relative',
                margin: '0 1rem',
                transition: 'color 0.3s ease',
                textDecoration: 'none'
              }}
            >
              Estoque
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/sobre"
              href="#sobre"
              style={{
                fontWeight: '500',
                color: '#ffffff',
                position: 'relative',
                margin: '0 1rem',
                transition: 'color 0.3s ease'
              }}
            >
              Sobre Nós
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/contato"
              href="#contato"
              style={{
                fontWeight: '500',
                color: '#ffffff',
                position: 'relative',
                margin: '0 1rem',
                transition: 'color 0.3s ease'
              }}
            >
              Contato
            </Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center gap-3">
            <Button
              as="a"
              href="https://wa.me/5511999999999?text=Olá, gostaria de informações sobre os veículos!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                border: 'none',
                borderRadius: '50px',
                padding: '8px 20px',
                fontWeight: '600',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <FaWhatsapp />
              WhatsApp
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
      
      <style jsx>{`
        .navbar-nav .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: #dc2626;
          transform: translateX(-50%);
        }
        
        .navbar-nav .nav-link:hover {
          color: #dc2626 !important;
        }
        
        @media (max-width: 991px) {
          .d-flex {
            margin-top: 1rem;
            justify-content: center;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;