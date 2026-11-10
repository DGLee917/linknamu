export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로(예: "/profile.jpg") 또는 next.config.ts에 허용된 외부 URL. 비워 두면 이름 첫 글자로 표시 */
  imageUrl?: string;
  links: LinkItem[];
};

export const profile: ProfileData = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/DG917" },
    { id: "blog", title: "✍️ 블로그", url: "https://www.facebook.com/donggeun.lee.1291" },
    { id: "email", title: "📪 이메일", url: "mailto:bangujeong@gmail.com" },
  ],
};
