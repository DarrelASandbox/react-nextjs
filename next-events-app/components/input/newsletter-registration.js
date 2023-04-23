import NotificationContext from '@/store/notification-context';
import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);
  const emailInputRef = useRef();

  const registrationHandler = async (e) => {
    e.preventDefault();
    notificationCtx.showNotification({
      title: 'Signing up',
      message: 'Registering for newsletter.',
      status: 'pending',
    });

    try {
      const enteredEmail = emailInputRef.current.value;
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: enteredEmail }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok) {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter.',
          status: 'success',
        });
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (e) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: e.message || 'Something went wrong!',
        status: 'error',
      });
    }
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
