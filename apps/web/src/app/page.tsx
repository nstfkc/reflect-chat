import { AuthGuard } from "./components/Auth";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <AuthGuard>Hi</AuthGuard>
    </div>
  );
}
