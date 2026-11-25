// Separate root layout: the Studio gets none of the site shell (styles, cursor,
// background, page transitions, cookie banner or analytics).
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
