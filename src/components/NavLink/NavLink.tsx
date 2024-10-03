'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={pathname.startsWith(`${href}`) ? 'active' : undefined}>
      {children}
    </Link>
  );
}

export default NavLink;
