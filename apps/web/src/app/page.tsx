import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { UserForm } from "./components/UserForm";

export default function Home() {
  const cookieStore = cookies();
  const userid = cookieStore.get("userid");
  if (userid) {
    redirect("/app");
  }
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <UserForm />
    </div>
  );
}
