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
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl text-ink mb-4">Meet the Team</h2>
        <p className="text-ink-soft max-w-lg mx-auto mb-14">
          Real people behind every setup — here to help plan your celebration
          and make sure your stay goes smoothly.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {TEAM.map((member) => (
            <div key={member.name} className="w-56">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink/10 shadow-sm mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <p className="font-display text-2xl text-ink">{member.name}</p>
              <p className="text-sm text-ink-soft">{member.role}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
