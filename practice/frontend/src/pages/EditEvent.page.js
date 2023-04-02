import React, { Suspense } from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData, Await } from "react-router-dom";

const EditEventPage = () => {
  /* Using the `useRouteLoaderData` hook to get the data from the `event-detail` route. */
  const { event } = useRouteLoaderData("event-detail");

  // const [eventDetailData, setEventDetailData] = useState({});
  // const { eventId } = useParams();

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

  // const editEventHandler = async (eventData) => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/events/${eventId}`, {
  //       method: "PATCH",
  //       body: JSON.stringify(eventData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed Post New Event");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Edit Event Page</h1>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(event) => <EventForm event={event} method="PATCH" />}
        </Await>
      </Suspense>
    </section>
  );
};

export default EditEventPage;

// export const patchEvent = async ({ request, params }) => {
//   /* Getting the form data from the request. */
//   const formData = await request.formData();

//   /* Converting the formData into an object. */
//   const data = Object.fromEntries(formData);

//   /* Sending the data to the server. */
//   const response = await fetch(
//     `http://localhost:8080/events/${params.eventId}`,
//     {
//       method: "PATCH",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     // throw new Error("Failed Post New Event");
//     /* Throwing an error and sending a json response with a message and status code. */
//     throw json({ message: "Failed Edit Event" }, { status: 500 });
//   }

//   /* Redirecting the user to the events page. */
//   return redirect("/events");
// };
