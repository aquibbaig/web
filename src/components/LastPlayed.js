import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import useLastPlayed from "../services/useLastPlayed";
import { BiRewind } from "react-icons/bi";

export default function LastPlayed() {
  const { data, error, loading } = useLastPlayed();
  const alternateBg = useColorModeValue("#ebebeb", "#252525");

  if (error) {
    return (
      <Box p={2} fontSize="12">
        {error.message}
      </Box>
    );
  }

  if (loading || !data) {
    return (
      <Box p={2} fontSize="12">
        Loading...
      </Box>
    );
  }

  const { items } = data;
  const { track } = items?.[0];

  return (
    <a target="_blank" rel="noreferrer" href={track?.external_urls?.spotify}>
      <Box
        bg={alternateBg}
        w="100%"
        p={2}
        d="flex"
        alignItems="center"
        rounded={2}
        cursor="pointer"
      >
        <Box fontSize="16">
          <BiRewind />
        </Box>
        <Box ml={1} fontSize="12">
          {track?.name} <span style={{ fontStyle: "italic" }}>by</span>{" "}
          {track?.artists?.[0]?.name} 🎧
        </Box>
      </Box>
    </a>
  );
}
