import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Admissions: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admissions/before/01");
  }, [router]);
  return null;
};

export default Admissions;
