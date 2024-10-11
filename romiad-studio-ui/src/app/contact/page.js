import _metadata from "@/config/metadata";
import { Flex, Heading } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';
import ContactForm from './components/ContactForm';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

export default function Contact() {
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <main>
      <Navigation bgColor="black" />
      <Flex width="100%" justifyContent="center" pt="120px" direction="column" alignItems="center">
        <Flex py="4rem">
          <Heading as="h2" size="lg">Contact us 聯絡我們</Heading>
        </Flex>
        <ContactForm />
      </Flex>
      <Footer />
    </main>
  );
}
