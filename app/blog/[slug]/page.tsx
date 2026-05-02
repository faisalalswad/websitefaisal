import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// الدالة التي تجلب كل المقالات لبناء المسارات
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  let fileNames = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {}
  return fileNames.map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }));
}

// صفحة المقال الفردي
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), `content/posts/${params.slug}.md`);
  let fileContents = '';
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    return notFound();
  }
  const { data: frontmatter, content } = matter(fileContents);

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl" dir="rtl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-gray-500">{new Date(frontmatter.date).toLocaleDateString('ar-EG')}</p>
      </header>
      {frontmatter.cover_image && <img src={frontmatter.cover_image} alt={frontmatter.title} className="w-full h-96 object-cover rounded-lg mb-8"/>}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}