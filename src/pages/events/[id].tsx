import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

import { getEventById } from "src/pageContent/Events/util";
import Page from "src/components/Page";

const EventDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = getEventById(id as string);

  if (!event) {
    return <Error statusCode={404} />;
  }

  return (
    <Page bgImage="events" title={event.name} description={event.description}>
      <div
        className={`h-screen w-screen flex justify-center items-center py-8 px-3`}
      >
        <p className={`text-4xl lg:text-2xl text-pinus-red text-center`}>
          This page is under construction. Sit tight and stay tuned!
        </p>
      </div>
    </Page>
  );
};

export default EventDetail;
