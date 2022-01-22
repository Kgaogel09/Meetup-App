import { Route } from "react-router-dom";
import MainNav from "./components/layout/MainNav";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <div>
      <MainNav />
      <Route exact path="/">
        <AllMeetups />
      </Route>
      <Route exact path="/new-meetups">
        <NewMeetups />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
