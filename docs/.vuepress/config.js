module.exports = {
  // theme: 'reco',
  title: 'Kora',
  description: 'time reveals a person\'s heart',
  head: [
    ['link', { rel: 'icon', href: '/images/KR.png' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Note',
        items: [
          { text: 'VUE', link: '/note/vue/' },
          { text: 'W3C', link: '/resume/' },
          { text: 'WX-mini', link: '/friends/'},
          { text: 'UI', link: '/relation/'}
        ]
      },
      { text: 'Resume', link: '/resume/' },
      { text: 'Friends', link: '/friends/' },
      { text: 'Relation', link: '/relation/' },
      { text: 'Github', link: 'https://github.com/kora-KR' },
    ],
    sidebarDepth: ['/', '/android/', '/ios/'],
    sidebar: [
      {
        title: '前端迷途知路',
        children: [ '', '' ]
      },
      {
        title: '后端望而却步',
        children: [ '' ]
      }
    ],
    displayAllHeaders: true, // 默认值：false

    // 搜索 - 内置
    search: true,
    searchMaxSuggestions: 10,
    // 搜索 - algolia
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },

    // 最后显示时间
    lastUpdated: 'Last Updated', // string | boolean

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'kora-KR',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Source',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'kora-KR',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '进入开源，我们一起成长'
  },
   // 其它配置
  configureWebpack: {
    resolve: {
      alias: {
        '@vuepress': '/images',
      }
    }
  }
}
