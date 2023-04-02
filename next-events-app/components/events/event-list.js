import EventItem from './event-item';

const EventList = (props) => (
  <ul>
    {props.items.map((event) => (
      <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
      />
    ))}
  </ul>
);

export default EventList;
