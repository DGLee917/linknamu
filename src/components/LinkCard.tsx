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
      className="block w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0"
    >
      {title}
    </a>
  );
}
