import { Flex, Heading, Image, Slide, Text } from '@chakra-ui/react';

export default function ProcessSection() {
  const process = [
    { title: '預約諮詢', iconSrc: './imgs/aboutus/process/book_W.png' },
    { title: '需求確認', iconSrc: './imgs/aboutus/process/requirement_W.png' },
    { title: '報價簽約', iconSrc: './imgs/aboutus/process/contract_W.png' },
    { title: '腳本企劃', iconSrc: './imgs/aboutus/process/script_W.png' },
    { title: '剪輯拍攝', iconSrc: './imgs/aboutus/process/filming_W.png' },
    { title: '交付成品', iconSrc: './imgs/aboutus/process/production_W.png' },
  ]

  return (
    <Flex alignItems="center" direction="column" py="8rem" rowGap="2rem">
      <Flex>
        <Heading as="h2" size="lg">Our Process 製作流程</Heading>
      </Flex>
      <Flex columnGap="6rem" justifyContent="center" flexWrap="wrap">
        {
          process.map(({ title, iconSrc }) => (
              <Flex key={title} direction="column" py="48px" rowGap="1.5rem" alignItems="center" justifyContent="space-between">
                <Image src={iconSrc} alt={title} w="60px"/>
                <Text textAlign="center">{title}</Text>
              </Flex>
          ))
        }
      </Flex>
    </Flex>
  )
}
