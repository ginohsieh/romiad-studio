import { useMemo } from 'react'

export default function useLightboxPlaylists(type) {
  const playlist = useMemo(() => lightboxPlaylist[type] || [], [type])
  return playlist
}


const lightboxPlaylist = {
  city_marketing: 'https://www.youtube.com/embed/videoseries?si=lc03SdlNiYb2kzDW&amp;list=PLOhJcywZEKY3YcdlrLOXv34B8Ne60jAyj',
  crowdfunding: '',
  event: '',
  interview: '',
  story_creative: 'https://www.youtube.com/embed/videoseries?si=MI2ID_LZxbQ52a2A&amp;list=PLOhJcywZEKY0abrP6U0WSmh2iS6BSCJFj',
  story_concept: 'https://www.youtube.com/embed/videoseries?si=H7nLOtQRxTfWTO8a&amp;list=PLOhJcywZEKY3L9YVrp3jicDr3o0MQHifb',
  story_unique: '',
}
