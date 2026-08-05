import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "outstatic", "content", "posts");

export type Post = {
  slug: string;
  title: string;
  description?: string;
  publishedAt?: string;
  author?: { name?: string } | string;
  coverImage?: string;
  content: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (data.status && data.status !== "published") return null;

  return {
    slug: data.slug || slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    author: data.author,
    coverImage: data.coverImage,
    content,
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.title !== undefined)
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return a.publishedAt < b.publishedAt ? 1 : -1;
    });
}
