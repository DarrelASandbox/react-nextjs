import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { getAllEvents } from '@/helpers/api-utils';
import { useRouter } from 'next/router';

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return { props: { events }, revalidate: 60 };
};

export default AllEventsPage;
