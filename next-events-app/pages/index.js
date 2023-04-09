import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-utils';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta name="description" content="The NEXT event that is in town!" />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return { props: { featuredEvents }, revalidate: 1800 };
};

export default HomePage;
