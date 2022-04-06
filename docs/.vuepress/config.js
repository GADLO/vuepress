module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Varren',
    description: '基于 VuePress 文章分享站点',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: 'JavaScript',
          children: ['/js/深浅拷贝.md', '/group/bar.md'],
        },
        // NavbarGroup
        {
          text: 'CSS',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        {
            text: 'ES6',
            link: '/ES6/ES6'
          },
      ],
    },
  }