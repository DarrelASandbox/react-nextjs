import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/results-title/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

const FilteredEventPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) return <p className="center">Loading...</p>;

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  )
    return (
      <>
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter, please adjust the year and month values</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth });
  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <div className="center">
          <ErrorAlert>
            <p>No event found!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;
