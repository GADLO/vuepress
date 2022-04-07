module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Varren',
  description: '基于 VuePress 文章分享站点',
  base: '/docs/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'varren.png',
    navbar: [
      // NavbarItem
      {
        text: 'JavaScript',
        children: ['/js/深浅拷贝.md', '/js/执行上下文.md', '/js/Front-end.md']
      },
      // NavbarGroup
      {
        text: 'CSS',
        children: ['/group/foo.md', '/group/bar.md']
      },
      // 字符串 - 页面文件路径
      {
        text: 'ES6',
        link: '/ES6/ES6'
      },
      {
        text: 'Vue',
        children: ['/vue/基础知识.md', '/vue/底层原理.md', '/vue/扩展.md']
      }
    ]
  }
}
