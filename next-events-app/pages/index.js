import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-utils';

const HomePage = (props) => {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return { props: { featuredEvents }, revalidate: 1800 };
};

export default HomePage;
