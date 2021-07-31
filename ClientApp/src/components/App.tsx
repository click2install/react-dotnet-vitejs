
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Counter } from "./Counter";
import { Progress } from "./Progress";
import { UserContextProvider } from "../context/UserContext";

const TodoList = lazy(() => import("./TodoList").then(module => ({ default: module.TodoList })));

const EmDash = () => <>{String.fromCharCode(8212)}</>;

export function App()
{
  return (
    <UserContextProvider>
      <Suspense fallback={<Progress />}>
        <Router basename="/dashboard">
          <p>
            <Link to="/">Counter</Link>
            {" "}<EmDash />{" "}
            <Link to="/todo">Todo List</Link>
          </p>
          <Switch>
            <Route exact path="/">
              <Counter />
            </Route>
            <Route path="/todo">
              <TodoList />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </UserContextProvider>
  );
}