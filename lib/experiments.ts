export interface ExperimentMeta {
  id: string;
  number: string;
  title: string;
  category: 'motion' | 'visual' | 'systems' | 'interaction';
  description: string;
  technologies: string[];
  codeSnippet: string;
}

export const EXPERIMENTS_META: ExperimentMeta[] = [
  {
    id: 'proximity-type',
    number: '01',
    title: 'Proximity Typography',
    category: 'interaction',
    description: 'Letters react subtly to pointer distance with dynamic weights, scale expansion, and graceful touch-friendly fallback.',
    technologies: ['React', 'Vector Math', 'CSS Custom Props'],
    codeSnippet: `// Distance calculation relative to each character center
function calculateProximity(cursorX, cursorY, charRect) {
  const charCenterX = charRect.left + charRect.width / 2;
  const charCenterY = charRect.top + charRect.height / 2;
  const distance = Math.hypot(cursorX - charCenterX, cursorY - charCenterY);
  const maxRadius = 160;
  const proximity = Math.max(0, 1 - distance / maxRadius);
  return {
    scale: 1 + proximity * 0.45,
    weight: Math.round(400 + proximity * 400),
    glow: proximity * 12
  };
}`
  },
  {
    id: 'magnetic-toolbar',
    number: '02',
    title: 'Magnetic Toolbar',
    category: 'interaction',
    description: 'Dock-inspired toolbar where buttons attract smoothly toward the pointer with restrained spring dampening.',
    technologies: ['React', 'Spring Physics', 'Pointer Events'],
    codeSnippet: `// Magnetic attraction with bounded displacement (max 14px)
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const relX = e.clientX - (rect.left + rect.width / 2);
  const relY = e.clientY - (rect.top + rect.height / 2);
  const dist = Math.hypot(relX, relY);
  const pull = Math.min(14, dist * 0.28);
  const angle = Math.atan2(relY, relX);
  setOffset({ x: Math.cos(angle) * pull, y: Math.sin(angle) * pull });
};`
  },
  {
    id: 'donut-progress',
    number: '03',
    title: 'Animated Donut Chart',
    category: 'visual',
    description: 'Smooth SVG circular progress gauge with animated stroke-dashoffset transitions, interactive controls, and accessible status.',
    technologies: ['SVG', 'Trigonometry', 'ARIA Live'],
    codeSnippet: `// SVG stroke-dashoffset interpolation
const circumference = 2 * Math.PI * radius;
const strokeDashoffset = circumference - (percent / 100) * circumference;

<circle
  r={radius}
  cx={center}
  cy={center}
  strokeDasharray={circumference}
  strokeDashoffset={strokeDashoffset}
  className="transition-all duration-700 ease-out"
/>`
  },
  {
    id: 'dither-generator',
    number: '04',
    title: 'Gradient Studio',
    category: 'visual',
    description: 'Adjust dual-tone color stops and contrast intensity with real-time preview and instant CSS code generation.',
    technologies: ['CSS Filters', 'Color Matrix', 'Clipboard API'],
    codeSnippet: `// Procedural gradient canvas studio
const generateGradientCSS = (color1, color2, density) => \`
background: radial-gradient(circle at 50% 50%, \${color2} 0%, \${color1} 100%);
filter: contrast(\${density}%);
\`;`
  },
  {
    id: 'magnetic-button',
    number: '05',
    title: 'Magnetic Button',
    category: 'interaction',
    description: 'Interactive button with spring displacement, directional glow shift, and polished tactile pressed states.',
    technologies: ['Framer Motion', 'Spring Dynamics'],
    codeSnippet: `// Spring-damped movement with pointer release reset
<motion.button
  animate={{ x: offset.x, y: offset.y }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
  onMouseMove={handleMagnet}
  onMouseLeave={() => setOffset({ x: 0, y: 0 })}
/>`
  },
  {
    id: 'reorder-list',
    number: '06',
    title: 'Reorderable List',
    category: 'interaction',
    description: 'Drag items to reorder priority with fluid motion, accompanied by accessible keyboard up/down alternatives.',
    technologies: ['HTML5 Drag API', 'Keyboard Navigation', 'State Management'],
    codeSnippet: `// Reorder array indices immutably
const moveItem = (fromIdx: number, toIdx: number) => {
  const updated = [...items];
  const [removed] = updated.splice(fromIdx, 1);
  updated.splice(toIdx, 0, removed);
  setItems(updated);
};`
  },
  {
    id: 'copy-coupon',
    number: '07',
    title: 'Copy Interaction',
    category: 'motion',
    description: 'Copy access tokens or coupon codes with haptic-like animation, fallback clipboard handling, and clear feedback.',
    technologies: ['Async Clipboard API', 'Micro-interactions', 'Fallback Buffer'],
    codeSnippet: `async function copyToken(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus('copied');
  } catch (err) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setStatus('copied');
  }
}`
  },
  {
    id: 'queue-visualizer',
    number: '08',
    title: 'Queue Visualizer',
    category: 'systems',
    description: 'Jobs transition through Waiting, Active, Completed, and Failed states with functional add, run, and retry controls.',
    technologies: ['State Machine', 'Simulation Engine', 'BullMQ Paradigm'],
    codeSnippet: `// Deterministic job state transition machine
interface QueueJob {
  id: string;
  name: string;
  status: 'waiting' | 'active' | 'completed' | 'failed';
  attempts: number;
}

function processNextJob() {
  setJobs(prev => {
    const nextIdx = prev.findIndex(j => j.status === 'waiting');
    if (nextIdx === -1) return prev;
    // Advance waiting job to active, then resolve or fail
  });
}`
  }
];
