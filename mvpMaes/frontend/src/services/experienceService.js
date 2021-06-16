import api from "../api";

class ExperienceService {
  getExperiences() {
    return api.get("/experiencias");
  }
  addExperience(data) {
    return api.post("/aexperiencias/add", data);
  }
  commentExperience(data) {
    return api.post("/aexperiencias/comment", data);
  }
  likeExperience(data) {
    return api.post("/aexperiencias/like", data);
  }
}

export default new ExperienceService();
