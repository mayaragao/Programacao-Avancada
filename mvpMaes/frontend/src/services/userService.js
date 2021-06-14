import httpBackend from "../http-backend";

class UserService {
  getUser() {
    return httpBackend.get("/auth/user");
  }

  postLogout(data) {
    return httpBackend.post("/auth/logout", data);
  }

  postLogin(data) {
    return httpBackend.post("/auth/login", data);
  }

  postRegister(data) {
    return httpBackend.post("/auth/register", data);
  }
}

export default new UserService();
