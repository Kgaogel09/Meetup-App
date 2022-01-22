import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <AllMeetups />
      </Route>
      <Route exact path="/new-meetups">
        <NewMeetups />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Layout>
  );
}

export default App;
