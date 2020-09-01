import http from "./http";

const loginURL = "http://127.0.0.1:8000/api/auth/token/login/";
const logoutURL = "http://127.0.0.1:8000/api/auth/token/logout/";
const registerURL = "http://127.0.0.1:8000/api/auth/users/";
const userInfoURL = "http://127.0.0.1:8000/api/auth/users/me/";

// const config = { headers: { Authorization: `Token ${localStorage.getItem("token")}` } };

export function login(password, email) {
  return http.post(loginURL, { password, email });
}

export function getUserInfo() {
  return http.get(userInfoURL, {
    headers: { Authorization: `Token ${localStorage.getItem("token")}` },
  });
}

export function register(first_name, last_name, email, password) {
  return http.post(registerURL, {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  });
}

export async function logout() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  };
  await http.post(logoutURL, {}, config);
}

export default {
  login,
  register,
  logout,
};
