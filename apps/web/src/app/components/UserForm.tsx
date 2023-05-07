"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const UserForm = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/_api/user", {
      method: "POST",
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((res) => {
        push("/app");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 items-end">
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold text-xs tracking-wide">
            Username
          </label>
          <input
            ref={(el) => {
              el?.focus();
            }}
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white rounded-lg h-[36px] px-2"
          />
        </div>
        <div>
          <button
            disabled={isLoading}
            className="bg-black text-white rounded-lg shadow-md px-4 py-2 font-semibold text-sm tracking-wide disabled:opacity-50"
          >
            Join
          </button>
        </div>
      </div>
    </form>
  );
};
