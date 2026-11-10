export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로 (예: "/profile.jpg"). 비워 두면 이름 첫 글자로 표시 */
  imageUrl?: string;
  links: LinkItem[];
};

export const profile: ProfileData = {
  name: "이동근",
  bio: "세계 최강 바이브코더",
  // TODO: 더미 값 — 실제 프로필 사진/링크로 교체
  imageUrl: "/profile-dummy.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://velog.io/" },
  ],
};
