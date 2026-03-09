import Image from 'next/image';
import { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/cn';

export interface DescriptionWithImageProps {
  title: ReactNode;
  content: ReactNode;
  imageProps?: ComponentProps<typeof Image>;
  imagePosition?: 'left' | 'right';
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
        {imageProps && (
          <Image
            {...imageProps}
            alt={imageProps.alt ?? '画像'}
            className={cn(
              'rounded-lg shadow-lg md:w-1/3',
              imagePosition === 'left' ? 'order-first' : 'order-last',
              imageProps.className,
            )}
          />
        )}
        <div className="text-gray-700 md:w-full">{content}</div>
      </div>
    </>
  );
}
