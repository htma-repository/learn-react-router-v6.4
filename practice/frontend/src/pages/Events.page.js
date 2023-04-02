import React, { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventList from "../components/EventsList";

const EventsPage = () => {
  /* Using the `useLoaderData` hook to get the data from the server. */
  const { events } = useLoaderData();

  // const [eventsData, setEventsData] = useState([]);

  // useEffect(() => {
  //   const getEvent = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/events", {
  //         method: "GET",
  //       });
  //       if (!response.ok) {
  //         throw new Error("Failed Get Events Data");
  //       }
  //       const data = await response.json();
  //       setEventsData(data.events);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   getEvent();
  // }, []);

  /* Checking if there is an error. If there is an error, it will return a paragraph with the error
message. */
  // if (eventsData.isError) {
  //   return (
  //     <p style={{ textAlign: "center", color: "red" }}>{eventsData.message}</p>
  //   );
  // }

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Events</h1>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(events) => <EventList events={events} />}
        </Await>
      </Suspense>
    </section>
  );
};

export default EventsPage;

const getEvent = async () => {
  /* Making a request to the server to get the events data. */
  const response = await fetch("http://localhost:8080/events", {
    method: "GET",
  });

  if (!response.ok) {
    /* Throwing an error. */
    // throw new Response(JSON.stringify({ message: "Failed get data events!" }), {
    //   status: 500,
    // });
    /* Returning an object with two properties. */
    // return { isError: true, message: "Failed get data events!" };
    /* Throwing an error. */
    throw json({ message: "Failed get events data!" }, { status: 500 });
  }
  // const data = await response.json();
  // localStorage.setItem("events", JSON.stringify(data.events));
  // return data.events;
  const data = await response.json();
  return data.events;
};

export const deferEvent = () => {
  return defer({
    events: getEvent(),
  });
};
