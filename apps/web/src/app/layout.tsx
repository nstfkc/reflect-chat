import "./globals.css";

export const metadata = {
  title: "Flak",
  description: "Best team chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-red-50">
        {children}
        <footer className="bg-gray-700 text-red-50">
          <div className="container mx-auto max-w-4xl px-4 md:px-0 py-8">
            <div className="flex flex-col gap-8">
              <div>
                For more information you can write to{" "}
                <a className="underline" href="mailto:hi@reflect.rocks">
                  hi@reflect.rocks
                </a>{" "}
                or send us a DM on{" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/reflectrocks"
                >
                  twitter
                </a>
                .
              </div>
              <div>
                <small className="tracking-widest">2023 reflect.rocks</small>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
