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
        <Link href="/" legacyBehavior passHref>
          <Image src={logo} width={64} height={48} alt="ゼミロゴ" className="cursor-pointer" />
        </Link>
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
      </div>
    </header>
  );
}
