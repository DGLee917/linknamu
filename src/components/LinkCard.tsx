type Props = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-semibold text-stone-800 shadow-[0_1px_2px_rgba(120,72,40,0.06),0_8px_24px_-12px_rgba(120,72,40,0.22)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(120,72,40,0.06),0_12px_28px_-12px_rgba(120,72,40,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:translate-y-0"
    >
      {title}
    </a>
  );
}
