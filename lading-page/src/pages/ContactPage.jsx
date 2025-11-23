// src/pages/ContactPage.jsx
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Garante que a página comece no topo e anima os elementos
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="hero-section" style={{ padding: '140px 0 80px', minHeight: 'auto' }}>
        <Container>
          <div className="hero-content">
            <h1 className="hero-title scroll-animate">Fale Conosco</h1>
            <p className="hero-subtitle scroll-animate" style={{animationDelay: '0.2s'}}>
              Estamos prontos para atender você. Envie sua mensagem ou visite nossa loja.
            </p>
          </div>
        </Container>
      </section>

      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <Container>
          <Row className="g-5">
            <Col lg={5} className="scroll-animate">
              <h2 style={{ fontWeight: '700', marginBottom: '2rem' }}>Informações de Contato</h2>
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt size={24} className="me-3 mt-1" style={{ color: '#dc2626' }} />
                <div>
                  <h5 style={{ fontWeight: '600' }}>Nosso Endereço</h5>
                  <p className="text-muted">Av. Principais, 123, Centro<br/>Teófilo Otoni, MG - CEP 39800-000</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <FaPhone size={24} className="me-3 mt-1" style={{ color: '#dc2626' }} />
                <div>
                  <h5 style={{ fontWeight: '600' }}>Telefone</h5>
                  <p className="text-muted">(33) 9999-9999</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <FaEnvelope size={24} className="me-3 mt-1" style={{ color: '#dc2626' }} />
                <div>
                  <h5 style={{ fontWeight: '600' }}>Email</h5>
                  <p className="text-muted">contato@autotop.com.br</p>
                </div>
              </div>
               <div className="d-flex align-items-start mb-4">
                <FaClock size={24} className="me-3 mt-1" style={{ color: '#dc2626' }} />
                <div>
                  <h5 style={{ fontWeight: '600' }}>Horário de Funcionamento</h5>
                  <p className="text-muted mb-0">Segunda à Sexta: 08:00 - 18:00</p>
                  <p className="text-muted">Sábado: 08:00 - 16:00</p>
                </div>
              </div>
            </Col>

            <Col lg={7} className="scroll-animate" style={{animationDelay: '0.2s'}}>
              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontWeight: '700', marginBottom: '2rem' }}>Envie uma Mensagem</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Seu Nome</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Digite seu nome" required value={formData.name} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Seu Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="seu.email@exemplo.com" required value={formData.email} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Sua Mensagem</Form.Label>
                    <Form.Control as="textarea" name="message" rows={5} placeholder="Como podemos te ajudar?" required value={formData.message} onChange={handleChange} />
                  </Form.Group>
                  <Button type="submit" className="btn-modern w-100" style={{ padding: '12px' }}>
                    Enviar Mensagem
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Seção do Mapa do Google */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59942.52988229048!2d-41.5365427183921!3d-17.86018330776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb4e168725832a7%3A0x705a6918d343c22!2sTe%C3%B3filo%20Otoni%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1693333142277!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Concessionária AutoTop"
        ></iframe>
      </section>
    </>
  );
}

export default ContactPage;