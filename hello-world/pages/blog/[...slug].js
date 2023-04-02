import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug: catch_all_routes_array } = router.query;

  return (
    <div>
      <h1>Blog Post Page</h1>
      <h2>URL: /{catch_all_routes_array?.map((x) => x + '/')}</h2>
    </div>
  );
};

export default BlogPostPage;
