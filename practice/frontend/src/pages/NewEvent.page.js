import React from "react";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  // const newEventHandler = async (eventData) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/events", {
  //       method: "POST",
  //       body: eventData,
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
      <h1 style={{ textAlign: "center" }}>New Event Page</h1>
      <EventForm method="POST" />
    </section>
  );
};

export default NewEventPage;

// export const postEvent = async ({ request }) => {
//   /* Getting the form data from the request object. */
//   const formData = await request.formData();

//   /* Destructuring the formData object into a new object. */
//   const data = Object.fromEntries(formData);

//   /* Destructuring the formData object into a new object. */
//   // const data = {
//   //   title: formData.get("title"),
//   //   image: formData.get("image"),
//   //   date: formData.get("date"),
//   //   description: formData.get("description"),
//   // };

//   /* Sending a POST request to the server. */
//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   /* Checking if the response status is greater than or equal to 400. If it is, it will return the
// response. */
//   if (response.status >= 400) {
//     return response;
//   }

//   if (!response.ok) {
//     // throw new Error("Failed Post New Event");
//     /* Throwing an error message and a status code. */
//     throw json({ message: "Failed Post New Event" }, { status: 500 });
//   }

//   /* Redirecting the user to the events page. */
//   return redirect("/events");
// };
