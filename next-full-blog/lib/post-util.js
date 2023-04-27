import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDir = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ''); // removes file extension
  const postData = { slug: postSlug, ...data, content };
  return postData;
};

const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return sortedPosts;
};

const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};

export { getAllPosts, getFeaturedPosts };
