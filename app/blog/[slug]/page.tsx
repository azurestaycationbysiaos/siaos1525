import { notFound } from "next/navigation";
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

export default async function
