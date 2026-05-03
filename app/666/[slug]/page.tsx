import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

// دالة بسيطة لتحويل Markdown إلى HTML (تدعم العناوين والفقرات والروابط)
function mdToHtml(md: string): string {
  // عناوين h1, h2, h3
  md = md.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  md = md.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  md = md.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  // روابط
  md = md.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
  // صور
  md = md.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');
  // نص عريض (bold)
  md = md.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  // نص مائل (italic)
  md = md.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  // فقرات (تقسيم بأسطر فارغة)
  const paragraphs = md.split(/\n\s*\n/);
  md = paragraphs.map(p => {
    if (p.trim().startsWith('<h') || p.trim().startsWith('<img') || p.trim().startsWith('<ul')) return p;
    return `<p>${p.replace(/\n/g, '<br/>')}</p>`;
  }).join('\n');
  return md;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
    fileNames = fileNames.filter(f => f.endsWith('.md'));
  } catch (error) {
    // المجلد غير موجود، نتعامل معه كـ قائمة فارغة
  }
  // ✅ إذا لم توجد مقالات، نضيف مساراً مؤقتاً واحداً لتجنب خطأ البناء
  if (fileNames.length === 0) {
    return [{ slug: 'temp' }];
  }
  return fileNames.map(fileName => ({ slug: fileName.replace(/\.md$/, '') }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // ✅ إذا كان المسار هو المسار المؤقت، نعيد 404 أو نعرض رسالة
  if (params.slug === 'temp') {
    return <div className="container mx-auto px-4 py-12 text-center">لا توجد مقالات بعد. أضف ملفات Markdown في مجلد content/posts.</div>;
  }

  const fullPath = path.join(process.cwd(), `content/posts/${params.slug}.md`);
  let fileContents = '';
  let frontmatter: any = {};
  let contentHtml = '';

  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    frontmatter = data;
    contentHtml = mdToHtml(content);
  } catch (err) {
    return notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl" dir="rtl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title || 'بدون عنوان'}</h1>
        <p className="text-gray-500">{frontmatter.date ? new Date(frontmatter.date).toLocaleDateString('ar-EG') : 'تاريخ غير معروف'}</p>
      </header>
      {frontmatter.cover_image && (
        <img src={frontmatter.cover_image} alt={frontmatter.title} className="w-full h-96 object-cover rounded-lg mb-8" />
      )}
      <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}