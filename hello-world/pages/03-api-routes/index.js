import { useRef } from 'react';

const HomePage = () => {
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
      const data = response.json();
      console.log(data);
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
      </div>
    </>
  );
};

export default HomePage;
