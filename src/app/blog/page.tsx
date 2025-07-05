import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function BlogPage() {
  const dir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

  // Parse frontmatter for each post
  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-black to-black px-4 py-24">
        <div className="glass-card rounded-3xl p-10 max-w-3xl w-full text-center mb-12 shadow-lg">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Blog</h1>
          <p className="text-xl text-white/[0.8] mb-8">Welcome to my blog! Read my latest posts below.</p>
          <Link href="/" className="glass-button px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform inline-block">← Back to Portfolio</Link>
        </div>
        <div className="w-full max-w-3xl space-y-8">
          {posts.length === 0 && (
            <div className="glass-card rounded-2xl p-8 text-white/[0.8] text-center">No blog posts yet.</div>
          )}
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform cursor-pointer text-left">
                <h2 className="text-3xl font-bold text-white mb-2">{post.title}</h2>
                {post.date && (
                  <div className="text-white/[0.6] mb-2">
                    {post.date instanceof Date ? post.date.toLocaleDateString() : post.date}
                  </div>
                )}
                {post.description && <div className="text-white/[0.8]">{post.description}</div>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 