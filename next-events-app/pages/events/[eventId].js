import EventContent from '@/components/event-details/event-content';
import EventLogistics from '@/components/event-details/event-logistics';
import EventSummary from '@/components/event-details/event-summary';
import Comments from '@/components/input/comments';
import { getEventById, getFeaturedEvents } from '@/helpers/api-utils';
import Head from 'next/head';

const EventDetailsPage = (props) => {
  const event = props.event;

  if (!event)
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  // Prevent `[...slug].js` `<ErrorAlert>` from taking precedence
  if (!event) return { notFound: true };
  return { props: { event }, revalidate: 30 };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return { paths, fallback: true };
};

export default EventDetailsPage;
