'use client';

import { useState } from 'react';
import VideoCarousel from './VideoCarousel';
import LightBox from './LightBox';



export default function VideoLightBox({videos = [], onClose = () => {}}) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const selectedVideo = videos?.[selectedVideoIndex] || {}

  return (
    <LightBox onClose={onClose}>
      {<VideoCarousel selectedVideo={selectedVideo} videos={videos} setSelectedVideoIndex={setSelectedVideoIndex} />}
    </LightBox>
  )
}
