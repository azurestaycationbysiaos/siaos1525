import Image from "next/image";

const TEAM = [
  {
    name: "Charm",
    role: "Guest Relations",
    img: "/images/team/charm.jpg",
  },
  {
    name: "Linda",
    role: "Guest Relations",
    img: "/images/team/linda.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="font-display text-3xl text-ink">Meet the Team</h2>
      </div>
      <p className="text-ink-soft max-w-lg mb-10">
        Real people behind every setup — here to help plan your celebration
        and make sure your stay goes smoothly.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
        {TEAM.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink/10 mb-3">
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <p className="font-display text-lg text-ink">{member.name}</p>
            <p className="text-xs text-ink-soft">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
