// ** mobx **
import { makeAutoObservable } from "mobx";
// ** instance **
import instance from "./instance";

class TaskStore {
  tasks = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fatchtask = async () => {
    try {
      const response = await instance.get("/lists");
      this.tasks = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  addTask = async (newTask) => {
    try {
      const new_Task = newTask;
      const response = await instance.post("/addTask", new_Task);
      this.tasks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const taskStore = new TaskStore();
taskStore.fatchtask();
export default taskStore;
