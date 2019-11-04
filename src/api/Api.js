export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
    } catch (err) {
      console.error(err);
    }
  },

  login() {
    this._token = 'token';

    this._storeToken();
  },

  logout() {
    this._token = null;
    
    this._removeToken();
  },

  _storeToken() {
    try {
      window.localStorage.setItem('token', JSON.stringify(this._token));
    } catch (err) {
      console.error(err);
    }
  },

  _removeToken() {
    try { 
      window.localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
  }
}

export function init() {
  Auth.init();
}