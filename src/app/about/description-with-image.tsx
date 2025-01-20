import Image from 'next/image';
import { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export interface DescriptionWithImageProps {
  title: ReactNode;
  content: ReactNode;
  imageProps: Parameters<typeof Image>[0];
  imagePosition: 'left' | 'right';
}

export function DescriptionWithImage({
  title,
  content,
  imageProps,
  imagePosition,
}: DescriptionWithImageProps) {
  return (
    <>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">{title}</h2>

      <div className="flex flex-col items-center gap-8 md:flex-row">
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt属性は型的に強制される */}
        <Image
          {...imageProps}
          className={cn(
            'rounded-lg shadow-lg md:w-1/3',
            imagePosition === 'left' ? 'order-first' : 'order-last',
            imageProps.className,
          )}
        />

        <div className="text-gray-700 md:w-2/3">{content}</div>
      </div>
    </>
  );
}
