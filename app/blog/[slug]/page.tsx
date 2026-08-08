import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostSlugs, getPostBySlug } from "../../../lib/posts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import markdownToHtml from "../../../lib/markdownToHtml";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Azure Staycation by Siaos`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const contentHtml = await markdownToHtml(post.content || "");
  const authorName =
    typeof post.author === "string" ? post.author : post.author?.name;
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        {post.publishedAt && (
          <p className="text-xs uppercase tracking-[0.2em] text-sage-deep font-semibold mb-4">
            {new Date(post.publishedAt).toLocaleDateString("en-PH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {authorName ? ` · ${authorName}` : ""}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl text-ink leading-[1.1] mb-8">
          {post.title}
        </h1>
        {post.coverImage && (
  <div className="w-full rounded-lg overflow-hidden mb-8">
    <Image
      src={post.coverImage}
      alt={post.title}
      width={1200}
      height={630}
      sizes="(max-width: 768px) 100vw, 672px"
      className="w-full h-auto"
      priority
    />
  </div>
)}
        <div
          className="prose-content font-body text-ink-soft leading-relaxed [&>p]:mb-5 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:text-ink [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-xl [&>h3]:text-ink [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-5 [&_a]:text-clay-deep [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        </article>
      <Footer />
    </div>
  );
}
