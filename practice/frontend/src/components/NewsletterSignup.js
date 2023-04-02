import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function NewsletterSignup() {
  const { Form, data, state } = useFetcher();

  useEffect(() => {
    if (state === "loading" && data && data.message) {
      alert(data.message);
    }
  }, [data, state]);

  return (
    <Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button type="submit">Sign up</button>
    </Form>
  );
}

export default NewsletterSignup;
