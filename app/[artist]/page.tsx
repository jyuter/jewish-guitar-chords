import prisma from "../../lib/prisma";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artistSongs = await prisma.chords.findMany({
    where: {
      artist: String(params?.artist),
    },
  });
  return {
    props: artistSongs,
  };
};

export default function ArtistPage() {}
