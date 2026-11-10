import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-emerald-200 shadow-md ring-4 ring-white sm:h-40 sm:w-40">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="160px" className="object-cover" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-emerald-700">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="mt-1 text-sm text-gray-600 sm:text-base">{bio}</p>
    </section>
  );
}
