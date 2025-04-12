"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}