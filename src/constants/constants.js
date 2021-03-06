export const routes = {
  home: {path: '/', isLight: false},
  auth: {path: '/auth', isLight: true},
  login: {path: '/auth/login', isLight: true},
  register: {path: '/auth/register', isLight: true},
  restorePassword: {path: '/auth/restorePassword', isLight: true},
  inbox: {path: '/inbox', isLight: false},
  terms: {path: '/terms', isLight: true},
  privacy: {path: '/privacy', isLight: true},
  bookmarks: {path: '/bookmarks', isLight: false},
  profile: {path: '/profile', isLight: false},
  search: {path: '/search', isLight: false},
};

export const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account/user',
};
