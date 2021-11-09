import React from 'react'
import Image from 'next/image'
import useCurrentlyPlaying from '../services/useCurrentlyPlaying'
import {
  Box,
} from '@chakra-ui/react'

import { RiPlayCircleFill } from 'react-icons/ri'

export default function CurrentlyPlaying() {
  const { data, error, loading } = useCurrentlyPlaying();

  if (error) {
    return <Box p={2}>{error.message}</Box>
  }

  if (loading || !data) {
    return <Box p={2}>Loading...</Box>
  }

  const { is_playing } = data;

  if (!is_playing) {
    return <Box p={2}>Not playing anything at the moment.</Box>
  }

  const song = data;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return (
    <Box p={2} d="flex">
      <Box rounded={2} overflow="hidden">
        <Image width="60px" height="60px" alt="albumUrl" src={albumImageUrl} />
      </Box>
      <Box ml={2} w="100%">
        <Box d="flex" alignItems="baseline" justifyContent="space-between">
          <Box fontSize="lg" fontWeight="600">{title}</Box>
          <Box cursor="pointer">
            <a target="_blank" rel="noreferrer" href={songUrl}><RiPlayCircleFill /></a>
          </Box>
        </Box>
        <Box>{artist.length > 20 ? artist.substr(0,20) + "..." : artist}</Box>
      </Box>
    </Box>
  )
}
