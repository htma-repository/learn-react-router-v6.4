import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  // const { input, setInput, onChangeInputHandler } = useInputState({
  //   title: "",
  //   image: "",
  //   date: "",
  //   description: "",
  // });

  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  console.log(method);

  // console.log(Object.values(actionData.errors));

  const isSubmitting = navigation.state === "submitting";

  // useEffect(() => {
  //   if (event) {
  //     setInput({
  //       title: event.title,
  //       image: event.image,
  //       date: event.date,
  //       description: event.description,
  //     });
  //   }
  // }, [event, setInput]);

  // const { title, image, date, description } = input;

  function cancelHandler() {
    navigate(-1);
    // setInput({ title: "", image: "", date: "", description: "" });
  }

  // function submitHandler(event) {
  //   event.preventDefault();
  // if (title || image || date || description) {
  //   eventData(input);
  // }
  //   setInput({ title: "", image: "", date: "", description: "" });
  // }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          // value={title}
          // onChange={onChangeInputHandler}
          defaultValue={event ? event.title : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // value={image}
          // onChange={onChangeInputHandler}
          defaultValue={event ? event.image : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          // value={date}
          // onChange={onChangeInputHandler}
          defaultValue={event ? event.date : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          // value={description}
          // onChange={onChangeInputHandler}
          defaultValue={event ? event.description : ""}
          required
        />
      </p>
      {/* Checking if there is an error in the actionData. If there is, it will display the error. */}
      {actionData && actionData.errors && (
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            color: "red",
            columnGap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.values(actionData.errors).map((error) => (
            <li key={error}>
              <p>{error}</p>
            </li>
          ))}
        </ul>
      )}
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const mutateEvent = async ({ request, params }) => {
  /* Getting the form data from the request object. */
  const formData = await request.formData();
  /* Getting the method from the request object. */
  const method = request.method;
  /* Getting the eventId from the params object. */
  const eventId = params.eventId;

  /* Destructuring the formData object into a new object. */
  const data = Object.fromEntries(formData);

  /* Destructuring the formData object into a new object. */
  // const data = {
  //   title: formData.get("title"),
  //   image: formData.get("image"),
  //   date: formData.get("date"),
  //   description: formData.get("description"),
  // };

  let URL = "http://localhost:8080/events";

  /* Checking if the method is PATCH. If it is, it will add the eventId to the URL. */
  if (method === "PATCH") {
    URL = `${URL}/${eventId}`;
  }

  /* Sending a request to the server. */
  const response = await fetch(URL, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  /* Checking if the response status is greater than or equal to 400. If it is, it will return the
response. */
  if (response.status >= 400) {
    return response;
  }

  if (!response.ok) {
    // throw new Error("Failed Post New Event");

    /* Throwing an error. */
    throw json(
      {
        message:
          method === "PATCH" ? "Failed Edit Event" : "Failed Add New Post",
      },
      { status: 500 }
    );
  }

  /* Redirecting the user to the events page. */
  return redirect("/events");
};
