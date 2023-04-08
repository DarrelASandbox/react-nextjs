import EventContent from '@/components/event-details/event-content';
import EventLogistics from '@/components/event-details/event-logistics';
import EventSummary from '@/components/event-details/event-summary';
import ErrorAlert from '@/components/ui/error-alert';
import { getAllEvents, getEventById } from '@/helpers/api-utils';

const EventDetailsPage = (props) => {
  const event = props.event;

  if (!event)
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  // Prevent `[...slug].js` `<ErrorAlert>` from taking precedence
  if (!event) return { notFound: true };
  return { props: { event } };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return { paths, fallback: 'blocking' };
};

export default EventDetailsPage;
