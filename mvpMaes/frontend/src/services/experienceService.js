import httpBackend from "../http-backend";

class ExperienceService {
  getExperiences() {
    return httpBackend.get("/experiencias");
  }
  addExperience(data) {
    return httpBackend.post("/experiencias/add", data);
  }
  commentExperience(data) {
    return httpBackend.post("/experiencias/comment", data);
  }
  likeExperience(data) {
    return httpBackend.post("/experiencias/like", data);
  }
}

export default new ExperienceService();
