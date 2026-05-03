import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image?: string;
  };
}

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  let posts: Post[] = [];

  try {
    const fileNames = fs.readdirSync(postsDirectory);
    posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        frontmatter: data as Post['frontmatter'],
      };
    });
    posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
  } catch (error) {
    console.error("Error reading posts:", error);
  }

  return (
    <div className="container mx-auto px-4 py-12" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center">المدونة التقنية</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          // استخدمنا <a> بدلاً من Link وأضفنا شرطة مائلة في النهاية
          <a key={post.slug} href={`/blog/${post.slug}/`} className="block group">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-full">
              {post.frontmatter.cover_image && (
                <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.frontmatter.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  {new Date(post.frontmatter.date).toLocaleDateString('ar-EG')}
                </p>
                <p className="text-gray-700">{post.frontmatter.excerpt}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}