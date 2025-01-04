export interface StyleResult {
  id: string
  title: string
  description: string
  traits: string[]
  recommendations: string[]
  celebrities: string[]
  image: string
}

export interface AuraResult {
  id: string
  title: string
  description: string
  influence: string
  strengths: string[]
  challenges: string[]
  advice: string[]
  image: string
}

export const styleResults: Record<string, StyleResult> = {
  'avant-garde-visionary': {
    id: 'avant-garde-visionary',
    title: "The Avant-Garde Visionary",
    description: "You're a true fashion pioneer, always pushing boundaries and experimenting with unconventional combinations. Your style is a form of artistic expression that challenges traditional fashion norms.",
    traits: ["Innovative", "Bold", "Experimental", "Artistic", "Forward-thinking"],
    recommendations: [
      "Invest in architectural pieces with unique silhouettes",
      "Experiment with asymmetrical designs and unexpected proportions",
      "Mix contrasting textures and materials",
      "Focus on statement pieces that challenge conventional fashion",
      "Incorporate cutting-edge designer collaborations"
    ],
    celebrities: ["Lady Gaga", "Tilda Swinton", "Björk"],
    image: "/placeholder.svg?height=400&width=600"
  },
  'urban-maverick': {
    id: 'urban-maverick',
    title: "The Urban Maverick",
    description: "Street-smart and culturally aware, you blend urban aesthetics with contemporary fashion. Your style is a perfect mix of comfort and cutting-edge trends.",
    traits: ["Versatile", "Street-smart", "Trendsetting", "Authentic", "Dynamic"],
    recommendations: [
      "Combine luxury streetwear with vintage finds",
      "Focus on premium sneakers and statement outerwear",
      "Layer pieces in unexpected ways",
      "Incorporate technical fabrics and utility-inspired pieces",
      "Mix high-end and street brands"
    ],
    celebrities: ["A$AP Rocky", "Virgil Abloh", "Rihanna"],
    image: "/placeholder.svg?height=400&width=600"
  },
  'minimalist-futurist': {
    id: 'minimalist-futurist',
    title: "The Minimalist Futurist",
    description: "You embrace clean lines and innovative materials, creating a style that's both timeless and forward-looking. Your wardrobe is a testament to the power of simplicity.",
    traits: ["Refined", "Tech-savvy", "Precise", "Modern", "Sophisticated"],
    recommendations: [
      "Invest in high-quality basics with technical features",
      "Choose pieces with clean lines and minimal branding",
      "Focus on monochromatic color schemes",
      "Incorporate smart fabrics and sustainable materials",
      "Select versatile pieces that work in multiple settings"
    ],
    celebrities: ["Jaden Smith", "Zendaya", "Elon Musk"],
    image: "/placeholder.svg?height=400&width=600"
  }
}

export const auraResults: Record<string, AuraResult> = {
  'radiant-influencer': {
    id: 'radiant-influencer',
    title: "The Radiant Influencer",
    description: "Your fashion choices light up the room and inspire those around you. You have a natural ability to set trends and influence others through your authentic style expression.",
    influence: "You possess a magnetic fashion presence that naturally draws others in. Your style choices create ripple effects in your social circles, inspiring others to embrace their own unique fashion journey.",
    strengths: [
      "Natural trend forecasting ability",
      "Authentic style expression",
      "Strong visual communication",
      "Fashion leadership",
      "Creative inspiration"
    ],
    challenges: [
      "Balancing authenticity with influence",
      "Maintaining consistency while evolving",
      "Managing pressure to always innovate",
      "Staying true to personal style while inspiring others"
    ],
    advice: [
      "Use your influence to promote sustainable fashion choices",
      "Share your style journey to inspire authenticity in others",
      "Create content that helps others develop their own style",
      "Build a community around your fashion philosophy"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  'ethereal-visionary': {
    id: 'ethereal-visionary',
    title: "The Ethereal Visionary",
    description: "Your fashion aura transcends current trends, creating a mystical and inspiring presence. You see fashion as a form of spiritual expression.",
    influence: "Your style creates an almost magical atmosphere, encouraging others to explore the deeper meaning behind their fashion choices.",
    strengths: [
      "Deep fashion intuition",
      "Spiritual connection to style",
      "Unique perspective",
      "Artistic vision",
      "Emotional intelligence"
    ],
    challenges: [
      "Translating abstract visions into wearable styles",
      "Finding balance between uniqueness and accessibility",
      "Maintaining groundedness while being innovative",
      "Communicating your vision to others"
    ],
    advice: [
      "Trust your intuition when making style choices",
      "Create rituals around your dressing process",
      "Share the stories behind your outfit choices",
      "Help others connect with their inner style voice"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  'dynamic-catalyst': {
    id: 'dynamic-catalyst',
    title: "The Dynamic Catalyst",
    description: "You're a fashion force that sparks change and innovation. Your style choices create momentum and inspire transformation in others.",
    influence: "Your fashion presence acts as a catalyst for change, encouraging others to step out of their comfort zones and embrace bold style choices.",
    strengths: [
      "Change leadership",
      "Bold decision making",
      "Innovative thinking",
      "Transformative influence",
      "Strategic style planning"
    ],
    challenges: [
      "Managing the pace of change",
      "Helping others adapt to new trends",
      "Maintaining balance while pushing boundaries",
      "Sustaining energy and momentum"
    ],
    advice: [
      "Lead by example in sustainable fashion choices",
      "Create stepping stones for others to follow",
      "Document and share your style evolution",
      "Build support systems for fashion innovation"
    ],
    image: "/placeholder.svg?height=400&width=600"
  }
}

const styleQuestions = [
  {
    id: 'vibe',
    question: 'What\'s your go-to vibe when you\'re getting ready?',
    options: [
      'Chill and comfy',
      'Sleek and put-together',
      'Bold and eye-catching',
      'Trendy and Insta-worthy',
      'Unique and expressive'
    ],
  },
  {
    id: 'inspiration',
    question: 'Where do you usually find your style inspo?',
    options: [
      'TikTok and Instagram',
      'Fashion magazines and runways',
      'Street style and people-watching',
      'Vintage shops and thrift stores',
      'My own creative ideas'
    ],
  },
  {
    id: 'confidence',
    question: 'How do you feel when you put on your favorite outfit?',
    options: [
      'Like I can take on the world',
      'Comfortable in my own skin',
      'Ready to turn heads',
      'True to myself',
      'Like a total boss'
    ],
  },
  {
    id: 'shopping',
    question: 'What\'s your shopping strategy?',
    options: [
      'Impulse buys when I see something fire',
      'Carefully planned hauls for each season',
      'Mixing high-end pieces with budget finds',
      'Sustainable and ethical choices only',
      'Whatever catches my eye and speaks to me'
    ],
  },
  {
    id: 'accessories',
    question: 'What\'s your must-have accessory?',
    options: [
      'Statement sneakers',
      'A killer bag',
      'Unique jewelry',
      'The perfect shades',
      'A signature scent'
    ],
  },
  {
    id: 'event',
    question: 'You\'re hitting a big event. What\'s your outfit strategy?',
    options: [
      'Go all out with a show-stopping look',
      'Keep it classic but add a personal twist',
      'Rock the latest trend everyone\'s talking about',
      'Wear something no one else would think of',
      'Choose based on comfort but make it fashion'
    ],
  },
  {
    id: 'colors',
    question: 'What color palette are you vibing with right now?',
    options: [
      'Neutrals with a pop of color',
      'All black everything',
      'Bright and bold mix',
      'Earthy and natural tones',
      'Pastels and soft hues'
    ],
  },
  {
    id: 'decade',
    question: 'If you could bring back one fashion decade, which would it be?',
    options: [
      'Y2K and its low-rise glory',
      '90s grunge and minimalism',
      '80s bold shoulders and neon',
      '70s disco and bohemian vibes',
      '60s mod and go-go'
    ],
  },
  {
    id: 'influence',
    question: 'How do your friends describe your style?',
    options: [
      'Always ahead of the curve',
      'Effortlessly cool',
      'Bold and daring',
      'Chic and put-together',
      'Uniquely you'
    ],
  },
  {
    id: 'evolution',
    question: 'How has your style changed in the last year?',
    options: [
      'Totally transformed, new me new style',
      'Refined and more confident',
      'Experimenting with new looks',
      'More sustainable and conscious choices',
      'Staying true to what I love'
    ],
  },
];

const auraQuestions = [
  {
    id: 'firstImpression',
    question: 'When you walk into a room, what\'s the first thing people notice?',
    options: [
      'My confidence and energy',
      'My unique style',
      'My friendly and approachable vibe',
      'My mysterious and intriguing aura',
      'My calm and collected presence'
    ],
  },
  {
    id: 'socialMedia',
    question: 'What\'s your social media aesthetic?',
    options: [
      'Curated and cohesive feed',
      'Raw and unfiltered moments',
      'Inspirational quotes and vibes',
      'A mix of everything I love',
      'Minimal or barely active'
    ],
  },
  {
    id: 'friendGroup',
    question: 'In your friend group, you\'re known as the one who...',
    options: [
      'Always knows the hottest trends',
      'Gives the best advice',
      'Plans the most epic hangouts',
      'Has the most unique interests',
      'Keeps everyone grounded'
    ],
  },
  {
    id: 'selfCare',
    question: 'What\'s your go-to self-care move?',
    options: [
      'Retail therapy and trying new looks',
      'Meditation and mindfulness',
      'Getting creative with art or music',
      'Connecting with nature',
      'Binge-watching my favorite shows'
    ],
  },
  {
    id: 'decision',
    question: 'When making decisions, you usually...',
    options: [
      'Go with your gut feeling',
      'Weigh all the pros and cons',
      'Ask for advice from friends',
      'Consider the impact on others',
      'Choose the most exciting option'
    ],
  },
  {
    id: 'superpower',
    question: 'If you had a superpower, it would be...',
    options: [
      'Mind reading',
      'Invisibility',
      'Time travel',
      'Teleportation',
      'Shapeshifting'
    ],
  },
  {
    id: 'music',
    question: 'What\'s your music vibe?',
    options: [
      'Whatever\'s topping the charts',
      'Underground and indie tracks',
      'Mood-based playlists',
      'Classics that never get old',
      'A mix of everything'
    ],
  },
  {
    id: 'challenge',
    question: 'When faced with a challenge, you...',
    options: [
      'Take charge and lead the way',
      'Collaborate and seek input',
      'Approach it creatively',
      'Analyze and strategize',
      'Go with the flow and adapt'
    ],
  },
  {
    id: 'compliment',
    question: 'What\'s the best compliment someone could give you?',
    options: [
      'You\'re so inspiring',
      'You\'re one of a kind',
      'You make everyone feel comfortable',
      'You\'re always there when needed',
      'You\'re incredibly talented'
    ],
  },
  {
    id: 'future',
    question: 'In 5 years, you see yourself...',
    options: [
      'At the top of your game, killing it',
      'Traveling the world and collecting experiences',
      'Making a difference in your community',
      'Mastering a new skill or passion',
      'Living your best, balanced life'
    ],
  },
];


export { styleQuestions, auraQuestions };

