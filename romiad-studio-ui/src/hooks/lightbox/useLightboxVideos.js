import { useMemo } from 'react'

export default function useLightboxVideos(type) {
  const videos = useMemo(() => lightboxVideos[type] || [], [type])
  return videos
}


const lightboxVideos = {
  city_marketing: [
    {
      src: 'https://www.youtube.com/embed/Nv-3Tj4CsE4?si=WDZ8XBpUci3xiIMI',
      thumbnail: 'https://i.ytimg.com/vi/Nv-3Tj4CsE4/hqdefault.jpg',
      name: '[封面影片] 2022 屏東創意廣告節︱瑰寶屏東 Pacific Treasure Ping Tung'
    },
    {
      src: 'https://www.youtube.com/embed/rqqsZU3ZeMM?si=xiNMCEpN-yciu01m',
      thumbnail: 'https://i.ytimg.com/vi/rqqsZU3ZeMM/hqdefault.jpg',
      name: '美麗基隆亞軍影像－基隆關鍵字 | Kee-word'
    },
    {
      src: 'https://www.youtube.com/embed/w3t1t0-Z1PU?si=yYB99dLvcjFhskWe',
      thumbnail: 'https://i.ytimg.com/vi/w3t1t0-Z1PU/hqdefault.jpg',
      name: '美麗基隆冠軍影像－神隱之律：雞籠中元祭 Melody of The Hidden Deity: Ghost Festival'
    },
    {
      src: 'https://www.youtube.com/embed/remDzQJ7TEg?si=HZGjV7chkiPRoM2W',
      thumbnail: 'https://i.ytimg.com/vi/remDzQJ7TEg/hqdefault.jpg',
      name: '2021 美麗基隆－繽紛視界︱2021 Beautiful Keelung - Vision Colors'
    },
    {
      src: 'https://www.youtube.com/embed/eKhO1XfMmyI?si=lakvyIspMNSf2mlM',
      thumbnail: 'https://i.ytimg.com/vi/eKhO1XfMmyI/hqdefault.jpg',
      name: '2022屏東創意廣告節 - 最佳視覺設計獎︱屏東．形 Shapes of Pingtung'
    },
    {
      src: 'https://www.youtube.com/embed/wPrlY1dLIh4?si=XPMkInEkNkc5FHlp',
      thumbnail: 'https://i.ytimg.com/vi/wPrlY1dLIh4/hqdefault.jpg',
      name: '白日夢冒險王 – My Daydream Story ︱Cinematic Vlog B-roll Style'
    },
    {
      src: 'https://www.youtube.com/embed/7aL9na-CKeE?si=x7raRA4nQl97jS32',
      thumbnail: 'https://i.ytimg.com/vi/7aL9na-CKeE/hqdefault.jpg',
      name: '邁向千禧之旅：旱溪媽祖 Pilgrimage to Millennium: Hanxi Mazu'
    },
  ],
  commercial: [
    {
      src: 'https://www.youtube.com/embed/SCGUmyBkVI',
      thumbnail: 'https://i.ytimg.com/vi/SCGUmyBkVI/hqdefault.jpg',
      name: '[封面影片] うなぎ四代目菊かわ鰻魚飯專賣店'
    },
    {
      src: "https://www.youtube.com/embed/nauP8m6Ti3c",
      thumbnail: "https://i.ytimg.com/vi/nauP8m6Ti3c/hqdefault.jpg",
      name: "丸亀製麵 – 素食烏龍麵套餐︱Brand Commercial"
    },
    {
      src: "https://www.youtube.com/embed/WyIuZM760jc",
      thumbnail: "https://i.ytimg.com/vi/WyIuZM760jc/hqdefault.jpg",
      name: "丸亀製麵 – 南蠻雞烏龍麵︱Brand Commercial"
    },
    {
      src: "https://www.youtube.com/embed/XZz7Qu8KJAI",
      thumbnail: "https://i.ytimg.com/vi/XZz7Qu8KJAI/hqdefault.jpg",
      name: "日喬恩生技有限公司 CIAO︱Product Commercial"
    },
    {
      src: 'https://www.youtube.com/embed/sDzJMzdnyxo',
      thumbnail: 'https://i.ytimg.com/vi/sDzJMzdnyxo/hqdefault.jpg',
      name: '907MALL 手工香氛蠟燭',
    },
    {
      src: 'https://www.youtube.com/embed/pkZuyyZzqcA',
      thumbnail: 'https://i.ytimg.com/vi/pkZuyyZzqcA/hqdefault.jpg',
      name: '山陽產業集團－台灣高山茗茶︱商品形象',
    },
    {
      src: 'https://www.youtube.com/embed/N5LKH7Drl3o',
      thumbnail: 'https://i.ytimg.com/vi/N5LKH7Drl3o/hqdefault.jpg',
      name: '山陽產業集團－洗沐系列'
    },
    {
      src: 'https://youtu.be/XZz7Qu8KJAI',
      thumbnail: 'https://i.ytimg.com/vi/XZz7Qu8KJAI/hqdefault.jpg',
      name: '日喬恩生技有限公司 CIAO︱Commercial（未公開）'
    },
    {
      src: 'https://youtu.be/MaocTqJGRQo',
      thumbnail: 'https://i.ytimg.com/vi/MaocTqJGRQo/hqdefault.jpg',
      name: '雪碧酸白菜 Broll（未公開）'
    },
    {
      src: 'https://youtu.be/bCjs8bgCVwo',
      thumbnail: 'https://i.ytimg.com/vi/bCjs8bgCVwo/hqdefault.jpg',
      name: '雪碧酸白菜 Contrast high Sprite and Cabbage（未公開）'
    },
    {
      src: 'https://www.youtube.com/embed/3DkgXTUhX68',
      thumbnail: 'https://i.ytimg.com/vi/3DkgXTUhX68/hqdefault.jpg',
      name: 'Celine Wallet B-Roll︱Celine 短夾包'
    },
    {
      src: 'https://www.youtube.com/embed/oEYeg_1waaM',
      thumbnail: 'https://i.ytimg.com/vi/oEYeg_1waaM/hqdefault.jpg',
      name: 'CENNA Skin Care Product'
    },
    {
      src: 'https://www.youtube.com/embed/Um8inQWoseM',
      thumbnail: 'https://i.ytimg.com/vi/Um8inQWoseM/hqdefault.jpg',
      name: 'Epic Mulled Wine B-Roll︱熱紅酒 B Roll'
    },
    {
      src: 'https://www.youtube.com/embed/yZxvXTtHEA0',
      thumbnail: 'https://i.ytimg.com/vi/yZxvXTtHEA0/hqdefault.jpg',
      name: 'Rum Brownie 萊姆布朗尼'
    },
    {
      src: 'https://www.youtube.com/embed/5Re96bVGj3E',
      thumbnail: 'https://i.ytimg.com/vi/5Re96bVGj3E/hqdefault.jpg',
      name: 'Sony Easy Card B-Roll'
    },
    {
      src: 'https://www.youtube.com/embed/fHX557lcHqk',
      thumbnail: 'https://i.ytimg.com/vi/fHX557lcHqk/hqdefault.jpg',
      name: 'Veriott Wax Perfume'
    },
  ],
  corporate: [
    {
      src: 'https://www.youtube.com/embed/3CLNefYZ3rM',
      thumbnail: 'https://i.ytimg.com/vi/3CLNefYZ3rM/hqdefault.jpg',
      name: '[封面影片] HEBEN 赫本健康精品塑身衣'
    },
    {
      src: 'https://www.youtube.com/embed/rCAPLfcpkAk',
      thumbnail: 'https://i.ytimg.com/vi/rCAPLfcpkAk/hqdefault.jpg',
      name: '蘿琳亞頂級塑身衣︱VIP 服務車'
    },
    {
      src: 'https://www.youtube.com/embed/cbk2ODepY5Q',
      thumbnail: 'https://i.ytimg.com/vi/cbk2ODepY5Q/hqdefault.jpg',
      name: 'MS MingShine 紳士選品店'
    },
    {
      src: 'https://www.youtube.com/embed/743Qy4XbjIk',
      thumbnail: 'https://i.ytimg.com/vi/743Qy4XbjIk/hqdefault.jpg',
      name: 'OurGym Café'
    },
  ],
  crowdfunding: [
    {
      src: 'https://www.youtube.com/embed/VKXito9z9Ao',
      thumbnail: 'https://i.ytimg.com/vi/VKXito9z9Ao/hqdefault.jpg',
      name: '[封面影片] 朋瓦 Ponwaa－洞洞貓大廈｜嘖嘖募資'
    },
    {
      src: 'https://www.youtube.com/embed/oJBkXlqlLJo',
      thumbnail: 'https://i.ytimg.com/vi/oJBkXlqlLJo/hqdefault.jpg',
      name: '12 星座 WOOD 小小兵︱嘖嘖募資'
    },
    {
      src: 'https://www.youtube.com/embed/Y2Plmaqv9B8&t',
      thumbnail: 'https://i.ytimg.com/vi/Y2Plmaqv9B8/hqdefault.jpg',
      name: '木頭方程式 - WOOD小夜燈'
    },
    {
      src: 'https://www.youtube.com/embed/ah4muMcedN4',
      thumbnail: 'https://i.ytimg.com/vi/ah4muMcedN4/hqdefault.jpg',
      name: '嘖嘖 × 好時光 Goodtime－線上課程宣傳影像'
    },
  ],
  event: [
    {
      src: 'https://www.youtube.com/embed/CFKVzPD4IGc',
      thumbnail: 'https://i.ytimg.com/vi/CFKVzPD4IGc/hqdefault.jpg',
      name: '[封面影片] 2023 花蓮 Demo Day - 夢想StartUP！創業蓮起來︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/6bX6McZDdFE',
      thumbnail: 'https://i.ytimg.com/vi/6bX6McZDdFE/hqdefault.jpg',
      name: '2022 花蓮 STARUP！創業市集︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/t9yjGH4R9iw',
      thumbnail: 'https://i.ytimg.com/vi/t9yjGH4R9iw/hqdefault.jpg',
      name: '2023 台北國際電腦展 COMPUTEX TAIPEI 活動精華－AMI︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/EQQAQ8OM6-w',
      thumbnail: 'https://i.ytimg.com/vi/EQQAQ8OM6-w/hqdefault.jpg',
      name: '2023 展昭世界貓咪博覽會 - Ponwaa 朋瓦︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/CIeJw2hOgKU',
      thumbnail: 'https://i.ytimg.com/vi/CIeJw2hOgKU/hqdefault.jpg',
      name: '心輔犬互動教育計畫︱公益紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/LI9Jc2YUpw0',
      thumbnail: 'https://i.ytimg.com/vi/LI9Jc2YUpw0/hqdefault.jpg',
      name: '桃園市政府社會企業委員會_112年第1次會議記錄︱活動記錄'
    },
    {
      src: 'https://www.youtube.com/embed/tAcV3eFUd9I',
      thumbnail: 'https://i.ytimg.com/vi/tAcV3eFUd9I/hqdefault.jpg',
      name: '臺北市北投區桃源國民小學－地下室禮堂彩繪公益活動︱公益紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/vFtYSQ0DUTE',
      thumbnail: 'https://i.ytimg.com/vi/vFtYSQ0DUTE/hqdefault.jpg',
      name: 'BITBAND Revolver Concert (Essential Edition)︱精華版活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/pJMo0eoLOJQ',
      thumbnail: 'https://i.ytimg.com/vi/pJMo0eoLOJQ/hqdefault.jpg',
      name: 'iMin_Computex'
    },
    {
      src: 'https://www.youtube.com/embed/5pG4TzJxc_k',
      thumbnail: 'https://i.ytimg.com/vi/5pG4TzJxc_k/hqdefault.jpg',
      name: 'KOL我就是品牌'
    },
  ],
  interview: [
    {
      src: 'https://www.youtube.com/embed/oy_DYhkunEQ',
      thumbnail: 'https://i.ytimg.com/vi/oy_DYhkunEQ/hqdefault.jpg',
      name: '[封面影片] iMin Technology Launch Event'
    },
    {
      src: 'https://www.youtube.com/embed/dOBzWS9iQr4',
      thumbnail: 'https://i.ytimg.com/vi/dOBzWS9iQr4/hqdefault.jpg',
      name: '【未來地球：綠色希望】桃園市政府社會企業中心－平鎮館推廣活動精華︱活動紀錄'
    },
    {
      src: 'https://www.youtube.com/embed/uw_RIemF_6I',
      thumbnail: 'https://i.ytimg.com/vi/uw_RIemF_6I/hqdefault.jpg',
      name: '山霧陶瓷香氛機 – 街頭突襲'
    },
    {
      src: 'https://www.youtube.com/embed/Y_n_Jy6RbwA',
      thumbnail: 'https://i.ytimg.com/vi/Y_n_Jy6RbwA/hqdefault.jpg',
      name: '山霧陶瓷香氛機Ｘ林立青'
    },
    {
      src: 'https://www.youtube.com/embed/TwoGz5ouqA0',
      thumbnail: 'https://i.ytimg.com/vi/TwoGz5ouqA0/hqdefault.jpg',
      name: '匠師傳奇－王武雄︱The Ceramic Appliqué Legend'
    },
  ],
  story_creative: [
    {
      src: 'https://www.youtube.com/embed/xSmjzh-RZt4',
      thumbnail: 'https://i.ytimg.com/vi/xSmjzh-RZt4/hqdefault.jpg',
      name: 'DONKEY Lucky Cat 招財貓'
    },
    {
      src: 'https://www.youtube.com/embed/C2tkE1ur22s',
      thumbnail: 'https://i.ytimg.com/vi/C2tkE1ur22s/hqdefault.jpg',
      name: '員林百年仙草'
    },
    {
      src: 'https://www.youtube.com/embed/EuI0ptvWD1w',
      thumbnail: 'https://i.ytimg.com/vi/EuI0ptvWD1w/hqdefault.jpg',
      name: '御木軒冰室'
    },
    {
      src: 'https://www.youtube.com/embed/8FMQdogEiM4',
      thumbnail: 'https://i.ytimg.com/vi/8FMQdogEiM4/hqdefault.jpg',
      name: '菓實日'
    },
  ],
  story_concept: [
    {
      src: "https://www.youtube.com/embed/TMxYSt0R-LA",
      thumbnail: "https://i.ytimg.com/vi/TMxYSt0R-LA/hqdefault.jpg",
      name: "CENNA Skin Care Product︱Commercial Video"
    },
    {
      src: 'https://www.youtube.com/embed/wGQpvtGT3Bc',
      thumbnail: 'https://i.ytimg.com/vi/wGQpvtGT3Bc/hqdefault.jpg',
      name: '施華洛斯奇 Swarovski'
    },
    {
      src: 'https://www.youtube.com/embed/uN3WqqMvHrU',
      thumbnail: 'https://i.ytimg.com/vi/uN3WqqMvHrU/hqdefault.jpg',
      name: 'RAW'
    },
    {
      src: 'https://www.youtube.com/embed/0HvTMStZQto',
      thumbnail: 'https://i.ytimg.com/vi/0HvTMStZQto/hqdefault.jpg',
      name: '藏壽司'
    }
  ],
  story_unique: [
    {
      src: "https://www.youtube.com/embed/Nhey41az4gM",
      thumbnail: "https://i.ytimg.com/vi/Nhey41az4gM/hqdefault.jpg",
      name: "Watch Lab by DXM 腕錶木質收藏盒_Integrate︱Product Commercial"
    },
    {
      src: "https://www.youtube.com/embed/mYZsi1ypkGQ",
      thumbnail: "https://i.ytimg.com/vi/mYZsi1ypkGQ/hqdefault.jpg",
      name: "Watch Lab by DXM 腕錶木質收藏盒_Corporate︱Product Commercial"
    },
    {
      src: "https://youtube.com/embed/jgh_XwuFMLQ?",
      thumbnail: "https://i.ytimg.com/vi/jgh_XwuFMLQ/hqdefault.jpg",
      name: "SUNSENSE SALON 美容保養｜Brand Commercial"
    },
    {
      src: 'https://www.youtube.com/embed/dL1-ED9fovY',
      thumbnail: 'https://i.ytimg.com/vi/dL1-ED9fovY/hqdefault.jpg',
      name: '可口可樂 Coca Cola'
    },
    {
      src: 'https://www.youtube.com/embed/eKhO1XfMmyI',
      thumbnail: 'https://i.ytimg.com/vi/eKhO1XfMmyI/hqdefault.jpg',
      name: '屏東．形 Shapes of Pingtung'
    },
    {
      src: 'https://www.youtube.com/embed/oEYeg_1waaM',
      thumbnail: 'https://i.ytimg.com/vi/oEYeg_1waaM/hqdefault.jpg',
      name: 'CENNA Skin Care'
    },
    {
      src: 'https://www.youtube.com/embed/cbk2ODepY5Q',
      thumbnail: 'https://i.ytimg.com/vi/cbk2ODepY5Q/hqdefault.jpg',
      name: 'MS MingShine 紳士選品店'
    },
    {
      src: 'https://www.youtube.com/embed/Um8inQWoseM',
      thumbnail: 'https://i.ytimg.com/vi/Um8inQWoseM/hqdefault.jpg',
      name: 'Mulled Wine B Roll︱熱紅酒 B Roll'
    },
    {
      src: 'https://www.youtube.com/embed/743Qy4XbjIk',
      thumbnail: 'https://i.ytimg.com/vi/743Qy4XbjIk/hqdefault.jpg',
      name: 'OurGym Café'
    },
  ]
}
