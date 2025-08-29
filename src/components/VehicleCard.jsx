// src/components/VehicleCard.jsx - Card Corrigido
import { Button, Badge, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaTachometerAlt, 
  FaEye, 
  FaArrowRight,
  FaGasPump,
  FaCog,
  FaPalette
} from 'react-icons/fa';

function VehicleCard({ vehicle, viewMode = 'grid' }) {
  if (viewMode === 'list') {
    // Layout em Lista
    return (
      <div style={{
        background: '#ffffff',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e5e5',
        transition: 'all 0.3s ease',
        marginBottom: '1rem'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.borderColor = '#dc2626';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = '#e5e5e5';
      }}>
        <Row className="align-items-center">
          {/* Imagem */}
          <Col md={3}>
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '140px',
              background: '#f9fafb'
            }}>
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              {vehicle.featured && (
                <Badge 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                    fontSize: '0.7rem',
                    padding: '4px 8px'
                  }}
                >
                  Destaque
                </Badge>
              )}
            </div>
          </Col>

          {/* Informações */}
          <Col md={6}>
            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#0f0f0f',
                marginBottom: '0.5rem'
              }}>
                {vehicle.name}
              </h4>

              <p style={{
                color: '#404040',
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                {vehicle.brand} {vehicle.model} • {vehicle.condition}
              </p>

              {/* Especificações em linha */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: '#404040'
                }}>
                  <FaCalendarAlt style={{ color: '#dc2626' }} />
                  {vehicle.year}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: '#404040'
                }}>
                  <FaTachometerAlt style={{ color: '#dc2626' }} />
                  {vehicle.km.toLocaleString('pt-BR')} km
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: '#404040'
                }}>
                  <FaGasPump style={{ color: '#dc2626' }} />
                  {vehicle.fuel}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: '#404040'
                }}>
                  <FaCog style={{ color: '#dc2626' }} />
                  {vehicle.transmission}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: '#404040'
                }}>
                  <FaPalette style={{ color: '#dc2626' }} />
                  {vehicle.color}
                </div>
              </div>

              <Badge bg="light" text="dark" style={{ fontSize: '0.7rem' }}>
                {vehicle.category}
              </Badge>
            </div>
          </Col>

          {/* Preço e Ação */}
          <Col md={3} className="text-end">
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#dc2626',
              marginBottom: '1rem'
            }}>
              R$ {vehicle.price}
            </div>

            <div className="d-grid gap-2">
              <Button
                as={Link}
                to={`/veiculo/${vehicle.id}`}
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 16px rgba(220, 38, 38, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaEye /> Ver Detalhes
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  // Layout em Grid (usando as classes CSS do styles)
  return (
    <div className="vehicle-card">
      <div className="vehicle-image-container">
        <img src={vehicle.image} alt={vehicle.name} />
        
        {/* Badges */}
        <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
          <div className="vehicle-badge" style={{ marginRight: '0.5rem' }}>
            {vehicle.condition || 'Seminovo'}
          </div>
          {vehicle.featured && (
            <Badge 
              style={{
                background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
                color: '#dc2626',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Destaque
            </Badge>
          )}
        </div>
        
        {/* Overlay com botão de ação */}
        <div 
          className="card-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            borderRadius: '0'
          }}
        >
          <Button
            as={Link}
            to={`/veiculo/${vehicle.id}`}
            style={{
              borderRadius: '50px',
              padding: '12px 24px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none',
              background: 'white',
              color: '#dc2626',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            <FaEye /> Ver Detalhes
          </Button>
        </div>
      </div>
      
      <div className="vehicle-info">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="vehicle-title">{vehicle.name}</h3>
          <Badge bg="light" text="dark" style={{ fontSize: '0.7rem' }}>
            {vehicle.category}
          </Badge>
        </div>
        
        <p style={{
          color: '#404040',
          fontSize: '0.9rem',
          marginBottom: '1rem'
        }}>
          {vehicle.brand} {vehicle.model}
        </p>
        
        {/* Grade de especificações */}
        <div className="vehicle-details" style={{ marginBottom: '1rem' }}>
          <div className="vehicle-detail-item">
            <FaCalendarAlt style={{ color: '#dc2626' }} />
            <span>{vehicle.year}</span>
          </div>
          <div className="vehicle-detail-item">
            <FaTachometerAlt style={{ color: '#dc2626' }} />
            <span>{vehicle.km.toLocaleString('pt-BR')} km</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: '#404040'
        }}>
          <div className="vehicle-detail-item">
            <FaGasPump style={{ color: '#dc2626' }} />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="vehicle-detail-item">
            <FaCog style={{ color: '#dc2626' }} />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: '#404040'
        }}>
          <FaPalette style={{ color: '#dc2626' }} />
          <span>{vehicle.color}</span>
        </div>
        
        <div className="vehicle-price">R$ {vehicle.price}</div>
        
        <Button
          as={Link}
          to={`/veiculo/${vehicle.id}`}
          className="btn-modern"
          style={{ 
            width: '100%', 
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          Ver Detalhes
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default VehicleCard