import _metadata from "@/config/metadata";
import { Button, Checkbox, CheckboxGroup, Divider, Flex, FormControl, FormLabel, Heading, Input, Link, Radio, RadioGroup, Stack, Text, Textarea } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';
import Form from './components/Form';
import InputField from './components/InputField';
import FormRow from './components/FormRow';
import CheckboxField from './components/CheckboxField';
import { useMemo } from 'react';
import TextareaField from './components/TextareaField';
import RadioField from './components/RadioField';

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
      <Navigation bgColor="black" />
      <Flex width="100%" justifyContent="center" pt="120px" direction="column" alignItems="center">
        <Flex py="4rem">
          <Heading as="h2" size="lg">Contact us 聯絡我們</Heading>
        </Flex>
        <Form>
          <FormRow>
            <InputField
              label="姓名（個人或公司名稱）"
              type="text"
              name="name"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
            />
          </FormRow>
          <FormRow>
            <InputField
              label="您的網址（FB/IG等平台網址皆可）"
              type="url"
              name="url"
            />
          </FormRow>
          <Divider my="1rem" />
          <FormRow>
            <CheckboxField
              label="欲拍攝影像類型"
              checkboxList={[
                { value: "commercial", label: "商業廣告" },
                { value: "corporate", label: "品牌形象" },
                { value: "event", label: "活動紀錄" },
                { value: "city_marketing", label: "城市行銷" },
                { value: "crowdfunding", label: "募資影像" },
                { value: "interview", label: "訪談紀錄" },
                { value: "other", label: "其他" },
              ]}
            />
          </FormRow>
          <FormRow>
            <TextareaField label="敘述您的需求（200字內精簡敘述即可）" name="description" />
          </FormRow>
          <FormRow>
            <InputField label="希望何時開始製作" type="date" name="start_date" />
          </FormRow>
          <FormRow>
            <RadioField
              label="希望的結案時間"
              radioList={[
                { value: "Y", label: "有" },
                { value: "N", label: "沒有" },
                { value: "ASAP", label: "沒有，但希望儘快" },
              ]}
            />
          </FormRow>
          <FormRow>
            <RadioField
              label="您的預算為何"
              radioList={[
                { value: "5", label: "5萬" },
                { value: "8", label: "8~15萬" },
                { value: "20", label: "20~45萬" },
                { value: "50", label: "50~80萬" },
                { value: "100", label: ">100萬"}
              ]}
            />
          </FormRow>
          <Divider mb="1rem" />
          <FormRow>
            <CheckboxField
              label="您是從何處知道我們"
              checkboxList={[
                { value: "website", label: "官方網站" },
                { value: "corporate", label: "Facebook" },
                { value: "instagram", label: "Instagram" },
                { value: "youtube", label: "YouTube" },
                { value: "friend", label: "朋友推薦" },
                { value: "industry", label: "業內介紹" },
                { value: "other", label: "其他" },
              ]}
            />
          </FormRow>
          <Divider my="1rem" />
          <FormRow alignItems="center">
            <Button>提交</Button>
            <Text>或直接與我們聯繫 - <Link href="mailto://romiadstudio@gmail.com">romiadstudio@gmail.com</Link></Text>
          </FormRow>
        </Form>
      </Flex>
      <Footer />
    </main>
  );
}
