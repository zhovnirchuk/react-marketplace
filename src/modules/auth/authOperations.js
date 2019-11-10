import Api from '../../api';

export async function login(body) {
  const res = await Api.Auth.login(body);

  const { user, token } = res.data;

  Api.Auth.setToken(token);
}

export async function register(body) {
  const res = await Api.Auth.register(body);

  const { user, token } = res.data;

  Api.Auth.setToken(token);
}

export function logout() {

}