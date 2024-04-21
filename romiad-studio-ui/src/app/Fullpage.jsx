'use client';

import SectionSlider, { Section } from '@/components/SectionSlider';
import ReactFullpage from '@fullpage/react-fullpage';
import Main from './Main'
import Motion from './Motion';
import Story from './Story';
import Image from './Image';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation';
import usePortal from 'react-useportal';

const anchors = ['main', 'motion', 'story', 'image', 'footer']

export default function Fullpage() {
  const { Portal } = usePortal({
    isOpen: true,
    bindTo: document.getElementsByTagName('body')[0],
  })
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => (
        <>
          <Portal><Navigation moveTo={fullpageApi?.moveTo} /></Portal>
          <SectionSlider settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            anchors,
            fixedElements: ['#navigation'],
          }}>
            <Section index="1" data-anchor="main"><Main /></Section>
            <Section index="2" data-anchor="motion"><Motion /></Section>
            <Section index="3" data-anchor="story"><Story /></Section>
            <Section index="4" data-anchor="image"><Image /></Section>
            <Section autoHeight data-anchor="footer"><Footer /></Section>
          </SectionSlider>
        </>
      )}
  />
  );
}
