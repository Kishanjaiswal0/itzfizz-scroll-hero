import "./globals.css";

export const metadata = {
  title: "Welcome ITZFIZZ | Scroll Hero",
  description: "Scroll-driven hero section animation built with Next.js, Tailwind and GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
