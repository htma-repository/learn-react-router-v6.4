import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  // const navigate = useNavigate();

  const submit = useSubmit();

  async function startDeleteHandler() {
    /* A confirmation window that pops up when you click the delete button. */
    const isDelete = window.confirm("delete event?");

    if (isDelete) {
      submit(null, { method: "DELETE" });
    }
  }

  //   if (event.id) {
  //     try {
  //       /* Deleting the event from the database. */
  //       const response = await fetch(
  //         `http://localhost:8080/events/${event.id}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed Delete Event");
  //       }
  //       const data = await response.json();
  //       alert(data.message);
  //       navigate("/events");
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }

  return (
    <article className={classes.event}>
      <img src={event?.image} alt={event?.title} />
      <h1>{event?.title}</h1>
      <time>{event?.date}</time>
      <p>{event?.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        {/* <Form method="delete"> */}
        <button type="submit" onClick={startDeleteHandler}>
          Delete
        </button>
        {/* </Form> */}
      </menu>
    </article>
  );
}

export default EventItem;
