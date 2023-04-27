import FeaturedPosts from '@/components/homepage/featured-posts';
import Hero from '@/components/homepage/hero';
import { getFeaturedPosts } from '@/lib/post-util';

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return { props: { posts: featuredPosts } };
};

export default HomePage;
