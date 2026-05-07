// Hair-only product catalog. All prices in ARS.
// `characteristics` carries structured data shown in the ranking cards.

export const products = [
  {
    id: 'h01',
    name: 'Shampoo Reparación Total 5',
    brand: 'Elvive',
    subcategory: 'Champú',
    price: 6800,
    rating: 4.2,
    reviews: 8900,
    image: '🧴',
    color: '#fbbf24',
    description:
      'Champú con ceramidas y aminoácidos que repara cabello dañado por planchitas, tinturas y secadores. Devuelve fuerza y suavidad desde el primer lavado.',
    characteristics: {
      size: '680 ml',
      hairType: ['Dañado', 'Teñido'],
      benefits: ['Reparación', 'Suavidad'],
      keyIngredients: ['Ceramidas', 'Pro-keratina', 'Aminoácidos'],
      sulfateFree: false,
      vegan: false,
      origin: 'Francia / fab. Argentina'
    },
    pros: ['Aroma agradable', 'Económico', 'Fácil de conseguir'],
    cons: ['Contiene sulfatos', 'No apto para curly method']
  },
  {
    id: 'h02',
    name: 'Acondicionador Pantene Pro-V',
    brand: 'Pantene',
    subcategory: 'Acondicionador',
    price: 5900,
    rating: 4.1,
    reviews: 6700,
    image: '💆',
    color: '#fde68a',
    description:
      'Acondicionador clásico con Pro-Vitamina B5 (panthenol) que aporta brillo y suavidad desde la primera aplicación.',
    characteristics: {
      size: '750 ml',
      hairType: ['Normal', 'Mixto'],
      benefits: ['Brillo', 'Suavidad'],
      keyIngredients: ['Pro-Vitamina B5', 'Histidina'],
      sulfateFree: false,
      vegan: false,
      origin: 'EE.UU. / fab. Argentina'
    },
    pros: ['Económico', 'Tamaño grande', 'Disponible en todos lados'],
    cons: ['Aroma fuerte', 'Puede apelmazar finos']
  },
  {
    id: 'h03',
    name: 'Mascarilla Capilar N° 8 Bond Intense',
    brand: 'Olaplex',
    subcategory: 'Mascarilla',
    price: 32000,
    rating: 4.8,
    reviews: 2200,
    image: '🪮',
    color: '#fda4af',
    description:
      'Mascarilla concentrada que reconstruye los enlaces de disulfuro del cabello. Aporta brillo intenso e hidratación profunda en una sola aplicación.',
    characteristics: {
      size: '100 ml',
      hairType: ['Dañado', 'Teñido', 'Decolorado'],
      benefits: ['Reparación', 'Brillo', 'Hidratación'],
      keyIngredients: ['Bis-Aminopropyl Diglycol Dimaleate', 'Aceites'],
      sulfateFree: true,
      vegan: true,
      origin: 'EE.UU.'
    },
    pros: ['Resultados inmediatos', 'Aroma agradable', 'Vegano'],
    cons: ['Precio elevado', 'Rinde poco']
  },
  {
    id: 'h04',
    name: 'Aceite Capilar Argan Oil',
    brand: 'Moroccanoil',
    subcategory: 'Aceite',
    price: 48500,
    rating: 4.9,
    reviews: 3100,
    image: '✨',
    color: '#d97706',
    description:
      'Aceite tratamiento original con argán marroquí que controla el frizz, da brillo espejo y acelera el secado. Pocas gotas alcanzan.',
    characteristics: {
      size: '100 ml',
      hairType: ['Todos', 'Seco', 'Frizz'],
      benefits: ['Antifrizz', 'Brillo', 'Suavidad'],
      keyIngredients: ['Aceite de argán', 'Antioxidantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Israel'
    },
    pros: ['Aroma icónico', 'Rinde mucho', 'Resultado profesional'],
    cons: ['Precio alto', 'Falsificaciones frecuentes']
  },
  {
    id: 'h05',
    name: 'Shampoo Anticaspa Clear Men',
    brand: 'Clear',
    subcategory: 'Champú',
    price: 7500,
    rating: 4.3,
    reviews: 4200,
    image: '❄️',
    color: '#bae6fd',
    description:
      'Champú con piritionato de zinc que combate la caspa visible y la picazón desde la primera semana, manteniendo el cuero cabelludo sano.',
    characteristics: {
      size: '400 ml',
      hairType: ['Cuero cabelludo con caspa'],
      benefits: ['Anticaspa', 'Antipicazón'],
      keyIngredients: ['Pirition de zinc', 'Mentol'],
      sulfateFree: false,
      vegan: false,
      origin: 'Internacional'
    },
    pros: ['Eficaz para caspa', 'Sensación refrescante'],
    cons: ['Aroma muy mentolado', 'Puede resecar']
  },
  {
    id: 'h06',
    name: 'Sérum Reconstrucción Absolut Repair',
    brand: 'Kérastase',
    subcategory: 'Sérum',
    price: 56000,
    rating: 4.8,
    reviews: 1450,
    image: '💧',
    color: '#fbbf24',
    description:
      'Sérum sin enjuague con ácido cítrico y proteínas que sella las cutículas dañadas, controla puntas y deja el cabello visiblemente más fuerte.',
    characteristics: {
      size: '50 ml',
      hairType: ['Dañado', 'Teñido', 'Quebradizo'],
      benefits: ['Reparación', 'Sellado de puntas'],
      keyIngredients: ['Ácido cítrico', 'Proteínas hidrolizadas'],
      sulfateFree: true,
      vegan: false,
      origin: 'Francia'
    },
    pros: ['Resultados visibles en una semana', 'No engrasa'],
    cons: ['Caro', 'Frasco pequeño']
  },
  {
    id: 'h07',
    name: 'Mascarilla Hidratación Extrema',
    brand: 'Tresemmé',
    subcategory: 'Mascarilla',
    price: 8400,
    rating: 4.4,
    reviews: 5600,
    image: '🧖',
    color: '#a7f3d0',
    description:
      'Mascarilla de uso semanal con manteca de coco que repone hidratación profunda en cabellos resecos por sol o decoloración.',
    characteristics: {
      size: '300 ml',
      hairType: ['Seco', 'Deshidratado'],
      benefits: ['Hidratación', 'Suavidad'],
      keyIngredients: ['Manteca de coco', 'Vitamina E'],
      sulfateFree: false,
      vegan: false,
      origin: 'EE.UU. / fab. Argentina'
    },
    pros: ['Excelente relación precio/calidad', 'Tamaño generoso'],
    cons: ['Aroma dulce intenso']
  },
  {
    id: 'h08',
    name: 'Protector Térmico Heat Defence',
    brand: 'TRESemmé',
    subcategory: 'Protector térmico',
    price: 9800,
    rating: 4.5,
    reviews: 3200,
    image: '🔥',
    color: '#f97316',
    description:
      'Spray sin enjuague que protege hasta 230°C contra el daño de planchitas y secadores. Aporta brillo y reduce el frizz post-styling.',
    characteristics: {
      size: '300 ml',
      hairType: ['Todos'],
      benefits: ['Protección térmica', 'Antifrizz'],
      keyIngredients: ['Polímero termoprotector', 'Vitamina E'],
      sulfateFree: true,
      vegan: false,
      origin: 'EE.UU.'
    },
    pros: ['Efectivo a alta temperatura', 'No apelmaza'],
    cons: ['Olor químico inicial']
  },
  {
    id: 'h09',
    name: 'Shampoo Color Vibrancy',
    brand: 'Redken',
    subcategory: 'Champú',
    price: 38900,
    rating: 4.7,
    reviews: 980,
    image: '🎨',
    color: '#e8638a',
    description:
      'Champú profesional con tecnología que protege el color por hasta 60 días sin sulfatos agresivos. Ideal para cabellos teñidos.',
    characteristics: {
      size: '300 ml',
      hairType: ['Teñido', 'Coloreado'],
      benefits: ['Protección color', 'Brillo'],
      keyIngredients: ['Aminoácidos', 'Filtros UV'],
      sulfateFree: true,
      vegan: false,
      origin: 'EE.UU.'
    },
    pros: ['Mantiene el color brillante', 'No reseca'],
    cons: ['Precio elevado', 'Hay que combinar con acondicionador match']
  },
  {
    id: 'h10',
    name: 'Mousse Volumen Curls',
    brand: 'Garnier Fructis',
    subcategory: 'Styling',
    price: 5400,
    rating: 4.2,
    reviews: 2100,
    image: '🌀',
    color: '#fef3c7',
    description:
      'Mousse para definir rulos sin apelmazar. Activa el rizo con efecto memoria y sin resecar.',
    characteristics: {
      size: '200 ml',
      hairType: ['Rizado', 'Ondulado'],
      benefits: ['Definición', 'Volumen'],
      keyIngredients: ['Vitamina B6', 'Glicerina'],
      sulfateFree: true,
      vegan: false,
      origin: 'Francia'
    },
    pros: ['Económico', 'No deja efecto cartón'],
    cons: ['Duración media', 'Puede dejar residuo si se aplica de más']
  },
  {
    id: 'h11',
    name: 'Tratamiento Antiquiebre Plex No.3',
    brand: 'Olaplex',
    subcategory: 'Tratamiento',
    price: 36500,
    rating: 4.9,
    reviews: 4800,
    image: '⚗️',
    color: '#fda4af',
    description:
      'Tratamiento previo al lavado que reduce el quiebre del cabello hasta un 68% en una sola aplicación. Repara desde el interior.',
    characteristics: {
      size: '100 ml',
      hairType: ['Dañado', 'Decolorado', 'Quebradizo'],
      benefits: ['Reparación profunda', 'Antiquiebre'],
      keyIngredients: ['Bis-Aminopropyl Diglycol Dimaleate'],
      sulfateFree: true,
      vegan: true,
      origin: 'EE.UU.'
    },
    pros: ['Resultados clínicamente probados', 'Vegano'],
    cons: ['Caro', 'Requiere uso semanal sostenido']
  },
  {
    id: 'h12',
    name: 'Gel Fijación Extra Fuerte',
    brand: 'Wella',
    subcategory: 'Styling',
    price: 4900,
    rating: 4.0,
    reviews: 1700,
    image: '💎',
    color: '#a5b4fc',
    description:
      'Gel transparente de fijación nivel 5 que mantiene el peinado por horas sin dejar residuos blancos.',
    characteristics: {
      size: '250 ml',
      hairType: ['Todos'],
      benefits: ['Fijación', 'Definición'],
      keyIngredients: ['PVP', 'Provitamina B5'],
      sulfateFree: true,
      vegan: false,
      origin: 'Alemania'
    },
    pros: ['Fijación realmente firme', 'No deja blanco'],
    cons: ['Endurece el cabello', 'Aroma sintético']
  },
  {
    id: 'h13',
    name: 'Shampoo Sólido Hidratante',
    brand: 'Lush',
    subcategory: 'Champú',
    price: 18500,
    rating: 4.6,
    reviews: 920,
    image: '🪨',
    color: '#fcd5ce',
    description:
      'Shampoo en barra sin envase plástico, equivale a 3 botellas. Limpia con tensoactivos suaves y deja el cabello hidratado.',
    characteristics: {
      size: '55 g (≈80 lavados)',
      hairType: ['Normal', 'Seco'],
      benefits: ['Hidratación', 'Eco-friendly'],
      keyIngredients: ['Manteca de cacao', 'Aceite de oliva'],
      sulfateFree: true,
      vegan: true,
      origin: 'Reino Unido'
    },
    pros: ['Sin plástico', 'Vegano y cruelty-free', 'Dura mucho'],
    cons: ['Curva de adaptación', 'Necesita jabonera de drenaje']
  },
  {
    id: 'h14',
    name: 'Acondicionador Hidra-Liso',
    brand: 'Sedal',
    subcategory: 'Acondicionador',
    price: 5200,
    rating: 4.0,
    reviews: 7800,
    image: '🌿',
    color: '#bbf7d0',
    description:
      'Acondicionador con ceramidas y queratina que reduce el frizz y deja el cabello manejable y suave.',
    characteristics: {
      size: '650 ml',
      hairType: ['Normal', 'Mixto', 'Frizz'],
      benefits: ['Antifrizz', 'Suavidad'],
      keyIngredients: ['Ceramidas', 'Queratina'],
      sulfateFree: false,
      vegan: false,
      origin: 'fab. Argentina'
    },
    pros: ['Muy económico', 'Buen rinde'],
    cons: ['Aroma fuerte', 'No apto curly method']
  },
  {
    id: 'h15',
    name: 'Tinte Coloración Permanente Casting Crème Gloss',
    brand: "L'Oréal Paris",
    subcategory: 'Coloración',
    price: 11900,
    rating: 4.5,
    reviews: 3400,
    image: '🎨',
    color: '#92400e',
    description:
      'Tintura sin amoníaco con jalea real que da color brillante y cobertura de canas, dejando el cabello más suave.',
    characteristics: {
      size: '1 aplicación',
      hairType: ['Todos'],
      benefits: ['Coloración', 'Brillo', 'Cobertura canas'],
      keyIngredients: ['Jalea real', 'Sin amoníaco'],
      sulfateFree: false,
      vegan: false,
      origin: 'Francia'
    },
    pros: ['Sin amoníaco', 'Gran variedad de tonos', 'Económico vs salón'],
    cons: ['Duración 6-8 semanas', 'Puede manchar piel']
  },
  {
    id: 'h16',
    name: 'Crema Peinar Curly Definition',
    brand: 'Cantu',
    subcategory: 'Styling',
    price: 12500,
    rating: 4.7,
    reviews: 5100,
    image: '🌊',
    color: '#fef9c3',
    description:
      'Crema sin enjuague para definir rizos con manteca de karité. Hidrata, reduce el frizz y define el patrón natural del rizo.',
    characteristics: {
      size: '340 g',
      hairType: ['Rizado', 'Crespo', 'Afro'],
      benefits: ['Definición rizos', 'Hidratación', 'Antifrizz'],
      keyIngredients: ['Manteca de karité', 'Aceite de coco'],
      sulfateFree: true,
      vegan: false,
      origin: 'EE.UU.'
    },
    pros: ['Excelente para curly method', 'Aroma rico'],
    cons: ['Pesada para cabellos finos']
  },
  {
    id: 'h17',
    name: 'Spray Tonificante Brillo',
    brand: 'John Frieda',
    subcategory: 'Tratamiento',
    price: 14800,
    rating: 4.4,
    reviews: 1280,
    image: '💫',
    color: '#fef3c7',
    description:
      'Spray sin enjuague con extractos vegetales que tonifica el rubio y elimina amarillamiento. Aporta brillo entre coloraciones.',
    characteristics: {
      size: '200 ml',
      hairType: ['Rubio', 'Decolorado', 'Canas'],
      benefits: ['Matiza amarillo', 'Brillo'],
      keyIngredients: ['Pigmento violeta', 'Extracto de manzanilla'],
      sulfateFree: true,
      vegan: false,
      origin: 'Reino Unido'
    },
    pros: ['Resultado inmediato', 'Fácil aplicación'],
    cons: ['Puede teñir manos sin guantes']
  },
  {
    id: 'h18',
    name: 'Shampoo Volumen Fino',
    brand: 'Schwarzkopf BC',
    subcategory: 'Champú',
    price: 29900,
    rating: 4.6,
    reviews: 760,
    image: '🪶',
    color: '#fef3c7',
    description:
      'Champú profesional sin sulfatos para cabellos finos. Aporta cuerpo y volumen desde la raíz sin apelmazar.',
    characteristics: {
      size: '250 ml',
      hairType: ['Fino', 'Normal'],
      benefits: ['Volumen', 'Cuerpo'],
      keyIngredients: ['Caféina', 'Aminoácidos'],
      sulfateFree: true,
      vegan: false,
      origin: 'Alemania'
    },
    pros: ['Volumen real', 'Sin sulfatos'],
    cons: ['Caro', 'Frasco pequeño']
  },
  {
    id: 'h19',
    name: 'Aceite Crecimiento Romero',
    brand: 'Mielle Organics',
    subcategory: 'Aceite',
    price: 17400,
    rating: 4.6,
    reviews: 12400,
    image: '🌱',
    color: '#86efac',
    description:
      'Aceite tratamiento con romero, biotina y aceites esenciales que estimula el cuero cabelludo y favorece el crecimiento.',
    characteristics: {
      size: '60 ml',
      hairType: ['Todos', 'Caída', 'Crecimiento lento'],
      benefits: ['Crecimiento', 'Fortalecimiento', 'Cuero cabelludo'],
      keyIngredients: ['Aceite de romero', 'Biotina', 'Té verde'],
      sulfateFree: true,
      vegan: true,
      origin: 'EE.UU.'
    },
    pros: ['Tendencia probada', 'Vegano', 'Aroma fresco'],
    cons: ['Aceitoso al inicio', 'Resultados a partir de 8 semanas']
  },
  {
    id: 'h20',
    name: 'Mascarilla Reconstrucción Issue',
    brand: 'Issue',
    subcategory: 'Mascarilla',
    price: 6900,
    rating: 4.1,
    reviews: 4900,
    image: '💛',
    color: '#fde047',
    description:
      'Mascarilla con aceite de argán y queratina, ideal como tratamiento intensivo semanal a precio accesible.',
    characteristics: {
      size: '350 ml',
      hairType: ['Dañado', 'Seco'],
      benefits: ['Reparación', 'Hidratación'],
      keyIngredients: ['Aceite de argán', 'Queratina'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Marca local', 'Excelente precio', 'Tamaño grande'],
    cons: ['Aroma muy dulce']
  },
  {
    id: 'h21',
    name: 'Spray Texturizante Sea Salt',
    brand: 'Bumble and bumble',
    subcategory: 'Styling',
    price: 42000,
    rating: 4.5,
    reviews: 690,
    image: '🌊',
    color: '#cffafe',
    description:
      'Spray con sales marinas que da textura y efecto playa al instante, con cuerpo natural y sin pegajosidad.',
    characteristics: {
      size: '125 ml',
      hairType: ['Normal', 'Liso'],
      benefits: ['Textura', 'Cuerpo'],
      keyIngredients: ['Sal marina', 'Algas'],
      sulfateFree: true,
      vegan: false,
      origin: 'EE.UU.'
    },
    pros: ['Efecto natural inmediato', 'Aroma marino agradable'],
    cons: ['Reseca con uso diario', 'Caro']
  },
  {
    id: 'h22',
    name: 'Acondicionador Sin Enjuague 10-en-1',
    brand: 'It\'s a 10',
    subcategory: 'Acondicionador',
    price: 28900,
    rating: 4.7,
    reviews: 5300,
    image: '🔟',
    color: '#fbcfe8',
    description:
      'Spray multibeneficio que repara, suaviza, da brillo, controla frizz, protege del calor y desenreda. Sin enjuague.',
    characteristics: {
      size: '295 ml',
      hairType: ['Todos'],
      benefits: ['Reparación', 'Antifrizz', 'Protección térmica', 'Desenredo'],
      keyIngredients: ['Proteínas', 'Vitaminas', 'Filtros UV'],
      sulfateFree: true,
      vegan: false,
      origin: 'EE.UU.'
    },
    pros: ['Multifunción', 'Buen rinde'],
    cons: ['Precio elevado', 'Aroma dulce']
  },
  {
    id: 'h23',
    name: 'Shampoo Purificante Detox',
    brand: 'Davines',
    subcategory: 'Champú',
    price: 34500,
    rating: 4.6,
    reviews: 540,
    image: '🌿',
    color: '#a7f3d0',
    description:
      'Champú clarificante con arcilla blanca que elimina residuos de productos de styling y agua dura sin resecar.',
    characteristics: {
      size: '250 ml',
      hairType: ['Normal', 'Graso'],
      benefits: ['Limpieza profunda', 'Detox'],
      keyIngredients: ['Arcilla blanca', 'Té verde'],
      sulfateFree: false,
      vegan: true,
      origin: 'Italia'
    },
    pros: ['Sensación de cabello limpio', 'Vegano', 'Diseño bonito'],
    cons: ['Uso ocasional, no diario', 'Caro']
  },
  {
    id: 'h24',
    name: 'Tratamiento Botox Capilar',
    brand: 'Felps',
    subcategory: 'Tratamiento',
    price: 31000,
    rating: 4.5,
    reviews: 1100,
    image: '🧪',
    color: '#fecaca',
    description:
      'Reconstructor con ácido hialurónico y colágeno que rellena fibras dañadas, da brillo intenso y reduce volumen sin formaldehído.',
    characteristics: {
      size: '300 ml',
      hairType: ['Dañado', 'Volumen excesivo', 'Frizz'],
      benefits: ['Reconstrucción', 'Reducción volumen', 'Brillo'],
      keyIngredients: ['Ácido hialurónico', 'Colágeno', 'Argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Brasil'
    },
    pros: ['Sin formol', 'Resultados muy visibles'],
    cons: ['Aplicación con tiempo de pose largo']
  },
  {
    id: 'h25',
    name: 'Shampoo Bebé Suave',
    brand: 'Johnson\'s',
    subcategory: 'Champú',
    price: 4200,
    rating: 4.6,
    reviews: 9100,
    image: '🍼',
    color: '#fef3c7',
    description:
      'Fórmula clásica sin lágrimas, suave para uso diario. También usado por adultos para cuero cabelludo sensible.',
    characteristics: {
      size: '400 ml',
      hairType: ['Sensible', 'Normal'],
      benefits: ['Suavidad', 'Sin irritación'],
      keyIngredients: ['Tensioactivos suaves'],
      sulfateFree: false,
      vegan: false,
      origin: 'Internacional'
    },
    pros: ['Económico', 'No irrita ojos', 'Apto piel sensible'],
    cons: ['Limpieza ligera', 'Aroma muy clásico']
  },
  {
    id: 'h26',
    name: 'Mascarilla Pigmentante Plata',
    brand: 'Fanola No Yellow',
    subcategory: 'Mascarilla',
    price: 19500,
    rating: 4.7,
    reviews: 2700,
    image: '🥈',
    color: '#a78bfa',
    description:
      'Mascarilla con pigmento violeta de alta concentración que neutraliza tonos amarillos en rubios y canas. Hidratante.',
    characteristics: {
      size: '200 ml',
      hairType: ['Rubio', 'Canas', 'Decolorado'],
      benefits: ['Matiza amarillo', 'Hidratación'],
      keyIngredients: ['Pigmento violeta', 'Aceite de macadamia'],
      sulfateFree: true,
      vegan: false,
      origin: 'Italia'
    },
    pros: ['Pigmento muy potente', 'Buen precio para profesional'],
    cons: ['Puede teñir piel y bañera', 'Hay que controlar tiempo']
  },
  {
    id: 'h27',
    name: 'Spray Fijador Elnett Satin',
    brand: "L'Oréal Paris",
    subcategory: 'Styling',
    price: 9500,
    rating: 4.7,
    reviews: 8200,
    image: '🌬️',
    color: '#fcd5ce',
    description:
      'Laca clásica de fijación fuerte que se cepilla sin dejar residuo. Aporta brillo y resiste humedad.',
    characteristics: {
      size: '400 ml',
      hairType: ['Todos'],
      benefits: ['Fijación', 'Brillo', 'Resiste humedad'],
      keyIngredients: ['Polímeros de fijación'],
      sulfateFree: true,
      vegan: false,
      origin: 'Francia'
    },
    pros: ['Icónico', 'No deja efecto cartón', 'Cepillable'],
    cons: ['Aroma fuerte', 'Aerosol']
  },
  {
    id: 'h28',
    name: 'Acondicionador Vegano Nutrición',
    brand: 'Natura Ekos',
    subcategory: 'Acondicionador',
    price: 13900,
    rating: 4.4,
    reviews: 1850,
    image: '🌳',
    color: '#bbf7d0',
    description:
      'Acondicionador 100% vegano con murumuru de la Amazonia. Hidrata profundamente sin siliconas pesadas.',
    characteristics: {
      size: '300 ml',
      hairType: ['Seco', 'Rizado', 'Normal'],
      benefits: ['Hidratación', 'Suavidad'],
      keyIngredients: ['Manteca de murumuru', 'Aceite de pasiflora'],
      sulfateFree: true,
      vegan: true,
      origin: 'Brasil'
    },
    pros: ['Vegano', 'Aroma natural', 'Apto curly method'],
    cons: ['Hay que aplicar cantidad generosa']
  }
]

export const subcategories = [...new Set(products.map(p => p.subcategory))]
