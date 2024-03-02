import config from '@/config/pages/story.json'
import CarouselSection from '@/components/CarouselSection';

export default function Story() {
  const { title, subtitle } = config;

  const items = [
    { bg: "./imgs/test.jpg", title: "創意" },
    { bg: "./imgs/test-2.jpg", title: "概念" },
    { bg: "./imgs/test-3.jpeg", title: "獨有" },
  ]

  return (
    <CarouselSection
      title={title}
      subtitle={subtitle}
      items={items}
      reverse
      useOverflowLayout={false}
    />
  )
}
