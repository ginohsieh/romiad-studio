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
      <Flex width="100%" pt="120px" px="4rem" direction="column" alignItems="center">
        {/* <Flex
          width="100%"
          maxWidth="1680px"
          {...aboutUsProps}
        >
          <Flex flex="1" direction="column" justifyContent="center" rowGap="2rem" px="1rem">
            <Heading {...aboutUsTitleProps}>About us 關於盧米</Heading>
            <Flex direction="column" justifyContent="center" rowGap="1rem">
              <Text>「影像的品質，我們嚴謹挑剔；影像的價值，我們律已專一。」</Text>
              <Text>盧米，是原住民詞語Romiad的中文轉譯，有「日z子；天」的意思，但沿用到「盧米工作室」一名稱上，則衍伸出「挑戰、創新」的涵義。</Text>
              <Text>透過挑戰視聽感官的影像創作，融合在地與世界潮流影像的特色，在影像領域中創予獨殊之風格，從而建立一套，能以不同角度觀看、敘述影像的方式，使大眾能體會並培養出看待影像更多元的觀點。</Text>
            </Flex>
          </Flex>
          <Flex flex="2">
            <Image
              w="100%"
              objectFit="cover"
              src="./imgs/about_us.webp"
              alt="about_us"
            />
          </Flex>
        </Flex> */}
        <AboutSection />
        <ProcessSection />
        <AwardSection />
        <PartnerSection />
      </Flex>
      <Footer />
    </main>
  );
}
