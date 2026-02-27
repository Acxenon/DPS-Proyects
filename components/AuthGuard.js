"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}
