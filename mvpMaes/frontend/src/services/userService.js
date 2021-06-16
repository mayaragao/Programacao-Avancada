import api from "../api";

class UserService {
  getUser() {
    return api.get("/users");
  }
}

export default new UserService();
                                                                                        