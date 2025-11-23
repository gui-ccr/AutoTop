// src/data/vehicles.js - VERSÃO FINAL CORRIGIDA
import FordKa from '../assets/ford-ka.jpeg';
import FordKa_Interior from '../assets/Ford ka interior.jpg';
import Onix from '../assets/Onix.jpg';
import Onix_interior from '../assets/onix-interior.webp';
import Onix_traseira from '../assets/onix-traseira.webp';
import HB20 from '../assets/HB20.jpeg';
import HyundaiHB20 from '../assets/Hyundai HB20.webp';
import VolkswagenGol from '../assets/Volkswagen Gol 1.0 MPI.jpeg';
import FiatArgo from '../assets/Fiat Argo 1.3 Drive.jpg';
import HondaCivic from '../assets/Honda Civic 2.0 EX.webp';
import ToyotaCorolla from '../assets/Toyota Corolla 1.8 GLI.webp';
import NissanKicks from '../assets/Nissan Kicks 1.6 SV.jpeg';
import JeepRenegade from '../assets/Jeep Renegade 1.8 Sport.jpeg';
import FordEcoSport from '../assets/Ford EcoSport 1.5 Titanium.jpg';
import ChevroletTracker from '../assets/Chevrolet Tracker 1.4 Premier.jpeg';
import VolkswagenPolo from '../assets/Volkswagen Polo 1.6 MSI.jpg';

import Titan2025 from '../assets/titan-2025.jpg';
import CB650R from '../assets/cb-650R.jpg';
import Fazer25 from '../assets/fazer25-2024.jpg';
import MT09 from '../assets/MT09.jpg';

export const vehicles = [
  {
    id: 1,
    name: 'Ford Ka 1.0 SE',
    brand: 'Ford',
    model: 'Ka',
    year: 2019,
    price: '45.900',
    km: 54000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Branco',
    doors: 4,
    category: 'Hatch',
    featured: true,
    condition: 'Seminovo',
    images: [FordKa, FordKa_Interior],
    description: 'Veículo em excelente estado de conservação, com todas as revisões feitas na concessionária. Versão SE completa, equipada com ar condicionado, direção elétrica, vidros e travas elétricas. Ideal para o dia a dia, muito econômico e com baixa quilometragem. Pneus em bom estado. Veículo de não fumante. Perfeito para quem busca um carro confiável e acessível.'
  },
  {
    id: 2,
    name: 'Chevrolet Onix 1.4 LT',
    brand: 'Chevrolet',
    model: 'Onix',
    year: 2018,
    price: '55.500',
    km: 68000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Prata',
    doors: 4,
    category: 'Hatch',
    featured: true,
    condition: 'Seminovo',
    images: [Onix, Onix_interior, Onix_traseira],
    description: 'O carro mais vendido do Brasil, na sua versão LT 1.4. Potente e econômico, este Onix está muito bem cuidado. Possui central multimídia MyLink, volante multifuncional e rodas de liga leve. Ótima oportunidade com excelente custo-benefício.'
  },
  {
    id: 3,
    name: 'Hyundai HB20 1.6 Comfort',
    brand: 'Hyundai',
    model: 'HB20',
    year: 2020,
    price: '68.900',
    km: 35000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Azul',
    doors: 4,
    category: 'Hatch',
    featured: true,
    condition: 'Seminovo',
    images: [HyundaiHB20], // CORRIGIDO
    description: 'HB20 1.6 Comfort, modelo moderno e muito bem equipado. Motor potente, baixo consumo de combustível e excelente dirigibilidade. Conta com sistema de som, ar condicionado, direção hidráulica e vidros elétricos. Ideal para quem busca conforto e tecnologia em um hatch compacto.'
  },
  {
    id: 4,
    name: 'Volkswagen Gol 1.0 MPI',
    brand: 'Volkswagen',
    model: 'Gol',
    year: 2017,
    price: '42.900',
    km: 78000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Vermelho',
    doors: 4,
    category: 'Hatch',
    featured: false,
    condition: 'Seminovo',
    images: [VolkswagenGol], // CORRIGIDO
    description: 'Gol 1.0 MPI, referência em robustez e economia. Veículo com manutenção em dia, ótimo para uso urbano e viagens curtas. Equipado com ar condicionado, direção hidráulica e sistema de som. Excelente opção para quem procura praticidade e baixo custo de manutenção.'
  },
  {
    id: 5,
    name: 'Fiat Argo 1.3 Drive',
    brand: 'Fiat',
    model: 'Argo',
    year: 2021,
    price: '72.500',
    km: 28000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Preto',
    doors: 4,
    category: 'Hatch',
    featured: false,
    condition: 'Seminovo',
    images: [FiatArgo], // CORRIGIDO
    description: 'Fiat Argo 1.3 Drive, hatch moderno com design arrojado. Baixa quilometragem, motor eficiente e ótimo espaço interno. Equipado com central multimídia, ar condicionado, direção elétrica e vidros elétricos. Perfeito para quem busca conforto e tecnologia.'
  },
  {
    id: 6,
    name: 'Honda Civic 2.0 EX',
    brand: 'Honda',
    model: 'Civic',
    year: 2019,
    price: '89.900',
    km: 45000,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Prata',
    doors: 4,
    category: 'Sedan',
    featured: false,
    condition: 'Seminovo',
    images: [HondaCivic], // CORRIGIDO
    description: 'Honda Civic 2.0 EX, sedan sofisticado e espaçoso. Motor potente, câmbio automático e acabamento premium. Conta com sistema multimídia, controle de estabilidade, ar digital e bancos confortáveis. Ideal para quem valoriza desempenho e elegância.'
  },
  {
    id: 7,
    name: 'Toyota Corolla 1.8 GLI',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: '95.500',
    km: 32000,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Branco',
    doors: 4,
    category: 'Sedan',
    featured: false,
    condition: 'Seminovo',
    images: [ToyotaCorolla], // CORRIGIDO
    description: 'Toyota Corolla 1.8 GLI, referência em conforto e durabilidade. Veículo com baixa quilometragem, equipado com ar condicionado digital, central multimídia, direção elétrica e piloto automático. Ótima opção para quem busca segurança e confiabilidade.'
  },
  {
    id: 8,
    name: 'Nissan Kicks 1.6 SV',
    brand: 'Nissan',
    model: 'Kicks',
    year: 2019,
    price: '78.900',
    km: 41000,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Azul',
    doors: 4,
    category: 'SUV',
    featured: false,
    condition: 'Seminovo',
    images: [NissanKicks], // CORRIGIDO
    description: 'Nissan Kicks 1.6 SV, SUV compacto com excelente espaço interno e acabamento moderno. Equipado com câmbio automático, central multimídia, câmera de ré e controle de estabilidade. Ideal para famílias e quem busca conforto em viagens.'
  },
  {
    id: 9,
    name: 'Jeep Renegade 1.8 Sport',
    brand: 'Jeep',
    model: 'Renegade',
    year: 2018,
    price: '85.900',
    km: 52000,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Verde',
    doors: 4,
    category: 'SUV',
    featured: false,
    condition: 'Seminovo',
    images: [JeepRenegade], // CORRIGIDO
    description: 'Jeep Renegade 1.8 Sport, SUV robusto e versátil. Motor potente, câmbio automático e excelente desempenho em diferentes terrenos. Conta com ar condicionado, sistema de som, controle de tração e airbags. Ótima escolha para quem gosta de aventura.'
  },
  {
    id: 10,
    name: 'Ford EcoSport 1.5 Titanium',
    brand: 'Ford',
    model: 'EcoSport',
    year: 2017,
    price: '58.900',
    km: 65000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Prata',
    doors: 4,
    category: 'SUV',
    featured: false,
    condition: 'Seminovo',
    images: [FordEcoSport], // CORRIGIDO
    description: 'Ford EcoSport 1.5 Titanium, SUV compacto com ótimo custo-benefício. Equipado com ar condicionado, direção elétrica, sistema multimídia e sensores de estacionamento. Perfeito para quem busca praticidade e espaço para a família.'
  },
  {
    id: 11,
    name: 'Chevrolet Tracker 1.4 Premier',
    brand: 'Chevrolet',
    model: 'Tracker',
    year: 2021,
    price: '98.900',
    km: 22000,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Branco',
    doors: 4,
    category: 'SUV',
    featured: false,
    condition: 'Seminovo',
    images: [ChevroletTracker], // CORRIGIDO
    description: 'Chevrolet Tracker 1.4 Premier, SUV topo de linha com baixa quilometragem. Motor turbo, câmbio automático, acabamento premium e diversos itens de segurança. Conta com teto solar, central multimídia e bancos em couro. Ideal para quem busca tecnologia e sofisticação.'
  },
  {
    id: 12,
    name: 'Volkswagen Polo 1.6 MSI',
    brand: 'Volkswagen',
    model: 'Polo',
    year: 2018,
    price: '62.900',
    km: 48000,
    fuel: 'Flex',
    transmission: 'Manual',
    color: 'Cinza',
    doors: 4,
    category: 'Hatch',
    featured: false,
    condition: 'Seminovo',
    images: [VolkswagenPolo], // CORRIGIDO
    description: 'Volkswagen Polo 1.6 MSI, hatch espaçoso e confortável. Motor forte, excelente dirigibilidade e acabamento de qualidade. Equipado com ar condicionado, direção elétrica, sistema de som e airbags. Ótima opção para quem busca segurança e desempenho.'
  }
    ,
    {
      id: 13,
      name: 'Honda Titan 160',
      brand: 'Honda',
      model: 'Titan 160',
      year: 2025,
      price: '18.900',
      km: 0,
      fuel: 'Gasolina',
      transmission: 'Manual',
      color: 'Laranja',
      doors: 0,
      category: 'Moto',
      featured: true,
      condition: 'Zero km',
      images: [Titan2025],
      description: 'Nova Honda Titan 160 2025, cor laranja exclusiva. Moto zero quilômetro, perfeita para o dia a dia, muito econômica e ágil. Design moderno, partida elétrica, painel digital e freios CBS. Ideal para quem busca praticidade e estilo.'
    },
    {
      id: 14,
      name: 'Honda CB 650R',
      brand: 'Honda',
      model: 'CB 650R',
      year: 2025,
      price: '52.900',
      km: 0,
      fuel: 'Gasolina',
      transmission: 'Manual',
      color: 'Laranja',
      doors: 0,
      category: 'Moto',
      featured: true,
      condition: 'Zero km',
      images: [CB650R],
      description: 'Honda CB 650R 2025, cor laranja. Moto naked esportiva, motor 4 cilindros, excelente desempenho e tecnologia. Freios ABS, painel digital, iluminação full LED. Ideal para quem busca emoção e estilo urbano.'
    },
    {
      id: 15,
      name: 'Yamaha Fazer 25',
      brand: 'Yamaha',
      model: 'Fazer 25',
      year: 2024,
      price: '21.500',
      km: 0,
      fuel: 'Gasolina',
      transmission: 'Manual',
      color: 'Azul',
      doors: 0,
      category: 'Moto',
      featured: true,
      condition: 'Zero km',
      images: [Fazer25],
      description: 'Yamaha Fazer 25 2024, cor azul. Moto robusta, ideal para cidade e estrada, motor potente e econômico. Painel digital, freios ABS, design moderno e confortável. Ótima opção para quem busca versatilidade.'
    },
    {
      id: 16,
      name: 'Yamaha MT-09',
      brand: 'Yamaha',
      model: 'MT-09',
      year: 2024,
      price: '59.900',
      km: 0,
      fuel: 'Gasolina',
      transmission: 'Manual',
      color: 'Preta',
      doors: 0,
      category: 'Moto',
      featured: true,
      condition: 'Zero km',
      images: [MT09],
      description: 'Yamaha MT-09 2024, cor preta. Moto esportiva de alta performance, motor 3 cilindros, tecnologia avançada, controle de tração, modos de pilotagem e visual agressivo. Perfeita para quem busca potência e adrenalina.'
    }
];

// Dados para os filtros (continua igual)
export const filterOptions = {
  brands: [...new Set(vehicles.map(v => v.brand))].sort(),
  categories: [...new Set(vehicles.map(v => v.category))].sort(),
  fuels: [...new Set(vehicles.map(v => v.fuel))].sort(),
  transmissions: [...new Set(vehicles.map(v => v.transmission))].sort(),
  colors: [...new Set(vehicles.map(v => v.color))].sort(),
  years: [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a),
  priceRanges: [
    { label: 'Até R$ 50.000', min: 0, max: 50000 },
    { label: 'R$ 50.000 - R$ 70.000', min: 50000, max: 70000 },
    { label: 'R$ 70.000 - R$ 90.000', min: 70000, max: 90000 },
    { label: 'Acima de R$ 90.000', min: 90000, max: Infinity }
  ],
  kmRanges: [
    { label: 'Até 30.000 km', min: 0, max: 30000 },
    { label: '30.000 - 50.000 km', min: 30000, max: 50000 },
    { label: '50.000 - 70.000 km', min: 50000, max: 70000 },
    { label: 'Acima de 70.000 km', min: 70000, max: Infinity }
  ]
};