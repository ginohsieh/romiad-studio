import { Flex, Stack, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { copyright } from '@/config/metadata';
import { social_media as socialMedia } from '@/config/contact';
import Link from 'next/link';

export default function Footer() {
  return (
    <Flex direction="column" alignItems="center">
      <Stack py="6rem" align="center">
        <Text fontSize="2rem">Follow</Text>
        <Stack direction="row" gap="1rem">
          {socialMedia.instagram && <Link target="_blank" href={socialMedia.instagram}><FaInstagram size="1.2rem" /></Link>}
          {socialMedia.facebook && <Link target="_blank" href={socialMedia.facebook}><FaFacebook size="1.2rem" /></Link>}
          {socialMedia.youtube && <Link target="_blank" href={socialMedia.youtube}><FaYoutube size="1.2rem" /></Link>}
          {socialMedia.tiktok && <Link target="_blank" href={socialMedia.tiktok}><FaTiktok size="1.2rem" /></Link>}
        </Stack>
      </Stack>
      <Text fontSize="0.8rem" py="0.75rem">{copyright}</Text>
    </Flex>
  )
}
