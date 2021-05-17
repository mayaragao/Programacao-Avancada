import httpBackend from "../http-backend";

class UserService {
  getUser() {
    return httpBackend.get("/users");
  }
}

export default new UserService();
