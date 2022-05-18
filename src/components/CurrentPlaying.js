import React from "react";
import Image from "next/image";
import useCurrentlyPlaying from "../services/useCurrentlyPlaying";
import { Box, Divider } from "@chakra-ui/react";

import LastPlayed from "./LastPlayed";
import { trim } from "../utils/utils";

function showRandomStatus() {
  const rng = Math.floor(Math.random() * 5 + 1);
  switch (rng) {
    case 1:
      return "🎧 focusing...";
    case 2:
      return "💻 AFK...";
    case 3:
      return "😴 snooze...";
    case 4:
      return "🕹️ playing warzone...";
    default:
      return "💨 away...";
  }
}

export default function CurrentlyPlaying() {
  const { data, error, loading } = useCurrentlyPlaying();

  if (error) {
    return <Box p={2}>{error.message}</Box>;
  }

  if (loading || !data) {
    return <Box p={2}>Loading...</Box>;
  }

  const { is_playing } = data;

  if (!is_playing) {
    return (
      <>
        <Box m={2} fontSize="md">
          {showRandomStatus()}
        </Box>
        <Box mt={2}>
          <LastPlayed />
        </Box>
      </>
    );
  }

  const song = data;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return (
    <>
      <Box p={2} d="flex">
        <Box rounded={2} overflow="hidden">
          <Image
            width="70px"
            height="70px"
            alt="albumUrl"
 x           src={albumImageUrl}
          />
        </Box>
        <Box mx={4} w="100%">
          <a target="_blank" rel="noreferrer" href={songUrl}>
            <Box alignItems="center" fontWeight="500">
              {trim(title, 16)}
            </Box>
          </a>
          <Box fontStyle="italic">
            {artist.length > 20 ? artist.substr(0, 20) + "..." : artist}
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box p={0}>
        <LastPlayed />
      </Box>
    </>
  );
}
