import { prisma } from "db";
import { PeopleList } from "./components/PeopleList";

export default async function App({ params }: any) {
  const users = await prisma.user.findMany();

  return (
    <div className="h-full">
      <div className="p-4 flex flex-col gap-4 h-full">
        <div>
          <span className="font-semibold tracking-wide">People</span>
        </div>
        <div className="h-full">
          <PeopleList users={users} />
        </div>
      </div>
    </div>
  );
}
