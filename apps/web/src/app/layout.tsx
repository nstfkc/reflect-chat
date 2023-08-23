import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { WaitingList } from "./components/WaitingListForm";

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
            <div className="container mx-auto max-w-4xl px-4">
              <div className="flex items-center justify-between py-4">
                <div>
                  <Link className="text-lg font-black" href="/">
                    reflect
                  </Link>
                </div>
                <div className="flex items-center gap-8">
                  <Link
                    href="#benefits"
                    className="font-semibold text-sm tracking-wide"
                  >
                    benefits
                  </Link>
                  <Link
                    href="#features"
                    className="font-semibold text-sm tracking-wide"
                  >
                    features
                  </Link>
                  <Link
                    href="/contact-us"
                    className="font-semibold text-sm tracking-wide bg-primary text-secondary px-2 py-2 rounded-lg"
                  >
                    contact us
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-secondary text-primary">
          <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col gap-8">
            <div className="flex items-start justify-between">
              <div>
                <Link className="text-lg font-black" href="/">
                  reflect
                </Link>
              </div>
              <div className="flex gap-16">
                <div className="flex flex-col gap-4">
                  <Link
                    href="#benefits"
                    className="font-semibold text-sm tracking-wide"
                  >
                    benefits
                  </Link>
                  <Link
                    href="#features"
                    className="font-semibold text-sm tracking-wide"
                  >
                    features
                  </Link>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/reflectrocks"
                    className="font-semibold text-sm tracking-wide"
                  >
                    X <small>(f.k.a twitter)</small>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/contact-us"
                    className="font-semibold text-sm tracking-wide"
                  >
                    contact us
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="font-semibold text-sm tracking-wide"
                  >
                    terms and conditions
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-sm tracking-wide"
                  >
                    privacy policy
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <small>© 2023 reflect. All rights reserved.</small>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
