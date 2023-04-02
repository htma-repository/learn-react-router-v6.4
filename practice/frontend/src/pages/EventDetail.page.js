import React, { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const [eventDetailData, setEventDetailData] = useState({});
  // const { eventId } = useParams();

  const { event } = useRouteLoaderData("event-detail");

  // console.log(eventDetailData);

  // useEffect(() => {
  //   const getEventDetail = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/events/${eventId}`,
  //         {
  //           method: "GET",
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed Get Detail Event");
  //       }
  //       const data = await response.json();

  //       setEventDetailData(data.event);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };

  //   getEventDetail();
  // }, [eventId]);

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Event Detail Page</h1>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
      </Suspense>
    </section>
  );
};

export default EventDetailPage;

const getEventDetail = async (eventId) => {
  /* Fetching the data from the server. */
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: "GET",
  });

  if (!response.ok) {
    /* Throwing an error with a message and a status code. */
    throw json({ message: "Failed get event detail data!" }, { status: 500 });
  }

  const data = await response.json();

  console.log(data.event);

  return data.event;
};

export const deferEventDetail = ({ params }) => {
  /* Getting the eventId from the params object. */
  const eventId = params.eventId;

  return defer({
    event: getEventDetail(eventId),
  });
};

export const deleteEvent = async ({ params, request }) => {
  /* Getting the eventId from the params object. */
  const eventId = params.eventId;
  const method = request.method;

  /* Fetching the data from the server. */
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  /* Throwing an error with a message and a status code. */
  if (!response.ok) {
    throw json({ message: "Failed delete event data!" }, { status: 500 });
  }

  /* Redirecting the user to the events page. */
  return redirect("/events");
};
