// Hair-only catalog: Fidelité (https://www.fidelite.com.ar) + Opción (https://www.opcionsalon.com.ar)
// Images from each brand's official site.
// Prices in ARS sourced (May 2026) from real retailers:
//   Fidelité → BM Distribuidora (bmdistribuidora.com.ar), Stylist Factory, VM Cosmética, Siempre Farmacias
//   Opción  → Simple Insumos (simpleinsumos.mitiendanube.com), Burbujas Perfumerías, Casa Roma

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
  }
]

export const subcategories = [...new Set(products.map(p => p.subcategory))]
export const brands = [...new Set(products.map(p => p.brand))]
