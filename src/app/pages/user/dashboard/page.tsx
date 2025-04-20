"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const {data} = useSession();

  const router = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/handler/characteristics/${data?.user.id}`);
        if(!response.data){
          router.push("/pages/user/calculate");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

  },[data]);

  const session = useSession();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}