import { Home, Landing, Form, Detail } from "./views";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && pathname !== "/detail" && <Nav />}

      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/detail/:id" render={() => <Detail />} />
      <Route exact path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
