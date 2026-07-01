import React from 'react';
import { FadeIn } from '../motion/FadeIn';
import { Figure } from './Figure';

interface FeatureImageProps {
  src?: string;
  alt?: string;
  caption?: React.ReactNode;
  onClick?: () => void;
  rounded?: React.ComponentProps<typeof Figure>['rounded'];
  frameClassName?: string;
  imgClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * A large full-width focal image (or media) — the climax/breath moments of a
 * case study. Gentle zoom, editorial caption, fades in on scroll.
 */
export function FeatureImage({
  src,
  alt,
  caption,
  onClick,
  rounded = '3xl',
  frameClassName = '',
  imgClassName = 'w-full h-auto object-cover',
  children,
  className = '',
}: FeatureImageProps) {
  return (
    <FadeIn className={`w-full ${className}`}>
      <Figure
        src={src}
        alt={alt}
        caption={caption}
        onClick={onClick}
        rounded={rounded}
        frameClassName={frameClassName}
        imgClassName={imgClassName}
      >
        {children}
      </Figure>
    </FadeIn>
  );
}
