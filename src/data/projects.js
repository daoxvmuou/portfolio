// 项目数据 - 后续可在此替换为真实内容
export const games = [
  {
    id: 'game-1',
    title: 'NEON DRIFT',
    tagline: '霓虹赛博 · 街机竞速',
    cover: 'https://images.unsplash.com/photo-1542751371-ad-c38f3c2d?w=1200&q=80',
    description:
      '一款设定在 2099 年赛博都市的街机风格竞速游戏，支持本地双人分屏与在线匹配。采用自研漂移物理模型，配合动态光影与体积雾营造高速沉浸感。',
    techStack: ['Unity 2022', 'C#', 'URP', 'Mirror Networking', 'Shader Graph'],
    role: '主程序 / 玩法设计',
    year: '2025',
    download: 'https://example.com/download/neon-drift',
    tags: ['Racing', 'Arcade', 'Multiplayer'],
  },
  {
    id: 'game-2',
    title: 'ECHO REALM',
    tagline: '解谜冒险 · 声波机制',
    cover: 'https://images.unsplash.com/photo-1538481199705-c710c9e32129?w=1200&q=80',
    description:
      '以声音为核心的 2.5D 解谜冒险游戏，玩家通过声波频率与环境交互。包含 30+ 谜题关卡与原创配乐，曾入选 IndiePlay 2024 学生作品提名。',
    techStack: ['Unity', 'C#', 'FMOD', '2D Toolkit', 'DOTween'],
    role: '独立开发',
    year: '2024',
    download: 'https://example.com/download/echo-realm',
    tags: ['Puzzle', 'Adventure', 'Audio'],
  },
  {
    id: 'game-3',
    title: 'IRON PROTOCOL',
    tagline: '机甲动作 · 战术射击',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
    description:
      '俯视角机甲战术射击，可定制机体武装与战术技能。实现 AI 寻路与掩体评估系统，支持关卡编辑器与 Steam 创意工坊导入。',
    techStack: ['Unreal Engine 5', 'C++', 'Blueprint', 'Behavior Tree', 'Steamworks'],
    role: '玩法程序 / 工具开发',
    year: '2024',
    download: 'https://example.com/download/iron-protocol',
    tags: ['Action', 'Shooter', 'Tactical'],
  },
  {
    id: 'game-4',
    title: 'STARFRAME',
    tagline: '太空模拟 · 物理建造',
    cover: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&q=80',
    description:
      '沙盒式太空建造模拟，模块化舰船建造与实时轨道力学。包含程序化星球生成与多体引力场计算，支持 Mod 扩展。',
    techStack: ['Godot 4', 'GDScript', 'Vulkan', 'Compute Shader', 'WebSockets'],
    role: '主程序 / 引擎工具',
    year: '2023',
    download: 'https://example.com/download/starframe',
    tags: ['Simulation', 'Sandbox', 'Physics'],
  },
]

export const featured = [
  {
    id: 'f1',
    title: 'Aurora Engine',
    category: 'Engine / Real-time Graphics',
    image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=1600&q=80',
    desc: '自研轻量渲染引擎，支持 PBR、GPU Driven Pipeline 与实时全局光照。',
  },
  {
    id: 'f2',
    title: 'Lumen Toolkit',
    category: 'Tooling / Editor',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a7d5c9e7?w=1600&q=80',
    desc: '为团队开发的关卡编辑器套件，支持节点式逻辑编排与版本协作。',
  },
  {
    id: 'f3',
    title: 'Shaders Lab',
    category: 'R&D / Visual',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f69152?w=1600&q=80',
    desc: '一组用于风格化渲染的 Shader 实验集合，涵盖卡通、水墨与故障艺术。',
  },
]

export const profile = {
  name: 'YOUR NAME',
  role: 'Game Developer · 游戏开发工程师',
  intro:
    '5 年游戏开发经验，专注于玩法程序与引擎工具开发，热衷于在性能与体验之间寻找平衡。曾参与多款跨平台商业项目与独立游戏，擅长 Unity / Unreal / Godot 全栈管线。',
  email: 'hello@example.com',
  github: 'https://github.com/',
  steam: 'https://store.steampowered.com/',
  stats: [
    { label: '已上线项目', value: '6+' },
    { label: '累计玩家', value: '120K' },
    { label: '开发年限', value: '5Y' },
    { label: '引擎覆盖', value: '3' },
  ],
}
