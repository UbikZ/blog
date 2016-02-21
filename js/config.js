$(function () {

  CMS.init({
    siteName: 'Blog',
    siteTagline: 'Blog Technologies',
    siteEmail: '',
    siteAuthor: 'Gabriel Malet',
    siteNavItems: [
      { name: 'Github', href: 'https://github.com/ubikz', newWindow: true },
      { name: 'About' }
    ],
    postsFolder: 'posts',
    postSnippetLength: 120,
    pagesFolder: 'pages',
    sortDateOrder: true,
    postsOnFrontpage: true,
    pageAsFrontpage: '',
    postsOnUrl: '',
    fadeSpeed: 300,
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',
    mode: 'Server',
  });

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
