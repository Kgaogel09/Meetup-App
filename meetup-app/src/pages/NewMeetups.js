import { useHistory } from "react-router-dom";
import MeetupForm from "../components/meetups/MeetupForm";

function NewMeetups() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://meetups-app-27c87-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h2>Add New Meetup</h2>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetups;
