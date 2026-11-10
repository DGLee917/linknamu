import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-orange-100 shadow-[0_2px_4px_rgba(120,72,40,0.08),0_16px_32px_-12px_rgba(120,72,40,0.35)] ring-4 ring-white/80 sm:h-32 sm:w-32">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="128px" className="object-cover" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-orange-700">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500">{bio}</p>
    </section>
  );
}
