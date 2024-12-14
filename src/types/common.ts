export interface NavLink {
  title: string;
  path: string;
}

export interface FooterLink {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}