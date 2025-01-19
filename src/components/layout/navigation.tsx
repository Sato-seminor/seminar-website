'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/cn';

import { ModeToggle } from './mode-toggle';
import logo from '../../../public/seminar-logo.svg';

const PAGES: { name: string; path: string }[] = [
  {
    name: 'ゼミ紹介',
    path: 'about',
  },
  {
    name: '活動内容',
    path: 'activities',
  },
  {
    name: '選考情報',
    path: 'selection',
  },
];

export function Navigation() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
        <Image src={logo} width={64} height={48} alt="ゼミロゴ" />
        <NavigationMenu className="ml-6">
          <NavigationMenuList>
            {PAGES.map(({ name, path }) => (
              <NavigationMenuItem key={path}>
                <Link href={path} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
