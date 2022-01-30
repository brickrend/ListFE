import TaskItem from "./TaskItem";
import taskStore from "../../stores/taskStore";
import { observer } from "mobx-react";
import { useState } from "react";
import AddList from "./AddList";

const TaskList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log(modalIsOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const tasks = taskStore.tasks.map((task) => {
    return <TaskItem task={task} />;
  });

  return (
    <div>
      {tasks}
      <button onClick={openModal}>Add</button>
      <AddList isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default observer(TaskList);
