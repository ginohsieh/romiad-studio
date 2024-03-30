import { useMemo } from 'react'

export default function useLightboxVideos(type) {
  const videos = useMemo(() => lightboxVideos[type] || [], [type])
  return videos
}


const lightboxVideos = {
  city_marketing: [
    {
      src: 'https://www.youtube.com/embed/Nv-3Tj4CsE4?si=WDZ8XBpUci3xiIMI',
      thumbnail: 'https://i.ytimg.com/vi/Nv-3Tj4CsE4/default.jpg',
      name: '[封面影片] 2022 屏東創意廣告節︱瑰寶屏東 Pacific Treasure Ping Tung'
    },
    {
      src: 'https://www.youtube.com/embed/rqqsZU3ZeMM?si=xiNMCEpN-yciu01m',
      thumbnail: 'https://i.ytimg.com/vi/rqqsZU3ZeMM/default.jpg',
      name: '美麗基隆亞軍影像－基隆關鍵字 | Kee-word'
    },
    {
      src: 'https://www.youtube.com/embed/w3t1t0-Z1PU?si=yYB99dLvcjFhskWe',
      thumbnail: 'https://i.ytimg.com/vi/w3t1t0-Z1PU/default.jpg',
      name: '美麗基隆冠軍影像－神隱之律：雞籠中元祭 Melody of The Hidden Deity: Ghost Festival'
    },
    {
      src: 'https://www.youtube.com/embed/remDzQJ7TEg?si=HZGjV7chkiPRoM2W',
      thumbnail: 'https://i.ytimg.com/vi/remDzQJ7TEg/default.jpg',
      name: '2021 美麗基隆－繽紛視界︱2021 Beautiful Keelung - Vision Colors'
    },
    {
      src: 'https://www.youtube.com/embed/eKhO1XfMmyI?si=lakvyIspMNSf2mlM',
      thumbnail: 'https://i.ytimg.com/vi/eKhO1XfMmyI/default.jpg',
      name: '2022屏東創意廣告節 - 最佳視覺設計獎︱屏東．形 Shapes of Pingtung'
    },
    {
      src: 'https://www.youtube.com/embed/wPrlY1dLIh4?si=XPMkInEkNkc5FHlp',
      thumbnail: 'https://i.ytimg.com/vi/wPrlY1dLIh4/default.jpg',
      name: '白日夢冒險王 – My Daydream Story ︱Cinematic Vlog B-roll Style'
    },
    {
      src: 'https://www.youtube.com/embed/7aL9na-CKeE?si=x7raRA4nQl97jS32',
      thumbnail: 'https://i.ytimg.com/vi/7aL9na-CKeE/default.jpg',
      name: '邁向千禧之旅：旱溪媽祖 Pilgrimage to Millennium: Hanxi Mazu'
    },
  ],
  commercial: [
    {
      src: 'https://www.youtube.com/embed/SCGUmyBkVI',
      thumbnail: 'https://i.ytimg.com/vi/SCGUmyBkVI/default.jpg',
      name: '[封面影片] うなぎ四代目菊かわ鰻魚飯專賣店'
    },
    {
      src: 'https://www.youtube.com/embed/sDzJMzdnyxo',
      thumbnail: 'https://i.ytimg.com/vi/sDzJMzdnyxo/default.jpg',
      name: '907MALL 手工香氛蠟燭',
    },
    {
      src: 'https://www.youtube.com/embed/pkZuyyZzqcA',
      thumbnail: 'https://i.ytimg.com/vi/pkZuyyZzqcA/default.jpg',
      name: '山陽產業集團－台灣高山茗茶︱商品形象',
    },
    {
      src: 'https://www.youtube.com/embed/N5LKH7Drl3o',
      thumbnail: 'https://i.ytimg.com/vi/N5LKH7Drl3o/default.jpg',
      name: '山陽產業集團－洗沐系列'
    },
    {
      src: 'https://youtu.be/XZz7Qu8KJAI',
      thumbnail: 'https://i.ytimg.com/vi/XZz7Qu8KJAI/default.jpg',
      name: '日喬恩生技有限公司 CIAO︱Commercial（未公開）'
    },
    {
      src: 'https://youtu.be/MaocTqJGRQo',
      thumbnail: 'https://i.ytimg.com/vi/MaocTqJGRQo/default.jpg',
      name: '雪碧酸白菜 Broll（未公開）'
    },
    {
      src: 'https://youtu.be/bCjs8bgCVwo',
      thumbnail: 'https://i.ytimg.com/vi/bCjs8bgCVwo/default.jpg',
      name: '雪碧酸白菜 Contrast high Sprite and Cabbage（未公開）'
    },
    {
      src: 'https://www.youtube.com/embed/3DkgXTUhX68',
      thumbnail: 'https://i.ytimg.com/vi/3DkgXTUhX68/default.jpg',
      name: 'Celine Wallet B-Roll︱Celine 短夾包'
    },
    {
      src: 'https://www.youtube.com/embed/oEYeg_1waaM',
      thumbnail: 'https://i.ytimg.com/vi/oEYeg_1waaM/default.jpg',
      name: 'CENNA Skin Care Product'
    },
    {
      src: 'https://www.youtube.com/embed/Um8inQWoseM',
      thumbnail: 'https://i.ytimg.com/vi/Um8inQWoseM/default.jpg',
      name: 'Epic Mulled Wine B-Roll︱熱紅酒 B Roll'
    },
    {
      src: 'https://www.youtube.com/embed/yZxvXTtHEA0',
      thumbnail: 'https://i.ytimg.com/vi/yZxvXTtHEA0/default.jpg',
      name: 'Rum Brownie 萊姆布朗尼'
    },
    {
      src: 'https://www.youtube.com/embed/5Re96bVGj3E',
      thumbnail: 'https://i.ytimg.com/vi/5Re96bVGj3E/default.jpg',
      name: 'Sony Easy Card B-Roll'
    },
    {
      src: 'https://www.youtube.com/embed/fHX557lcHqk',
      thumbnail: 'https://i.ytimg.com/vi/fHX557lcHqk/default.jpg',
      name: 'Veriott Wax Perfume'
    },
  ],
  corporate: [
    {
      src: 'https://www.youtube.com/embed/3CLNefYZ3rM',
      thumbnail: 'https://i.ytimg.com/vi/3CLNefYZ3rM/default.jpg',
      name: '[封面影片] HEBEN 赫本健康精品塑身衣'
    },
    {
      src: 'https://www.youtube.com/embed/rCAPLfcpkAk',
      thumbnail: 'https://i.ytimg.com/vi/rCAPLfcpkAk/default.jpg',
      name: '蘿琳亞頂級塑身衣︱VIP 服務車'
    },
    {
      src: 'https://www.youtube.com/embed/cbk2ODepY5Q',
      thumbnail: 'https://i.ytimg.com/vi/cbk2ODepY5Q/default.jpg',
      name: 'MS MingShine 紳士選品店'
    },
    {
      src: 'https://www.youtube.com/embed/743Qy4XbjIk',
      thumbnail: 'https://i.ytimg.com/vi/743Qy4XbjIk/default.jpg',
      name: 'OurGym Café'
    },
  ],
  crowdfunding: [
    {
      src: 'https://www.youtube.com/embed/VKXito9z9Ao',
      thumbnail: 'https://i.ytimg.com/vi/VKXito9z9Ao/default.jpg',
      name: '[封面影片] 朋瓦 Ponwaa－洞洞貓大廈｜嘖嘖募資'
    },
    {
      src: 'https://www.youtube.com/embed/oJBkXlqlLJo',
      thumbnail: 'https://i.ytimg.com/vi/oJBkXlqlLJo/default.jpg',
      name: '12 星座 WOOD 小小兵︱嘖嘖募資'
    },
    {
      src: 'https://www.youtube.com/embed/Y2Plmaqv9B8&t',
      thumbnail: 'https://i.ytimg.com/vi/Y2Plmaqv9B8/default.jpg',
      name: '木頭方程式 - WOOD小夜燈'
    },
    {
      src: 'https://www.youtube.com/embed/ah4muMcedN4',
      thumbnail: 'https://i.ytimg.com/vi/ah4muMcedN4/default.jpg',
      name: '嘖嘖 × 好時光 Goodtime－線上課程宣傳影像'
    },
  ],
  event: [
    {
      src: 'https://www.youtube.com/embed/CFKVzPD4IGc',
      thumbnail: 'https://i.ytimg.com/vi/CFKVzPD4IGc/default.jpg',
      name: '[封面影片] 2023 花蓮 Demo Day - 夢想StartUP！創業蓮起來︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/6bX6McZDdFE',
      thumbnail: 'https://i.ytimg.com/vi/6bX6McZDdFE/default.jpg',
      name: '2022 花蓮 STARUP！創業市集︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/t9yjGH4R9iw',
      thumbnail: 'https://i.ytimg.com/vi/t9yjGH4R9iw/default.jpg',
      name: '2023 台北國際電腦展 COMPUTEX TAIPEI 活動精華－AMI︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/EQQAQ8OM6-w',
      thumbnail: 'https://i.ytimg.com/vi/EQQAQ8OM6-w/default.jpg',
      name: '2023 展昭世界貓咪博覽會 - Ponwaa 朋瓦︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/CIeJw2hOgKU',
      thumbnail: 'https://i.ytimg.com/vi/CIeJw2hOgKU/default.jpg',
      name: '心輔犬互動教育計畫︱公益紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/LI9Jc2YUpw0',
      thumbnail: 'https://i.ytimg.com/vi/LI9Jc2YUpw0/default.jpg',
      name: '桃園市政府社會企業委員會_112年第1次會議記錄︱活動記錄'
    },
    {
      src: 'https://www.youtube.com/embed/tAcV3eFUd9I',
      thumbnail: 'https://i.ytimg.com/vi/tAcV3eFUd9I/default.jpg',
      name: '臺北市北投區桃源國民小學－地下室禮堂彩繪公益活動︱公益紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/vFtYSQ0DUTE',
      thumbnail: 'https://i.ytimg.com/vi/vFtYSQ0DUTE/default.jpg',
      name: 'BITBAND Revolver Concert (Essential Edition)︱精華版活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/pJMo0eoLOJQ',
      thumbnail: 'https://i.ytimg.com/vi/pJMo0eoLOJQ/default.jpg',
      name: 'iMin_Computex'
    },
    {
      src: 'https://www.youtube.com/embed/5pG4TzJxc_k',
      thumbnail: 'https://i.ytimg.com/vi/5pG4TzJxc_k/default.jpg',
      name: 'KOL我就是品牌'
    },
  ],
  interview: [
    {
      src: 'https://www.youtube.com/embed/oy_DYhkunEQ',
      thumbnail: 'https://i.ytimg.com/vi/oy_DYhkunEQ/default.jpg',
      name: '[封面影片] iMin Technology Launch Event'
    },
    {
      src: 'https://www.youtube.com/embed/dOBzWS9iQr4',
      thumbnail: 'https://i.ytimg.com/vi/dOBzWS9iQr4/default.jpg',
      name: '【未來地球：綠色希望】桃園市政府社會企業中心－平鎮館推廣活動精華︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/uw_RIemF_6I',
      thumbnail: 'https://i.ytimg.com/vi/uw_RIemF_6I/default.jpg',
      name: '山霧陶瓷香氛機 – 街頭突襲'
    },
    {
      src: 'https://www.youtube.com/embed/Y_n_Jy6RbwA',
      thumbnail: 'https://i.ytimg.com/vi/Y_n_Jy6RbwA/default.jpg',
      name: '山霧陶瓷香氛機Ｘ林立青'
    },
    {
      src: 'https://www.youtube.com/embed/TwoGz5ouqA0',
      thumbnail: 'https://i.ytimg.com/vi/TwoGz5ouqA0/default.jpg',
      name: '匠師傳奇－王武雄︱The Ceramic Appliqué Legend'
    },
  ],
}
