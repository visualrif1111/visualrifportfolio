import React from 'react';

interface ResponsiveTextProps {
  /** Full text for tablet and desktop */
  children: React.ReactNode;
  /** Condensed text for mobile (optional - if not provided, children is used) */
  mobileText?: React.ReactNode;
  className?: string;
}

/**
 * ResponsiveText component that shows condensed content on mobile
 * and full content on tablet/desktop.
 */
export function ResponsiveText({ children, mobileText, className = '' }: ResponsiveTextProps) {
  if (!mobileText) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Mobile version - condensed */}
      <span className={`md:hidden ${className}`}>{mobileText}</span>
      {/* Desktop/Tablet version - full */}
      <span className={`hidden md:inline ${className}`}>{children}</span>
    </>
  );
}

interface ResponsiveParagraphProps {
  /** Full paragraph for tablet and desktop */
  children: React.ReactNode;
  /** Condensed paragraph for mobile (optional) */
  mobileText?: React.ReactNode;
  className?: string;
}

/**
 * ResponsiveParagraph component for block-level text that shows 
 * condensed content on mobile and full content on tablet/desktop.
 */
export function ResponsiveParagraph({ children, mobileText, className = '' }: ResponsiveParagraphProps) {
  if (!mobileText) {
    return <p className={className}>{children}</p>;
  }

  return (
    <>
      {/* Mobile version - condensed */}
      <p className={`md:hidden ${className}`}>{mobileText}</p>
      {/* Desktop/Tablet version - full */}
      <p className={`hidden md:block ${className}`}>{children}</p>
    </>
  );
}

interface ResponsiveContentProps {
  /** Full content for tablet and desktop */
  children: React.ReactNode;
  /** Condensed content for mobile (optional) */
  mobileContent?: React.ReactNode;
  className?: string;
}

/**
 * ResponsiveContent component for any block-level content that shows 
 * condensed content on mobile and full content on tablet/desktop.
 */
export function ResponsiveContent({ children, mobileContent, className = '' }: ResponsiveContentProps) {
  if (!mobileContent) {
    return <div className={className}>{children}</div>;
  }

  return (
    <>
      {/* Mobile version - condensed */}
      <div className={`md:hidden ${className}`}>{mobileContent}</div>
      {/* Desktop/Tablet version - full */}
      <div className={`hidden md:block ${className}`}>{children}</div>
    </>
  );
}
