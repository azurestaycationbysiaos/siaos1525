import Link from "next/link";
import { getDocuments } from "outstatic/server";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Proposal Tips & Ideas — Azure Staycation by Siaos",
  description:
    "Proposal planning tips, timing advice, and real setup ideas from Azure Staycation by Siaos in Parañaque.",
};

type Post = {
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  coverImage?: string;
};

async function getPosts(): Promise<Post[]> {
  try {
    const posts = getDocuments("posts", [
      "title",
      "slug",
      "description",
      "publishedAt",
      "coverImage",
    ]);
    return posts as unknown as Post[];
  } catch {
    // Returns an empty list until the "posts" collection exists in Outstatic —
    // create your first post from the /outstatic dashboard to populate this page.
    return [];
  }
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
          Azure Staycation Blog
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Your guide to proposals, birthdays, and celebrations at{" "}
<em className="italic text-clay-deep">Azure Staycation by Siaos, Azure Urban Resort Residences, Parañaque.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink/20 bg-cream-card px-8 py-16 text-center">
            <p className="font-display text-xl text-ink mb-2">
              No posts published yet
            </p>
            <p className="text-ink-soft text-sm max-w-md mx-auto">
              Sign in to{" "}
              <code className="bg-ink/5 px-1.5 py-0.5 rounded text-clay-deep">
                /outstatic
              </code>{" "}
              and publish your first post — it will appear here automatically,
              committed straight to your GitHub repo.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-cream-card border border-ink/10 rounded-2xl overflow-hidden hover:border-clay-deep transition-colors"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-sage/30 via-sand to-clay/30" />
                <div className="p-6">
                  {post.publishedAt && (
                    <p className="text-xs text-ink-soft/70 mb-2">
                      {new Date(post.publishedAt).toLocaleDateString("en-PH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  <h2 className="font-display text-xl text-ink group-hover:text-clay-deep transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
