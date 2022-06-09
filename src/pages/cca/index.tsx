import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Cca: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/cca/index");
  }, [router]);
  return null;
};

export default Cca;
