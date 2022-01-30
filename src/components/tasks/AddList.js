import React from "react";
import Modal from "react-modal";
import { observer } from "mobx-react";
import { useState } from "react";
import taskStore from "../../stores/taskStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddList = (props) => {
  const [newTask, setNewTask] = useState({ taskname: "", date: "" });
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    taskStore.addTask(newTask);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        closeModal={props.closeModal}
        style={customStyles}
      >
        <div>Enter New Take</div>
        <input name="taskname" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Submit</button>
      </Modal>
    </div>
  );
};

export default observer(AddList);
