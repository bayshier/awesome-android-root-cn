import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import llmstxt, { copyOrDownloadAsMarkdownButtons } from 'vitepress-plugin-llms'
import { storeLinkPlugin } from './markdown/storeLinkPlugin.mjs'

const isLlmPageLink = (link) =>
  typeof link === 'string' && link.startsWith('/') && link !== '/' && !link.includes('#')

function llmsSidebar(sidebar) {
  const sanitizeItems = (items = []) => items.flatMap((item) => {
    const nestedItems = item.items ? sanitizeItems(item.items) : undefined
    const link = isLlmPageLink(item.link) ? item.link : undefined

    if (!link && (!nestedItems || nestedItems.length === 0)) return []

    const sanitized = { ...item }
    if (link) sanitized.link = link
    else delete sanitized.link
    if (nestedItems) sanitized.items = nestedItems
    else delete sanitized.items
    return [sanitized]
  })

  if (Array.isArray(sidebar)) return sanitizeItems(sidebar)

  return Object.fromEntries(
    Object.entries(sidebar ?? {}).map(([route, items]) => [route, sanitizeItems(items)])
  )
}

export default withPwa(defineConfig({
  lang: 'zh-CN',
  title: '超棒的安卓 Root',
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,

  transformHead({ pageData }) {
    const site = 'https://awesome-android-root.zhoe.org'
    const relativePath = pageData.relativePath || 'index.md'
    const route = relativePath === 'index.md'
      ? '/'
      : `/${relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}`
    const pageUrl = `${site}${route}`

    if (route === '/') return []

    const title = pageData.title || pageData.frontmatter?.title || 'Awesome Android Root'
    const description = pageData.description || pageData.frontmatter?.description || ''
    const labels = route.split('/').filter(Boolean).map((part) =>
      part.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    )
    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` }
    ]
    labels.forEach((label, index) => {
      const itemRoute = `/${route.split('/').filter(Boolean).slice(0, index + 1).join('/')}`
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: label,
        item: `${site}${itemRoute}`
      })
    })

    const graph = [
      {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
        name: 'Awesome Android Root',
        url: `${site}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${site}/images/logo.png`,
          width: 330,
          height: 330
        },
        sameAs: [
          'https://github.com/awesome-android-root',
          'https://x.com/awsm_and_root'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        name: 'Awesome Android Root',
        url: `${site}/`,
        inLanguage: 'en-US',
        publisher: { '@id': `${site}/#organization` }
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: title,
        description,
        url: pageUrl,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${site}/#website` },
        publisher: { '@id': `${site}/#organization` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbItems
      }
    ]

    return [[
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    ]]
  },

  vite: {
    plugins: [
      llmstxt({ sidebar: llmsSidebar })
    ],
    build: {
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      exclude: ['vite-plugin-pwa', 'vitepress-plugin-llms']
    },
    server: {
      warmup: { clientFiles: ['.vitepress/theme/**/*.{js,ts,vue}'] },
      allowedHosts: true,
    },
    css: { devSourcemap: false },
    oxc: {
      target: 'es2022'
    },
    rolldownOptions: {
      output: {
        minify: process.env.NODE_ENV === 'production'
          ? {
            compress: { dropConsole: true, dropDebugger: true },
            mangle: true,
            codegen: { legalComments: 'none' }
          }
          : false
      }
    }
  },


  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',

    workbox: {
      
      globPatterns: [
        '**/*.{png,jpg,jpeg,svg,gif,webp,avif,ico}',
      ],

      globIgnores: [
        '**/node_modules/**',
        '**/dev-dist/**',
        '**/.vitepress/cache/**',
        '**/images/og/**',
      ],

      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,

      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,

      runtimeCaching: [
        {
          urlPattern: ({ request, url, sameOrigin }) => {
            const isImage = request.destination === 'image' ||
              /\.(png|jpg|jpeg|svg|gif|webp|avif|ico|bmp)$/i.test(url.pathname)

            const isAllowedOrigin = sameOrigin ||
              url.origin === 'https://raw.githubusercontent.com' ||
              url.origin === 'https://avatars.githubusercontent.com' ||
              url.origin === 'https://user-images.githubusercontent.com'

            return isImage && isAllowedOrigin
          },
          handler: 'CacheFirst',
          options: {
            cacheName: 'aar-images-v1',
            expiration: {
              maxEntries: 400,
              maxAgeSeconds: 60 * 60 * 24 * 60,  // 60 days (images rarely change)
              purgeOnQuotaError: true,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          }
        },
      ]
    },

    manifest: false,

    devOptions: {
      enabled: process.env.NODE_ENV === 'development',
      suppressWarnings: true,
      type: 'module'
    },

    injectRegister: 'script',
    minify: true,

  },


  markdown: {
    cache: true,
    anchor: { level: [2, 3, 4] },
    image: { lazyLoad: true },
    config: (md) => {
      md.use(storeLinkPlugin)
      md.use(copyOrDownloadAsMarkdownButtons)
    }
  },

  head: [

    // Favicons and Touch Icons
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],

    // Browser Meta
    ['meta', { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#0b0b0c', media: '(prefers-color-scheme: dark)' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'AAR' }],
    ['meta', { name: 'application-name', content: 'Awesome Android Root' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],

    // Sitemap
    ['link', { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }],

    // web manifest 
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    // --- SEO Meta Tags ---
    ['meta', { name: 'publisher', content: 'Awesome Android Root Project' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large' }],
    ['meta', { name: 'language', content: 'en-US' }],
    ['meta', { name: 'distribution', content: 'global' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],

    // --- Verification Tags ---
    ['meta', { name: 'google-site-verification', content: 'LZTsUH49HHfaPFDezfkN4dE0JmLUbOrY3NJKLr1ZPrE' }]
  ],

  themeConfig: {
    logo: {
      light: '/images/logo.svg',
      dark: '/images/logo_dark.svg',
      alt: 'Awesome Android Root Logo'
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 4,
              text: 2,
              titles: 3
            },
            boostDocument: (documentId, term, storedFields) => {

              // Boost app and module pages in seach results
              if (documentId.includes('apps-and-modules')) {
                return 10
              }
              return 1
            }
          }
        },
        async _render(src, env, md) {
          
          const html = await md.renderAsync(src, env)
          if (env.frontmatter?.search === false) return ''
          return html
        },
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '应用与模块',
        link: '/apps-and-modules/',
        activeMatch: '^/apps-and-modules/'
      },
      {
        text: 'Root 指南',
        link: '/rooting-guides/',
        activeMatch: '^/rooting-guides/'
      },
      {
        text: '教程',
        link: '/general-guides/',
        activeMatch: '^/general-guides/'
      },
      {
        text: '帮助',
        items: [
          { text: '常见问题', link: '/faqs' },
          { text: '故障排除', link: '/troubleshooting' },
          { text: '资源', link: '/resources' },
          { text: '免 Root 替代方案', link: '/non-root-alternatives' },
          { text: '参与贡献', link: '/contributing' },
          { text: '法律声明', link: '/legal-disclaimer' },
          { text: '关于', link: '/about' },
          { text: '⭐ GitHub', link: 'https://github.com/awesome-android-root/awesome-android-root' }
        ],
      },
    ],

    sidebar: {
      // Main/Home Sidebar
      '/': [
        {
          text: '🚀 快速开始',
          collapsed: false,
          items: [
            { text: '什么是 Android Root？', link: '/rooting-guides/#understanding-root-access' },
            { text: '完整 Root 指南', link: '/rooting-guides/' },
            { text: '浏览全部应用与模块', link: '/apps-and-modules/' },
            { text: '必备应用精选', link: '/apps-and-modules/#starter-kit-must-have-apps' }
          ]
        },
        {
          text: '🏆 Root 方案',
          collapsed: false,
          items: [
            { text: '⚖️ 对比 Root 方案', link: '/rooting-guides/root-framework-comparison' },
            { text: '🏅 Magisk（推荐）', link: '/rooting-guides/magisk-guide' },
            { text: '⚡ KernelSU', link: '/rooting-guides/kernelsu-guide' },
            { text: '🤖 APatch', link: '/rooting-guides/apatch-guide' },
            { text: '⚙️ LSPosed 框架', link: '/rooting-guides/lsposed-guide' },
            { text: '👻 免解锁 Root（GhostLock）', link: '/rooting-guides/root-without-unlocking-bootloader' }
          ]
        },
        {
          text: '📱 设备指南',
          collapsed: true,
          items: [
            { text: '🔷 Google Pixel', link: '/rooting-guides/how-to-root-pixel-phone' },
            { text: '🔷 Samsung Galaxy', link: '/rooting-guides/how-to-root-samsung-phone' },
            { text: '🔷 Xiaomi/Redmi/POCO', link: '/rooting-guides/how-to-root-xiaomi-phone' },
            { text: '🔷 OnePlus', link: '/rooting-guides/how-to-root-oneplus-phone' },
            { text: '🔷 Nothing Phone', link: '/rooting-guides/how-to-root-nothing-phone' },
            { text: '🔷 Motorola', link: '/rooting-guides/how-to-root-motorola-phone' },
            { text: '📋 查看全部设备', link: '/rooting-guides/#device-specific-guides' }
          ]
        },
        {
          text: '📚 帮助与资源',
          collapsed: true,
          items: [
            { text: '❓ 常见问题', link: '/faqs' },
            { text: '🔧 故障排除指南', link: '/troubleshooting' },
            { text: '📖 Root 术语表', link: '/apps-and-modules/#glossary' },
            { text: '🌐 社区资源', link: '/resources' },
            { text: '🔀 免 Root 替代方案', link: '/non-root-alternatives' }
          ]
        }
      ],
      // Rooting Guides Sidebar
      '/rooting-guides/': [
        {
          text: '📖 指南概览',
          collapsed: false,
          items: [
            { text: '目录', link: '/rooting-guides/' },
            { text: '认识 Root', link: '/rooting-guides/#understanding-root-access' },
            { text: '收益与风险', link: '/rooting-guides/#benefits-vs-risks' },
            { text: '安全第一', link: '/rooting-guides/#prerequisites-and-safety' }
          ]
        },
        {
          text: 'Root 方案',
          items: [
            { text: '对比方案', link: '/rooting-guides/root-framework-comparison' },
            { text: 'Magisk（推荐）', link: '/rooting-guides/magisk-guide' },
            { text: 'KernelSU', link: '/rooting-guides/kernelsu-guide' },
            { text: 'APatch', link: '/rooting-guides/apatch-guide' },
            { text: '临时 Root，免解锁（GhostLock）', link: '/rooting-guides/root-without-unlocking-bootloader' }
          ]
        },
        {
          text: '🔒 锁定 Bootloader 方案',
          collapsed: true,
          items: [
            { text: 'GhostLock 临时 Root', link: '/rooting-guides/root-without-unlocking-bootloader' },
            { text: 'Bootloader 修改与临时 Root', link: '/rooting-guides/temporary-root-solutions' }
          ]
        },
        {
          text: '🔧 分步流程',
          collapsed: false,
          items: [
            { text: '1️⃣ 解锁 Bootloader', link: '/rooting-guides/how-to-unlock-bootloader' },
            { text: '2️⃣ 安装自定义 Recovery', link: '/rooting-guides/how-to-install-custom-recovery' },
            { text: '3️⃣ 为设备 Root', link: '/rooting-guides/#universal-rooting-process' },
            { text: '4️⃣ 安装 LSPosed 框架', link: '/rooting-guides/lsposed-guide' },
            { text: '5️⃣ 刷入自定义 ROM（可选）', link: '/rooting-guides/custom-rom-installation' }
          ]
        },
        {
          text: '📱 设备专属指南',
          collapsed: true,
          items: [
            { text: '📋 全部支持设备', link: '/rooting-guides/#device-specific-guides' },
            {
              text: '🏆 热门品牌',
              items: [
                { text: 'Google Pixel 手机', link: '/rooting-guides/how-to-root-pixel-phone' },
                { text: 'Samsung Galaxy 设备', link: '/rooting-guides/how-to-root-samsung-phone' },
                { text: 'Xiaomi/Redmi/POCO', link: '/rooting-guides/how-to-root-xiaomi-phone' },
                { text: 'OnePlus 手机', link: '/rooting-guides/how-to-root-oneplus-phone' },
                { text: 'Motorola 手机', link: '/rooting-guides/how-to-root-motorola-phone' },
                { text: 'Nothing Phone 系列', link: '/rooting-guides/how-to-root-nothing-phone' }
              ]
            }
          ]
        },
        {
          text: '帮助与支持',
          collapsed: true,
          items: [
            { text: '故障排除指南', link: '/troubleshooting' },
            { text: '常见问题', link: '/faqs' },
            { text: '社区帮助与资源', link: '/rooting-guides/#community-and-support' },
            { text: 'Root 术语表', link: '/apps-and-modules/#glossary' }
          ]
        }
      ],

      // Apps and Modules Sidebar
      '/apps-and-modules/': [
        {
          text: '⭐ 快速入口',
          collapsed: false,
          items: [
            { text: '分类总览', link: '/apps-and-modules/' },
            { text: '⭐ 必备应用', link: '/apps-and-modules/#starter-kit-must-have-apps' },
            { text: '📘 术语表与徽章', link: '/apps-and-modules/#glossary' },
            { text: '🛡️ 安全清单', link: '/apps-and-modules/#safety-legal' }
          ]
        },
        {
          text: '🛠️ Root 管理',
          link: '/apps-and-modules/root-management',
          collapsed: true,
          items: [
            { text: 'Root 管理器', link: '/apps-and-modules/root-management#root-managers' },
            { text: '临时 Root（锁定 Bootloader）', link: '/apps-and-modules/root-management#temporary-root-locked-bootloader' },
            { text: '模块管理器', link: '/apps-and-modules/root-management#module-managers' },
            { text: 'Metamodules', link: '/apps-and-modules/root-management#metamodules' },
            { text: 'LSPosed & Xposed', link: '/apps-and-modules/root-management#lsposed-xposed' },
            { text: 'Zygisk', link: '/apps-and-modules/root-management#zygisk' },
            { text: 'Root 隐藏与 Play Integrity', link: '/apps-and-modules/root-management#root-hiding-play-integrity' },
            { text: 'Susfs', link: '/apps-and-modules/root-management#susfs' },
            { text: 'Bootloop 防护', link: '/apps-and-modules/root-management#bootloop-protection' },
            { text: 'Root 检测与测试', link: '/apps-and-modules/root-management#root-detection-testing' },
          ]
        },
        {
          text: '⚙️ 系统',
          link: '/apps-and-modules/system',
          collapsed: true,
          items: [
            { text: '系统调整', link: '/apps-and-modules/system#system-tweaks' },
            { text: 'VBMeta 修改', link: '/apps-and-modules/system#vbmeta-mods' },
            { text: '系统 UI 与框架', link: '/apps-and-modules/system#system-ui-framework' },
            { text: 'AOSP (Android Open Source Project)', link: '/apps-and-modules/system#aosp-android-open-source-project' },
            { text: 'ColorOS (Oppo)', link: '/apps-and-modules/system#coloros-oppo' },
            { text: 'HyperOS (Xiaomi)', link: '/apps-and-modules/system#hyperos-xiaomi' },
            { text: 'NothingOS', link: '/apps-and-modules/system#nothingos' },
            { text: 'One UI (Samsung)', link: '/apps-and-modules/system#one-ui-samsung' },
            { text: 'Onyx', link: '/apps-and-modules/system#onyx' },
            { text: 'Oxygen OS (OnePlus)', link: '/apps-and-modules/system#oxygen-os-oneplus' },
            { text: 'ZUI', link: '/apps-and-modules/system#zui' },
            { text: '启动与开机', link: '/apps-and-modules/system#boot-startup' },
            { text: '应用与包管理', link: '/apps-and-modules/system#app-package-management' },
            { text: '权限与 AppOps', link: '/apps-and-modules/system#permissions-appops' },
            { text: '系统信息与诊断', link: '/apps-and-modules/system#system-information-diagnostics' },
          ]
        },
        {
          text: '⚡ 性能与电池',
          link: '/apps-and-modules/performance',
          collapsed: true,
          items: [
            { text: '性能优化', link: '/apps-and-modules/performance#performance-optimization' },
            { text: '内核管理', link: '/apps-and-modules/performance#kernel-management' },
            { text: '内存与 RAM', link: '/apps-and-modules/performance#memory-ram' },
            { text: '电池优化', link: '/apps-and-modules/performance#battery-optimization' },
            { text: '充电与功耗', link: '/apps-and-modules/performance#charging-power' },
            { text: '任务与进程管理', link: '/apps-and-modules/performance#task-process-management' },
          ]
        },
        {
          text: '🕵️ 隐私',
          link: '/apps-and-modules/privacy',
          collapsed: true,
          items: [
            { text: '隐私工具', link: '/apps-and-modules/privacy#privacy-tools' },
            { text: '设备 ID 与伪装', link: '/apps-and-modules/privacy#device-id-spoofing' },
            { text: '应用隔离', link: '/apps-and-modules/privacy#app-isolation' },
            { text: '位置与 GPS', link: '/apps-and-modules/privacy#location-gps' },
          ]
        },
        {
          text: '🔐 安全',
          link: '/apps-and-modules/security',
          collapsed: true,
          items: [
            { text: '安全工具', link: '/apps-and-modules/security#security-tools' },
            { text: '防火墙与过滤', link: '/apps-and-modules/security#firewalls-filtering' },
          ]
        },
        {
          text: '🚫 广告拦截',
          link: '/apps-and-modules/ad-blocking',
          collapsed: true,
          items: [
            { text: '广告与跟踪器拦截', link: '/apps-and-modules/ad-blocking#ad-tracker-blocking' },
            { text: 'DNS 与网络过滤', link: '/apps-and-modules/ad-blocking#dns-network-filtering' },
          ]
        },
        {
          text: '🧩 应用修改',
          link: '/apps-and-modules/app-modifications',
          collapsed: true,
          items: [
            { text: '应用补丁工具', link: '/apps-and-modules/app-modifications#app-patchers' },
            { text: '应用 Mod', link: '/apps-and-modules/app-modifications#app-mods' },
            { text: '社交媒体 Mod', link: '/apps-and-modules/app-modifications#social-media-mods' },
            { text: '浏览器 Mod', link: '/apps-and-modules/app-modifications#browser-mods' },
            { text: 'YouTube 与媒体 Mod', link: '/apps-and-modules/app-modifications#youtube-media-mods' },
            { text: '签名与校验', link: '/apps-and-modules/app-modifications#signature-verification' },
          ]
        },
        {
          text: '🧹 精简预装',
          link: '/apps-and-modules/debloating',
          collapsed: true,
          items: [
            { text: '精简工具与模块', link: '/apps-and-modules/debloating#debloating' },
          ]
        },
        {
          text: '🗂️ 文件管理',
          link: '/apps-and-modules/file-management',
          collapsed: true,
          items: [
            { text: '文件管理器', link: '/apps-and-modules/file-management#file-managers' },
            { text: '清理', link: '/apps-and-modules/file-management#cleaning' },
            { text: '文件与分区工具', link: '/apps-and-modules/file-management#file-partition-tools' },
          ]
        },
        {
          text: '💾 备份与还原',
          link: '/apps-and-modules/backup',
          collapsed: true,
          items: [
            { text: '备份与还原', link: '/apps-and-modules/backup#backup-restore' },
          ]
        },
        {
          text: '🎨 个性化定制',
          link: '/apps-and-modules/customization',
          collapsed: true,
          items: [
            { text: '主题与视觉修改', link: '/apps-and-modules/customization#themes-visual-mods' },
            { text: '桌面启动器与主屏幕', link: '/apps-and-modules/customization#launchers-home-screen' },
            { text: '状态栏与导航', link: '/apps-and-modules/customization#status-bar-navigation' },
            { text: '手势与操控', link: '/apps-and-modules/customization#gestures-controls' },
            { text: '字体与表情', link: '/apps-and-modules/customization#fonts-emojis' },
            { text: '通知', link: '/apps-and-modules/customization#notifications' },
            { text: '锁屏与 AOD', link: '/apps-and-modules/customization#lockscreen-aod' },
            { text: '屏幕与显示', link: '/apps-and-modules/customization#screen-display' },
          ]
        },
        {
          text: '🎵 音频',
          link: '/apps-and-modules/audio',
          collapsed: true,
          items: [
            { text: '音质增强', link: '/apps-and-modules/audio#audio-enhancement' },
            { text: '音频控制', link: '/apps-and-modules/audio#audio-control' },
            { text: '音频特效', link: '/apps-and-modules/audio#audio-effects' },
          ]
        },
        {
          text: '🌐 网络',
          link: '/apps-and-modules/networking',
          collapsed: true,
          items: [
            { text: 'VPN 与代理', link: '/apps-and-modules/networking#vpn-proxy' },
            { text: '网络工具', link: '/apps-and-modules/networking#network-tools' },
            { text: 'Wi-Fi 与移动数据', link: '/apps-and-modules/networking#wi-fi-mobile-data' },
            { text: '蓝牙与 NFC', link: '/apps-and-modules/networking#bluetooth-nfc' },
          ]
        },
        {
          text: '🎮 游戏',
          link: '/apps-and-modules/gaming',
          collapsed: true,
          items: [
            { text: '游戏优化', link: '/apps-and-modules/gaming#gaming-optimization' },
            { text: '游戏修改与工具', link: '/apps-and-modules/gaming#game-modifications-tools' },
          ]
        },
        {
          text: '🧑‍💻 开发与自动化',
          link: '/apps-and-modules/development',
          collapsed: true,
          items: [
            { text: '终端与 Shell', link: '/apps-and-modules/development#terminal-shell' },
            { text: 'ADB 与调试', link: '/apps-and-modules/development#adb-debugging' },
            { text: '开发者工具', link: '/apps-and-modules/development#developer-tools' },
            { text: 'Linux 环境', link: '/apps-and-modules/development#linux-environments' },
            { text: '自动化', link: '/apps-and-modules/development#automation' },
            { text: '硬件与传感器', link: '/apps-and-modules/development#hardware-sensors' },
          ]
        },
        {
          text: '🧰 实用工具',
          link: '/apps-and-modules/utilities',
          collapsed: true,
          items: [
            { text: '同步与文件传输', link: '/apps-and-modules/utilities#sync-file-transfer' },
            { text: '重启与电源', link: '/apps-and-modules/utilities#reboot-power' },
            { text: '分享与 Intent 工具', link: '/apps-and-modules/utilities#sharing-intent-tools' },
            { text: '通讯与消息', link: '/apps-and-modules/utilities#communication-messaging' },
            { text: '综合工具箱', link: '/apps-and-modules/utilities#general-toolboxes' },
          ]
        },
        {
          text: '📚 更多资源',
          collapsed: true,
          items: [
            { text: 'Root 指南', link: '/rooting-guides/' },
            { text: '通用指南', link: '/general-guides/' },
            { text: '故障排除', link: '/troubleshooting' },
            { text: '常见问题', link: '/faqs' },
            { text: '社区资源', link: '/resources' }
          ]
        }
      ],

      // General Guides Sidebar
      '/general-guides/': [
        {
          text: '📚 全部教程',
          collapsed: false,
          items: [
            { text: '总览', link: '/general-guides/' },
            { text: '快速导航', link: '/general-guides/#quick-navigation' }
          ]
        },
        {
          text: '🛡️ 隐私与安全',
          collapsed: false,
          items: [
            { text: '安全指南', link: '/general-guides/#privacy-security-guides' },
            { text: '广告拦截', link: '/general-guides/android-adblocking' }
          ]
        },
        {
          text: '📦 应用管理',
          collapsed: false,
          items: [
            { text: '应用优化', link: '/general-guides/#app-management-optimization' },
            { text: '精简预装指南', link: '/general-guides/android-apps-debloating' },
            { text: '停止自动更新', link: '/general-guides/stop-android-app-auto-updates-play-store' }
          ]
        },
        {
          text: '⚡ 系统优化',
          collapsed: true,
          items: [
            { text: '性能指南', link: '/general-guides/#performance-system-optimization' },
            { text: '电池优化', link: '/general-guides/#battery-power-management' }
          ]
        },
        {
          text: '个性化定制',
          collapsed: true,
          items: [
            { text: '主题美化指南', link: '/general-guides/#customization-theming' },
            { text: 'UI 修改', link: '/general-guides/#system-ui-changes' }
          ]
        },
        {
          text: '进阶主题',
          collapsed: true,
          items: [
            { text: '技术指南', link: '/general-guides/#development-technical-guides' },
            { text: 'Android 知识', link: '/general-guides/#essential-android-knowledge' }
          ]
        },
        {
          text: '社区',
          collapsed: true,
          items: [
            { text: '资源', link: '/general-guides/#community-resources' },
            { text: '参与贡献', link: '/general-guides/#contributing-to-our-guides' }
          ]
        }
      ],

      // Standalone pages sidebars
      '/troubleshooting': [
        {
          text: '故障排除',
          items: [
            { text: '紧急恢复', link: '/troubleshooting#emergency-recovery' },
            { text: 'Magisk 故障排除', link: '/troubleshooting#magisk-troubleshooting' },
            { text: 'KernelSU 故障排除', link: '/troubleshooting#kernelsu-troubleshooting' },
            { text: 'APatch 故障排除', link: '/troubleshooting#apatch-troubleshooting' },
            { text: 'Bootloader 与 Fastboot', link: '/troubleshooting#bootloader-and-fastboot-issues' },
            { text: 'Play Integrity', link: '/troubleshooting#play-integrity-and-banking-apps' }
          ]
        },
        {
          text: '相关页面',
          items: [
            { text: '返回指南', link: '/rooting-guides/' },
            { text: '常见问题', link: '/faqs' },
            { text: '社区帮助', link: '/resources' }
          ]
        }
      ],

      '/faqs': [
        {
          text: '常见问题',
          items: [
            { text: '新手入门', link: '/faqs#getting-started' },
            { text: '技术问题', link: '/faqs#technical-questions' },
            { text: '兼容性', link: '/faqs#compatibility' },
            { text: 'Root 之后', link: '/faqs#after-rooting' },
            { text: '社区与支持', link: '/faqs#community-and-support' }
          ]
        },
        {
          text: '相关页面',
          items: [
            { text: '返回指南', link: '/rooting-guides/' },
            { text: '故障排除', link: '/troubleshooting' },
            { text: '资源', link: '/resources' }
          ]
        }
      ],

      '/resources': [
        {
          text: '资源',
          items: [
            { text: '核心工具', link: '/resources#core-tooling' },
            { text: '学习与参考', link: '/resources#learning-and-reference' },
            { text: '社区与支持', link: '/resources#communities-and-support' },
            { text: '固件与设备数据', link: '/resources#firmware-and-device-data' },
            { text: '紧急情况与恢复', link: '/resources#emergency-and-recovery' },
            { text: '进阶工程', link: '/resources#advanced-engineering' }
          ]
        },
        {
          text: '快捷链接',
          items: [
            { text: 'Root 指南', link: '/rooting-guides/' },
            { text: '浏览应用', link: '/apps-and-modules/' },
            { text: '常见问题', link: '/faqs' }
          ]
        }
      ],

      '/about': [
        {
          text: '关于',
          items: [
            { text: '我们的使命', link: '/about#our-mission' },
            { text: '我们提供的内容', link: '/about#what-we-offer' },
            { text: '快速上手', link: '/about#getting-started' },
            { text: '社区与支持', link: '/about#community-support' },
            { text: '核心价值观', link: '/about#core-values' },
            { text: '支持本项目', link: '/about#support-the-project' }
          ]
        },
        {
          text: '参与我们',
          items: [
            { text: '参与贡献', link: '/contributing' },
            { text: 'GitHub', link: 'https://github.com/awesome-android-root/awesome-android-root' }
          ]
        }
      ],

      '/contributing': [
        {
          text: '参与贡献',
          items: [
            { text: '快速开始', link: '/contributing#quick-start' },
            { text: '条目格式', link: '/contributing#entry-format' },
            { text: '分类与标签', link: '/contributing#categories-tags' },
            { text: '质量要求', link: '/contributing#quality-requirements' },
            { text: 'Pull Request 模板', link: '/contributing#pull-request-template' }
          ]
        },
        {
          text: '资源',
          items: [
            { text: 'GitHub Issues', link: 'https://github.com/awesome-android-root/awesome-android-root/issues' },
            { text: '讨论区', link: 'https://github.com/awesome-android-root/awesome-android-root/discussions' },
            { text: '项目主页', link: '/' }
          ]
        }
      ],

      '/non-root-alternatives': [
        {
          text: '免 Root 替代方案',
          items: [
            { text: '总览', link: '/non-root-alternatives' },
            { text: '快速评估', link: '/non-root-alternatives#quick-assessment' },
            { text: '基础技术', link: '/non-root-alternatives#foundation-technologies' },
            { text: '按需求分类的核心方案', link: '/non-root-alternatives#core-solutions-by-need' },
            { text: '有效性对比', link: '/non-root-alternatives#effectiveness-comparison' }
          ]
        },
        {
          text: '相关页面',
          items: [
            { text: '收益与风险', link: '/rooting-guides/#benefits-vs-risks' },
            { text: 'Root 应用', link: '/apps-and-modules/' },
            { text: '首页', link: '/' }
          ]
        }
      ]
    },


    footer: {
      message: `
        <div style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; align-items: center; margin-bottom: 8px; font-size: 14px;">
          <a href="/contributing" style="color: var(--vp-c-text-2); transition: color 0.2s; text-decoration: none; font-weight: 500;">参与贡献</a>
          <span style="color: var(--vp-c-divider);">•</span>
          <a href="/legal-disclaimer" style="color: var(--vp-c-text-2); transition: color 0.2s; text-decoration: none; font-weight: 500;">法律声明</a>
          <span style="color: var(--vp-c-divider);">•</span>
          <a href="https://github.com/awesome-android-root/awesome-android-root" style="color: var(--vp-c-text-2); transition: color 0.2s; text-decoration: none; font-weight: 500;">GitHub</a>
          <span style="color: var(--vp-c-divider);">•</span>
          <a href="https://x.com/awsm_and_root" style="color: var(--vp-c-text-2); transition: color 0.2s; text-decoration: none; font-weight: 500;">Twitter/X</a>
        </div>
      `,
      copyright: `Copyright © ${new Date().getFullYear()} 超棒的安卓 Root 项目`
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '上次更新'
    },
    appearance: 'auto',
    socialLinks: [
      { icon: 'x', link: 'https://x.com/awsm_and_root' },
      { icon: 'github', link: 'https://github.com/awesome-android-root/awesome-android-root' }
    ],
  },
}))
