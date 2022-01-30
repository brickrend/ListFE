// ** stores **

const TaskItem = (props) => {
  return (
    <div>
      <p>{props.task.taskname}</p>
      <p>{props.task.date}</p>
    </div>
  );
};

export default TaskItem;
