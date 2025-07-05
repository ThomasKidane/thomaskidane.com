import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

type Post = {
  slug: string;
  title?: string;
  date?: string;
  description?: string;
}

export async function getPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory)
  const posts: Post[] = await Promise.all(
    fileNames
      .filter((file) => file.endsWith('.md'))
      .map(async (fileName) => {
        const filePath = path.join(postsDirectory, fileName)
        const fileContents = await fs.readFile(filePath, 'utf8')
        const { data } = matter(fileContents)
        return {
          slug: fileName.replace(/\.md$/, ''),
          title: data.title,
          date: data.date ? String(data.date) : undefined,
          description: data.description,
        }
      })
  )
  return posts.sort((a, b) => (a.date && b.date && a.date < b.date ? 1 : -1))
} 