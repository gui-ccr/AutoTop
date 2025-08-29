// src/pages/StockPage.jsx - Página de Estoque com Sidebar
import { Container, Row, Col, Form, Button, Badge, Dropdown, Offcanvas } from 'react-bootstrap';
import { useState, useEffect, useMemo } from 'react';
import VehicleCard from '../components/VehicleCard';
import { vehicles, filterOptions } from '../data/vehicles';
import { 
  FaFilter, 
  FaSearch, 
  FaCar, 
  FaSort, 
  FaTimes,
  FaListUl,
  FaTh,
  FaChevronDown,
  FaSlidersH
} from 'react-icons/fa';

function StockPage() {
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    fuel: '',
    transmission: '',
    color: '',
    year: '',
    priceRange: '',
    kmRange: ''
  });
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  

  // Aplicar filtros
  const applyFilters = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      const searchMatch = searchTerm === '' || 
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());

      const brandMatch = !filters.brand || vehicle.brand === filters.brand;
      const categoryMatch = !filters.category || vehicle.category === filters.category;
      const fuelMatch = !filters.fuel || vehicle.fuel === filters.fuel;
      const transmissionMatch = !filters.transmission || vehicle.transmission === filters.transmission;
      const colorMatch = !filters.color || vehicle.color === filters.color;
      const yearMatch = !filters.year || vehicle.year.toString() === filters.year;

      let priceMatch = true;
      if (filters.priceRange) {
        const range = filterOptions.priceRanges.find(r => r.label === filters.priceRange);
        if (range) {
          const price = parseFloat(vehicle.price.replace('.', ''));
          priceMatch = price >= range.min && price <= range.max;
        }
      }

      let kmMatch = true;
      if (filters.kmRange) {
        const range = filterOptions.kmRanges.find(r => r.label === filters.kmRange);
        if (range) {
          kmMatch = vehicle.km >= range.min && vehicle.km <= range.max;
        }
      }

      return searchMatch && brandMatch && categoryMatch && fuelMatch && 
             transmissionMatch && colorMatch && yearMatch && priceMatch && kmMatch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('.', '')) - parseFloat(b.price.replace('.', ''));
        case 'price-high':
          return parseFloat(b.price.replace('.', '')) - parseFloat(a.price.replace('.', ''));
        case 'year-new':
          return b.year - a.year;
        case 'year-old':
          return a.year - b.year;
        case 'km-low':
          return a.km - b.km;
        case 'km-high':
          return b.km - a.km;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return filtered;
  }, [searchTerm, filters, sortBy]);

  useEffect(() => {
  setIsLoading(true); // 1. Ativa o modo "carregando"

  // 2. Usamos um setTimeout para simular uma busca e dar tempo para a animação ser vista
  const timer = setTimeout(() => {
    setFilteredVehicles(applyFilters); // Atualiza a lista de veículos
    setIsLoading(false); // Desativa o modo "carregando"
  }, 300); // 300 milissegundos

  // Função de limpeza para evitar bugs
  return () => clearTimeout(timer);
}, [applyFilters]);

  useEffect(() => {
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

    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, [filteredVehicles]);

  const clearFilters = () => {
    setFilters({
      brand: '',
      category: '',
      fuel: '',
      transmission: '',
      color: '',
      year: '',
      priceRange: '',
      kmRange: ''
    });
    setSearchTerm('');
  };

  const activeFiltersCount = Object.values(filters).filter(filter => filter !== '').length + (searchTerm ? 1 : 0);

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 80%, #dc2626 100%)',
        color: 'white',
        padding: '140px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center' }}>
            <Badge 
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}
            >
              Nosso Estoque Completo
            </Badge>
            
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}>
              Encontre Seu
              <span style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block'
              }}>
                Veículo Ideal
              </span>
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Mais de {vehicles.length} veículos seminovos selecionados com qualidade garantida
            </p>
          </div>
        </Container>
      </section>

      {/* Barra de Controles */}
      <section style={{ 
        background: '#ffffff', 
        padding: '1.5rem 0',
        borderBottom: '1px solid #e5e5e5',
        top: '80px',
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Container>
        <Row className={`g-4 ${viewMode === 'list' ? 'flex-column' : ''} ${isLoading ? 'loading-vehicles' : ''}`}><Col lg={5} md={6} className="mb-2 mb-md-0">
              <div style={{ position: 'relative' }}>
                <Form.Control
                  type="search"
                  placeholder="Buscar por marca, modelo ou nome..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: '50px',
                    padding: '12px 50px 12px 20px',
                    border: '2px solid #e5e5e5',
                    fontSize: '1rem'
                  }}
                />
                <FaSearch style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#dc2626'
                }} />
              </div>
            </Col>

            <Col lg={7} md={6}>
              <div className="d-flex align-items-center justify-content-end gap-2 flex-wrap">
                <Button
                  variant="outline-primary"
                  onClick={() => setShowFilterSidebar(true)}
                  style={{
                    borderRadius: '50px',
                    padding: '8px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600',
                    borderColor: '#dc2626',
                    color: '#dc2626'
                  }}
                >
                  <FaSlidersH />
                  Filtros
                  {activeFiltersCount > 0 && (
                    <Badge bg="danger" style={{ marginLeft: '0.5rem' }}>
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-dark"
                    style={{
                      borderRadius: '50px',
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}
                  >
                    <FaSort /> <FaChevronDown />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSortBy('featured')}>Destaques</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('price-low')}>Menor Preço</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('price-high')}>Maior Preço</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('year-new')}>Mais Novo</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('km-low')}>Menor KM</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('name')}>Nome A-Z</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div style={{ display: 'flex', borderRadius: '50px', overflow: 'hidden', border: '2px solid #e5e5e5' }}>
                  <Button
                    variant={viewMode === 'grid' ? 'danger' : 'light'}
                    onClick={() => setViewMode('grid')}
                    style={{ border: 'none', borderRadius: 0, padding: '6px 12px' }}
                  >
                    <FaTh />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'danger' : 'light'}
                    onClick={() => setViewMode('list')}
                    style={{ border: 'none', borderRadius: 0, padding: '6px 12px' }}
                  >
                    <FaListUl />
                  </Button>
                </div>

                <span style={{ 
                  color: '#404040', 
                  fontWeight: '600', 
                  whiteSpace: 'nowrap',
                  fontSize: '0.9rem',
                  background: '#f8f9fa',
                  padding: '6px 12px',
                  borderRadius: '20px'
                }}>
                  {filteredVehicles.length} veículos
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sidebar de Filtros */}
      <Offcanvas 
        show={showFilterSidebar} 
        onHide={() => setShowFilterSidebar(false)} 
        placement="end"
        style={{ width: '400px' }}
      >
        <Offcanvas.Header 
          closeButton 
          style={{ 
            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)', 
            color: 'white',
            borderBottom: 'none'
          }}
        >
          <Offcanvas.Title style={{ fontWeight: '700', fontSize: '1.3rem' }}>
            <FaSlidersH style={{ marginRight: '0.5rem' }} />
            Filtros Avançados
          </Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body style={{ background: '#f8f9fa' }}>
          {activeFiltersCount > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <Button
                variant="outline-danger"
                onClick={clearFilters}
                style={{ 
                  borderRadius: '50px',
                  width: '100%',
                  padding: '10px'
                }}
              >
                <FaTimes /> Limpar Todos os Filtros ({activeFiltersCount})
              </Button>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Marca
              </label>
              <Form.Select
                value={filters.brand}
                onChange={(e) => setFilters({...filters, brand: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todas as Marcas</option>
                {filterOptions.brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Categoria
              </label>
              <Form.Select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todas as Categorias</option>
                {filterOptions.categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Ano
              </label>
              <Form.Select
                value={filters.year}
                onChange={(e) => setFilters({...filters, year: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todos os Anos</option>
                {filterOptions.years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Combustível
              </label>
              <Form.Select
                value={filters.fuel}
                onChange={(e) => setFilters({...filters, fuel: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todos os Combustíveis</option>
                {filterOptions.fuels.map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Câmbio
              </label>
              <Form.Select
                value={filters.transmission}
                onChange={(e) => setFilters({...filters, transmission: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todos os Câmbios</option>
                {filterOptions.transmissions.map(transmission => (
                  <option key={transmission} value={transmission}>{transmission}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Cor
              </label>
              <Form.Select
                value={filters.color}
                onChange={(e) => setFilters({...filters, color: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todas as Cores</option>
                {filterOptions.colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Faixa de Preço
              </label>
              <Form.Select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todas as Faixas de Preço</option>
                {filterOptions.priceRanges.map(range => (
                  <option key={range.label} value={range.label}>{range.label}</option>
                ))}
              </Form.Select>
            </div>

            <div>
              <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block', color: '#2c3e50' }}>
                Quilometragem
              </label>
              <Form.Select
                value={filters.kmRange}
                onChange={(e) => setFilters({...filters, kmRange: e.target.value})}
                style={{ borderRadius: '12px' }}
              >
                <option value="">Todas as Quilometragens</option>
                {filterOptions.kmRanges.map(range => (
                  <option key={range.label} value={range.label}>{range.label}</option>
                ))}
              </Form.Select>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Button
              variant="primary"
              onClick={() => setShowFilterSidebar(false)}
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                border: 'none',
                borderRadius: '50px',
                width: '100%',
                padding: '12px',
                fontWeight: '600'
              }}
            >
              Aplicar Filtros ({filteredVehicles.length} veículos)
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Lista de Veículos */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <Container>
          {filteredVehicles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <FaCar style={{ fontSize: '4rem', color: '#dc2626', marginBottom: '2rem' }} />
              <h3 style={{ color: '#0f0f0f', marginBottom: '1rem' }}>
                Nenhum veículo encontrado
              </h3>
              <p style={{ color: '#404040', marginBottom: '2rem' }}>
                Tente ajustar os filtros para encontrar o que procura
              </p>
              {activeFiltersCount > 0 && (
                <Button
                  variant="outline-danger"
                  onClick={clearFilters}
                  style={{ borderRadius: '50px', padding: '12px 24px' }}
                >
                  Limpar Filtros
                </Button>
              )}
            </div>
          ) : (
            <Row className={viewMode === 'grid' ? 'g-4' : 'g-3'}>
              {filteredVehicles.map((vehicle, index) => (
                <Col 
                  key={vehicle.id}
                  {...(viewMode === 'grid' ? {lg: 4, md: 6, sm: 12} : {xs: 12})}
                  className="scroll-animate"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <VehicleCard vehicle={vehicle} viewMode={viewMode} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}

export default StockPage;