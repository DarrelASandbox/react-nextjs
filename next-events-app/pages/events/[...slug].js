import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/results-title/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const FilteredEventPage = () => {
  // Client-Side Data Fetching
  const [loadedEvents, setLoadedEvents] = useState();

  const router = useRouter();
  const filteredData = router.query.slug;
  const fetcher = async (url) => (await fetch(url)).json();
  const { data, error } = useSWR(process.env.firebaseURL, fetcher);

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({ id: key, ...data[key] });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  // View page source
  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`A list of filtered events`} />
    </Head>
  );

  if (!loadedEvents)
    return (
      <>
        {pageHeadData}
        <p className="center">Loading...</p>
      </>
    );

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`The event list for ${filteredMonth}/${filteredYear}`}
      />
    </Head>
  );

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1 ||
    error
  )
    return (
      <>
        {pageHeadData}
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter, please adjust the year and month values</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === filteredYear &&
      eventDate.getMonth() === filteredMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        {pageHeadData}
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
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;
