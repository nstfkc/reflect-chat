"use client";
import type { User } from "db";
import { useSocket } from "@/components/SocketContext/useSocket";
import Link from "next/link";
import { HiUser } from "react-icons/hi2";
import useSWR from "swr";

const fetchUsers = (): Promise<User[]> =>
  fetch("/_api/users").then((res) => res.json());

export const PeopleList = () => {
  const { data: users, isLoading, mutate } = useSWR("/_api/users", fetchUsers);

  const { user } = useSocket("user-connected", ({ user }) => {
    if (!users.find((u) => u.id === user.id)) {
      mutate([...users, user]);
    }
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col gap-2 h-full overflow-scroll pb-16">
      {users
        .filter((u) => u.id !== user?.id)
        .map((user) => {
          return (
            <div key={user.id}>
              <Link href={`/app/dm/${user.id}`}>
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-gray-200 p-1">
                    <HiUser
                      className="text-md text-[--fill-color] saturate-50"
                      style={{ "--fill-color": user?.profileColor } as any}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="opacity-80">{user?.username}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
