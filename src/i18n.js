/* ----------------------------- i18n ----------------------------- */
// Idiomas disponibles. El orden es el que aparece en el selector.
export const LANGS = [
  { id: 'es', label: 'ES' },
  { id: 'en', label: 'EN' },
  { id: 'pt', label: 'PT' },
  { id: 'ru', label: 'RU' },
]

export const TR = {
  /* ------------------------------ Español ------------------------------ */
  es: {
    nav: { start: 'inicio', about: 'sobre mí', tech: 'stack', work: 'proyectos', contact: 'contacto' },
    accentTitle: 'Cambiar color',
    langTitle: 'Cambiar idioma',
    stats: ['lenguajes', 'proyectos públicos', 'horario CL'],
    hero: {
      availableNow: 'DISPONIBLE AHORA',
      notAvailable: 'NO DISPONIBLE',
      statusSub: (time) => `Santiago, CL · ${time} · horario 4–10 PM`,
      subtitle: '> Programador & Cybersecurity Engineer — plugins de Rust & Minecraft_',
      seeProjects: 'VER PROYECTOS',
      copied: '¡COPIADO!',
    },
    about: {
      termTitle: '~/estxbvnnn — whoami',
      terminal: `$ whoami
> estxbvnnn  ·  Santiago, Chile

$ cat about.txt
> Programador y Cybersecurity Engineer.
> Creo plugins para servidores de Rust
> (uMod/Oxide, C#) y plugins de Minecraft
> en Java (Spigot/Paper). De momento mi
> foco principal es Rust.
> Me gusta romper cosas para aprender a
> protegerlas mejor.

$ cat stack.txt
> rust · java · c# · c · c++ · ts · js
> react · python · html · ruby · bash · sql

$ echo $AVAILABILITY
> 4–10 PM (America/Santiago) vía Discord`,
    },
    tech: {
      heading: '// stack & lenguajes',
      cats: { languages: 'Lenguajes', modding: 'Plugins / Modding', frameworks: 'Frameworks / Tools', areas: 'Áreas' },
      areaItems: ['Cybersecurity', 'Sistemas', 'Backend', 'Automatización'],
    },
    work: {
      heading: '// proyectos',
      note: (discord) => `Para obtener cualquier proyecto, contáctame por Discord: `,
      seeCode: 'VER CÓDIGO',
      get: 'OBTENER · DISCORD',
    },
    projects: {
      nofog: {
        status: 'Disponible',
        desc: 'Plugin para servidores de Rust que elimina automáticamente la niebla en todos los biomas (arctic, jungle, temperate, tundra, arid) al iniciar el servidor. Mejora la visibilidad sin tocar el rendimiento.',
      },
      syvar: {
        status: 'Bajo solicitud',
        desc: 'Panel de control de escritorio (Windows) para administrar servidores de Rust por WebRCON. App nativa hecha con Tauri + Rust e interfaz en React: rápida, ligera y con funciones que las herramientas web no tienen. Acceso bajo solicitud.',
        features: [
          'Consola RCON en vivo con coloreado, comandos rápidos e historial',
          'Chat en vivo con moderación (mute/kick/ban) y traducción automática',
          'Filtro de palabras 24/7 con acción automática',
          'Gestión de jugadores: país, ping, FPS, perfil y sanciones',
          'Anti-cheat asistido con puntuación de riesgo (FPS imposibles, VPN, alts)',
          'Mapa en vivo 2D y 3D (RustMaps y mapas custom)',
          'Automatización: tareas programadas, reglas si→entonces y macros',
          'Métricas e histórico local (SQLite): FPS, entidades, memoria, red, ping',
          'Gestión de plugins uMod/Oxide: editor de configs JSON y backups',
          'Auditoría de acciones e inicio de sesión por Steam',
        ],
      },
    },
    contact: {
      heading: '// contacto',
      copy: 'COPIAR',
      copied: '¡COPIADO!',
      place: 'Santiago, Chile',
    },
    clock: {
      availableNow: 'Disponible ahora',
      comeBack: (h) => `Vuelvo a las 4 PM (faltan ${h}h)`,
      closed: 'Cerrado · horario 4–10 PM',
    },
    modalFoot: (lang) => `Plugin uMod/Oxide · ${lang}`,
    footer: 'built with React + 8-bit vibes',
  },

  /* ------------------------------ English ------------------------------ */
  en: {
    nav: { start: 'start', about: 'about', tech: 'stack', work: 'projects', contact: 'contact' },
    accentTitle: 'Change color',
    langTitle: 'Change language',
    stats: ['languages', 'public projects', 'hours CL'],
    hero: {
      availableNow: 'AVAILABLE NOW',
      notAvailable: 'NOT AVAILABLE',
      statusSub: (time) => `Santiago, CL · ${time} · hours 4–10 PM`,
      subtitle: '> Programmer & Cybersecurity Engineer — Rust & Minecraft plugins_',
      seeProjects: 'VIEW PROJECTS',
      copied: 'COPIED!',
    },
    about: {
      termTitle: '~/estxbvnnn — whoami',
      terminal: `$ whoami
> estxbvnnn  ·  Santiago, Chile

$ cat about.txt
> Programmer and Cybersecurity Engineer.
> I build plugins for Rust servers
> (uMod/Oxide, C#) and Minecraft plugins
> in Java (Spigot/Paper). Right now my
> main focus is Rust.
> I like breaking things to learn how to
> protect them better.

$ cat stack.txt
> rust · java · c# · c · c++ · ts · js
> react · python · html · ruby · bash · sql

$ echo $AVAILABILITY
> 4–10 PM (America/Santiago) via Discord`,
    },
    tech: {
      heading: '// stack & languages',
      cats: { languages: 'Languages', modding: 'Plugins / Modding', frameworks: 'Frameworks / Tools', areas: 'Areas' },
      areaItems: ['Cybersecurity', 'Systems', 'Backend', 'Automation'],
    },
    work: {
      heading: '// projects',
      note: (discord) => `To get any project, contact me on Discord: `,
      seeCode: 'VIEW CODE',
      get: 'GET · DISCORD',
    },
    projects: {
      nofog: {
        status: 'Available',
        desc: 'Plugin for Rust servers that automatically removes fog in all biomes (arctic, jungle, temperate, tundra, arid) on server start. Improves visibility without affecting performance.',
      },
      syvar: {
        status: 'On request',
        desc: 'Desktop control panel (Windows) to manage Rust servers over WebRCON. Native app built with Tauri + Rust and a React UI: fast, lightweight and with features web tools don\'t have. Access on request.',
        features: [
          'Live RCON console with color coding, quick commands and history',
          'Live chat with moderation (mute/kick/ban) and auto-translation',
          '24/7 word filter with automatic action',
          'Player management: country, ping, FPS, profile and ban history',
          'Assisted anti-cheat with risk score (impossible FPS, VPN, alts)',
          'Live 2D and 3D map (RustMaps and custom maps)',
          'Automation: scheduled tasks, if→then rules and macros',
          'Metrics and local history (SQLite): FPS, entities, memory, network, ping',
          'uMod/Oxide plugin management: JSON config editor and backups',
          'Action audit log and Steam login',
        ],
      },
    },
    contact: {
      heading: '// contact',
      copy: 'COPY',
      copied: 'COPIED!',
      place: 'Santiago, Chile',
    },
    clock: {
      availableNow: 'Available now',
      comeBack: (h) => `Back at 4 PM (${h}h left)`,
      closed: 'Closed · hours 4–10 PM',
    },
    modalFoot: (lang) => `uMod/Oxide plugin · ${lang}`,
    footer: 'built with React + 8-bit vibes',
  },

  /* ------------------------ Português (Brasil) ------------------------ */
  pt: {
    nav: { start: 'início', about: 'sobre mim', tech: 'stack', work: 'projetos', contact: 'contato' },
    accentTitle: 'Mudar cor',
    langTitle: 'Mudar idioma',
    stats: ['linguagens', 'projetos públicos', 'horário CL'],
    hero: {
      availableNow: 'DISPONÍVEL AGORA',
      notAvailable: 'INDISPONÍVEL',
      statusSub: (time) => `Santiago, CL · ${time} · horário 4–10 PM`,
      subtitle: '> Programador & Cybersecurity Engineer — plugins de Rust & Minecraft_',
      seeProjects: 'VER PROJETOS',
      copied: 'COPIADO!',
    },
    about: {
      termTitle: '~/estxbvnnn — whoami',
      terminal: `$ whoami
> estxbvnnn  ·  Santiago, Chile

$ cat about.txt
> Programador e Cybersecurity Engineer.
> Crio plugins para servidores de Rust
> (uMod/Oxide, C#) e plugins de Minecraft
> em Java (Spigot/Paper). No momento meu
> foco principal é Rust.
> Gosto de quebrar coisas para aprender a
> protegê-las melhor.

$ cat stack.txt
> rust · java · c# · c · c++ · ts · js
> react · python · html · ruby · bash · sql

$ echo $AVAILABILITY
> 4–10 PM (America/Santiago) via Discord`,
    },
    tech: {
      heading: '// stack & linguagens',
      cats: { languages: 'Linguagens', modding: 'Plugins / Modding', frameworks: 'Frameworks / Tools', areas: 'Áreas' },
      areaItems: ['Cybersecurity', 'Sistemas', 'Backend', 'Automação'],
    },
    work: {
      heading: '// projetos',
      note: (discord) => `Para obter qualquer projeto, fale comigo no Discord: `,
      seeCode: 'VER CÓDIGO',
      get: 'OBTER · DISCORD',
    },
    projects: {
      nofog: {
        status: 'Disponível',
        desc: 'Plugin para servidores de Rust que remove automaticamente a névoa em todos os biomas (arctic, jungle, temperate, tundra, arid) ao iniciar o servidor. Melhora a visibilidade sem afetar o desempenho.',
      },
      syvar: {
        status: 'Sob solicitação',
        desc: 'Painel de controle desktop (Windows) para administrar servidores de Rust via WebRCON. App nativo feito com Tauri + Rust e interface em React: rápido, leve e com recursos que as ferramentas web não têm. Acesso sob solicitação.',
        features: [
          'Console RCON ao vivo com cores, comandos rápidos e histórico',
          'Chat ao vivo com moderação (mute/kick/ban) e tradução automática',
          'Filtro de palavras 24/7 com ação automática',
          'Gestão de jogadores: país, ping, FPS, perfil e sanções',
          'Anti-cheat assistido com pontuação de risco (FPS impossível, VPN, alts)',
          'Mapa ao vivo 2D e 3D (RustMaps e mapas custom)',
          'Automação: tarefas agendadas, regras se→então e macros',
          'Métricas e histórico local (SQLite): FPS, entidades, memória, rede, ping',
          'Gestão de plugins uMod/Oxide: editor de configs JSON e backups',
          'Log de auditoria e login por Steam',
        ],
      },
    },
    contact: {
      heading: '// contato',
      copy: 'COPIAR',
      copied: 'COPIADO!',
      place: 'Santiago, Chile',
    },
    clock: {
      availableNow: 'Disponível agora',
      comeBack: (h) => `Volto às 4 PM (faltam ${h}h)`,
      closed: 'Fechado · horário 4–10 PM',
    },
    modalFoot: (lang) => `Plugin uMod/Oxide · ${lang}`,
    footer: 'feito com React + 8-bit vibes',
  },

  /* ------------------------------ Русский ------------------------------ */
  ru: {
    nav: { start: 'главная', about: 'обо мне', tech: 'стек', work: 'проекты', contact: 'контакт' },
    accentTitle: 'Сменить цвет',
    langTitle: 'Сменить язык',
    stats: ['языки', 'публичные проекты', 'график CL'],
    hero: {
      availableNow: 'ДОСТУПЕН СЕЙЧАС',
      notAvailable: 'НЕДОСТУПЕН',
      statusSub: (time) => `Сантьяго, CL · ${time} · часы 4–10 PM`,
      subtitle: '> Программист и инженер по кибербезопасности — плагины для Rust и Minecraft_',
      seeProjects: 'СМОТРЕТЬ ПРОЕКТЫ',
      copied: 'СКОПИРОВАНО!',
    },
    about: {
      termTitle: '~/estxbvnnn — whoami',
      terminal: `$ whoami
> estxbvnnn  ·  Сантьяго, Чили

$ cat about.txt
> Программист и инженер по кибербезопасности.
> Создаю плагины для серверов Rust
> (uMod/Oxide, C#) и плагины для Minecraft
> на Java (Spigot/Paper). Сейчас мой
> основной фокус — Rust.
> Люблю ломать вещи, чтобы научиться
> лучше их защищать.

$ cat stack.txt
> rust · java · c# · c · c++ · ts · js
> react · python · html · ruby · bash · sql

$ echo $AVAILABILITY
> 4–10 PM (America/Santiago) через Discord`,
    },
    tech: {
      heading: '// стек и языки',
      cats: { languages: 'Языки', modding: 'Плагины / Моддинг', frameworks: 'Фреймворки / Инструменты', areas: 'Области' },
      areaItems: ['Кибербезопасность', 'Системы', 'Бэкенд', 'Автоматизация'],
    },
    work: {
      heading: '// проекты',
      note: (discord) => `Чтобы получить любой проект, напишите мне в Discord: `,
      seeCode: 'СМОТРЕТЬ КОД',
      get: 'ПОЛУЧИТЬ · DISCORD',
    },
    projects: {
      nofog: {
        status: 'Доступно',
        desc: 'Плагин для серверов Rust, который автоматически убирает туман во всех биомах (arctic, jungle, temperate, tundra, arid) при запуске сервера. Улучшает видимость, не влияя на производительность.',
      },
      syvar: {
        status: 'По запросу',
        desc: 'Десктопная панель управления (Windows) для администрирования серверов Rust через WebRCON. Нативное приложение на Tauri + Rust с интерфейсом на React: быстрое, лёгкое и с функциями, которых нет у веб-инструментов. Доступ по запросу.',
        features: [
          'Живая RCON-консоль с подсветкой, быстрыми командами и историей',
          'Живой чат с модерацией (mute/kick/ban) и автопереводом',
          'Фильтр слов 24/7 с автоматическим действием',
          'Управление игроками: страна, пинг, FPS, профиль и история банов',
          'Ассистированный античит с оценкой риска (нереальный FPS, VPN, альты)',
          'Живая карта 2D и 3D (RustMaps и кастомные карты)',
          'Автоматизация: задачи по расписанию, правила если→то и макросы',
          'Метрики и локальная история (SQLite): FPS, сущности, память, сеть, пинг',
          'Управление плагинами uMod/Oxide: редактор JSON-конфигов и бэкапы',
          'Аудит действий и вход через Steam',
        ],
      },
    },
    contact: {
      heading: '// контакт',
      copy: 'КОПИРОВАТЬ',
      copied: 'СКОПИРОВАНО!',
      place: 'Сантьяго, Чили',
    },
    clock: {
      availableNow: 'Доступен сейчас',
      comeBack: (h) => `Вернусь в 4 PM (осталось ${h}ч)`,
      closed: 'Закрыто · часы 4–10 PM',
    },
    modalFoot: (lang) => `Плагин uMod/Oxide · ${lang}`,
    footer: 'собрано на React + 8-bit вайб',
  },
}
