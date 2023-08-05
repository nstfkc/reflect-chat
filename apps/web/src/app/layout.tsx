import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

export const metadata = {
  title: "Reflect",
  description: "AI powerered comminication software for teams and communities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-secondary">
        <header className="bg-secondary">
          <nav className="text-primary">
            <div className="container mx-auto max-w-4xl px-4 md:px-0">
              <div className="flex items-center justify-between py-4">
                <div>
                  <Link className="text-lg font-black" href="/">
                    reflect
                  </Link>
                </div>
                <div className="flex gap-8">
                  <Link
                    href="#features"
                    className="font-semibold text-sm tracking-wide"
                  >
                    features
                  </Link>
                  <Link
                    href="#roadmap"
                    className="font-semibold text-sm tracking-wide"
                  >
                    roadmap
                  </Link>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/reflectrocks"
                    className="font-semibold text-sm tracking-wide"
                  >
                    twitter
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <div className="h-16"></div>
        <footer className="bg-secondary text-primary">
          <div className="container mx-auto max-w-4xl px-4 md:px-0 py-8">
            <div className="flex justify-between">
              <div>
                <Link className="text-lg font-black" href="/#hero">
                  reflect.rocks
                </Link>
                <br />
                <small>© 2023 Enes Tuefekci. All rights reserved</small>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="#features"
                  className="font-semibold text-sm tracking-wide"
                >
                  features
                </Link>
                <Link
                  href="#roadmap"
                  className="font-semibold text-sm tracking-wide"
                >
                  roadmap
                </Link>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/reflectrocks"
                  className="font-semibold text-sm tracking-wide"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
