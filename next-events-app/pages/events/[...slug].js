import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/results-title/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import { getFilteredEvents } from '@/helpers/api-utils';

const FilteredEventPage = (props) => {
  const { filteredEvents } = props;
  const { year, month } = filteredEvents;

  if (props.hasError)
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

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filteredData = params.slug;
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
    return { props: { filteredEvents: [], hasError: true } };

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return { props: { filteredEvents } };
};

export default FilteredEventPage;
