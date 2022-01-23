import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  // storing html/jsx components in variables
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h2>Favorites</h2>
      {content}
    </section>
  );
}

export default Favorites;
