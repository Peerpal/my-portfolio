import { IconsName } from '@/components/icons';

type NavLinkType = {
  name: string;
  href: string;
};

type SocialLinkType = NavLinkType & {
  icon: IconsName;
};

export const navLinks: NavLinkType[] = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact me', href: '/contact' },
];

export const socialLinks: SocialLinkType[] = [
  { name: 'Github', href: 'https://github.com/Nwachukwupgate', icon: 'github' },
  { name: 'Twitter', href: 'https://twitter.com/Nwachuk07087866', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nwachukwu-promise-6b3414190/', icon: 'linkedin' },
];
