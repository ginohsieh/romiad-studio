import { useMemo } from 'react'

export default function useLightboxImages(type) {
  const images = useMemo(() => lightboxImages[type] || [], [type])
  return images
}


const lightboxImages = {
  product: [
    { src: './imgs/images/product/001.jpg', alt: 'product1' },
    { src: './imgs/images/product/002.jpg', alt: 'product2' },
    { src: './imgs/images/product/003.jpg', alt: 'product3' },
    { src: './imgs/images/product/004.jpg', alt: 'product4' },
    { src: './imgs/images/product/005.jpg', alt: 'product5' },
    { src: './imgs/images/product/006.jpg', alt: 'product6' },
    { src: './imgs/images/product/007.jpg', alt: 'product7' },
    { src: './imgs/images/product/008.jpg', alt: 'product8' },
    { src: './imgs/images/product/009.jpg', alt: 'product9' },
    { src: './imgs/images/product/010.jpg', alt: 'product10' },
    { src: './imgs/images/product/011.jpg', alt: 'product11' },
    { src: './imgs/images/product/012.jpg', alt: 'product12' },
    { src: './imgs/images/product/013.jpg', alt: 'product13' },
    { src: './imgs/images/product/014.jpg', alt: 'product14' },
    { src: './imgs/images/product/015.jpg', alt: 'product15' },
    { src: './imgs/images/product/016.jpg', alt: 'product16' },
    { src: './imgs/images/product/017.jpg', alt: 'product17' },
    { src: './imgs/images/product/018.jpg', alt: 'product18' },
    { src: './imgs/images/product/019.jpg', alt: 'product19' },
    { src: './imgs/images/product/020.jpg', alt: 'product20' },
    { src: './imgs/images/product/021.jpg', alt: 'product21' },
    { src: './imgs/images/product/022.jpg', alt: 'product22' },
    { src: './imgs/images/product/023.jpg', alt: 'product23' },
  ],
  luxury: [
    { src: './imgs/images/luxury/001.jpg', alt: 'luxury1' },
    { src: './imgs/images/luxury/002.jpg', alt: 'luxury2' },
    { src: './imgs/images/luxury/003.jpg', alt: 'luxury3' },
    { src: './imgs/images/luxury/004.jpg', alt: 'luxury4' },
    { src: './imgs/images/luxury/005.jpg', alt: 'luxury5' },
    { src: './imgs/images/luxury/006.jpg', alt: 'luxury6' },
    { src: './imgs/images/luxury/007.jpg', alt: 'luxury7' },
    { src: './imgs/images/luxury/008.jpg', alt: 'luxury8' },
    { src: './imgs/images/luxury/009.jpg', alt: 'luxury9' },
    { src: './imgs/images/luxury/010.jpg', alt: 'luxury10' },
    { src: './imgs/images/luxury/011.jpg', alt: 'luxury11' },
    { src: './imgs/images/luxury/012.jpg', alt: 'luxury12' },
    { src: './imgs/images/luxury/013.jpg', alt: 'luxury13' },
    { src: './imgs/images/luxury/014.jpg', alt: 'luxury14' },
    { src: './imgs/images/luxury/015.jpg', alt: 'luxury15' },
    { src: './imgs/images/luxury/016.jpg', alt: 'luxury16' },
  ],
  event: [
    { src: './imgs/images/event/001.jpg', alt: 'event1' },
    { src: './imgs/images/event/002.jpg', alt: 'event2' },
    { src: './imgs/images/event/003.jpg', alt: 'event3' },
    { src: './imgs/images/event/004.jpg', alt: 'event4' },
    { src: './imgs/images/event/005.jpg', alt: 'event5' },
    { src: './imgs/images/event/006.jpg', alt: 'event6' },
    { src: './imgs/images/event/007.jpg', alt: 'event7' },
    { src: './imgs/images/event/008.jpg', alt: 'event8' },
    { src: './imgs/images/event/009.jpg', alt: 'event9' },
    { src: './imgs/images/event/010.jpg', alt: 'event10' },
    { src: './imgs/images/event/011.jpg', alt: 'event11' },
    { src: './imgs/images/event/012.jpg', alt: 'event12' },
    { src: './imgs/images/event/013.jpg', alt: 'event13' },
    { src: './imgs/images/event/014.jpg', alt: 'event14' },
    { src: './imgs/images/event/015.jpg', alt: 'event15' },
    { src: './imgs/images/event/016.jpg', alt: 'event16' },
    { src: './imgs/images/event/017.jpg', alt: 'event17' },
    { src: './imgs/images/event/018.jpg', alt: 'event18' },
    { src: './imgs/images/event/019.jpg', alt: 'event19' },
    { src: './imgs/images/event/020.jpg', alt: 'event20' },
    { src: './imgs/images/event/021.jpg', alt: 'event21' },
    { src: './imgs/images/event/022.jpg', alt: 'event22' },
    { src: './imgs/images/event/023.jpg', alt: 'event23' },
  ],
  portrait: [
    { src: './imgs/images/portrait/001.jpg', alt: 'portrait1' },
    { src: './imgs/images/portrait/002.jpg', alt: 'portrait2' },
    { src: './imgs/images/portrait/003.jpg', alt: 'portrait3' },
    { src: './imgs/images/portrait/004.jpg', alt: 'portrait4' },
    { src: './imgs/images/portrait/005.jpg', alt: 'portrait5' },
    { src: './imgs/images/portrait/006.jpg', alt: 'portrait6' },
    { src: './imgs/images/portrait/007.jpg', alt: 'portrait7' },
    { src: './imgs/images/portrait/008.jpg', alt: 'portrait8' },
    { src: './imgs/images/portrait/009.jpg', alt: 'portrait9' },
    { src: './imgs/images/portrait/010.jpg', alt: 'portrait10' },
    { src: './imgs/images/portrait/011.jpg', alt: 'portrait11' },
    { src: './imgs/images/portrait/012.jpg', alt: 'portrait12' },
    { src: './imgs/images/portrait/013.jpg', alt: 'portrait13' },
    { src: './imgs/images/portrait/014.jpg', alt: 'portrait14' },
    { src: './imgs/images/portrait/015.jpg', alt: 'portrait15' },
    { src: './imgs/images/portrait/016.jpg', alt: 'portrait16' },
    { src: './imgs/images/portrait/017.jpg', alt: 'portrait17' },
    { src: './imgs/images/portrait/018.jpg', alt: 'portrait18' },
  ],
  food: [
    { src: './imgs/images/food/001.jpg', alt: 'food1' },
    { src: './imgs/images/food/002.jpg', alt: 'food2' },
    { src: './imgs/images/food/003.jpg', alt: 'food3' },
    { src: './imgs/images/food/004.jpg', alt: 'food4' },
    { src: './imgs/images/food/005.jpg', alt: 'food5' },
    { src: './imgs/images/food/006.jpg', alt: 'food6' },
    { src: './imgs/images/food/007.jpg', alt: 'food7' },
    { src: './imgs/images/food/008.jpg', alt: 'food8' },
    { src: './imgs/images/food/009.jpg', alt: 'food9' },
    { src: './imgs/images/food/010.jpg', alt: 'food10' },
    { src: './imgs/images/food/011.jpg', alt: 'food11' },
    { src: './imgs/images/food/012.jpg', alt: 'food12' },
    { src: './imgs/images/food/013.jpg', alt: 'food13' },
    { src: './imgs/images/food/014.jpg', alt: 'food14' },
    { src: './imgs/images/food/015.jpg', alt: 'food15' },
    { src: './imgs/images/food/016.jpg', alt: 'food16' },
    { src: './imgs/images/food/017.jpg', alt: 'food17' },
    { src: './imgs/images/food/018.jpg', alt: 'food18' },
    { src: './imgs/images/food/019.jpg', alt: 'food19' },
    { src: './imgs/images/food/020.jpg', alt: 'food20' },
    { src: './imgs/images/food/021.jpg', alt: 'food21' },
    { src: './imgs/images/food/022.jpg', alt: 'food22' },
    { src: './imgs/images/food/023.jpg', alt: 'food23' },
    { src: './imgs/images/food/024.jpg', alt: 'food24' },
  ],
  streetsnap: [
    { src: './imgs/images/streetsnap/001.jpg', alt: 'streetsnap1' },
    { src: './imgs/images/streetsnap/002.jpg', alt: 'streetsnap2' },
    { src: './imgs/images/streetsnap/003.jpg', alt: 'streetsnap3' },
    { src: './imgs/images/streetsnap/004.jpg', alt: 'streetsnap4' },
    { src: './imgs/images/streetsnap/005.jpg', alt: 'streetsnap5' },
    { src: './imgs/images/streetsnap/006.jpg', alt: 'streetsnap6' },
    { src: './imgs/images/streetsnap/007.jpg', alt: 'streetsnap7' },
    { src: './imgs/images/streetsnap/008.jpg', alt: 'streetsnap8' },
    { src: './imgs/images/streetsnap/009.jpg', alt: 'streetsnap9' },
    { src: './imgs/images/streetsnap/010.jpg', alt: 'streetsnap10' },
    { src: './imgs/images/streetsnap/011.jpg', alt: 'streetsnap11' },
    { src: './imgs/images/streetsnap/012.jpg', alt: 'streetsnap12' },
    { src: './imgs/images/streetsnap/013.jpg', alt: 'streetsnap13' },
    { src: './imgs/images/streetsnap/014.jpg', alt: 'streetsnap14' },
    { src: './imgs/images/streetsnap/015.jpg', alt: 'streetsnap15' },
    { src: './imgs/images/streetsnap/016.jpg', alt: 'streetsnap16' },
  ],
  landscape: [
    { src: './imgs/images/landscape/001.jpg', alt: 'landscape1' },
    { src: './imgs/images/landscape/002.jpg', alt: 'landscape2' },
    { src: './imgs/images/landscape/003.jpg', alt: 'landscape3' },
    { src: './imgs/images/landscape/004.jpg', alt: 'landscape4' },
    { src: './imgs/images/landscape/005.jpg', alt: 'landscape5' },
    { src: './imgs/images/landscape/006.jpg', alt: 'landscape6' },
    { src: './imgs/images/landscape/007.jpg', alt: 'landscape7' },
    { src: './imgs/images/landscape/008.jpg', alt: 'landscape8' },
    { src: './imgs/images/landscape/009.jpg', alt: 'landscape9' },
    { src: './imgs/images/landscape/010.jpg', alt: 'landscape10' },
    { src: './imgs/images/landscape/011.jpg', alt: 'landscape11' },
    { src: './imgs/images/landscape/012.jpg', alt: 'landscape12' },
    { src: './imgs/images/landscape/013.jpg', alt: 'landscape13' },
    { src: './imgs/images/landscape/014.jpg', alt: 'landscape14' },
  ],
}
