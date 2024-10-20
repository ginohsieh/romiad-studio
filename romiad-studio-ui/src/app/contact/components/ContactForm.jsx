'use client';

import { useState } from 'react';
import { Button, Divider, Text } from '@chakra-ui/react';
import Form from './Form';
import FormRow from './FormRow';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import TextareaField from './TextareaField';
import RadioField from './RadioField';
import Link from 'next/link';
import apiCnf from '@/config/api.json'
import StandardModal from '@/components/Modal/Modal';
import SpinnerOverlay from '@/components/SpinnerOverlay/SpinnerOverlay';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessfulModalOpen, setIsSuccessfulModalOpen] = useState(false)
  const [isFailureModalOpen, setIsFailureModalOpen] = useState(false)

  const onSubmit = (formData) => {
    const data = formData.entries().reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {})
    // get checkbox values
    const checkboxFields = ["film_type", "source"]
    checkboxFields.forEach((field) => {
      data[field] = formData.getAll(field)
    })

    setIsLoading(true)
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    fetch(`${apiCnf.BASE_URL}v1/contact`, {
      method: 'POST',
      mode: 'cors',
      headers,
      redirect: 'follow',
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        setIsSuccessfulModalOpen(true)
      }
    }).catch((error) => {
      setIsFailureModalOpen(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  return (
    <>
      <SpinnerOverlay isOpen={isLoading} />
      <StandardModal title="提交成功" isOpen={isSuccessfulModalOpen} onClose={() => setIsSuccessfulModalOpen(false)}>
        <Text>感謝您的聯絡，我們將盡快與您聯繫！</Text>
      </StandardModal>
      <StandardModal title="提交失敗" isOpen={isFailureModalOpen} onClose={() => setIsFailureModalOpen(false)}>
        <Text>提交失敗，請稍後重試，或者透過其他方式聯絡我們。</Text>
      </StandardModal>
      <Form action={onSubmit}>
        <FormRow>
          <InputField
            label="姓名（個人或公司名稱）"
            type="text"
            name="name"
            required
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            required
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
            name="film_type"
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
          <TextareaField label="敘述您的需求（200字內精簡敘述即可）" name="description" required />
        </FormRow>
        <FormRow>
          <InputField label="希望何時開始製作" type="date" name="start_date" required />
        </FormRow>
        <FormRow>
          <RadioField
            label="希望的結案時間"
            name="end_date_preference"
            radioList={[
              { value: "Y", label: "有" },
              { value: "N", label: "沒有" },
              { value: "ASAP", label: "沒有，但希望儘快" },
            ]}
            required
          />
        </FormRow>
        <FormRow>
          <RadioField
            label="您的預算為何"
            name="budget"
            radioList={[
              { value: "5", label: "5萬" },
              { value: "8", label: "8~15萬" },
              { value: "20", label: "20~45萬" },
              { value: "50", label: "50~80萬" },
              { value: "100", label: ">100萬" }
            ]}
            required
          />
        </FormRow>
        <Divider mb="1rem" />
        <FormRow>
          <CheckboxField
            label="您是從何處知道我們"
            name="source"
            checkboxList={[
              { value: "website", label: "官方網站" },
              { value: "facebook", label: "Facebook" },
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
          <Button disable={isLoading} type="submit">提交</Button>
          <Text>或直接與我們聯繫 - <Link href="mailto://romiadstudio@gmail.com">romiadstudio@gmail.com</Link></Text>
        </FormRow>
      </Form>
    </>
  );
}
