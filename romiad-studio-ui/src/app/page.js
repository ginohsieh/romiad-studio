import _metadata from "@/config/metadata";
import Navigation from '@/components/Navigation';
import SectionSlider, { Section } from '@/components/SectionSlider';
import Footer from '@/components/Footer/Footer';
import Main from './Main';
import Motion from './Motion';
import Story from './Story';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <SectionSlider settings={{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      }}>
        <Section index="1"><Main /></Section>
        <Section index="2"><Motion /></Section>
        <Section index="3"><Story /></Section>
        <Section autoHeight><Footer /></Section>
      </SectionSlider>
    </main>
  );
}
