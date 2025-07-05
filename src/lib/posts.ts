import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPosts() {
  const fileNames = await fs.readdir(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter((file) => file.endsWith('.mdx'))
      .map(async (fileName) => {
        const filePath = path.join(postsDirectory, fileName)
        const fileContents = await fs.readFile(filePath, 'utf8')
        const { data } = matter(fileContents)
        return {
          slug: fileName.replace(/\.mdx$/, ''),
          ...data,
        }
      })
  )
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
} 