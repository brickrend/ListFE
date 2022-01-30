import instance from "./instance";

class AuthStore {
  user = null;

  register = async (newUser) => {
    try {
      await instance.post("/register", newUser);
    } catch (error) {
      console.error(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
