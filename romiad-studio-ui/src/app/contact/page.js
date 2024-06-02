import _metadata from "@/config/metadata";
import { Button, Checkbox, CheckboxGroup, Divider, Flex, FormControl, FormLabel, Heading, Input, Link, Radio, RadioGroup, Stack, Text, Textarea } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

export default function Home() {
  const flexFormRowProps = {
    direction: {
      base: 'column',
      md: 'row',
    },
    rowGap: '1rem',
  }

  const checkboxStackProps = {
    direction: {
      base: 'column',
      md: 'row',
    },
    spacing: {
      base: '0.5rem',
      md: '1rem',
    }
  }

  return (
    <main>
      <Navigation />
      <Flex width="100%" justifyContent="center" pt="120px" direction="column" alignItems="center">
        <Flex py="4rem">
          <Heading as="h2" size="lg">Contact us 聯絡我們</Heading>
        </Flex>
        <Flex
          as="form"
          w="100%"
          minW="600px"
          maxW="1280px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          rowGap="1rem"
          px="2rem"
        >
          <Flex w="100%" columnGap="1rem" {...flexFormRowProps}>
            <FormControl flex="1">
              <FormLabel>姓名（個人或公司名稱）</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl flex="1">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
          </Flex>
          <Flex w="100%" columnGap="1rem" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>您的網址（FB/IG等平台網址皆可）</FormLabel>
              <Input type="url" />
            </FormControl>
          </Flex>
          <Divider mb="1rem" />
          <Flex w="100%" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>欲拍攝影像類型</FormLabel>
              <CheckboxGroup>
                <Stack {...checkboxStackProps}>
                  <Checkbox value="commercial">商業廣告</Checkbox>
                  <Checkbox value="corporate">品牌形象</Checkbox>
                  <Checkbox value="event">活動紀錄</Checkbox>
                  <Checkbox value="city_marketing">城市行銷</Checkbox>
                  <Checkbox value="crowdfunding">募資影像</Checkbox>
                  <Checkbox value="interview">訪談紀錄</Checkbox>
                  <Checkbox value="other">其他</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </Flex>
          <Flex w="100%" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>敘述您的需求（200字內精簡敘述即可）</FormLabel>
              <Textarea />
            </FormControl>
          </Flex>
          <Flex w="100%" columnGap="1rem" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>您希望何時開始</FormLabel>
              <Input type="date" />
            </FormControl>
          </Flex>
          <Divider mb="1rem" />
          <Flex w="100%" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>您的預算為何</FormLabel>
              <RadioGroup>
                <Stack {...checkboxStackProps}>
                  <Radio value="0">5萬以下</Radio>
                  <Radio value='5'>5~19萬</Radio>
                  <Radio value='20'>20~49萬</Radio>
                  <Radio value='50'>50萬</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Flex>
          <Flex w="100%" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>有無希望的結案時間</FormLabel>
              <RadioGroup>
                <Stack {...checkboxStackProps}>
                  <Radio value="Y">有</Radio>
                  <Radio value='N'>沒有</Radio>
                  <Radio value='ASAP'>沒有，但希望儘快</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Flex>
          <Flex w="100%" {...flexFormRowProps}>
            <FormControl>
              <FormLabel>您從何處知道我們</FormLabel>
              <CheckboxGroup>
                <Stack {...checkboxStackProps}>
                  <Checkbox value="website">官方網站</Checkbox>
                  <Checkbox value="corporate">Facebook</Checkbox>
                  <Checkbox value="instagram">Instagram</Checkbox>
                  <Checkbox value="youtube">YouTube</Checkbox>
                  <Checkbox value="friend">朋友推薦</Checkbox>
                  <Checkbox value="industry">業內介紹</Checkbox>
                  <Checkbox value="other">其他</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </Flex>
          <Divider mb="1rem" />
          <Flex w="100%" alignItems="center" columnGap="1rem" {...flexFormRowProps}>
            <Button>提交</Button>
            <Text>或直接與我們聯繫 - <Link href="mailto://romiadstudio@gmail.com">romiadstudio@gmail.com</Link></Text>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </main>
  );
}
