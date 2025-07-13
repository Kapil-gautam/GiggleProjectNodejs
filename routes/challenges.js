import express from 'express'
const router = express.Router()

const dummyChallenges = [
  {
    id: 1,
    title: '30-Second Dance Battle',
    videoUrl: 'https://cdn.giggleapp.com/videos/dance-battle.mp4',
    stickers: ['💃', '🔥', '🎵']
  },
  {
    id: 2,
    title: 'Chef in 60 Seconds',
    videoUrl: 'https://cdn.giggleapp.com/videos/quick-cook.mp4',
    stickers: ['🍳', '🥘', '🤌']
  },
  {
    id: 3,
    title: 'Pet’s Hidden Talent',
    videoUrl: 'https://cdn.giggleapp.com/videos/pet-talent.mp4',
    stickers: ['🐶', '🐾', '😻']
  },
  {
    id: 4,
    title: 'Make Me Laugh Challenge',
    videoUrl: 'https://cdn.giggleapp.com/videos/comedy-reel.mp4',
    stickers: ['😂', '🤣', '🎭']
  },
  {
    id: 5,
    title: 'Travel in 15 Seconds',
    videoUrl: 'https://cdn.giggleapp.com/videos/travel-diary.mp4',
    stickers: ['🌍', '✈️', '📸']
  }
]


router.get('/', (req, res) => {
  res.json(dummyChallenges)
})

export default router
