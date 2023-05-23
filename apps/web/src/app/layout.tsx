import { Auth } from "./components/Auth";
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
      <body>
        <div className="h-screen max-h-screen min-h-screen overflow-hidden bg-gray-200/70 text-gray-800">
          <Auth publishableKey={process.env.CLERK_PUBLISHABLE_KEY!}>
            {children}
          </Auth>
        </div>
      </body>
    </html>
  );
}
