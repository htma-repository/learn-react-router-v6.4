// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.page";
import EventsPage, { deferEvent } from "./pages/Events.page";
import EventDetailPage, {
  deferEventDetail,
  deleteEvent,
} from "./pages/EventDetail.page";
import NewEventPage from "./pages/NewEvent.page";
import EditEventPage from "./pages/EditEvent.page";
import Layout from "./components/layout/Layout";
import EventLayout from "./components/layout/EventLayout";
import ErrorPage from "./pages/Error.page";
import { mutateEvent } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./pages/Newsletter.page";

/* Creating a router object that is used to render the page. */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: deferEvent,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: deferEventDetail,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              { path: "edit", element: <EditEventPage />, action: mutateEvent },
            ],
          },
          { path: "new", element: <NewEventPage />, action: mutateEvent },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
