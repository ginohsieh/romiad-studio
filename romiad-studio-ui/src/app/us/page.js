import _metadata from "@/config/metadata";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';
import { Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
import ProcessSection from './components/ProcessSection';
import AwardSection from './components/AwardSection';
import PartnerSection from './components/PartnerSection';
import AboutSection from './components/AboutSection';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

export default function Us() {
  const aboutUsProps = {
    direction: {
      base: 'column',
      xl: 'row',
    },
    rowGap: '1rem',
    justifyContent: 'center',
  }
  const aboutUsTitleProps = {
    as: 'h2',
    size: 'lg',
    textAlign: {
      base: 'center',
      xl: 'left',
    },
  }


  return (
    <main>
      <Flex bgColor="black"><Navigation /></Flex>
      <Flex width="100%" pt="120px" px="4rem" direction="column" alignItems="center" rowGap="4rem">
        <AboutSection />
        <ProcessSection />
        <AwardSection />
        <PartnerSection />
      </Flex>
      <Footer />
    </main>
  );
}
