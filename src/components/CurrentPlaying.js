import React from "react";
import Image from "next/image";
import useCurrentlyPlaying from "../services/useCurrentlyPlaying";
import { Box, Divider, useColorModeValue } from "@chakra-ui/react";

import { RiPlayCircleFill } from "react-icons/ri";
import LastPlayed from "./LastPlayed";

function showRandomStatus() {
  const rng = Math.floor((Math.random() * 5) + 1);;
  switch(rng) {
    case 1:
      return "🎧 focusing...";
    case 2:
      return "💻 AFK...";
    case 3:
      return "😴 snooze...";
    case 4:
      return "🕹️ playing warzone...";
    default:
      return "💨 away..."
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
        <Box m={2} fontSize="md">{showRandomStatus()}</Box>
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
            width="60px"
            height="60px"
            alt="albumUrl"
            src={albumImageUrl}
          />
        </Box>
        <Box ml={2} w="100%">
          <Box d="flex" alignItems="baseline" justifyContent="space-between">
            <Box fontSize="lg" fontWeight="600">
              {title}
            </Box>
            <Box cursor="pointer">
              <a target="_blank" rel="noreferrer" href={songUrl}>
                <RiPlayCircleFill />
              </a>
            </Box>
          </Box>
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
