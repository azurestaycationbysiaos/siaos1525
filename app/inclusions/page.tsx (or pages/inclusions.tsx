import Image from "next/image";
import React from "react";

type Inclusion = {
  id: string;
  title: string;
  description: string;
  image: string; // path under /public
};

const PLACEHOLDER_ITEMS: Inclusion[] = [
  {
    id: "inclusion-1",
    title: "Sample Inclusion 1",
    description:
      "Short description for the first inclusion. Replace this with the text from your PDF.",
    image: "/images/inclusions/inclusion-1.png",
  },
  {
    id: "inclusion-2",
    title: "Sample Inclusion 2",
    description:
      "Short description for the second inclusion. Replace this with the text from your PDF.",
    image: "/images/inclusions/inclusion-2.png",
  },
  {
    id: "inclusion-3",
    title: "Sample Inclusion 3",
    description:
      "Short description for the third inclusion. Replace this with the text from your PDF.",
    image: "/images/inclusions/inclusion-3.png",
  },
];

export default function InclusionsPage() {
  const items = PLACEHOLDER_ITEMS;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Inclusions
        </h1>
        <p className="text-gray-600 mb-8">
          These are the inclusions extracted from the Canva design. Replace the
          placeholder images and text in /public/images/inclusions and in this
          file with the real assets and copy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <article
              key={it.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {it.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{it.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>
            Notes:
            <ul className="list-disc ml-5">
              <li>
                Place your exported images into public/images/inclusions/ and
                name them inclusion-1.png, etc., or adjust the image paths
                above.
              </li>
              <li>
                Replace the placeholder titles/descriptions above with the text
                extracted from your PDF.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}
