'use client';
import { Box, useConst } from '@chakra-ui/react';
import config from '@/config/pages/motion.json'
import CarouselSection from '@/components/CarouselSection/CarouselSection';
import LightBox from '@/components/LightBox';
import usePortal from 'react-useportal';

export default function Motion() {
  const { title, subtitle } = config
  const { Portal, openPortal, closePortal, isOpen } = usePortal()
  const videos = [
    {
      src: 'https://www.youtube.com/embed/Nv-3Tj4CsE4?si=WDZ8XBpUci3xiIMI',
      thumbnail: '',
      name: '2022 屏東創意廣告節︱瑰寶屏東 Pacific Treasure Ping Tung'
    },
    {
      src: 'https://www.youtube.com/embed/rqqsZU3ZeMM?si=xiNMCEpN-yciu01m',
      thumbnail: '',
      name: '美麗基隆亞軍影像－基隆關鍵字 | Kee-word'
    },
    {
      src: 'https://www.youtube.com/embed/w3t1t0-Z1PU?si=yYB99dLvcjFhskWe',
      thumbnail: '',
      name: '美麗基隆冠軍影像－神隱之律：雞籠中元祭 Melody of The Hidden Deity: Ghost Festival'
    },
    {
      src: 'https://www.youtube.com/embed/remDzQJ7TEg?si=HZGjV7chkiPRoM2W',
      thumbnail: '',
      name: '2021 美麗基隆－繽紛視界︱2021 Beautiful Keelung - Vision Colors'
    },
    {
      src: 'https://www.youtube.com/embed/eKhO1XfMmyI?si=lakvyIspMNSf2mlM',
      thumbnail: '',
      name: '2022屏東創意廣告節 - 最佳視覺設計獎︱屏東．形 Shapes of Pingtung'
    },
    {
      src: 'https://www.youtube.com/embed/wPrlY1dLIh4?si=XPMkInEkNkc5FHlp',
      thumbnail: '',
      name: '白日夢冒險王 – My Daydream Story ︱Cinematic Vlog B-roll Style'
    },
    {
      src: 'https://www.youtube.com/embed/7aL9na-CKeE?si=x7raRA4nQl97jS32',
      thumbnail: '',
      name: '邁向千禧之旅：旱溪媽祖 Pilgrimage to Millennium: Hanxi Mazu'
    },
  ]

  const items = useConst(() => [
    {
      bg: "./videos/city_marketing.mp4",
      title: "城市行銷",
      onClick: () => {
        openPortal()
      },
    },
    {
      bg: "./videos/commercial.mp4",
      title: "商業廣告",
      onClick: () => {
        openPortal()
      },
    },
    {
      bg: "./videos/corporate.mp4",
      title: "品牌形象",
      onClick: () => {
        openPortal()
      },
    },
    {
      bg: "./videos/crowdfunding.mp4",
      title: "募資影像",
      onClick: () => {
        openPortal()
      },
    },
    {
      bg: "./videos/event.mp4",
      title: "活動紀錄",
      onClick: () => {
        openPortal()
      },
    },
    {
      bg: "./videos/interview.mp4",
      title: "訪談紀錄",
      onClick: () => {
        openPortal()
      },
    },
  ])
  return (
    <Box>
      {isOpen &&
        <Portal>
          <LightBox videos={videos} onClose={closePortal} />
        </Portal>
      }
      <CarouselSection title={title} subtitle={subtitle} items={items} />
    </Box>
  )
}
