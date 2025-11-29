import { SiteContent, MosaicCategory, MosaicItem } from './types';
import { Palette, Ruler, Hammer, Truck } from 'lucide-react';

export const IMAGES = {
  // Fuji Project
  fuji: '/image/mt-fuji.jpg',
  fujiMaking: '/image/mt-fuji-making.jpg',
  
  // Religious / Facade Project
  byzantine: '/image/virgin-mary-baby-jesus.jpg',
  maryMaking: '/image/making-of-icon.jpg',
  maryIcon: '/image/the-madonna.jpg',
  jesusIcon: '/image/jesus-christ-A-O.jpg',
  artistWorking: '/image/making-of-icon.jpg',
  
  // Divine Mercy / Cross
  divineMercy: '/image/jesus-christ-on-cross.jpg',
  jesusCross: '/image/jesus-christ-on-cross.jpg',

  // Modern
  striker: '/image/erling-haaland-N9.jpg',
  
  // Classical
  musician: '/image/violin-player.jpg',
  horse: '/image/elite-horse.jpg',
  romanBust: '/image/Marcus-Aurelius.jpg',
  angels: '/image/angels-playin-violin-jesus.jpg',
  
  // Egyptian
  egyptian: '/image/cleopatra.jpg',
  
  // Girl with Pearl Earring
  girlPearl: '/image/girl-with-pearl-earring.jpg',
  girlPearlMaking: '/image/girl-with-pearl-earring-making.jpg',
  
  // Ataturk Project
  ataturk: '/image/kemal-ataturk-portrait.jpg',
  ataturkEye: '/image/kemal-ataturk-portrait-closeup1.jpg',
  ataturkFace: '/image/kemal-ataturk-portrait-closeup2.jpg',
  ataturkHat: '/image/kemal-ataturk-portrait-closeup3.jpg',
  
  // Bull Project
  bull: '/image/floor-bull-main.jpg',
  bullMaking: '/image/floor-bull-making1.jpg',
  bullDetail: '/image/floor-bull-making2.jpg',
  bullWide: '/image/floor-bull-side.jpg',
  
  // Mona Lisa
  monaLisa: '/image/mona-lisa.jpg',
  monaLisaMaking: '/image/mona-lisa.jpg',

  // Misc
  process: '/image/making-of-icon.jpg',
  hero: '/image/mt-fuji.jpg'
};

// Base data structure
const PORTFOLIO_DATA: Omit<MosaicItem, 'title' | 'description'>[] = [
  { 
    id: 'fuji', 
    category: MosaicCategory.LANDSCAPE, 
    imageUrl: IMAGES.fuji, 
    gallery: [IMAGES.fujiMaking],
    featured: true 
  },
  { 
    id: 'facade', 
    category: MosaicCategory.RELIGIOUS, 
    imageUrl: IMAGES.byzantine, 
    gallery: [IMAGES.jesusIcon, IMAGES.maryIcon, IMAGES.maryMaking, IMAGES.artistWorking],
    featured: true 
  },
  { 
    id: 'ataturk', 
    category: MosaicCategory.PORTRAIT, 
    imageUrl: IMAGES.ataturk, 
    gallery: [IMAGES.ataturkFace, IMAGES.ataturkEye, IMAGES.ataturkHat, '/image/kemal-ataturk-portrait-closeup4.jpg'],
    featured: true 
  },
  { 
    id: 'bull', 
    category: MosaicCategory.FLOOR, 
    imageUrl: IMAGES.bull, 
    gallery: [IMAGES.bullWide, IMAGES.bullDetail, IMAGES.bullMaking],
    featured: true 
  },
  { 
    id: 'pearl', 
    category: MosaicCategory.CLASSICAL, 
    imageUrl: IMAGES.girlPearl, 
    gallery: [IMAGES.girlPearlMaking],
    featured: true 
  },
  { 
    id: 'mona', 
    category: MosaicCategory.CLASSICAL, 
    imageUrl: IMAGES.monaLisa, 
    gallery: [IMAGES.monaLisaMaking] 
  },
  { id: 'striker', category: MosaicCategory.MODERN, imageUrl: IMAGES.striker },
  { id: 'musician', category: MosaicCategory.CLASSICAL, imageUrl: IMAGES.musician },
  { id: 'egyptian', category: MosaicCategory.PORTRAIT, imageUrl: IMAGES.egyptian },
  { id: 'horse', category: MosaicCategory.CLASSICAL, imageUrl: IMAGES.horse },
  { id: 'cross', category: MosaicCategory.RELIGIOUS, imageUrl: IMAGES.jesusCross },
  { id: 'roman', category: MosaicCategory.CLASSICAL, imageUrl: IMAGES.romanBust },
  { id: 'angels', category: MosaicCategory.RELIGIOUS, imageUrl: IMAGES.angels },
  { id: 'madonna', category: MosaicCategory.RELIGIOUS, imageUrl: '/image/the-madonna.jpg' },
  { id: 'icons', category: MosaicCategory.RELIGIOUS, imageUrl: '/image/icons-on-wall.jpg' },
  { id: 'floor-motiff', category: MosaicCategory.FLOOR, imageUrl: '/image/floor-motiff-mosaic.jpg' },
  { id: 'ataturk-suit', category: MosaicCategory.PORTRAIT, imageUrl: '/image/kemal-ataturk-in-suit.jpg' },
];

export const PORTFOLIO_ITEMS_EN: MosaicItem[] = [
  { ...PORTFOLIO_DATA[0], title: 'Mt. Fuji & Cherry Blossoms', description: 'A serene landscape capturing the ephemeral beauty of cherry blossoms against the eternal mountain. Includes process shots of the initial layout.' },
  { ...PORTFOLIO_DATA[1], title: 'Byzantine Facade Project', description: 'A comprehensive exterior installation featuring the Virgin Mary and Christ. This project demonstrates our capability to create large-scale, weather-resistant religious art, from studio fabrication to on-site installation on scaffolding.' },
  { ...PORTFOLIO_DATA[2], title: 'Atatürk Portrait', description: 'A dignified, hyper-realistic portrait of Mustafa Kemal Atatürk. Notice the incredible detail in the eyes and facial structure, achieved through micro-mosaic techniques.' },
  { ...PORTFOLIO_DATA[3], title: 'Bull Crest Medallion', description: 'A grand floor mosaic centerpiece featuring a heraldic bull. Crafted with durable stone for high-traffic areas, showing the evolution from loose stones to the final installed masterpiece.' },
  { ...PORTFOLIO_DATA[4], title: 'Girl with a Pearl Earring', description: 'A stone recreation of Vermeer\'s masterpiece. The gallery reveals the meticulous color matching process required to capture the famous light and expression.' },
  { ...PORTFOLIO_DATA[5], title: 'Mona Lisa', description: 'The enigmatic smile captured in natural stone tesserae. See the work in progress on the mesh before final grouting.' },
  { ...PORTFOLIO_DATA[6], title: 'The Striker', description: 'A dynamic modern portrait celebrating athletic excellence (Haaland), combining classical technique with pop-culture subject matter.' },
  { ...PORTFOLIO_DATA[7], title: 'The Musician', description: 'Classical interpretation of a musician playing violin, rich in texture and historical technique.' },
  { ...PORTFOLIO_DATA[8], title: 'Queen of the Nile', description: 'Egyptian royalty depicted with earthen tones and regal precision.' },
  { ...PORTFOLIO_DATA[9], title: 'Equine Power', description: 'A rearing horse mosaic showing movement and strength through the directional flow of the stones (andamento).' },
  { ...PORTFOLIO_DATA[10], title: 'Crucifixion', description: 'A solemn and powerful religious mosaic depicting Christ on the cross.' },
  { ...PORTFOLIO_DATA[11], title: 'Roman Philosopher', description: 'Textured reproduction of an ancient bust (Marcus Aurelius), focusing on the depth of the beard and hair.' },
  { ...PORTFOLIO_DATA[12], title: 'Angelic Harmony', description: 'A scene of angels playing music, delicate and spiritual.' },
  { ...PORTFOLIO_DATA[13], title: 'The Madonna', description: 'A beautiful religious icon featuring the Madonna with exceptional detail and craftsmanship.' },
  { ...PORTFOLIO_DATA[14], title: 'Sacred Icons Collection', description: 'A collection of religious icons displayed together, showcasing various devotional artworks.' },
  { ...PORTFOLIO_DATA[15], title: 'Floor Motiff Mosaic', description: 'An intricate floor mosaic pattern designed for elegant interior spaces.' },
  { ...PORTFOLIO_DATA[16], title: 'Atatürk in Suit', description: 'A formal portrait of Mustafa Kemal Atatürk in professional attire, demonstrating versatility in portrait styles.' },
] as MosaicItem[];

export const PORTFOLIO_ITEMS_BG: MosaicItem[] = [
  { ...PORTFOLIO_DATA[0], title: 'Фуджи и Черешови Цветове', description: 'Спокоен пейзаж, улавящ ефирната красота на вишневите цветове на фона на вечната планина. Включва снимки от процеса на първоначалното подреждане.' },
  { ...PORTFOLIO_DATA[1], title: 'Проект Византийска Фасада', description: 'Цялостна екстериорна инсталация, изобразяваща Дева Мария и Христос. Този проект демонстрира способността ни да създаваме мащабно, устойчиво на атмосферни влияния религиозно изкуство – от изработката в студиото до монтажа на скеле.' },
  { ...PORTFOLIO_DATA[2], title: 'Портрет на Ататюрк', description: 'Достолепен, хипер-реалистичен портрет на Мустафа Кемал Ататюрк. Забележете невероятния детайл в очите и лицевата структура, постигнат чрез микро-мозаечни техники.' },
  { ...PORTFOLIO_DATA[3], title: 'Медальон с Бик', description: 'Величествена подова мозайка с хералдически бик. Изработена от устойчив камък за натоварени зони, показваща еволюцията от насипни камъни до финалния шедьовър.' },
  { ...PORTFOLIO_DATA[4], title: 'Момичето с перлената обица', description: 'Каменна възстановка на шедьовъра на Вермеер. Галерията разкрива щателния процес на напасване на цветовете, необходим за улавянето на известната светлина и изражение.' },
  { ...PORTFOLIO_DATA[5], title: 'Мона Лиза', description: 'Загадъчната усмивка, уловена в естествени каменни тесери. Вижте работата в прогрес върху мрежата преди финалното фугиране.' },
  { ...PORTFOLIO_DATA[6], title: 'Нападателят', description: 'Динамичен модерен портрет, възхваляващ спортното съвършенство (Haaland), съчетаващ класическа техника със съвременна тематика.' },
  { ...PORTFOLIO_DATA[7], title: 'Музикантът', description: 'Класическа интерпретация на музикант с цигулка, богата на текстура и историческа техника.' },
  { ...PORTFOLIO_DATA[8], title: 'Царицата на Нил', description: 'Египетска кралска особа, изобразена със земни тонове и прецизност.' },
  { ...PORTFOLIO_DATA[9], title: 'Конска Сила', description: 'Мозайка на изправен кон, показваща движение и сила чрез посоката на редене на камъните (андаменто).' },
  { ...PORTFOLIO_DATA[10], title: 'Разпятие', description: 'Тържествена и въздействаща религиозна мозайка, изобразяваща Христос на кръста.' },
  { ...PORTFOLIO_DATA[11], title: 'Римски Философ', description: 'Текстурирана репродукция на античен бюст (Марк Аврелий), с акцент върху дълбочината на брадата и косата.' },
  { ...PORTFOLIO_DATA[12], title: 'Ангелска Хармония', description: 'Сцена с ангели, свирещи музика, нежна и духовна.' },
  { ...PORTFOLIO_DATA[13], title: 'Мадоната', description: 'Красив религиозен икон с Мадоната с изключителен детайл и майсторство.' },
  { ...PORTFOLIO_DATA[14], title: 'Колекция Свети Икони', description: 'Колекция от религиозни икони, показани заедно, представящи различни девоционални произведения на изкуството.' },
  { ...PORTFOLIO_DATA[15], title: 'Подова Мотив Мозайка', description: 'Сложна подова мозайка с шарка, проектирана за елегантни интериорни пространства.' },
  { ...PORTFOLIO_DATA[16], title: 'Ататюрк с Костюм', description: 'Формален портрет на Мустафа Кемал Ататюрк в професионално облекло, демонстриращ гъвкавост в портретните стилове.' },
] as MosaicItem[];

export const TRANSLATIONS: Record<'en' | 'bg', SiteContent> = {
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Handcrafted in Bulgaria',
      title: 'Eternal Art in Every Stone',
      description: 'We transform spaces with bespoke mosaic masterpieces. From intricate wall features to durable floor artistry, we bring the "wow" factor to your property.',
      ctaPortfolio: 'View Portfolio',
      ctaQuote: 'Get a Quote',
      unlimitedSize: 'Unlimited Size • Your Photos • Custom Designs',
    },
    intro: {
      title: 'Custom Mosaics, Effortless Installation',
      description: 'We specialize in creating stunning custom mosaics tailored to your exact specifications. Based in Bulgaria, we serve clients who demand excellence.',
      feature1Title: 'Pre-assembled on Mesh',
      feature1Desc: 'Our larger pieces are delivered in numbered squares, allowing specifically for rapid, clean installation without taking up your space.',
      feature2Title: 'The "Wow" Factor Experience',
      feature2Desc: 'Want to see the magic happen? We offer on-site creation services to turn the installation into a live art performance.',
      feature3Title: 'Your Vision, No Limits',
      feature3Desc: 'Work with your photos, designs, or ideas. We create custom mosaics of any size - from small art pieces to large-scale installations.',
    },
    featured: {
      subtitle: 'Portfolio',
      title: 'Recent Masterpieces',
      viewAll: 'View All Works',
      viewDetails: 'View Project',
    },
    process: {
      title: 'How We Work',
      description: 'From the first sketch to the final stone, our process is transparent, professional, and artistic.',
      steps: [
        {
          title: 'Consultation',
          description: 'We discuss your vision, dimensions, and style requirements. We work on custom orders tailored to your space.',
          icon: Palette
        },
        {
          title: 'Visualization',
          description: 'We create a detailed digital preview of your mosaic. Revisions are included to ensure it matches your dream.',
          icon: Ruler
        },
        {
          title: 'Crafting',
          description: 'Once a 20% deposit is placed, we hand-cut and assemble your mosaic in our Bulgarian studio on specialized mesh.',
          icon: Hammer
        },
        {
          title: 'Installation',
          description: 'Small works come fully assembled. Large works come in numbered squares on mesh for rapid, clean installation.',
          icon: Truck
        }
      ]
    },
    pricing: {
      title: 'Transparent Pricing',
      description: 'Premium materials and artisan labor, priced clearly. Custom projects of any size - we work with your vision.',
      choose: 'Choose',
      depositTitle: 'Deposit & Payment',
      depositDesc: (deposit) => `We require a ${deposit} deposit to begin the custom order process (Visualization & Sourcing). The remaining balance is due upon completion.`,
      unlimitedNote: 'No size restrictions - from small art to large installations',
      tiers: [
        {
          title: 'Wall Mosaic',
          price: 1250,
          unit: '/m²',
          recommendedFor: 'Backsplashes, Feature Walls, Facades',
          features: [
            'Custom Design & Visualization',
            'Hand-cut stones',
            'Pre-assembled on mesh',
            'Installation guide included',
            'Weather resistant options'
          ]
        },
        {
          title: 'Floor Mosaic',
          price: 1750,
          unit: '/m²',
          recommendedFor: 'Entryways, Bathrooms, Commercial Spaces',
          features: [
            'Durable stone selection',
            'Reinforced structure',
            'Slip-resistant finish',
            'Pre-assembled on mesh',
            'Heavy-duty installation guide'
          ]
        },
        {
          title: 'On-Site Installation',
          price: 250,
          unit: '/m²',
          recommendedFor: 'Large projects, Complex designs',
          features: [
            'Professional installation team',
            'On-site adjustments',
            'Grouting & finishing',
            'Project supervision',
            'Final quality inspection'
          ]
        }
      ]
    },
    portfolioPage: {
      title: 'Our Work',
      description: 'Explore our collection of custom mosaics. Click on a project to see the creation process, sketches, and detailed close-ups.',
      viewDetails: 'View Project',
      interested: 'Interested in a similar piece?',
      inquire: 'Inquire About This Style',
      processTitle: 'Process & Details',
      categories: {
        [MosaicCategory.ALL]: 'All',
        [MosaicCategory.PORTRAIT]: 'Portrait',
        [MosaicCategory.RELIGIOUS]: 'Religious',
        [MosaicCategory.LANDSCAPE]: 'Landscape',
        [MosaicCategory.CLASSICAL]: 'Classical',
        [MosaicCategory.MODERN]: 'Modern',
        [MosaicCategory.FLOOR]: 'Floor'
      }
    },
    contactPage: {
      title: 'Start Your Project',
      description: 'Ready to transform your space with a custom mosaic? We provide consultations, detailed visualizations, and global shipping options.',
      infoTitle: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      location: 'Studio Location',
      locationValue: 'Momchilgrad, Bulgaria',
      turnaround: 'Turnaround Time',
      turnaroundValue: 'Custom orders typically take 4-8 weeks.',
      formTitle: 'Request a Quote',
      nameLabel: 'Name',
      emailLabel: 'Email',
      typeLabel: 'Mosaic Type',
      sizeLabel: 'Approx. Area (m²)',
      msgLabel: 'Project Details',
      submit: 'Send Request',
      privacy: 'We respect your privacy. No spam.',
      mosaicTypes: [
        'Wall Mosaic (From €1250/m²)',
        'Floor Mosaic (From €1750/m²)',
        'On-Site Installation (From €250/m²)',
        'Custom Project (Client Photos/Design)',
        'Other / Unsure'
      ]
    },
    footer: {
      description: 'Handcrafted mosaics from the heart of Bulgaria. Bringing ancient techniques to modern spaces with precision and passion.',
      explore: 'Explore',
      contact: 'Contact',
      rights: 'All rights reserved.'
    }
  },
  bg: {
    nav: {
      home: 'Начало',
      portfolio: 'Портфолио',
      contact: 'Контакт',
    },
    hero: {
      subtitle: 'Ръчно изработено в България',
      title: 'Вечно изкуство във всеки камък',
      description: 'Ние трансформираме пространства с поръчкови мозаечни шедьоври. От сложни стенни пана до издръжливи подови настилки, ние внасяме "wow" ефекта във вашия имот.',
      ctaPortfolio: 'Разгледай Портфолиото',
      ctaQuote: 'Поискай Оферта',
      unlimitedSize: 'Без Ограничения в Размерите • Вашите Снимки • Персонализирани Дизайни',
    },
    intro: {
      title: 'Поръчкови Мозайки, Лесен Монтаж',
      description: 'Ние сме специализирани в създаването на зашеметяващи поръчкови мозайки, съобразени с вашите точни спецификации. Базирани в България, ние обслужваме клиенти, които изискват съвършенство.',
      feature1Title: 'Предварително сглобени на мрежа',
      feature1Desc: 'Нашите по-големи произведения се доставят в номерирани квадрати, позволяващи бърз и чист монтаж, без да заемаме вашето място.',
      feature2Title: 'Ефектът "Wow"',
      feature2Desc: 'Искате ли да видите магията на живо? Предлагаме услуги за изработка на място, превръщайки монтажа в представление на живо.',
      feature3Title: 'Вашата Визия, Без Граници',
      feature3Desc: 'Работим с вашите снимки, дизайни или идеи. Създаваме поръчкови мозайки с всякакъв размер - от малки арт произведения до мащабни инсталации.',
    },
    featured: {
      subtitle: 'Портфолио',
      title: 'Скорошни Шедьоври',
      viewAll: 'Виж Всички',
      viewDetails: 'Преглед',
    },
    process: {
      title: 'Как Работим',
      description: 'От първата скица до последния камък, нашият процес е прозрачен, професионален и артистичен.',
      steps: [
        {
          title: 'Консултация',
          description: 'Обсъждаме вашата визия, размери и стилови изисквания. Работим по индивидуални поръчки, съобразени с вашето пространство.',
          icon: Palette
        },
        {
          title: 'Визуализация',
          description: 'Създаваме детайлен дигитален преглед на вашата мозайка. Включени са корекции, за да сме сигурни, че отговаря на мечтите ви.',
          icon: Ruler
        },
        {
          title: 'Изработка',
          description: 'След депозит от 20%, ние ръчно изрязваме и сглобяваме вашата мозайка в нашето студио в България върху специализирана мрежа.',
          icon: Hammer
        },
        {
          title: 'Монтаж',
          description: 'Малките творби пристигат напълно сглобени. Големите творби идват в номерирани квадрати за бърз и чист монтаж.',
          icon: Truck
        }
      ]
    },
    pricing: {
      title: 'Прозрачно Ценообразуване',
      description: 'Премиум материали и занаятчийски труд, с ясни цени. Персонализирани проекти с всякакъв размер - работим с вашата визия.',
      choose: 'Избери',
      depositTitle: 'Депозит и Плащане',
      depositDesc: (deposit) => `Изискваме ${deposit} депозит за стартиране на процеса (Визуализация и Снабдяване). Остатъкът се дължи при завършване.`,
      unlimitedNote: 'Без ограничения в размерите - от малко изкуство до големи инсталации',
      tiers: [
        {
          title: 'Стенна Мозайка',
          price: 1250,
          unit: '/м²',
          recommendedFor: 'Гърбове на кухни, Акцентни стени, Фасади',
          features: [
            'Индивидуален дизайн и визуализация',
            'Ръчно рязани камъни',
            'Предварително сглобени на мрежа',
            'Ръководство за монтаж',
            'Опции за атмосферни влияния'
          ]
        },
        {
          title: 'Подова Мозайка',
          price: 1750,
          unit: '/м²',
          recommendedFor: 'Антрета, Бани, Търговски пространства',
          features: [
            'Избор на издръжлив камък',
            'Подсилена структура',
            'Анхлъзустойчива повърхност',
            'Предварително сглобени на мрежа',
            'Ръководство за тежък монтаж'
          ]
        },
        {
          title: 'Монтаж на Място',
          price: 250,
          unit: '/м²',
          recommendedFor: 'Големи проекти, Сложни дизайни',
          features: [
            'Професионален екип за монтаж',
            'Корекции на място',
            'Фугиране и довършване',
            'Надзор на проекта',
            'Финален контрол на качеството'
          ]
        }
      ]
    },
    portfolioPage: {
      title: 'Нашата Работа',
      description: 'Разгледайте нашата колекция от поръчкови мозайки. Кликнете върху проект, за да видите процеса на създаване, скици и детайли в близък план.',
      viewDetails: 'Виж Проекта',
      interested: 'Интересувате се от подобна творба?',
      inquire: 'Запитайте за този стил',
      processTitle: 'Процес и Детайли',
      categories: {
        [MosaicCategory.ALL]: 'Всички',
        [MosaicCategory.PORTRAIT]: 'Портрет',
        [MosaicCategory.RELIGIOUS]: 'Религиозни',
        [MosaicCategory.LANDSCAPE]: 'Пейзаж',
        [MosaicCategory.CLASSICAL]: 'Класически',
        [MosaicCategory.MODERN]: 'Модерни',
        [MosaicCategory.FLOOR]: 'Подови'
      }
    },
    contactPage: {
      title: 'Стартирайте Проекта Си',
      description: 'Готови ли сте да преобразите пространството си с поръчкова мозайка? Предлагаме консултации, детайлни визуализации и опции за доставка в цял свят.',
      infoTitle: 'Информация за Контакт',
      phone: 'Телефон',
      email: 'Имейл',
      location: 'Локация на Студиото',
      locationValue: 'Момчилград, България',
      turnaround: 'Време за Изработка',
      turnaroundValue: 'Поръчковите модели обикновено отнемат 4-8 седмици.',
      formTitle: 'Поискайте Оферта',
      nameLabel: 'Име',
      emailLabel: 'Имейл',
      typeLabel: 'Тип Мозайка',
      sizeLabel: 'Приблизителна Площ (м²)',
      msgLabel: 'Детайли за Проекта',
      submit: 'Изпрати Запитване',
      privacy: 'Ние уважаваме поверителността ви. Без спам.',
      mosaicTypes: [
        'Стенна Мозайка (От €1250/м²)',
        'Подова Мозайка (От €1750/м²)',
        'Монтаж на Място (От €250/м²)',
        'Персонализиран Проект (Снимки/Дизайн на Клиент)',
        'Друго / Не съм сигурен'
      ]
    },
    footer: {
      description: 'Ръчно изработени мозайки от сърцето на България. Пренасяне на древни техники в модерни пространства с прецизност и страст.',
      explore: 'Разгледай',
      contact: 'Контакт',
      rights: 'Всички права запазени.'
    }
  }
};