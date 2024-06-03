import _metadata from "@/config/metadata";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';
import { Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

export default function Home() {
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
      <Navigation />
      <Flex width="100%" pt="120px" px="4rem" direction="column" alignItems="center">
        <Flex
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
        </Flex>
        <Flex alignItems="center" direction="column" py="8rem" rowGap="2rem">
          <Flex>
            <Heading as="h2" size="lg">Our Process 製作流程</Heading>
          </Flex>
          <Flex columnGap="6rem">
            <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="60px"/>
              <Text textAlign="center">預約諮詢</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="60px"/>
              <Text textAlign="center">需求確認</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="60px"/>
              <Text textAlign="center">報價簽約</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="60px"/>
              <Text textAlign="center">腳本企劃</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="60px"/>
              <Text textAlign="center">剪輯拍攝</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="60px"/>
              <Text textAlign="center">交付成品</Text>
            </Flex>
          </Flex>
          <Flex>
            <Link href="/contact"><Button>快速報價</Button></Link>
          </Flex>
          <Flex direction="column" justifyContent="center">
            <Text fontSize="xs" textAlign="center">0915-915-118</Text>
            <Link href="mailto=romiadstudio@gmail.com"><Text fontSize="xs">romiadstudio@gmail.com</Text></Link>
          </Flex>
        </Flex>
        <Flex alignItems="center" direction="column" py="8rem">
          <Flex>
            <Heading as="h2" size="lg">Awards 得獎紀錄</Heading>
          </Flex>
          <Flex columnGap="1rem">
            <Flex direction="column" py="48px" rowGap="2rem" width="200px" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="80px"/>
              <Text textAlign="center">2020美麗基隆影片創作比賽<br/>Beautiful Keelung<br/>│​首獎＆二獎</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" width="200px" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="80px"/>
              <Text textAlign="center">2022屏東創意廣告節<br/>Pingtung Ad Festival<br/>│​最佳視覺設計獎</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" width="200px" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="80px"/>
              <Text textAlign="center">2021美麗基隆影片創作比賽<br/>Beautiful Keelung<br/>│優選</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" width="200px" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="80px"/>
              <Text textAlign="center">旱溪媽祖遶境十八庄200週年 - 微電影拍攝比賽<br/>│​佳作</Text>
            </Flex>
            <Flex direction="column" py="48px" rowGap="2rem" width="200px" alignItems="center">
              <Image src="./imgs/prize.webp" alt="prize" w="80px"/>
              <Text textAlign="center">in臺南‧無影藏 - 2021臺南市文化資產影像競賽<br/>│入圍</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </main>
  );
}
