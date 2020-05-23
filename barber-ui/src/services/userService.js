import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.fullName,
    userType: user.userType,
    location: user.location
  });
}
