// Hair-only catalog: Fidelité (https://www.fidelite.com.ar) + Opción (https://www.opcionsalon.com.ar)
// Images and descriptions are sourced from each brand's official site.
// Prices are realistic Argentine market estimates (PVP orientativo) — neither brand publishes
// public pricing on their site.

export const products = [
  // ---------------- FIDELITÉ — LÍNEA ARGÁN ----------------
  {
    id: 'fa01',
    name: 'Shampoo Argán 260 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Champú',
    price: 9500,
    rating: 4.5,
    reviews: 1840,
    imageUrl: 'https://fidelite.com.ar/img/productos/24/06-arganshampoocajaproducto_4_4.jpg',
    image: '🧴',
    color: '#fde68a',
    description:
      'Champú de la línea Argán de Fidelité. Revitaliza y embellece el cabello aportando hidratación y brillo gracias al aceite de argán.',
    characteristics: {
      size: '260 ml',
      hairType: ['Seco', 'Normal'],
      benefits: ['Hidratación', 'Brillo'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Aroma agradable', 'Buen rinde', 'Hidratante'],
    cons: ['No apto curly method']
  },
  {
    id: 'fa02',
    name: 'Acondicionador Argán 260 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Acondicionador',
    price: 9000,
    rating: 4.4,
    reviews: 1620,
    imageUrl: 'https://fidelite.com.ar/img/productos/25/06-arganacondicionador_2_2.jpg',
    image: '💆',
    color: '#fde68a',
    description:
      'Acondicionador con aceite de argán que desenreda, suaviza y realza el brillo natural del cabello.',
    characteristics: {
      size: '260 ml',
      hairType: ['Seco', 'Normal'],
      benefits: ['Desenredo', 'Brillo', 'Suavidad'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Desenreda muy bien', 'Aroma duradero'],
    cons: ['Apelmaza cabellos finos']
  },
  {
    id: 'fa03',
    name: 'Máscara Argán 250 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Mascarilla',
    price: 13500,
    rating: 4.6,
    reviews: 2120,
    imageUrl: 'https://fidelite.com.ar/img/productos/35/06-arganmascaracajaproducto_2.jpg',
    image: '🪮',
    color: '#fde68a',
    description:
      'Mascarilla intensiva con aceite de argán. Fortalece y nutre profundamente la fibra capilar.',
    characteristics: {
      size: '250 ml',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Reparación', 'Nutrición'],
      keyIngredients: ['Aceite de argán', 'Aminoácidos'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultados visibles desde la 1ra aplicación', 'Aroma rico'],
    cons: ['Pesada para cabellos finos']
  },
  {
    id: 'fa04',
    name: 'Crema de Peinado Argán 250 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Crema de peinar',
    price: 10500,
    rating: 4.4,
    reviews: 1380,
    imageUrl: 'https://fidelite.com.ar/img/productos/36/crema-de-peinado-argan_2.jpg',
    image: '🌿',
    color: '#fde68a',
    description:
      'Crema sin enjuague que modela cabellos secos y maltratados, dejándolos suaves y manejables.',
    characteristics: {
      size: '250 ml',
      hairType: ['Seco', 'Maltratado'],
      benefits: ['Modelado', 'Suavidad', 'Antifrizz'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['No apelmaza', 'Buena fijación natural'],
    cons: ['Aroma intenso']
  },
  {
    id: 'fa05',
    name: 'Elixir Multifunción Argán 120 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Aceite',
    price: 18500,
    rating: 4.7,
    reviews: 1940,
    imageUrl: 'https://fidelite.com.ar/img/productos/134/whatsapp-image-2020-12-23-at-160159-1.jpg',
    image: '✨',
    color: '#d97706',
    description:
      'Elixir oil multifunción con aceite de argán que aporta hidratación y brillo extremo. Pocas gotas alcanzan.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos', 'Frizz', 'Seco'],
      benefits: ['Brillo', 'Antifrizz', 'Hidratación'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Rinde mucho', 'Brillo inmediato'],
    cons: ['Precio medio-alto']
  },
  {
    id: 'fa06',
    name: 'Protector Térmico Argán 120 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Protector térmico',
    price: 12000,
    rating: 4.4,
    reviews: 980,
    imageUrl: 'https://fidelite.com.ar/img/productos/205/protector-termico-argan.jpg',
    image: '🔥',
    color: '#f97316',
    description:
      'Protector térmico con argán que escuda al cabello frente al daño de planchitas y secadores.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos'],
      benefits: ['Protección térmica', 'Brillo'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['No apelmaza', 'Aroma agradable'],
    cons: ['Spray un poco fuerte']
  },
  {
    id: 'fa07',
    name: 'Tratamiento Restaurador Argán 12u x 15 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Ampollas',
    price: 11500,
    rating: 4.5,
    reviews: 720,
    imageUrl: 'https://fidelite.com.ar/img/productos/37/ampollaargan-caja_2_2.jpg',
    image: '⚗️',
    color: '#d97706',
    description:
      'Caja de 12 ampollas restauradoras con aceite de argán. Hidratación profunda y brillo desde la primera aplicación.',
    characteristics: {
      size: '12 u. x 15 ml',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Reparación', 'Hidratación profunda'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Tratamiento intensivo', 'Render rápido'],
    cons: ['Hay que respetar tiempo de pose']
  },

  // ---------------- FIDELITÉ — LÍNEA CAVIAR ----------------
  {
    id: 'fc01',
    name: 'Shampoo Caviar Normales 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Champú',
    price: 10500,
    rating: 4.5,
    reviews: 1240,
    imageUrl: 'https://fidelite.com.ar/img/productos/21/260shampoonormalesproductocaja_2_2.jpg',
    image: '🧴',
    color: '#fde2e9',
    description:
      'Champú línea Caviar para cabellos sanos. Cuida y mantiene la naturaleza del cabello con extracto de caviar.',
    characteristics: {
      size: '260 ml',
      hairType: ['Normal'],
      benefits: ['Cuidado diario', 'Brillo'],
      keyIngredients: ['Extracto de caviar'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Suave', 'Aroma sofisticado'],
    cons: ['Precio medio']
  },
  {
    id: 'fc02',
    name: 'Shampoo Caviar Secos y Castigados 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Champú',
    price: 10500,
    rating: 4.6,
    reviews: 1480,
    imageUrl: 'https://fidelite.com.ar/img/productos/20/260shampoosecoscastigadosproductocaja_2.jpg',
    image: '🧴',
    color: '#fde2e9',
    description:
      'Champú reparador con extracto de caviar para cabellos secos y maltratados. Repara e hidrata la fibra.',
    characteristics: {
      size: '260 ml',
      hairType: ['Seco', 'Castigado'],
      benefits: ['Reparación', 'Hidratación'],
      keyIngredients: ['Extracto de caviar', 'Aminoácidos'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Repara desde el primer uso', 'Buen aroma'],
    cons: ['Precio elevado para uso diario']
  },
  {
    id: 'fc03',
    name: 'Shampoo Caviar Teñidos 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Champú',
    price: 10500,
    rating: 4.5,
    reviews: 1360,
    imageUrl: 'https://fidelite.com.ar/img/productos/22/260shampootenidosproductocaja_2.jpg',
    image: '🧴',
    color: '#fde2e9',
    description:
      'Champú para cabellos teñidos: protege y prolonga la duración del color con extracto de caviar.',
    characteristics: {
      size: '260 ml',
      hairType: ['Teñido', 'Coloreado'],
      benefits: ['Protección color', 'Brillo'],
      keyIngredients: ['Extracto de caviar', 'Filtros UV'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Conserva el color', 'Suave'],
    cons: ['Precio medio-alto']
  },
  {
    id: 'fc04',
    name: 'Acondicionador Caviar Teñidos 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Acondicionador',
    price: 10000,
    rating: 4.5,
    reviews: 1100,
    imageUrl: 'https://fidelite.com.ar/img/productos/15/260acondicionadortenidosproductocaja_2.jpg',
    image: '💆',
    color: '#fde2e9',
    description:
      'Acondicionador específico para cabellos teñidos. Preserva la duración del color y devuelve suavidad.',
    characteristics: {
      size: '260 ml',
      hairType: ['Teñido'],
      benefits: ['Protección color', 'Suavidad'],
      keyIngredients: ['Extracto de caviar'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Cuida el color', 'Desenreda'],
    cons: ['Aroma intenso']
  },
  {
    id: 'fc05',
    name: 'Máscara Caviar Hidro-Nutritiva 250 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Mascarilla',
    price: 14500,
    rating: 4.7,
    reviews: 2080,
    imageUrl: 'https://fidelite.com.ar/img/productos/42/02-caviar-mascara-250ml-productocaja_2.jpg',
    image: '🪮',
    color: '#fda4af',
    description:
      'Mascarilla hidro-nutritiva con extracto de caviar. Suavidad y reparación intensiva en una sola aplicación.',
    characteristics: {
      size: '250 ml',
      hairType: ['Seco', 'Castigado', 'Teñido'],
      benefits: ['Hidratación', 'Reparación', 'Suavidad'],
      keyIngredients: ['Extracto de caviar', 'Aminoácidos'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultados pro', 'Aroma sofisticado'],
    cons: ['Precio elevado']
  },
  {
    id: 'fc06',
    name: 'Serum Reparador de Puntas Caviar 30 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Sérum',
    price: 11500,
    rating: 4.6,
    reviews: 940,
    imageUrl: 'https://fidelite.com.ar/img/productos/137/serum-caviar-web_2.jpg',
    image: '💧',
    color: '#fda4af',
    description:
      'Sérum sin enjuague que repara las puntas dañadas y sella las cutículas con extracto de caviar.',
    characteristics: {
      size: '30 ml',
      hairType: ['Puntas dañadas'],
      benefits: ['Sellado de puntas', 'Brillo'],
      keyIngredients: ['Extracto de caviar', 'Siliconas tratantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Súper concentrado', 'Pocas gotas alcanzan'],
    cons: ['Frasco pequeño']
  },
  {
    id: 'fc07',
    name: 'Acondicionador Caviar Plex Home Ritual N° 3',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Acondicionador',
    price: 12000,
    rating: 4.6,
    reviews: 760,
    imageUrl: 'https://fidelite.com.ar/img/productos/144/plex03homeritual_2.jpg',
    image: '💆',
    color: '#fda4af',
    description:
      'Acondicionador Plex Home Ritual paso N° 3, protege el cabello y lo mantiene suave y brillante post-coloración.',
    characteristics: {
      size: '260 ml',
      hairType: ['Teñido', 'Decolorado', 'Dañado'],
      benefits: ['Reparación', 'Protección color'],
      keyIngredients: ['Tecnología Plex'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Alternativa local a Olaplex N°5', 'Buen rinde'],
    cons: ['Hay que combinar con shampoo de la misma línea']
  },
  {
    id: 'fc08',
    name: 'Complejo Caviar Hidro-Nutritivo 12u x 15 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Ampollas',
    price: 12500,
    rating: 4.6,
    reviews: 580,
    imageUrl: 'https://fidelite.com.ar/img/productos/43/04-ampollacaviarcajaampollas-ref_2_2.jpg',
    image: '⚗️',
    color: '#fda4af',
    description:
      'Caja de 12 ampollas hidro-nutritivas con extracto de caviar. Reestructura el cabello al instante.',
    characteristics: {
      size: '12 u. x 15 ml',
      hairType: ['Castigado', 'Sin brillo'],
      benefits: ['Reestructuración', 'Brillo'],
      keyIngredients: ['Extracto de caviar', 'Proteínas'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultados express', 'Cómodas para llevar'],
    cons: ['Uso semanal recomendado']
  },

  // ---------------- FIDELITÉ — KILL FRIZZ ----------------
  {
    id: 'fk01',
    name: 'Shampoo Kill Frizz 230 ml',
    brand: 'Fidelité',
    line: 'Kill Frizz',
    subcategory: 'Champú',
    price: 10500,
    rating: 4.5,
    reviews: 1640,
    imageUrl: 'https://fidelite.com.ar/img/productos/189/fidelite-killfrizz_03shampoo230-productosweb_2.jpg',
    image: '🧴',
    color: '#a7f3d0',
    description:
      'Champú anti-frizz que hidrata el cuero cabelludo, repara las cutículas dañadas y disciplina el cabello.',
    characteristics: {
      size: '230 ml',
      hairType: ['Frizz', 'Rebelde'],
      benefits: ['Antifrizz', 'Hidratación', 'Reparación'],
      keyIngredients: ['Activos disciplinantes'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Domina el frizz', 'Aroma duradero'],
    cons: ['Precio medio']
  },
  {
    id: 'fk02',
    name: 'Máscara Kill Frizz 250 ml',
    brand: 'Fidelité',
    line: 'Kill Frizz',
    subcategory: 'Mascarilla',
    price: 13800,
    rating: 4.6,
    reviews: 1320,
    imageUrl: 'https://fidelite.com.ar/img/productos/191/fidelite-killfrizz_05mascara230-productosweb_2.jpg',
    image: '🪮',
    color: '#a7f3d0',
    description:
      'Mascarilla anti-frizz que aporta nutrición y luminosidad mientras controla cabellos rebeldes.',
    characteristics: {
      size: '250 ml',
      hairType: ['Frizz', 'Rebelde', 'Crespo'],
      benefits: ['Antifrizz', 'Nutrición', 'Brillo'],
      keyIngredients: ['Aceites disciplinantes'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Disciplina mucho', 'Hidratación profunda'],
    cons: ['Pesada para cabello fino']
  },
  {
    id: 'fk03',
    name: 'Loción Kill Frizz 120 ml',
    brand: 'Fidelité',
    line: 'Kill Frizz',
    subcategory: 'Tratamiento',
    price: 11500,
    rating: 4.5,
    reviews: 880,
    imageUrl: 'https://fidelite.com.ar/img/productos/193/fidelite-killfrizz_06locion-productosweb_2.jpg',
    image: '💧',
    color: '#a7f3d0',
    description:
      'Loción sin enjuague que combate el frizz dejando el cabello suave y fácil de peinar.',
    characteristics: {
      size: '120 ml',
      hairType: ['Frizz', 'Rebelde'],
      benefits: ['Antifrizz', 'Suavidad'],
      keyIngredients: ['Polímeros disciplinantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultado inmediato', 'Buen rinde'],
    cons: ['Aroma fuerte']
  },

  // ---------------- FIDELITÉ — FREE (sin sulfatos / parabenos) ----------------
  {
    id: 'ff01',
    name: 'Shampoo Free 230 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Champú',
    price: 12500,
    rating: 4.6,
    reviews: 1080,
    imageUrl: 'https://fidelite.com.ar/img/productos/198/fidelite_shampoo230_free.jpg',
    image: '🌿',
    color: '#bbf7d0',
    description:
      'Champú clean beauty libre de sulfatos, parabenos, siliconas, sal y colorantes. Limpia en profundidad de forma suave.',
    characteristics: {
      size: '230 ml',
      hairType: ['Sensible', 'Teñido', 'Curly'],
      benefits: ['Limpieza suave', 'Apto curly method'],
      keyIngredients: ['Tensoactivos suaves'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Sin sulfatos', 'Apto curly method', 'Cuidado del color'],
    cons: ['Espuma media']
  },
  {
    id: 'ff02',
    name: 'Acondicionador Free 230 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Acondicionador',
    price: 12000,
    rating: 4.5,
    reviews: 920,
    imageUrl: 'https://fidelite.com.ar/img/productos/200/fidelite_conditioner230_free.jpg',
    image: '💆',
    color: '#bbf7d0',
    description:
      'Acondicionador clean beauty libre de parabenos, siliconas, sal y colorantes. Acondicionamiento ligero.',
    characteristics: {
      size: '230 ml',
      hairType: ['Sensible', 'Teñido', 'Curly'],
      benefits: ['Suavidad', 'Apto curly method'],
      keyIngredients: ['Activos vegetales'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Sin siliconas', 'No apelmaza'],
    cons: ['Hay que aplicar cantidad generosa']
  },
  {
    id: 'ff03',
    name: 'Máscara Capilar Free 250 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Mascarilla',
    price: 14500,
    rating: 4.6,
    reviews: 760,
    imageUrl: 'https://fidelite.com.ar/img/productos/202/fidelite_mascara250_free.jpg',
    image: '🪮',
    color: '#bbf7d0',
    description:
      'Mascarilla restauradora libre de parabenos, siliconas, sal y colorantes. Restaura cabellos dañados sin cargar.',
    characteristics: {
      size: '250 ml',
      hairType: ['Dañado', 'Sensible', 'Curly'],
      benefits: ['Reparación', 'Hidratación'],
      keyIngredients: ['Aceites vegetales'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Sin parabenos ni siliconas', 'Apto curly'],
    cons: ['Resultados graduales']
  },
  {
    id: 'ff04',
    name: 'Crema de Peinar Free 230 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Crema de peinar',
    price: 11500,
    rating: 4.5,
    reviews: 640,
    imageUrl: 'https://fidelite.com.ar/img/productos/204/fidelite_crema_peinar230_free.jpg',
    image: '🌿',
    color: '#bbf7d0',
    description:
      'Crema de peinar sin enjuague que controla el frizz. Libre de parabenos, siliconas, sal y colorantes.',
    characteristics: {
      size: '230 ml',
      hairType: ['Frizz', 'Curly', 'Sensible'],
      benefits: ['Antifrizz', 'Definición', 'Apto curly'],
      keyIngredients: ['Polímeros vegetales'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Apto curly method', 'No deja efecto cartón'],
    cons: ['Fijación natural, no fuerte']
  },

  // ---------------- FIDELITÉ — KERATINA ----------------
  {
    id: 'fke01',
    name: 'Shampoo Keratina 230 ml',
    brand: 'Fidelité',
    line: 'Keratina',
    subcategory: 'Champú',
    price: 10500,
    rating: 4.5,
    reviews: 1240,
    imageUrl: 'https://fidelite.com.ar/img/productos/29/shampoo-keratin_230ml_2.jpg',
    image: '🧴',
    color: '#fef3c7',
    description:
      'Champú reestructurante con keratina que repara y disciplina cabellos dañados o con frizz.',
    characteristics: {
      size: '230 ml',
      hairType: ['Dañado', 'Frizz'],
      benefits: ['Reparación', 'Antifrizz'],
      keyIngredients: ['Keratina hidrolizada'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Sella cutícula', 'Aroma sofisticado'],
    cons: ['Puede pesar en cabello fino']
  },
  {
    id: 'fke02',
    name: 'Acondicionador Keratina 230 ml',
    brand: 'Fidelité',
    line: 'Keratina',
    subcategory: 'Acondicionador',
    price: 10000,
    rating: 4.5,
    reviews: 1080,
    imageUrl: 'https://fidelite.com.ar/img/productos/30/conditioner-keratin_230ml_2.jpg',
    image: '💆',
    color: '#fef3c7',
    description:
      'Acondicionador con keratina que reestructura y reduce el frizz aportando suavidad.',
    characteristics: {
      size: '230 ml',
      hairType: ['Dañado', 'Frizz'],
      benefits: ['Reparación', 'Suavidad', 'Antifrizz'],
      keyIngredients: ['Keratina hidrolizada'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Disciplina mucho', 'Brillo intenso'],
    cons: ['Aroma muy presente']
  },
  {
    id: 'fke03',
    name: 'Máscara Reparadora Keratina 270 g',
    brand: 'Fidelité',
    line: 'Keratina',
    subcategory: 'Mascarilla',
    price: 14500,
    rating: 4.6,
    reviews: 1340,
    imageUrl: 'https://fidelite.com.ar/img/productos/79/mascarakeratina_2.jpg',
    image: '🪮',
    color: '#fef3c7',
    description:
      'Mascarilla intensiva que repone keratina natural y devuelve fuerza al cabello.',
    characteristics: {
      size: '270 g',
      hairType: ['Dañado', 'Quebradizo'],
      benefits: ['Reparación', 'Fortalecimiento'],
      keyIngredients: ['Keratina hidrolizada', 'Proteínas'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultados pro', 'Tamaño generoso'],
    cons: ['Hay que respetar pose']
  },

  // ---------------- FIDELITÉ — REINVENTION (matizadores) ----------------
  {
    id: 'fr01',
    name: 'Shampoo Reinvention Ultra Violet 230 ml',
    brand: 'Fidelité',
    line: 'Reinvention',
    subcategory: 'Champú',
    price: 14500,
    rating: 4.6,
    reviews: 920,
    imageUrl: 'https://fidelite.com.ar/img/productos/140/reinvention_ultraviolet_shampoo_tapavioleta.jpg',
    image: '🟣',
    color: '#a78bfa',
    description:
      'Champú matizador violeta que neutraliza tonos amarillos y anaranjados en cabellos rubios, decolorados o con canas.',
    characteristics: {
      size: '230 ml',
      hairType: ['Rubio', 'Decolorado', 'Canas'],
      benefits: ['Matiza amarillo', 'Cuida color'],
      keyIngredients: ['Pigmento violeta'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Pigmentación buena', 'Resultado en pocos lavados'],
    cons: ['Puede teñir bañera si se deja mucho']
  },
  {
    id: 'fr02',
    name: 'Máscara Correctora Ultrablack Reinvention 270 g',
    brand: 'Fidelité',
    line: 'Reinvention',
    subcategory: 'Mascarilla',
    price: 15500,
    rating: 4.5,
    reviews: 540,
    imageUrl: 'https://fidelite.com.ar/img/productos/208/reinvention_ultrablack_mascara270_tapanegra.jpg',
    image: '⚫',
    color: '#1f2937',
    description:
      'Mascarilla matizadora de tonos grises y oscuros. Refresca el color y aporta hidratación.',
    characteristics: {
      size: '270 g',
      hairType: ['Negro', 'Castaño oscuro', 'Gris'],
      benefits: ['Refresca color', 'Hidratación'],
      keyIngredients: ['Pigmento gris/negro'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Aviva el negro', 'Doble función matizadora + tratamiento'],
    cons: ['Mancha toallas']
  },

  // ---------------- FIDELITÉ — STYLING & OTROS ----------------
  {
    id: 'fs01',
    name: 'Crema de Peinado Multi-Acción Caviar 250 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Crema de peinar',
    price: 11000,
    rating: 4.5,
    reviews: 1240,
    imageUrl: 'https://fidelite.com.ar/img/productos/44/crema-de-peinado-multiaccion_2.jpg',
    image: '🌿',
    color: '#fef3c7',
    description:
      'Crema de peinado multi-acción para todo tipo de cabello. Hidrata, modela y aporta brillo.',
    characteristics: {
      size: '250 ml',
      hairType: ['Todos'],
      benefits: ['Hidratación', 'Modelado', 'Brillo'],
      keyIngredients: ['Extracto de caviar'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Versátil', 'No deja efecto cartón'],
    cons: ['Fijación leve']
  },
  {
    id: 'fs02',
    name: 'Crema de Peinado Lacios 250 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Crema de peinar',
    price: 10500,
    rating: 4.4,
    reviews: 860,
    imageUrl: 'https://fidelite.com.ar/img/productos/45/crema-de-peinado-lacios_2.jpg',
    image: '🌬️',
    color: '#bae6fd',
    description:
      'Crema de peinado específica para alaciar. Sella, alisa y aporta movimiento natural.',
    characteristics: {
      size: '250 ml',
      hairType: ['Liso'],
      benefits: ['Alisado', 'Sellado'],
      keyIngredients: ['Polímeros disciplinantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Lisos sin pesadez', 'Buen movimiento'],
    cons: ['No para rulos']
  },
  {
    id: 'fs03',
    name: 'Crema de Peinado Rulos 250 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Crema de peinar',
    price: 10500,
    rating: 4.5,
    reviews: 1180,
    imageUrl: 'https://fidelite.com.ar/img/productos/46/crema-de-peinado-rizos_2.jpg',
    image: '🌀',
    color: '#fbcfe8',
    description:
      'Crema específica para definir rulos. Activa el rizo, controla el frizz y deja movimiento.',
    characteristics: {
      size: '250 ml',
      hairType: ['Rizado', 'Ondulado'],
      benefits: ['Definición rizos', 'Antifrizz'],
      keyIngredients: ['Glicerina', 'Polímeros'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Definición real', 'No engancha el peine'],
    cons: ['Hay que probar dosis']
  },
  {
    id: 'fs04',
    name: 'Protector Térmico Caviar 120 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Protector térmico',
    price: 12500,
    rating: 4.5,
    reviews: 920,
    imageUrl: 'https://fidelite.com.ar/img/productos/48/protector-termico-caviar.jpg',
    image: '🔥',
    color: '#f97316',
    description:
      'Protector térmico con extracto de caviar. Escuda contra el calor de planchitas y secadores.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos'],
      benefits: ['Protección térmica', 'Brillo'],
      keyIngredients: ['Extracto de caviar', 'Polímeros termoprotectores'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Pulveriza fino', 'No engrasa'],
    cons: ['Frasco chico para uso pro']
  },
  {
    id: 'fs05',
    name: 'Bubble Shock 10 (20 ml)',
    brand: 'Fidelité',
    line: 'Tratamientos',
    subcategory: 'Tratamiento',
    price: 7500,
    rating: 4.4,
    reviews: 380,
    imageUrl: 'https://fidelite.com.ar/img/productos/139/fidelite-bubble_caja_03_2.jpg',
    image: '🫧',
    color: '#bae6fd',
    description:
      'Tratamiento capilar multifunción en formato burbuja. 10 beneficios en un producto.',
    characteristics: {
      size: '20 ml',
      hairType: ['Todos'],
      benefits: ['Multibeneficio', 'Brillo', 'Suavidad'],
      keyIngredients: ['Complejo multifunción'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Práctico', 'Resultado express'],
    cons: ['Una sola aplicación por unidad']
  },
  {
    id: 'fs06',
    name: 'Urban Shield 365 (120 ml)',
    brand: 'Fidelité',
    line: 'Tratamientos',
    subcategory: 'Tratamiento',
    price: 13800,
    rating: 4.5,
    reviews: 460,
    imageUrl: 'https://fidelite.com.ar/img/productos/179/urbanshield-fotoproductoweb_2.jpg',
    image: '🛡️',
    color: '#94a3b8',
    description:
      'Tratamiento sin enjuague que protege el cabello del estrés ambiental urbano (polución, UV).',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos'],
      benefits: ['Protección ambiental', 'Brillo'],
      keyIngredients: ['Filtros UV', 'Antioxidantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Idea novedosa', 'No apelmaza'],
    cons: ['Beneficios poco visibles a corto plazo']
  },
  {
    id: 'fs07',
    name: 'Gel Fijación Natural 230 g',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Gel',
    price: 7500,
    rating: 4.3,
    reviews: 720,
    imageUrl: 'https://fidelite.com.ar/img/productos/59/gel-suave230.jpg',
    image: '💎',
    color: '#cbd5e1',
    description:
      'Gel de fijación natural que define peinados de larga duración con movimiento.',
    characteristics: {
      size: '230 g',
      hairType: ['Todos'],
      benefits: ['Fijación natural', 'Definición'],
      keyIngredients: ['PVP', 'Glicerina'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['No deja efecto cartón', 'Buen precio'],
    cons: ['Fijación media']
  },

  // ---------------- OPCIÓN — SYNERGY BLEND (línea premium) ----------------
  {
    id: 'op01',
    name: 'Shampoo OPCIÓN Synergy Blend 350 ml',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Champú',
    price: 19500,
    rating: 4.7,
    reviews: 720,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/shampoo-1-x-1.jpg',
    image: '🧴',
    color: '#fef3c7',
    description:
      'Champú neutro de la línea Synergy Blend de Opción. Limpieza profunda con aceite de argán y CBD que prepara el cabello para los pasos siguientes.',
    characteristics: {
      size: '350 ml',
      hairType: ['Todos'],
      benefits: ['Limpieza profunda', 'Preparación'],
      keyIngredients: ['Aceite de argán', 'CBD'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Línea premium local', 'Aroma sofisticado'],
    cons: ['Precio elevado para uso diario']
  },
  {
    id: 'op02',
    name: 'Máscara Capilar OPCIÓN Synergy Blend 300 g',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Mascarilla',
    price: 24500,
    rating: 4.8,
    reviews: 580,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/mascara_0.jpeg',
    image: '🪮',
    color: '#fbbf24',
    description:
      'Mascarilla de hidratación profunda con argán y CBD. Restaura la salud y vitalidad del cabello.',
    characteristics: {
      size: '300 g',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Hidratación profunda', 'Reparación'],
      keyIngredients: ['Aceite de argán', 'CBD'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultado pro', 'Aroma premium'],
    cons: ['Cara para uso semanal']
  },
  {
    id: 'op03',
    name: 'Óleo Capilar OPCIÓN Synergy Blend 75 ml',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Aceite',
    price: 22000,
    rating: 4.7,
    reviews: 410,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/oleo-1-x-1.jpg',
    image: '✨',
    color: '#d97706',
    description:
      'Óleo capilar con aceites de argán y CBD. Sella puntas, reduce frizz y porosidad. Sin enjuague.',
    characteristics: {
      size: '75 ml',
      hairType: ['Seco', 'Frizz', 'Poroso'],
      benefits: ['Antifrizz', 'Brillo', 'Sellado puntas'],
      keyIngredients: ['Aceite de argán', 'CBD'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Pocas gotas alcanzan', 'Brillo intenso'],
    cons: ['Frasco pequeño para precio']
  },
  {
    id: 'op04',
    name: 'Sérum Capilar Argán y CBD 225 ml',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Sérum',
    price: 26500,
    rating: 4.6,
    reviews: 320,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/serum-1-x-1.jpg',
    image: '💧',
    color: '#fbbf24',
    description:
      'Sérum sin enjuague con aceites de argán y CBD. Hidratación profunda manteniendo suavidad y manejabilidad.',
    characteristics: {
      size: '225 ml',
      hairType: ['Todos', 'Seco'],
      benefits: ['Hidratación', 'Suavidad', 'Manejabilidad'],
      keyIngredients: ['Aceite de argán', 'CBD'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Tamaño grande', 'Versátil mojado o seco'],
    cons: ['Inversión inicial alta']
  },

  // ---------------- OPCIÓN — PRE Y POST COLOR ----------------
  {
    id: 'op05',
    name: 'Shampoo Violeta Opción 225 ml',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Champú',
    price: 11500,
    rating: 4.5,
    reviews: 1240,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/shampoovioleta01.webp',
    image: '🟣',
    color: '#a78bfa',
    description:
      'Champú matizador violeta que neutraliza reflejos amarillos sin deshidratar. Ideal para rubios, canas y decolorados.',
    characteristics: {
      size: '225 ml',
      hairType: ['Rubio', 'Canas', 'Decolorado'],
      benefits: ['Matiza amarillo', 'Hidratación'],
      keyIngredients: ['Pigmento violeta'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['No reseca', 'Pigmento bueno'],
    cons: ['Hay que controlar tiempo de pose']
  },
  {
    id: 'op06',
    name: 'Máscara Violeta Opción 300 g',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Mascarilla',
    price: 14500,
    rating: 4.6,
    reviews: 880,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/mascara01.webp',
    image: '🟣',
    color: '#a78bfa',
    description:
      'Mascarilla matizadora violeta. Penetra en la fibra, protege de la oxidación y devuelve hidratación.',
    characteristics: {
      size: '300 g',
      hairType: ['Rubio', 'Canas', 'Decolorado'],
      benefits: ['Matiza amarillo', 'Hidratación', 'Protege oxidación'],
      keyIngredients: ['Pigmento violeta', 'Activos hidratantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Doble función', 'Resultado en una aplicación'],
    cons: ['Mancha si se deja mucho']
  },
  {
    id: 'op07',
    name: 'Shampoo Rojo Opción',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Champú',
    price: 12500,
    rating: 4.5,
    reviews: 540,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/shampoovioleta01.webp',
    image: '🔴',
    color: '#dc2626',
    description:
      'Champú matizador rojo que aviva y mantiene el color cobrizo y rojizo entre coloraciones.',
    characteristics: {
      size: '225 ml',
      hairType: ['Pelirrojo', 'Cobrizo'],
      benefits: ['Aviva color rojo', 'Hidratación'],
      keyIngredients: ['Pigmento rojo'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Específico para rojos', 'No reseca'],
    cons: ['Pigmento muy potente, dosificar bien']
  },

  // ---------------- OPCIÓN — LÍNEA QUERATÍNICA ----------------
  {
    id: 'op08',
    name: 'Bi Fase Queratínico Opción 225 ml',
    brand: 'Opción',
    line: 'Queratínica',
    subcategory: 'Acondicionador',
    price: 10500,
    rating: 4.5,
    reviews: 1180,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/01bifase.webp',
    image: '🌬️',
    color: '#bae6fd',
    description:
      'Spray bifásico desenredante con keratina. Hidrata, da brillo y elasticidad. Aporta volumen.',
    characteristics: {
      size: '225 ml',
      hairType: ['Todos'],
      benefits: ['Desenredo', 'Brillo', 'Elasticidad'],
      keyIngredients: ['Keratina hidrolizada'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Multifunción', 'Cómodo en spray'],
    cons: ['Hay que agitar antes']
  },

  // ---------------- OPCIÓN — LÍNEA 10 EN 1 ----------------
  {
    id: 'op09',
    name: 'Protector Térmico Opción 200 ml',
    brand: 'Opción',
    line: '10 en 1',
    subcategory: 'Protector térmico',
    price: 13500,
    rating: 4.6,
    reviews: 960,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/protector-termico4.jpg',
    image: '🔥',
    color: '#f97316',
    description:
      'Protector térmico con keratina vegetal y filtro solar. Protección hasta 230°C, antifrizz y sellado de cutícula. Sistema 3X.',
    characteristics: {
      size: '200 ml',
      hairType: ['Todos'],
      benefits: ['Protección térmica', 'Antifrizz', 'Filtro solar', 'Brillo'],
      keyIngredients: ['Keratina vegetal', 'Glicerina', 'Filtro UV'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['10 beneficios reales', 'Vegano', 'Filtro UV'],
    cons: ['Frasco pulverizador puede gotear']
  },
  {
    id: 'op10',
    name: 'BB Hair Opción 225 ml',
    brand: 'Opción',
    line: '10 en 1',
    subcategory: 'Tratamiento',
    price: 14500,
    rating: 4.6,
    reviews: 720,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/01bbhair.webp',
    image: '💆',
    color: '#fde68a',
    description:
      'Multifunción 10 en 1 sin enjuague: alisa, sella cutícula, protege del sol, repara, fortalece, hidrata, repone keratina y aporta brillo.',
    characteristics: {
      size: '225 ml',
      hairType: ['Todos'],
      benefits: ['Multibeneficio', 'Brillo', 'Reparación', 'Hidratación'],
      keyIngredients: ['Keratina', 'Filtro UV'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['10 beneficios en un producto', 'Sin enjuague'],
    cons: ['Hay que dosificar']
  },

  // ---------------- OPCIÓN — TRATAMIENTO ----------------
  {
    id: 'op11',
    name: 'Cera Nutriente Opción 350 ml',
    brand: 'Opción',
    line: 'Tratamiento',
    subcategory: 'Tratamiento',
    price: 15500,
    rating: 4.5,
    reviews: 540,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/renderopcionlineanutricionceranutrientex350g.png',
    image: '🍯',
    color: '#fcd34d',
    description:
      'Cera nutriente con keratina y Pro Vitamina E. Protege y restaura cabellos dañados por decoloración, tinturas o permanentes.',
    characteristics: {
      size: '350 ml',
      hairType: ['Decolorado', 'Teñido', 'Permanentado'],
      benefits: ['Reparación', 'Nutrición', 'Antiage'],
      keyIngredients: ['Keratina', 'Pro Vitamina E'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Tratamiento profundo', 'Resultados pro'],
    cons: ['Tiempo de pose 10-15 min']
  },

  // ---------------- OPCIÓN — STYLING ----------------
  {
    id: 'op12',
    name: 'Mousse Opción 420 ml',
    brand: 'Opción',
    line: 'Touch Final',
    subcategory: 'Styling',
    price: 9500,
    rating: 4.4,
    reviews: 1320,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/01mousse.webp',
    image: '☁️',
    color: '#fef3c7',
    description:
      'Mousse acondicionadora para todas las técnicas de peinado. Aporta duración, volumen y brillo.',
    characteristics: {
      size: '420 ml',
      hairType: ['Todos', 'Rizado', 'Liso'],
      benefits: ['Volumen', 'Fijación', 'Brillo'],
      keyIngredients: ['Siliconas tratantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Versátil para varias técnicas', 'Buen volumen'],
    cons: ['Aroma fuerte']
  }
]

export const subcategories = [...new Set(products.map(p => p.subcategory))]
export const brands = [...new Set(products.map(p => p.brand))]
