import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { getAllEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;
