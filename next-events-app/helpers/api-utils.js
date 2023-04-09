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

const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
};

export { getAllEvents, getFeaturedEvents, getEventById, getFilteredEvents };
