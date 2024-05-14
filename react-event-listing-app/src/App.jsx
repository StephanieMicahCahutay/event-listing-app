import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';;
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventPage, { eventLoader } from './pages/EventPage';
import NotFoundPage from './pages/NotFoundPage';
import AddEventPage from './pages/AddEventPage';
import EditEventPage from './pages/EditEventPage';

const App = () => {
  const addEvent = async (newEvent) => {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    });
    return;
  };

  // Delete Event
  const deleteEvent = async (id) => {
    const res = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });
    return;
  };

    // Update Event
    const updateEvent = async (event) => {
      const res = await fetch(`/api/events/${event.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      return;
    };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='events' element={<EventsPage />} />
        <Route path='/add-event' element={<AddEventPage addEventSubmit={addEvent} />} />
        <Route 
          path='edit-event/:id'
          element={<EditEventPage updateEventSubmit={updateEvent}  />}
          loader={eventLoader} 
        />
        <Route 
          path='events/:id'
          element={<EventPage deleteEvent={deleteEvent} />}
          loader={eventLoader} 
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
