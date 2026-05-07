// Hair-only catalog: Fidelité + Opción + La Puissance (Argentine pro hair brands)
// Images from each brand's official site / Shopify CDN.
// Prices in ARS sourced (May 2026):
//   Fidelité     → BM Distribuidora (bmdistribuidora.com.ar), Stylist Factory, VM Cosmética
//   Opción       → Simple Insumos (simpleinsumos.mitiendanube.com), Burbujas Perfumerías, Casa Roma
//   La Puissance → official lapuissance.com.ar (Shopify retail prices)

export const products = [
  // ---------------- FIDELITÉ — LÍNEA ARGÁN ----------------
  {
    id: 'fa01',
    name: 'Shampoo Argán Mythical 260 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Champú',
    price: 9720,
    rating: 4.6,
    reviews: 2840,
    imageUrl: 'https://fidelite.com.ar/img/productos/24/06-arganshampoocajaproducto_4_4.jpg',
    image: '🧴',
    color: '#fde68a',
    description:
      'Champú Argán Mythical para todo tipo de cabello. Revitaliza, embellece e hidrata gracias al aceite de argán de la línea estrella de Fidelité.',
    characteristics: {
      size: '260 ml',
      hairType: ['Todos', 'Seco', 'Normal'],
      benefits: ['Hidratación', 'Brillo', 'Antiage'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Aroma rico y duradero', 'Buen rinde', 'Hidrata sin pesar'],
    cons: ['No es libre de sulfatos']
  },
  {
    id: 'fa02',
    name: 'Acondicionador Argán Mythical 260 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Acondicionador',
    price: 9720,
    rating: 4.5,
    reviews: 2210,
    imageUrl: 'https://fidelite.com.ar/img/productos/25/06-arganacondicionador_2_2.jpg',
    image: '💆',
    color: '#fde68a',
    description:
      'Acondicionador con aceite de argán que desenreda, suaviza y aporta brillo natural a todo tipo de cabello.',
    characteristics: {
      size: '260 ml',
      hairType: ['Todos', 'Seco', 'Normal'],
      benefits: ['Desenredo', 'Brillo', 'Suavidad'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Desenreda muy bien', 'Aroma alineado al shampoo'],
    cons: ['Apelmaza cabellos finos']
  },
  {
    id: 'fa03',
    name: 'Máscara Argán Mythical 250 g',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Mascarilla',
    price: 10692,
    rating: 4.7,
    reviews: 2620,
    imageUrl: 'https://fidelite.com.ar/img/productos/35/06-arganmascaracajaproducto_2.jpg',
    image: '🪮',
    color: '#fde68a',
    description:
      'Mascarilla intensiva con aceite de argán que fortalece y nutre profundamente la fibra capilar.',
    characteristics: {
      size: '250 g',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Reparación', 'Nutrición', 'Brillo'],
      keyIngredients: ['Aceite de argán', 'Aminoácidos'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultados desde la 1ra aplicación', 'Aroma rico'],
    cons: ['Pesada para cabello fino']
  },
  {
    id: 'fa04',
    name: 'Crema de Peinado Argán 230 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Crema de peinar',
    price: 8218,
    rating: 4.4,
    reviews: 1380,
    imageUrl: 'https://fidelite.com.ar/img/productos/36/crema-de-peinado-argan_2.jpg',
    image: '🌿',
    color: '#fde68a',
    description:
      'Crema sin enjuague con argán que modela cabellos secos y maltratados, dejándolos suaves y manejables.',
    characteristics: {
      size: '230 ml',
      hairType: ['Seco', 'Maltratado'],
      benefits: ['Modelado', 'Suavidad', 'Antifrizz'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['No apelmaza', 'Buena fijación natural'],
    cons: ['Aroma intenso al inicio']
  },
  {
    id: 'fa05',
    name: 'Elixir Multifunción Argán Oil 120 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Aceite',
    price: 26241,
    rating: 4.8,
    reviews: 2450,
    imageUrl: 'https://fidelite.com.ar/img/productos/134/whatsapp-image-2020-12-23-at-160159-1.jpg',
    image: '✨',
    color: '#d97706',
    description:
      'Elixir multifunción con aceite de argán. Hidratación y brillo extremo. Pocas gotas alcanzan.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos', 'Frizz', 'Seco'],
      benefits: ['Brillo', 'Antifrizz', 'Hidratación'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Rinde mucho', 'Brillo espejo inmediato'],
    cons: ['Inversión inicial alta']
  },
  {
    id: 'fa06',
    name: 'Protector Térmico Argán Spray',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Protector térmico',
    price: 21779,
    rating: 4.5,
    reviews: 980,
    imageUrl: 'https://fidelite.com.ar/img/productos/205/protector-termico-argan.jpg',
    image: '🔥',
    color: '#f97316',
    description:
      'Protector térmico spray con argán. Escuda el cabello frente a planchitas y secadores hasta altas temperaturas.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos'],
      benefits: ['Protección térmica', 'Brillo'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['No apelmaza', 'Aroma suave'],
    cons: ['Spray puede pulverizar grueso']
  },
  {
    id: 'fa07',
    name: 'Ampollas Argán Restauración 12u x 15 ml',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Ampollas',
    price: 33535,
    rating: 4.6,
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
    pros: ['Tratamiento intensivo pro', 'Resultado rápido'],
    cons: ['Hay que respetar tiempo de pose']
  },
  {
    id: 'fa08',
    name: 'Brillo Instantáneo Argán Oil Shine Mist',
    brand: 'Fidelité',
    line: 'Argán',
    subcategory: 'Tratamiento',
    price: 16132,
    rating: 4.5,
    reviews: 540,
    imageUrl: 'https://fidelite.com.ar/img/productos/38/arganoilshinemist-01_2.jpg',
    image: '💫',
    color: '#fbbf24',
    description:
      'Spray de brillo instantáneo con argán. Aporta luminosidad supremo sin engrasar.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos'],
      benefits: ['Brillo', 'Antifrizz ligero'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultado en segundos', 'Cómodo de aplicar'],
    cons: ['Frasco se vacía rápido']
  },

  // ---------------- FIDELITÉ — LÍNEA CAVIAR ----------------
  {
    id: 'fc01',
    name: 'Shampoo Caviar Normales 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Champú',
    price: 8622,
    rating: 4.5,
    reviews: 1240,
    imageUrl: 'https://fidelite.com.ar/img/productos/21/260shampoonormalesproductocaja_2_2.jpg',
    image: '🧴',
    color: '#fde2e9',
    description:
      'Champú Caviar para cabellos sanos. Cuida y mantiene la naturaleza del cabello con extracto de caviar.',
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
    price: 8622,
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
    cons: ['Precio medio']
  },
  {
    id: 'fc03',
    name: 'Shampoo Caviar Teñidos 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Champú',
    price: 8622,
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
    cons: ['Precio medio']
  },
  {
    id: 'fc04',
    name: 'Acondicionador Caviar Teñidos 260 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Acondicionador',
    price: 8622,
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
    pros: ['Cuida el color', 'Desenreda bien'],
    cons: ['Aroma intenso']
  },
  {
    id: 'fc05',
    name: 'Máscara Caviar Hidro-Nutritiva 250 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Mascarilla',
    price: 8986,
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
    pros: ['Resultados pro', 'Excelente relación precio/efecto'],
    cons: ['Algunos la ven pesada para finos']
  },
  {
    id: 'fc06',
    name: 'Sérum Reparador de Puntas Caviar 30 ml',
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
    pros: ['Alternativa local a Olaplex', 'Buen rinde'],
    cons: ['Hay que combinar con shampoo de la misma línea']
  },
  {
    id: 'fc08',
    name: 'Ampollas Complejo Caviar Hidro-Nutritivo 12u x 15 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Ampollas',
    price: 23895,
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
    pros: ['Resultados express', 'Ideal salón'],
    cons: ['Uso semanal recomendado']
  },
  {
    id: 'fc09',
    name: 'Crema de Peinar Caviar Multi-Acción 230 ml',
    brand: 'Fidelité',
    line: 'Caviar',
    subcategory: 'Crema de peinar',
    price: 7519,
    rating: 4.5,
    reviews: 1240,
    imageUrl: 'https://fidelite.com.ar/img/productos/44/crema-de-peinado-multiaccion_2.jpg',
    image: '🌿',
    color: '#fef3c7',
    description:
      'Crema de peinado multi-acción para todo tipo de cabello. Hidrata, modela y aporta brillo.',
    characteristics: {
      size: '230 ml',
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

  // ---------------- FIDELITÉ — KILL FRIZZ ----------------
  {
    id: 'fk01',
    name: 'Shampoo Kill Frizz 260 ml',
    brand: 'Fidelité',
    line: 'Kill Frizz',
    subcategory: 'Champú',
    price: 8150,
    rating: 4.5,
    reviews: 1640,
    imageUrl: 'https://fidelite.com.ar/img/productos/189/fidelite-killfrizz_03shampoo230-productosweb_2.jpg',
    image: '🧴',
    color: '#a7f3d0',
    description:
      'Champú anti-frizz que hidrata el cuero cabelludo, repara las cutículas dañadas y disciplina el cabello.',
    characteristics: {
      size: '260 ml',
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
    price: 12500,
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
    price: 9500,
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
    name: 'Shampoo 100% Free 230 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Champú',
    price: 7950,
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
    pros: ['Sin sulfatos', 'Apto curly method', 'Cuida color'],
    cons: ['Espuma media']
  },
  {
    id: 'ff02',
    name: 'Acondicionador Free 230 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Acondicionador',
    price: 8400,
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
    price: 9800,
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
    price: 8200,
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
  {
    id: 'ff05',
    name: 'Ampollas Complejo Nutritivo Free 12u x 15 ml',
    brand: 'Fidelité',
    line: 'Free',
    subcategory: 'Ampollas',
    price: 14500,
    rating: 4.5,
    reviews: 320,
    imageUrl: 'https://fidelite.com.ar/img/productos/203/fidelite_ampollas_free.jpg',
    image: '⚗️',
    color: '#bbf7d0',
    description:
      'Caja de 12 ampollas con hidratación y nutrición profunda. Libre de parabenos, sal y colorantes.',
    characteristics: {
      size: '12 u. x 15 ml',
      hairType: ['Sensible', 'Dañado'],
      benefits: ['Hidratación profunda', 'Nutrición'],
      keyIngredients: ['Activos vegetales'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Sin parabenos', 'Tratamiento ligero'],
    cons: ['Resultado gradual']
  },

  // ---------------- FIDELITÉ — KERATINA ----------------
  {
    id: 'fke01',
    name: 'Shampoo Keratina 230 ml',
    brand: 'Fidelité',
    line: 'Keratina',
    subcategory: 'Champú',
    price: 4300,
    rating: 4.4,
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
    pros: ['Sella cutícula', 'Precio accesible'],
    cons: ['Puede pesar en cabello fino']
  },
  {
    id: 'fke02',
    name: 'Acondicionador Keratina 230 ml',
    brand: 'Fidelité',
    line: 'Keratina',
    subcategory: 'Acondicionador',
    price: 4300,
    rating: 4.4,
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
    price: 4990,
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
    pros: ['Excelente precio/calidad', 'Tamaño generoso'],
    cons: ['Hay que respetar pose']
  },

  // ---------------- FIDELITÉ — REINVENTION (matizadores) ----------------
  {
    id: 'fr01',
    name: 'Shampoo Reinvention Ultra Violet 230 ml',
    brand: 'Fidelité',
    line: 'Reinvention',
    subcategory: 'Champú',
    price: 4600,
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
    pros: ['Excelente precio', 'Pigmentación buena'],
    cons: ['Mancha bañera si se deja mucho']
  },
  {
    id: 'fr02',
    name: 'Acondicionador Reinvention Ultra Violet Tonos 7-9',
    brand: 'Fidelité',
    line: 'Reinvention',
    subcategory: 'Acondicionador',
    price: 4200,
    rating: 4.5,
    reviews: 580,
    imageUrl: 'https://fidelite.com.ar/img/productos/141/reinvention_ultraviolet_conditioner7-9_tapavioleta_2.jpg',
    image: '🟣',
    color: '#a78bfa',
    description:
      'Acondicionador matizador para tonos rubios 7 a 9. Neutraliza tonos dorados no deseados.',
    characteristics: {
      size: '230 ml',
      hairType: ['Rubio', 'Tonos 7-9'],
      benefits: ['Matiza dorado', 'Hidratación'],
      keyIngredients: ['Pigmento violeta'],
      sulfateFree: false,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Combo perfecto con shampoo violeta', 'Precio accesible'],
    cons: ['Específico para esos tonos']
  },
  {
    id: 'fr03',
    name: 'Máscara Correctora Reinvention Ultrablack 270 g',
    brand: 'Fidelité',
    line: 'Reinvention',
    subcategory: 'Mascarilla',
    price: 8500,
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
    pros: ['Doble función matizadora + tratamiento', 'Refresca el negro'],
    cons: ['Mancha toallas']
  },

  // ---------------- FIDELITÉ — STYLING & TRATAMIENTOS ----------------
  {
    id: 'fs01',
    name: 'Bubble Shock 10 (20 ml)',
    brand: 'Fidelité',
    line: 'Tratamientos',
    subcategory: 'Tratamiento',
    price: 1500,
    rating: 4.4,
    reviews: 380,
    imageUrl: 'https://fidelite.com.ar/img/productos/139/fidelite-bubble_caja_03_2.jpg',
    image: '🫧',
    color: '#bae6fd',
    description:
      'Tratamiento capilar multifunción en formato burbuja, single-dose. 10 beneficios en un producto.',
    characteristics: {
      size: '20 ml',
      hairType: ['Todos'],
      benefits: ['Multibeneficio', 'Brillo', 'Suavidad'],
      keyIngredients: ['Complejo multifunción'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Práctico', 'Muy económico para probar'],
    cons: ['Una sola aplicación por unidad']
  },
  {
    id: 'fs02',
    name: 'Urban Shield 365 (120 ml)',
    brand: 'Fidelité',
    line: 'Tratamientos',
    subcategory: 'Tratamiento',
    price: 9765,
    rating: 4.5,
    reviews: 460,
    imageUrl: 'https://fidelite.com.ar/img/productos/179/urbanshield-fotoproductoweb_2.jpg',
    image: '🛡️',
    color: '#94a3b8',
    description:
      'Tratamiento sin enjuague que protege el cabello del estrés ambiental urbano (polución, UV) con filtro solar.',
    characteristics: {
      size: '120 ml',
      hairType: ['Todos'],
      benefits: ['Protección ambiental', 'Filtro UV', 'Brillo'],
      keyIngredients: ['Filtros UV', 'Antioxidantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Innovador', 'No apelmaza', 'Filtro solar'],
    cons: ['Beneficios poco visibles a corto plazo']
  },
  {
    id: 'fs03',
    name: 'Crema de Peinado Rulos 250 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Crema de peinar',
    price: 9500,
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
    name: 'Crema de Peinado Lacios 250 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Crema de peinar',
    price: 9500,
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
    id: 'fs05',
    name: 'Protector Térmico Caviar 120 ml',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Protector térmico',
    price: 11500,
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
    cons: ['Frasco chico']
  },
  {
    id: 'fs06',
    name: 'Gel Fijación Natural 230 g',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Gel',
    price: 6500,
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
  {
    id: 'fs07',
    name: 'Gel Fijación Extrema 230 g',
    brand: 'Fidelité',
    line: 'Styling',
    subcategory: 'Gel',
    price: 6800,
    rating: 4.4,
    reviews: 640,
    imageUrl: 'https://fidelite.com.ar/img/productos/62/gel-fuerte230.jpg',
    image: '💎',
    color: '#a5b4fc',
    description:
      'Gel de fijación extrema para peinados definidos de larga duración.',
    characteristics: {
      size: '230 g',
      hairType: ['Todos'],
      benefits: ['Fijación fuerte', 'Definición'],
      keyIngredients: ['PVP'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Fija realmente firme', 'No deja blanco'],
    cons: ['Endurece el cabello']
  },

  // ---------------- OPCIÓN — SYNERGY BLEND ----------------
  {
    id: 'op01',
    name: 'Shampoo Synergy Blend Argán + CBD 350 ml',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Champú',
    price: 8900,
    rating: 4.7,
    reviews: 720,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/shampoo-1-x-1.jpg',
    image: '🧴',
    color: '#fef3c7',
    description:
      'Champú neutro Synergy Blend con aceite de argán y CBD. Limpia en profundidad sin dejar pesadez. Apto uso diario.',
    characteristics: {
      size: '350 ml',
      hairType: ['Todos', 'Seco', 'Dañado'],
      benefits: ['Limpieza profunda', 'Hidratación'],
      keyIngredients: ['Aceite de argán', 'CBD'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Aroma sofisticado', 'pH neutro', 'Apto teñidos'],
    cons: ['Frasco mediano']
  },
  {
    id: 'op02',
    name: 'Máscara Capilar Synergy Blend Argán + CBD 300 g',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Mascarilla',
    price: 8900,
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
    cons: ['Para uso semanal']
  },
  {
    id: 'op03',
    name: 'Óleo Capilar Synergy Blend Argán + CBD 75 ml',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Aceite',
    price: 11500,
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
    cons: ['Frasco pequeño']
  },
  {
    id: 'op04',
    name: 'Sérum Capilar Argán + CBD 225 ml',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Sérum',
    price: 7700,
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
    pros: ['Tamaño generoso', 'Versátil mojado o seco'],
    cons: ['Aroma muy intenso al inicio']
  },
  {
    id: 'op05',
    name: 'Ampollas Hydroblend Synergy Blend 18u x 15 cc',
    brand: 'Opción',
    line: 'Synergy Blend',
    subcategory: 'Ampollas',
    price: 22000,
    rating: 4.6,
    reviews: 220,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/opcion-ampolla-synergy-748273995ed82eb44317592457102695-480-0.webp',
    image: '⚗️',
    color: '#fbbf24',
    description:
      'Caja de 18 ampollas Hydroblend con argán y CBD. Hidratación express ideal post-color.',
    characteristics: {
      size: '18 u. x 15 cc',
      hairType: ['Seco', 'Dañado', 'Teñido'],
      benefits: ['Hidratación profunda', 'Reparación'],
      keyIngredients: ['Aceite de argán', 'CBD'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Caja grande, rinde meses', 'Resultado inmediato'],
    cons: ['Inversión inicial']
  },

  // ---------------- OPCIÓN — PRE Y POST COLOR ----------------
  {
    id: 'op06',
    name: 'Shampoo Matizador Violeta 225 ml',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Champú',
    price: 5000,
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
    pros: ['No reseca', 'Excelente precio', 'Pigmento bueno'],
    cons: ['Hay que controlar tiempo de pose']
  },
  {
    id: 'op07',
    name: 'Máscara Violeta 300 g',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Mascarilla',
    price: 9500,
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
    id: 'op08',
    name: 'Máscara Roja',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Mascarilla',
    price: 10800,
    rating: 4.5,
    reviews: 320,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/opcion-mascara-roja-4fa35e1d90effb6d4917744510458197-480-0.webp',
    image: '🔴',
    color: '#dc2626',
    description:
      'Mascarilla matizadora roja que aviva tonos cobrizos y rojizos entre coloraciones. También trata el cabello.',
    characteristics: {
      size: '300 g',
      hairType: ['Pelirrojo', 'Cobrizo', 'Castaño rojizo'],
      benefits: ['Aviva color rojo', 'Hidratación'],
      keyIngredients: ['Pigmento rojo', 'Activos hidratantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Específico para rojos', 'Resultado vibrante'],
    cons: ['Pigmento muy potente']
  },
  {
    id: 'op09',
    name: 'Shampoo Queratina Vegetal',
    brand: 'Opción',
    line: 'Pre y Post Color',
    subcategory: 'Champú',
    price: 9300,
    rating: 4.5,
    reviews: 410,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/opcion-shampoo-keratina-d27f5865c978d8b87517447295709091-480-0.webp',
    image: '🌱',
    color: '#a7f3d0',
    description:
      'Champú con queratina vegetal y filtro solar. Repara, protege y aporta brillo. Apto cabello tratado.',
    characteristics: {
      size: '350 ml',
      hairType: ['Tratado', 'Teñido', 'Decolorado'],
      benefits: ['Reparación', 'Protección color', 'Filtro UV'],
      keyIngredients: ['Queratina vegetal', 'Filtro solar'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Vegano', 'Filtro solar', 'Repara'],
    cons: ['Aroma sutil']
  },

  // ---------------- OPCIÓN — LÍNEA QUERATÍNICA ----------------
  {
    id: 'op10',
    name: 'Bi Fase Queratínico 225 ml',
    brand: 'Opción',
    line: 'Queratínica',
    subcategory: 'Acondicionador',
    price: 8100,
    rating: 4.5,
    reviews: 1180,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/01bifase.webp',
    image: '🌬️',
    color: '#bae6fd',
    description:
      'Spray bifásico desenredante con keratina. Hidrata, da brillo, elasticidad y aporta volumen.',
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
  {
    id: 'op11',
    name: 'HQ Hidro Humectante Queratínico',
    brand: 'Opción',
    line: 'Queratínica',
    subcategory: 'Tratamiento',
    price: 8200,
    rating: 4.6,
    reviews: 540,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/hq-11-b43bd8f5b84cf933f716958261328190-480-0.webp',
    image: '💦',
    color: '#bae6fd',
    description:
      'Tratamiento hidro-humectante con keratina. Restaura el balance hídrico del cabello dañado.',
    characteristics: {
      size: '225 ml',
      hairType: ['Dañado', 'Deshidratado'],
      benefits: ['Hidratación', 'Reestructuración'],
      keyIngredients: ['Keratina hidrolizada', 'Humectantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Resultados visibles desde la 1ra aplicación'],
    cons: ['Tiempo de pose recomendado']
  },

  // ---------------- OPCIÓN — LÍNEA 10 EN 1 ----------------
  {
    id: 'op12',
    name: 'Protector Térmico 10 en 1 (200 ml)',
    brand: 'Opción',
    line: '10 en 1',
    subcategory: 'Protector térmico',
    price: 7400,
    rating: 4.6,
    reviews: 960,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/protector-termico4.jpg',
    image: '🔥',
    color: '#f97316',
    description:
      'Protector térmico con keratina vegetal y filtro solar. Protección hasta 230°C, antifrizz y sellado de cutícula.',
    characteristics: {
      size: '200 ml',
      hairType: ['Todos'],
      benefits: ['Protección térmica', 'Antifrizz', 'Filtro UV', 'Brillo'],
      keyIngredients: ['Keratina vegetal', 'Glicerina', 'Filtro UV'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['10 beneficios reales', 'Vegano', 'Excelente precio'],
    cons: ['Frasco puede gotear']
  },
  {
    id: 'op13',
    name: 'BB Hair 10 en 1 (200 cc)',
    brand: 'Opción',
    line: '10 en 1',
    subcategory: 'Tratamiento',
    price: 8700,
    rating: 4.6,
    reviews: 720,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/01bbhair.webp',
    image: '💆',
    color: '#fde68a',
    description:
      'Multifunción 10 en 1 sin enjuague: alisa, sella cutícula, protege del sol, repara y aporta brillo.',
    characteristics: {
      size: '200 cc',
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
    id: 'op14',
    name: 'Cera Nutriente 350 g',
    brand: 'Opción',
    line: 'Tratamiento',
    subcategory: 'Tratamiento',
    price: 6900,
    rating: 4.5,
    reviews: 540,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/renderopcionlineanutricionceranutrientex350g.png',
    image: '🍯',
    color: '#fcd34d',
    description:
      'Cera nutriente con keratina y Pro Vitamina E. Protege y restaura cabellos dañados por decoloración o tinturas.',
    characteristics: {
      size: '350 g',
      hairType: ['Decolorado', 'Teñido', 'Permanentado'],
      benefits: ['Reparación', 'Nutrición', 'Antiage'],
      keyIngredients: ['Keratina', 'Pro Vitamina E'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Tratamiento profundo', 'Buen precio'],
    cons: ['Tiempo de pose 10-15 min']
  },
  {
    id: 'op15',
    name: 'Complejo Nutritivo (100 g)',
    brand: 'Opción',
    line: 'Tratamiento',
    subcategory: 'Tratamiento',
    price: 6000,
    rating: 4.4,
    reviews: 280,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/complejo-nutri-100g-d7f93d4561a2c0c56e17176191694053-480-0.webp',
    image: '🧪',
    color: '#fde68a',
    description:
      'Complejo nutritivo concentrado para cabellos secos y opacos. Restaura desde el primer uso.',
    characteristics: {
      size: '100 g',
      hairType: ['Seco', 'Opaco'],
      benefits: ['Nutrición', 'Brillo'],
      keyIngredients: ['Vitaminas', 'Aceites'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Concentrado', 'Rinde mucho'],
    cons: ['Frasco pequeño']
  },
  {
    id: 'op16',
    name: 'Sérum Reparador de Puntas 75 ml',
    brand: 'Opción',
    line: 'Tratamiento',
    subcategory: 'Sérum',
    price: 10800,
    rating: 4.6,
    reviews: 460,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/opcion-rep-puntas-fbf46f64abe602df9a17592462520520-480-0.webp',
    image: '💧',
    color: '#fbbf24',
    description:
      'Sérum sin enjuague que repara puntas dañadas y sella cutículas con efecto brillo.',
    characteristics: {
      size: '75 ml',
      hairType: ['Puntas dañadas'],
      benefits: ['Sellado puntas', 'Brillo'],
      keyIngredients: ['Aceites tratantes', 'Siliconas'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Concentrado', 'Resultado inmediato'],
    cons: ['Hay que dosificar']
  },

  // ---------------- OPCIÓN — STYLING ----------------
  {
    id: 'op17',
    name: 'Mousse Acondicionadora 420 cc',
    brand: 'Opción',
    line: 'Touch Final',
    subcategory: 'Styling',
    price: 9400,
    rating: 4.4,
    reviews: 1320,
    imageUrl: 'https://www.opcionsalon.com.ar/media/images/medium/01mousse.webp',
    image: '☁️',
    color: '#fef3c7',
    description:
      'Mousse acondicionadora para todas las técnicas de peinado. Aporta duración, volumen y brillo.',
    characteristics: {
      size: '420 cc',
      hairType: ['Todos', 'Rizado', 'Liso'],
      benefits: ['Volumen', 'Fijación', 'Brillo'],
      keyIngredients: ['Siliconas tratantes'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Versátil', 'Buen volumen'],
    cons: ['Aroma fuerte']
  },
  {
    id: 'op18',
    name: 'Brillo Siliconado 440 ml',
    brand: 'Opción',
    line: 'Touch Final',
    subcategory: 'Styling',
    price: 12600,
    rating: 4.5,
    reviews: 380,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/brillo-siliconado-689f35d2469c8148bc17241613490992-480-0.webp',
    image: '💎',
    color: '#cbd5e1',
    description:
      'Spray de brillo siliconado para acabado profesional. Cierra cutícula y deja efecto espejo.',
    characteristics: {
      size: '440 ml',
      hairType: ['Todos'],
      benefits: ['Brillo intenso', 'Sellado cutícula'],
      keyIngredients: ['Siliconas'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Brillo profesional', 'Tamaño grande'],
    cons: ['Aplicar pocas dosis para no engrasar']
  },
  {
    id: 'op19',
    name: 'Laca XF',
    brand: 'Opción',
    line: 'Touch Final',
    subcategory: 'Styling',
    price: 10100,
    rating: 4.5,
    reviews: 620,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/laca-opcion1-4bd28f50783c6e48b816958276075300-480-0.webp',
    image: '🌬️',
    color: '#fcd5ce',
    description:
      'Laca de fijación extra fuerte. Mantiene el peinado por horas, resiste humedad y se cepilla sin residuo.',
    characteristics: {
      size: '420 ml',
      hairType: ['Todos'],
      benefits: ['Fijación XF', 'Resiste humedad', 'Cepillable'],
      keyIngredients: ['Polímeros de fijación'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Fijación realmente firme', 'No deja efecto cartón'],
    cons: ['Aerosol']
  },
  {
    id: 'op20',
    name: 'Fijador Normal 500 ml',
    brand: 'Opción',
    line: 'Touch Final',
    subcategory: 'Gel',
    price: 10400,
    rating: 4.3,
    reviews: 410,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/fijador-normal1-a1c1904509eb5915b516958271117410-480-0.webp',
    image: '💎',
    color: '#cbd5e1',
    description:
      'Fijador normal de uso profesional. Define peinados con movimiento sin endurecer.',
    characteristics: {
      size: '500 ml',
      hairType: ['Todos'],
      benefits: ['Fijación natural', 'Definición'],
      keyIngredients: ['PVP'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Tamaño profesional', 'No engomado'],
    cons: ['Fijación media']
  },

  // ---------------- OPCIÓN — ARGAIA SIN AMONÍACO (Color) ----------------
  {
    id: 'op21',
    name: 'Tintura Argaia Sin Amoníaco 60 g',
    brand: 'Opción',
    line: 'Argaia',
    subcategory: 'Coloración',
    price: 2800,
    rating: 4.4,
    reviews: 540,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/opcion-argaia-f640e3762b9f6300af17709033524920-480-0.webp',
    image: '🎨',
    color: '#92400e',
    description:
      'Coloración 0% amoníaco con cobertura de canas. Revela la luz natural y cuida el cabello.',
    characteristics: {
      size: '60 g',
      hairType: ['Todos', 'Canas'],
      benefits: ['Coloración', 'Cobertura canas', 'Sin amoníaco'],
      keyIngredients: ['Pigmentos suaves'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Sin amoníaco', 'Precio muy accesible'],
    cons: ['Duración 4-6 semanas']
  },
  {
    id: 'op22',
    name: 'Revelador en Crema Argaia 15 vol. 90 g',
    brand: 'Opción',
    line: 'Argaia',
    subcategory: 'Coloración',
    price: 1700,
    rating: 4.4,
    reviews: 220,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/148/833/products/opcion-argaia-oxi-264d3c5d40bb82381817709035698333-480-0.webp',
    image: '🧪',
    color: '#fef3c7',
    description:
      'Revelador en crema de 15 volúmenes para usar con la tintura Argaia. Acondiciona durante el proceso.',
    characteristics: {
      size: '90 g',
      hairType: ['Todos'],
      benefits: ['Activa color', 'Acondiciona'],
      keyIngredients: ['Peróxido 15 vol'],
      sulfateFree: true,
      vegan: false,
      origin: 'Argentina'
    },
    pros: ['Acondicionante', 'Económico'],
    cons: ['Solo para tintura sin amoníaco']
  },

  // =========================================================================
  // LA PUISSANCE
  // =========================================================================

  // ---------------- LA PUISSANCE — EXTRA CELL PLEX (sistema 7 pasos) ----
  {
    id: 'lp01',
    name: 'Extra Cell Plex · Paso 0 Pre-Shampoo',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Tratamiento',
    price: 26900,
    rating: 4.7,
    reviews: 420,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Shampoo___Extra_Cell_Plex_Step_0___Pre-Wash.jpg?v=1774614486&width=1500',
    image: '🧪',
    color: '#fbeee4',
    description:
      'Pre-shampoo del sistema Extra Cell Plex. Prepara la fibra capilar antes del lavado para potenciar la reconstrucción de los enlaces.',
    characteristics: {
      size: '300 ml',
      hairType: ['Dañado', 'Decolorado', 'Teñido'],
      benefits: ['Pre-tratamiento', 'Reconstrucción'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Inicio del sistema bonding', 'Vegano'],
    cons: ['Línea profesional, precio alto']
  },
  {
    id: 'lp02',
    name: 'Extra Cell Plex · Paso 1 Shampoo 300 ml',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Champú',
    price: 35700,
    rating: 4.8,
    reviews: 1240,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Shampoo_ExtraCellPlex_Step1.jpg?v=1774896819&width=1500',
    image: '🧴',
    color: '#fbeee4',
    description:
      'Champú reparador del sistema Extra Cell Plex. Limpia con suavidad mientras refuerza los enlaces capilares dañados.',
    characteristics: {
      size: '300 ml',
      hairType: ['Dañado', 'Decolorado', 'Teñido'],
      benefits: ['Reparación', 'Bonding'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Vegano', 'Sin sulfatos', 'Resultados pro'],
    cons: ['Precio elevado para uso diario']
  },
  {
    id: 'lp03',
    name: 'Extra Cell Plex · Paso 2 Bálsamo 300 ml',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Acondicionador',
    price: 41400,
    rating: 4.8,
    reviews: 940,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Balsamo_ExtraCellPlex_Step2.jpg?v=1774896024&width=1500',
    image: '💆',
    color: '#fbeee4',
    description:
      'Bálsamo acondicionador post-shampoo del sistema Extra Cell Plex. Continúa la reconstrucción y desenreda con fluidez.',
    characteristics: {
      size: '300 ml',
      hairType: ['Dañado', 'Decolorado'],
      benefits: ['Reparación', 'Desenredo'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Sella cutícula', 'Vegano'],
    cons: ['Premium tier de precio']
  },
  {
    id: 'lp04',
    name: 'Extra Cell Plex · Paso 3 Bonding Mask 250 ml',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Mascarilla',
    price: 42600,
    rating: 4.9,
    reviews: 2380,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_BondingMask_ExtraCellPlex_Step3.jpg?v=1774896161&width=1500',
    image: '🪮',
    color: '#fbeee4',
    description:
      'Mascarilla bonding del sistema Extra Cell Plex. Tratamiento intensivo que reconstruye los enlaces internos del cabello dañado.',
    characteristics: {
      size: '250 ml',
      hairType: ['Dañado', 'Decolorado', 'Quebradizo'],
      benefits: ['Reparación profunda', 'Bonding', 'Brillo'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Best seller absoluto', 'Resultados visibles', 'Vegano'],
    cons: ['Precio elevado']
  },
  {
    id: 'lp05',
    name: 'Extra Cell Plex · Paso 4 Spray Maintenance 100 ml',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Tratamiento',
    price: 13900,
    rating: 4.7,
    reviews: 580,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_ExtraCellPlex_Step4_SprayMaintenance_100ml.jpg?v=1774896487&width=1500',
    image: '💧',
    color: '#fbeee4',
    description:
      'Spray sin enjuague del sistema Extra Cell Plex. Mantenimiento diario del bonding entre lavados.',
    characteristics: {
      size: '100 ml',
      hairType: ['Dañado', 'Teñido'],
      benefits: ['Mantenimiento bonding', 'Brillo'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Práctico, sin enjuague', 'Vegano'],
    cons: ['Frasco chico']
  },
  {
    id: 'lp06',
    name: 'Extra Cell Plex · Paso 5 Shock Maintenance 15 ml',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Ampollas',
    price: 9900,
    rating: 4.7,
    reviews: 320,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Step5_ShockMaintenance_ExtraCellPlex.jpg?v=1774896416&width=1500',
    image: '⚗️',
    color: '#fbeee4',
    description:
      'Ampolla shock del sistema Extra Cell Plex. Tratamiento puntual express para refuerzo intensivo.',
    characteristics: {
      size: '15 ml',
      hairType: ['Dañado', 'Decolorado'],
      benefits: ['Reparación express', 'Bonding'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Resultado inmediato', 'Apto post-decoloración'],
    cons: ['Una aplicación por unidad']
  },
  {
    id: 'lp07',
    name: 'Extra Cell Plex · Paso 6 Sérum Bonding Oil 55 ml',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Aceite',
    price: 33900,
    rating: 4.8,
    reviews: 460,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_ExtraCellPlex_Step6_SerumBondingOil_55ml.jpg?v=1774896353&width=1500',
    image: '✨',
    color: '#d97757',
    description:
      'Sérum bonding oil del sistema Extra Cell Plex. Aceite reparador y de brillo que sella las puntas y termina la rutina.',
    characteristics: {
      size: '55 ml',
      hairType: ['Dañado', 'Frizz', 'Seco'],
      benefits: ['Brillo', 'Sellado puntas', 'Bonding'],
      keyIngredients: ['Plex bonding technology', 'Aceites'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Brillo intenso', 'Vegano'],
    cons: ['Frasco pequeño']
  },
  {
    id: 'lp08',
    name: 'Extra Cell Plex · Paso 7 Reviver Boost',
    brand: 'La Puissance',
    line: 'Extra Cell Plex',
    subcategory: 'Tratamiento',
    price: 24700,
    rating: 4.7,
    reviews: 280,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_ExtraCellPlex_Step7_ReviverBoost.jpg?v=1774896535&width=1500',
    image: '⚡',
    color: '#fbeee4',
    description:
      'Reviver boost final del sistema Extra Cell Plex. Reactivación express del bonding entre tratamientos.',
    characteristics: {
      size: '100 ml',
      hairType: ['Dañado', 'Teñido'],
      benefits: ['Reactivación bonding', 'Brillo'],
      keyIngredients: ['Plex bonding technology'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Cierra la rutina de 7 pasos', 'Vegano'],
    cons: ['Más útil con el sistema completo']
  },

  // ---------------- LA PUISSANCE — HYDRASHINE COMPLEX ----------------
  {
    id: 'lp09',
    name: 'Hydrashine Complex · Shampoo',
    brand: 'La Puissance',
    line: 'Hydrashine Complex',
    subcategory: 'Champú',
    price: 21000,
    rating: 4.7,
    reviews: 1620,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Shampoo_-_Hydrashine.jpg?v=1774614636&width=1500',
    image: '🧴',
    color: '#cffafe',
    description:
      'Champú con tecnología Hydrashine Complex. Hidratación profunda y brillo extremo desde el primer lavado.',
    characteristics: {
      size: '300 ml',
      hairType: ['Seco', 'Opaco', 'Deshidratado'],
      benefits: ['Hidratación', 'Brillo extremo'],
      keyIngredients: ['Hydrashine Complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Brillo notable', 'Vegano', 'Sin sulfatos'],
    cons: ['Premium para uso diario']
  },
  {
    id: 'lp10',
    name: 'Hydrashine Complex · Tratamiento',
    brand: 'La Puissance',
    line: 'Hydrashine Complex',
    subcategory: 'Acondicionador',
    price: 20600,
    rating: 4.7,
    reviews: 1380,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Tratamiento_-_Hydrashine.jpg?v=1774889892&width=1500',
    image: '💆',
    color: '#cffafe',
    description:
      'Tratamiento acondicionador Hydrashine Complex. Suaviza, desenreda y aporta brillo espejo.',
    characteristics: {
      size: '300 ml',
      hairType: ['Seco', 'Opaco'],
      benefits: ['Hidratación', 'Brillo', 'Suavidad'],
      keyIngredients: ['Hydrashine Complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Resultado de salón', 'Vegano'],
    cons: ['Aroma muy presente']
  },
  {
    id: 'lp11',
    name: 'Hydrashine Complex · Máscara Intensiva',
    brand: 'La Puissance',
    line: 'Hydrashine Complex',
    subcategory: 'Mascarilla',
    price: 22000,
    rating: 4.8,
    reviews: 980,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Mascara_intensiva_-_Hydrashine.jpg?v=1774614786&width=1500',
    image: '🪮',
    color: '#cffafe',
    description:
      'Mascarilla intensiva Hydrashine Complex. Hidratación profunda semanal para cabellos opacos.',
    characteristics: {
      size: '250 ml',
      hairType: ['Seco', 'Opaco', 'Deshidratado'],
      benefits: ['Hidratación profunda', 'Brillo'],
      keyIngredients: ['Hydrashine Complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Brillo espejo', 'Vegano'],
    cons: ['Para uso semanal']
  },
  {
    id: 'lp12',
    name: 'Hydrashine Complex · Desenredante Bifásico',
    brand: 'La Puissance',
    line: 'Hydrashine Complex',
    subcategory: 'Tratamiento',
    price: 22500,
    rating: 4.7,
    reviews: 740,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Desenredante_instantaneo_-_Hydrashine.jpg?v=1774614770&width=1500',
    image: '🌬️',
    color: '#cffafe',
    description:
      'Spray bifásico desenredante con tecnología Hydrashine. Desenreda al instante mientras hidrata.',
    characteristics: {
      size: '250 ml',
      hairType: ['Todos', 'Seco'],
      benefits: ['Desenredo', 'Hidratación', 'Brillo'],
      keyIngredients: ['Hydrashine Complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Acción inmediata', 'Cómodo en spray'],
    cons: ['Hay que agitar antes']
  },
  {
    id: 'lp13',
    name: 'Hydrashine Complex · Crema de Peinar',
    brand: 'La Puissance',
    line: 'Hydrashine Complex',
    subcategory: 'Crema de peinar',
    price: 20800,
    rating: 4.7,
    reviews: 620,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Crema_de_peinar_-_Hydrashine.jpg?v=1774614770&width=1500',
    image: '🌿',
    color: '#cffafe',
    description:
      'Crema de peinar Hydrashine Complex. Modela y aporta brillo extremo sin enjuague.',
    characteristics: {
      size: '250 ml',
      hairType: ['Todos', 'Seco'],
      benefits: ['Hidratación', 'Brillo', 'Modelado'],
      keyIngredients: ['Hydrashine Complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Brillo desde la raíz', 'No apelmaza'],
    cons: ['Aroma intenso']
  },
  {
    id: 'lp14',
    name: 'Hydrashine Complex · Ampolla Flash',
    brand: 'La Puissance',
    line: 'Hydrashine Complex',
    subcategory: 'Ampollas',
    price: 8900,
    rating: 4.6,
    reviews: 540,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Ampolla_flash_-_Hydrashine.jpg?v=1774614761&width=1500',
    image: '⚡',
    color: '#cffafe',
    description:
      'Ampolla flash Hydrashine Complex. Tratamiento express en una aplicación con brillo y suavidad inmediatos.',
    characteristics: {
      size: '15 ml',
      hairType: ['Todos', 'Sin brillo'],
      benefits: ['Brillo flash', 'Hidratación express'],
      keyIngredients: ['Hydrashine Complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Resultado en 5 min', 'Vegano'],
    cons: ['Una sola aplicación']
  },

  // ---------------- LA PUISSANCE — NUTRITION (argán + ác. hialurónico) ----
  {
    id: 'lp15',
    name: 'Nutrition · Shampoo 300 ml',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Champú',
    price: 20300,
    rating: 4.7,
    reviews: 2140,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Shampoo___Nutrition_300_ml.jpg?v=1774615297&width=1500',
    image: '🧴',
    color: '#fde68a',
    description:
      'Champú Nutrition con aceite de argán y ácido hialurónico liposomado. Nutrición intensa para cabellos secos y dañados.',
    characteristics: {
      size: '300 ml',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Nutrición', 'Hidratación', 'Suavidad'],
      keyIngredients: ['Aceite de argán', 'Ácido hialurónico liposomado'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Hidrata sin pesar', 'Vegano', 'Aroma sofisticado'],
    cons: ['Premium para uso diario']
  },
  {
    id: 'lp16',
    name: 'Nutrition · Tratamiento 300 ml',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Acondicionador',
    price: 17600,
    rating: 4.6,
    reviews: 1480,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Tratamiento___Nutrition_300_ml.jpg?v=1774880632&width=1500',
    image: '💆',
    color: '#fde68a',
    description:
      'Acondicionador Nutrition con argán y ácido hialurónico. Suaviza, desenreda y nutre profundamente.',
    characteristics: {
      size: '300 ml',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Nutrición', 'Suavidad', 'Desenredo'],
      keyIngredients: ['Aceite de argán', 'Ácido hialurónico liposomado'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Vegano', 'Brillo notable'],
    cons: ['Aroma muy intenso']
  },
  {
    id: 'lp17',
    name: 'Nutrition · Máscara 250 ml',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Mascarilla',
    price: 17600,
    rating: 4.7,
    reviews: 1660,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01.Mascara___Nutrition_250_ml.jpg?v=1774880399&width=1500',
    image: '🪮',
    color: '#fde68a',
    description:
      'Mascarilla Nutrition con argán y ácido hialurónico liposomado. Restaura cabellos secos en una aplicación.',
    characteristics: {
      size: '250 ml',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Nutrición profunda', 'Hidratación'],
      keyIngredients: ['Aceite de argán', 'Ácido hialurónico liposomado'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Excelente relación precio/efecto', 'Vegano'],
    cons: ['Pesa en cabello fino']
  },
  {
    id: 'lp18',
    name: 'Nutrition · Óleo de Argán 30 ml',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Aceite',
    price: 18000,
    rating: 4.8,
    reviews: 980,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/1_Oleo___Nutrition_30_ml.jpg?v=1774880700&width=1500',
    image: '✨',
    color: '#d97757',
    description:
      'Óleo Nutrition con aceite de argán. Aporta brillo intenso y sella puntas. Pocas gotas alcanzan.',
    characteristics: {
      size: '30 ml',
      hairType: ['Todos', 'Seco', 'Frizz'],
      benefits: ['Brillo', 'Sellado puntas', 'Antifrizz'],
      keyIngredients: ['Aceite de argán'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Rinde mucho', 'Brillo espejo'],
    cons: ['Frasco pequeño']
  },
  {
    id: 'lp19',
    name: 'Nutrition · Crema de Peinar',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Crema de peinar',
    price: 20200,
    rating: 4.6,
    reviews: 720,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Crema_de_peinar___Nutrition.jpg?v=1774880010&width=1500',
    image: '🌿',
    color: '#fde68a',
    description:
      'Crema de peinar Nutrition sin enjuague. Modela y nutre con argán y ácido hialurónico.',
    characteristics: {
      size: '250 ml',
      hairType: ['Seco', 'Frizz'],
      benefits: ['Nutrición', 'Modelado', 'Antifrizz'],
      keyIngredients: ['Aceite de argán', 'Ácido hialurónico'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['No deja efecto cartón', 'Vegano'],
    cons: ['Hay que dosificar']
  },
  {
    id: 'lp20',
    name: 'Nutrition · Spray Final Touch 100 ml',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Tratamiento',
    price: 13500,
    rating: 4.6,
    reviews: 380,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Spray_Final_Touch___Nutrition.jpg?v=1774880581&width=1500',
    image: '💫',
    color: '#fde68a',
    description:
      'Niebla de aceite de argán y ácido hialurónico liposomado. Toque final que aporta brillo y disciplina sin engrasar.',
    characteristics: {
      size: '100 ml',
      hairType: ['Todos'],
      benefits: ['Brillo', 'Toque final'],
      keyIngredients: ['Aceite de argán', 'Ácido hialurónico'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Niebla muy fina', 'No engrasa'],
    cons: ['Acción más cosmética que tratante']
  },
  {
    id: 'lp21',
    name: 'Nutrition · Ampolla Shock 15 ml',
    brand: 'La Puissance',
    line: 'Nutrition',
    subcategory: 'Ampollas',
    price: 7900,
    rating: 4.6,
    reviews: 460,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Ampolla_Shock_Nutrition.jpg?v=1774879941&width=1500',
    image: '⚗️',
    color: '#fde68a',
    description:
      'Ampolla shock Nutrition con argán y ácido hialurónico liposomado. Tratamiento express en monodosis.',
    characteristics: {
      size: '15 ml',
      hairType: ['Seco', 'Dañado'],
      benefits: ['Nutrición express', 'Brillo'],
      keyIngredients: ['Aceite de argán', 'Ácido hialurónico'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Económica para probar la línea', 'Vegana'],
    cons: ['Una sola aplicación']
  },

  // ---------------- LA PUISSANCE — KÉRATINE ----------------
  {
    id: 'lp22',
    name: 'Kératine · Shampoo Reparador 300 ml',
    brand: 'La Puissance',
    line: 'Kératine',
    subcategory: 'Champú',
    price: 16600,
    rating: 4.6,
    reviews: 1440,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/Keratine___Shampoo_Reparador.jpg?v=1774614893&width=1500',
    image: '🧴',
    color: '#fef3c7',
    description:
      'Champú reparador con queratina hidrolizada. Reestructura cabellos dañados o con frizz.',
    characteristics: {
      size: '300 ml',
      hairType: ['Dañado', 'Frizz'],
      benefits: ['Reparación', 'Antifrizz'],
      keyIngredients: ['Queratina hidrolizada'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Vegano', 'Buen precio para línea pro'],
    cons: ['Aroma fuerte']
  },
  {
    id: 'lp23',
    name: 'Kératine · Tratamiento Reparador 300 ml',
    brand: 'La Puissance',
    line: 'Kératine',
    subcategory: 'Acondicionador',
    price: 16600,
    rating: 4.6,
    reviews: 1180,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/Keratine_TratamientoReparadorx300ML.jpg?v=1774890545&width=1500',
    image: '💆',
    color: '#fef3c7',
    description:
      'Acondicionador con queratina hidrolizada. Suaviza, sella cutícula y reduce el frizz.',
    characteristics: {
      size: '300 ml',
      hairType: ['Dañado', 'Frizz'],
      benefits: ['Reparación', 'Antifrizz', 'Suavidad'],
      keyIngredients: ['Queratina hidrolizada'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Disciplina mucho', 'Vegano'],
    cons: ['Aroma intenso']
  },
  {
    id: 'lp24',
    name: 'Kératine · Máscara Reparadora 250 ml',
    brand: 'La Puissance',
    line: 'Kératine',
    subcategory: 'Mascarilla',
    price: 16600,
    rating: 4.7,
    reviews: 1380,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/MascaraReparadora_Keratine_250ml.jpg?v=1774890506&width=1500',
    image: '🪮',
    color: '#fef3c7',
    description:
      'Mascarilla reparadora con queratina hidrolizada. Reestructura la fibra y aporta fuerza.',
    characteristics: {
      size: '250 ml',
      hairType: ['Dañado', 'Quebradizo'],
      benefits: ['Reparación', 'Fortalecimiento'],
      keyIngredients: ['Queratina hidrolizada'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Vegano', 'Excelente relación precio/efecto'],
    cons: ['Para uso semanal']
  },
  {
    id: 'lp25',
    name: 'Kératine · Crema de Peinar',
    brand: 'La Puissance',
    line: 'Kératine',
    subcategory: 'Crema de peinar',
    price: 18200,
    rating: 4.6,
    reviews: 540,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Cremadepeinar_Keratine.jpg?v=1774890477&width=1500',
    image: '🌿',
    color: '#fef3c7',
    description:
      'Crema de peinar Kératine sin enjuague. Sella la cutícula y disciplina el frizz con keratina.',
    characteristics: {
      size: '250 ml',
      hairType: ['Dañado', 'Frizz'],
      benefits: ['Antifrizz', 'Modelado'],
      keyIngredients: ['Queratina hidrolizada'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Disciplina sin endurecer', 'Vegano'],
    cons: ['Hay que dosificar']
  },

  // ---------------- LA PUISSANCE — COLOR (matizadores y color) ----------
  {
    id: 'lp26',
    name: 'Silver · Shampoo Matizador 300 ml',
    brand: 'La Puissance',
    line: 'Silver',
    subcategory: 'Champú',
    price: 23200,
    rating: 4.7,
    reviews: 1820,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01.Silver___Shampoo_Matizador_300_ml.jpg?v=1774614824&width=1500',
    image: '🟣',
    color: '#a78bfa',
    description:
      'Champú matizador violeta Silver. Neutraliza tonos amarillos en rubios, decolorados y canas con alta pigmentación.',
    characteristics: {
      size: '300 ml',
      hairType: ['Rubio', 'Canas', 'Decolorado'],
      benefits: ['Matiza amarillo', 'Brillo'],
      keyIngredients: ['Pigmento violeta'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Pigmento muy potente', 'Vegano'],
    cons: ['Hay que controlar tiempo de pose']
  },
  {
    id: 'lp27',
    name: 'Silver · Máscara Matizadora 250 ml',
    brand: 'La Puissance',
    line: 'Silver',
    subcategory: 'Mascarilla',
    price: 23900,
    rating: 4.7,
    reviews: 1340,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01.Silver_MascaraMatizadora.jpg?v=1774614824&width=1500',
    image: '🟣',
    color: '#a78bfa',
    description:
      'Máscara matizadora Silver. Hidrata mientras neutraliza el amarillo. Doble función matizadora + tratamiento.',
    characteristics: {
      size: '250 ml',
      hairType: ['Rubio', 'Canas', 'Decolorado'],
      benefits: ['Matiza amarillo', 'Hidratación'],
      keyIngredients: ['Pigmento violeta'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Doble función', 'Vegano'],
    cons: ['Mancha si se deja mucho']
  },
  {
    id: 'lp28',
    name: 'Royal Elixir · Shampoo 300 ml',
    brand: 'La Puissance',
    line: 'Royal Elixir',
    subcategory: 'Champú',
    price: 24900,
    rating: 4.8,
    reviews: 720,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/Shampoo-RoyalElixir.jpg?v=1774614824&width=1500',
    image: '👑',
    color: '#fbbf24',
    description:
      'Champú Royal Elixir. Línea premium para cabellos teñidos: protege color y aporta brillo profundo.',
    characteristics: {
      size: '300 ml',
      hairType: ['Teñido', 'Coloreado'],
      benefits: ['Protección color', 'Brillo'],
      keyIngredients: ['Royal Elixir complex'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Línea premium', 'Conserva color'],
    cons: ['Precio alto']
  },
  {
    id: 'lp29',
    name: 'Color Protection · Shampoo Fijador 300 ml',
    brand: 'La Puissance',
    line: 'Color Protection',
    subcategory: 'Champú',
    price: 21200,
    rating: 4.6,
    reviews: 940,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/Formas-ColorFixing-Shampoo.jpg?v=1774614824&width=1500',
    image: '🎨',
    color: '#fbcfe8',
    description:
      'Champú fijador de color. Prolonga la duración del color y reduce el desvanecimiento entre lavados.',
    characteristics: {
      size: '300 ml',
      hairType: ['Teñido'],
      benefits: ['Protección color', 'Brillo'],
      keyIngredients: ['Filtros UV', 'Activos fijadores'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Mantiene color vivo', 'Vegano'],
    cons: ['Espuma media']
  },
  {
    id: 'lp30',
    name: 'Black Platinum · Shampoo 300 ml',
    brand: 'La Puissance',
    line: 'Black Platinum',
    subcategory: 'Champú',
    price: 25500,
    rating: 4.7,
    reviews: 580,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01_Shampoo___Black_Platinum_300_ml.jpg?v=1774614824&width=1500',
    image: '⚫',
    color: '#1f2937',
    description:
      'Champú matizador Black Platinum. Refresca tonos negros y oscuros, neutraliza reflejos cobrizos.',
    characteristics: {
      size: '300 ml',
      hairType: ['Negro', 'Castaño oscuro', 'Gris'],
      benefits: ['Matiza tono', 'Profundidad'],
      keyIngredients: ['Pigmento negro/azul'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Aviva el negro', 'Vegano'],
    cons: ['Mancha si se deja mucho']
  },

  // ---------------- LA PUISSANCE — STYLING ----------------
  {
    id: 'lp31',
    name: 'Curl Definition · Crema Modeladora 250 ml',
    brand: 'La Puissance',
    line: 'Curl Definition',
    subcategory: 'Styling',
    price: 22900,
    rating: 4.8,
    reviews: 2240,
    imageUrl: 'https://lapuissance.com.ar/cdn/shop/files/01.Crema_modeladora___Curl_Definition.jpg?v=1774878421&width=1500',
    image: '🌀',
    color: '#fbcfe8',
    description:
      'Crema modeladora Curl Definition. Define rizos sin apelmazar, controla el frizz y deja movimiento natural.',
    characteristics: {
      size: '250 ml',
      hairType: ['Rizado', 'Ondulado', 'Crespo'],
      benefits: ['Definición rizos', 'Antifrizz', 'Modelado'],
      keyIngredients: ['Polímeros', 'Glicerina'],
      sulfateFree: true,
      vegan: true,
      origin: 'Argentina'
    },
    pros: ['Best seller curly', 'Apto curly method', 'Vegano'],
    cons: ['Hay que probar dosis']
  }
]

export const subcategories = [...new Set(products.map(p => p.subcategory))]
export const brands = [...new Set(products.map(p => p.brand))]
