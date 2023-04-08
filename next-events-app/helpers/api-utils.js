const getAllEvents = async () => {
  const res = await fetch(
    'https://nextjs-d69a4-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );
  const data = await res.json();
  const events = [];
  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  return events;
};

const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export { getAllEvents, getFeaturedEvents };
