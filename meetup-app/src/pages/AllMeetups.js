import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://meetups-app-27c87-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Transform the data by creating a helper array
        const meetups = [];
        // Go for all the keys in the data
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h2>All Meetups</h2>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;

// https request are fetched in a useEffect hook directly in the component function. Responsible for when the code should run.
// const [profile, setProfile] = useState(initProfile);

// async function getProfile() {
//   const response = await fetch("https://api.github.com/users/gitmil");
//   const json = await response.json();

//   setProfile({
//     followers: json.followers,
//     publicRepos: json.public_repos,
//   });
// }

// useEffect(() => {
//   getProfile();
// }, []);
