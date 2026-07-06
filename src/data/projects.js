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
    title: 'Where Echoes Lead',
    tagline: '寻声 · 记忆迷宫解谜',
    cover: '/games/where-echoes-lead.png',
    description:
      'A game about a protagonist who has lost their heart, trapped in an endless maze of memories. 你需要在记忆的迷宫中搜寻过去的回响，沿途拾起主角童年的碎片，拼凑线索，找回真正的自我。\n\n玩法映照记忆的本质：回忆模糊、迷宫充满误导、记忆转瞬即逝。你只有有限的时间去记住路径，去寻找那个仍拥有一颗心的自己。',
    techStack: ['Unity', 'C#'],
    role: '玩法程序 (thatgamejam #01 作品)',
    year: '2025',
    download: 'https://mengtaoaiying.itch.io/where-echoes-lead',
    tags: ['Puzzle', 'Maze', 'Narrative'],
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
    title: '晶核 · Crystal of Atlan',
    category: 'Aetherpunk Action RPG · 商业项目',
    image: '/featured/coa.png',
    desc: '《晶核》是一款魔导朋克题材的大型箱庭式动作角色扮演游戏，支持跨平台多人共斗，核心玩法为高速连招与立体战斗。',
    techStack: ['UE4', 'C++', 'Lua'],
    link: 'https://coa.nvsgames.cn/main?from_source=FAB',
  },
  {
    id: 'f2',
    title: 'Top Heroes',
    category: 'Adventure RPG · 商业项目',
    image: '/featured/top-heroes.png',
    desc: 'Top Heroes is an RPG full of adventure, combat, and endless exploration! With charming visuals and customizable gameplay, dive into innovative mechanics and embark on a journey like never before.',
    techStack: ['Unity', 'C#'],
    link: 'https://www.topheroes.com/en/home.html?from=AppAgg.com',
  },
  {
    id: 'f3',
    title: '归环 · Rewinding Cadence',
    category: 'Time-loop Open World · 商业项目',
    image: '/featured/guihuan.png',
    desc: '《归环》是一款全新的时间循环开放世界游戏。作为预言中的「归还者」，你将携手神秘的使灵「初」，不断迈入死亡回归的循环，行走于时间之外，寻找打破结局的方法。',
    techStack: ['Unity', 'C#', 'Lua'],
    link: 'https://guihuan.cn/#/',
  },
]

export const profile = {
  name: 'YOUR NAME',
  role: 'Game Developer · 游戏开发工程师',
  intro:
    '3年游戏开发经验，专注于玩法程序与引擎工具开发，热衷于在性能与体验之间寻找平衡。曾参与多款跨平台商业项目与GameJam游戏项目，擅长 Unity / Unreal / Godot 全栈管线。',
  email: '2322931055@qq.com',
  github: 'https://github.com/daoxvmuou',
  steam: 'https://store.steampowered.com/',
  stats: [
    { label: '已参与完成项目', value: '6+' },
    { label: '个人作品累计玩家', value: '1K' },
    { label: '开发年限', value: '3Y' },
    { label: '引擎覆盖', value: '3' },
  ],
}
