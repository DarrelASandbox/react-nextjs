import { useContext, useEffect, useState } from 'react';

import NotificationContext from '@/store/notification-context';
import CommentList from './comment-list';
import classes from './comments.module.css';
import NewComment from './new-comment';

function Comments(props) {
  const notificationCtx = useContext(NotificationContext);

  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsFetchingComments(true);
      const response = await fetch(`/api/comments/${eventId}`);
      const data = await response.json();
      setComments(data.comment);
      setIsFetchingComments(false);
    };

    if (showComments) getComments();
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData) => {
    notificationCtx.showNotification({
      title: 'Sending comment',
      message: 'Your comment is currently being stored into a database.',
      status: 'pending',
    });

    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (response.ok) {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Your comment was saved.',
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
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
