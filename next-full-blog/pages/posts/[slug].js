import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '@/lib/post-util';

const PostDetailPage = (props) => <PostContent post={props.post} />;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return { props: { post: postData }, revalidate: 600 };
};

export const getStaticPaths = () => {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, '')); // removes file extension)
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default PostDetailPage;
