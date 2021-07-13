import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';

type TBlogProps = {
  post: BlogPost;
};

const Blog: FC<TBlogProps> = ({ post = {} }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Blog {post.title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TBlogProps> = async (
  ctx,
) => {
  return { props: {} };
};

export default Blog;
