import { useRef, useState } from 'react';

const HomePage = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFeedbackHandler = async () => {
    try {
      const response = await fetch('/api/feedback');
      const data = await response.json();
      setFeedbackItems(data.feedback);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <h1>API Route Home Page</h1>
        <p>Refer to api folder in page folder. It has to be structured this way!</p>
      </div>

      <div>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="feedback">Feedback</label>
            <textarea id="feedback" row="5" ref={feedbackInputRef} />
          </div>
          <button>Send Feedback!</button>
        </form>

        <hr />
        <button onClick={loadFeedbackHandler}>Load Feedback</button>
        <ul>
          {feedbackItems?.map((item) => (
            <li key={item.id}>{item.feedbackText}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
