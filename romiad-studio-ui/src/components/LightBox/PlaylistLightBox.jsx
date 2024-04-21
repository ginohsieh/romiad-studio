'use client';

import { Flex } from '@chakra-ui/react';
import LightBox from './LightBox';



export default function PlaylistBox({playlistSrc, onClose = () => {}}) {
  return (
    <LightBox onClose={onClose}>
      <Flex py="2rem" justifyContent="center" width="100%">
        <iframe width="100%" height="auto" src={playlistSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Flex>
    </LightBox>
  )
}
