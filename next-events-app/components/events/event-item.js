import Link from 'next/link';
import classes from './event-item.module.css';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  const formattedAddress = location.replace(', ', '\n');
  const eventLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={eventLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
