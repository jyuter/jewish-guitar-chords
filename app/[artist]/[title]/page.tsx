import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const chordsRecord = prisma.chords.findFirst({
    where: {
      artist: String(params?.artist),
      title: String(params?.title),
    },
  });
  return {
    props: chordsRecord,
  };
};

export default function ChordsPage() {}
