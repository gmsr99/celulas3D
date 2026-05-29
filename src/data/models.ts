export interface CellModel {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  size: string;
  location: string;
  visibleInLM: string;
  accent: string;
  features: { name: string; detail: string }[];
  funFact: string;
  whereItOccurs: {
    text: string;
    habitat: string;
  };
  modelUrl: string;
  imageUrl: string;
  fileSize: number;
  defaultRotationY: number;
  displayScale: number;
}

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p}`.replace(/\/+/g, '/');

export const MODELS: CellModel[] = [
  {
    id: 'plant-cell',
    name: 'Célula Vegetal',
    subtitle: 'Célula eucariota · Organismo autotrófico',
    category: 'Célula Eucariota',
    accent: '#7fb069',
    description:
      'A célula vegetal é a unidade básica que constitui os organismos vegetais. Ao contrário da célula animal, possui uma parede celular rígida, cloroplastos que realizam a fotossíntese e um grande vacúolo central para armazenar nutrientes e água. São os cloroplastos que capturam energia solar e a convertem em matéria orgânica, tornando as plantas a base de quase todos os ecossistemas.',
    size: '10 – 100 µm',
    location: 'Raízes, caules, folhas, flores e frutos das plantas',
    visibleInLM: 'Sim',
    features: [
      { name: 'Parede celular', detail: 'Constituída por celulose; confere suporte estrutural e proteção mecânica' },
      { name: 'Cloroplasto', detail: 'Local da fotossíntese; converte energia luminosa em matéria orgânica' },
      { name: 'Vacúolo central', detail: 'Armazena água, açúcares e pigmentos; mantém a turgescência' },
      { name: 'Núcleo', detail: 'Armazena a informação genética e regula o metabolismo e a divisão celular' },
      { name: 'Mitocôndria', detail: 'A fábrica de energia da célula; realiza a respiração aeróbia' },
      { name: 'Retículo endoplasmático e aparelho de Golgi', detail: 'Síntese, processamento e transporte de proteínas' },
    ],
    funFact:
      'Uma folha madura pode conter até 500 000 cloroplastos por milímetro quadrado. São eles que produzem o oxigénio que respiramos — a fotossíntese oxigenou a atmosfera terrestre há mais de 2 mil milhões de anos.',
    whereItOccurs: {
      text: 'Dos musgos às árvores mais altas, as células vegetais constroem o tapete verde da Terra.',
      habitat: 'Briófitas · Pteridófitas · Gimnospérmicas · Angiospérmicas',
    },
    modelUrl: asset('models/plant-cell.glb'),
    imageUrl: asset('images/plant-cell.jpg'),
    fileSize: 6030628,
    defaultRotationY: -Math.PI / 4,
    displayScale: 1.4,
  },
  {
    id: 'animal-cell',
    name: 'Célula Animal',
    subtitle: 'Célula eucariota · Organismo heterotrófico',
    category: 'Célula Eucariota',
    accent: '#e8859a',
    description:
      'A célula animal não possui parede celular nem cloroplastos, dependendo de uma membrana plasmática flexível e de numerosos organelos para realizar o metabolismo e o movimento. Das células musculares cardíacas às células gliais do córtex cerebral, a sua espantosa diversidade molda organismos complexos.',
    size: '10 – 30 µm',
    location: 'Tecidos e órgãos de todos os animais',
    visibleInLM: 'Sim',
    features: [
      { name: 'Membrana plasmática', detail: 'Bicamada fosfolipídica que controla seletivamente a entrada e saída de substâncias' },
      { name: 'Núcleo', detail: 'Centro genético; contém ADN e nucléolo' },
      { name: 'Mitocôndria', detail: 'Produz ATP; designada "central elétrica da célula"' },
      { name: 'Retículo endoplasmático', detail: 'O rugoso sintetiza proteínas; o liso sintetiza lípidos' },
      { name: 'Aparelho de Golgi', detail: 'Centro de processamento e distribuição de proteínas' },
      { name: 'Lisossoma', detail: 'O "centro de reciclagem" da célula; degrada resíduos metabólicos' },
    ],
    funFact:
      'Um adulto possui cerca de 37 biliões de células — todas a cooperar, em cada segundo, para construir o "tu" que lê estas palavras.',
    whereItOccurs: {
      text: 'Dos espongiários mais simples às baleias, o corpo de todos os animais é constituído por células animais.',
      habitat: 'Mamíferos · Aves · Peixes · Insetos · Equinodermes',
    },
    modelUrl: asset('models/animal-cell.glb'),
    imageUrl: asset('images/animal-cell.jpg'),
    fileSize: 10673912,
    defaultRotationY: -Math.PI / 4,
    displayScale: 1.4,
  },
  {
    id: 'white-blood-cell',
    name: 'Glóbulo Branco',
    subtitle: 'Célula imunitária · Guardião do organismo',
    category: 'Célula Imunitária',
    accent: '#c8a2d8',
    description:
      'Os glóbulos brancos são os membros centrais do sistema imunitário, patrulhando o sangue e a linfa. Conseguem identificar agentes patogénicos invasores e defender a homeostase do organismo através de fagocitose, libertação de citocinas ou destruição dirigida.',
    size: '6 – 20 µm',
    location: 'Sangue, sistema linfático, medula óssea',
    visibleInLM: 'Sim',
    features: [
      { name: 'Núcleo de forma variável', detail: 'Multilobado nos granulócitos, reniforme nos monócitos, arredondado nos linfócitos' },
      { name: 'Membrana e pseudópodes', detail: 'Capaz de se deformar ativamente para atravessar paredes de capilares' },
      { name: 'Fagossoma', detail: 'Envolve e digere bactérias ou corpos estranhos invasores' },
      { name: 'Grânulos', detail: 'Armazenam enzimas e péptidos antimicrobianos; libertados para eliminar agentes patogénicos' },
      { name: 'Mitocôndria', detail: 'Fornece a energia necessária para as reações imunitárias' },
    ],
    funFact:
      'Um adulto saudável produz cerca de 100 mil milhões de novos glóbulos brancos por dia — quase doze vezes a população total da Terra.',
    whereItOccurs: {
      text: 'Em cada gota de sangue, milhões de glóbulos brancos patrulham o organismo 24 horas por dia.',
      habitat: 'Sangue · Medula óssea · Baço · Gânglios linfáticos',
    },
    modelUrl: asset('models/white-blood-cell.glb'),
    imageUrl: asset('images/white-blood-cell.jpg'),
    fileSize: 10812336,
    defaultRotationY: -Math.PI / 4,
    displayScale: 1.4,
  },
  {
    id: 'neuron',
    name: 'Neurónio',
    subtitle: 'Célula excitável · Transmissor de informação',
    category: 'Célula Nervosa',
    accent: '#f0a868',
    description:
      'O neurónio é a unidade básica do processamento de informação. As dendrites ramificadas recebem sinais como antenas, enquanto o longo axónio transporta impulsos elétricos para locais distantes. Comunicam em linguagem química e elétrica, tecendo a perceção, a memória e o pensamento.',
    size: 'Corpo celular 4 – 100 µm; axónio pode atingir 1 m',
    location: 'Cérebro, medula espinal, sistema nervoso periférico',
    visibleInLM: 'Sim (requer coloração)',
    features: [
      { name: 'Corpo celular', detail: 'Contém o núcleo e os principais organelos; integra os sinais de entrada' },
      { name: 'Dendrites', detail: 'Muito ramificadas; recebem sinais de outros neurónios' },
      { name: 'Axónio', detail: 'Conduz impulsos elétricos; pode estender-se até pontos distantes do corpo' },
      { name: 'Bainha de mielina', detail: 'Acelera a condução; formada por células de Schwann ou oligodendrócitos' },
      { name: 'Sinapse', detail: 'Transmite sinais à célula seguinte através de neurotransmissores' },
    ],
    funFact:
      'O cérebro humano tem cerca de 86 mil milhões de neurónios, e as conexões entre eles superam o número total de estrelas da Via Láctea.',
    whereItOccurs: {
      text: 'Dos olhos compostos das borboletas ao córtex cerebral humano, os neurónios conferem aos animais a capacidade de sentir e pensar.',
      habitat: 'Sistema nervoso central · Nervos periféricos · Órgãos sensoriais',
    },
    modelUrl: asset('models/neuron.glb'),
    imageUrl: asset('images/neuron.jpg'),
    fileSize: 7359744,
    defaultRotationY: -Math.PI / 4,
    displayScale: 1.8,
  },
  {
    id: 'dna',
    name: 'ADN em Dupla Hélice',
    subtitle: 'Molécula genética · O projeto da vida',
    category: 'Biomolécula',
    accent: '#9cc4e4',
    description:
      'O ADN é formado por duas cadeias nucleotídicas complementares enroladas numa elegante dupla hélice. As instruções da vida estão escritas em quatro letras — A, T, G e C — permitindo que a informação seja copiada, expressa e evoluída ao longo de mil milhões de anos e de geração em geração.',
    size: 'Diâmetro de cerca de 2 nm; comprimento varia conforme a espécie',
    location: 'Núcleo celular, mitocôndrias, cloroplastos',
    visibleInLM: 'Não (cromossomas visíveis ao M.O.)',
    features: [
      { name: 'Esqueleto da dupla hélice', detail: 'Formado por fosfato e desoxirribose alternados' },
      { name: 'Pares de bases', detail: 'A emparelha com T, G emparelha com C, através de pontes de hidrogénio' },
      { name: 'Sulcos maior e menor', detail: 'Estruturas-chave para o reconhecimento do ADN por proteínas' },
      { name: 'Replicação semiconservativa', detail: 'Cada replicação conserva uma cadeia parental como molde' },
    ],
    funFact:
      'O ADN de uma só célula, esticado em linha reta, mede cerca de 2 metros; o ADN de todas as células do corpo, unido, poderia ir e vir ao Sol centenas de vezes.',
    whereItOccurs: {
      text: 'Das bactérias mais antigas a cada célula do teu corpo, o ADN guarda silenciosamente o código da vida.',
      habitat: 'Bactérias · Arqueas · Eucariotas · Vírus (alguns)',
    },
    modelUrl: asset('models/dna.glb'),
    imageUrl: asset('images/dna.jpg'),
    fileSize: 9977020,
    defaultRotationY: 0,
    displayScale: 1.2,
  },
];

export const DEFAULT_MODEL_ID = MODELS[0].id;
