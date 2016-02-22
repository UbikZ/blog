$(function () {

  CMS.init({
    siteName: '<i class="fa fa-code"></i> Blog',
    siteTagline: 'New technologies reviews, tests and much more',
    siteEmail: '',
    siteAuthor: 'Gabriel Malet',
    siteNavItems: [
      { name: '<i class="fa fa-github"></i> Github', href: 'https://github.com/ubikz', newWindow: true },
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
