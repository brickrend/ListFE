// ** router **
import { Switch, Route } from "react-router";
// ** imports **
import Register from "./components/authentication/Register";
// ** components **
import TaskList from "./components/tasks/TaskList";
import TaskItem from "../src/components/tasks/TaskItem";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/tasks">
          <TaskList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
