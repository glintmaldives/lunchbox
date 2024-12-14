import { NavLink, FooterLink } from '../types/common';

export const navLinks: NavLink[] = [
  { title: 'Products', path: '/products' },
  { title: 'Features', path: '/features' },
  { title: 'Partners', path: '/partners' },
  { title: 'Company', path: '/company' }
];

export const footerLinks: FooterLink[] = [
  {
    title: 'Products',
    links: [
      { label: 'Online Ordering', href: '/products/online-ordering' },
      { label: 'Catering', href: '/products/catering' },
      { label: 'Marketing CRM', href: '/products/marketing-crm' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/company/about' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Contact', href: '/company/contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' }
    ]
  }
];