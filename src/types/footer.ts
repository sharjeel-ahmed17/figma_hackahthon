import { type LucideIcon } from 'lucide-react';

export type SocialIconType = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export type FooterCardType = {
  title: string;
  links: string[];
};

export type FooterDataType = {
  companyName: string;
  description: string;
  socialIcons: SocialIconType[];
  footerCards: FooterCardType[];
  copyright: string;
  paymentMethods: string[];
};

