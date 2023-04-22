import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const feedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();

  // Redundant because we have already received the full data via props
  // however, this is how dynamic API route feature is used
  const loadFeedbackHandler = async (id) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    setFeedbackData(data.feedback);
  };

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedbackText}
            <button onClick={() => loadFeedbackHandler(item.id)}>Show Details</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return { props: { feedbackItems: data } };
}

export default feedbackPage;
