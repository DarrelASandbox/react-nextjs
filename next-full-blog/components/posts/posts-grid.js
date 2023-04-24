import classes from './posts-grid.module.css';
import PostItem from './posts-item';

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostGrid;
