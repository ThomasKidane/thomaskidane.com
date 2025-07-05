import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace(/\.md$/, '') }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const html = marked(content);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-black to-black px-4 py-24">
        <div className="glass-card rounded-3xl p-10 max-w-2xl w-full text-left mb-12 shadow-lg">
          <Link href="/blog" className="glass-button px-4 py-2 rounded-full text-white font-medium hover:scale-105 transition-transform inline-block mb-6">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{data.title || slug}</h1>
          <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
} 