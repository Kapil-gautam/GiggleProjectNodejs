import express from 'express'
import fs from 'fs'
import path from 'path'
import { getRandomStatus } from '../utils/moderation.js'
import { fileURLToPath } from 'url'

const router = express.Router()
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const DATA_FILE = path.join(dirname, '../data/submissions.json')

const readSubmissions = () => {
  if (!fs.existsSync(DATA_FILE)) return []
  return JSON.parse(fs.readFileSync(DATA_FILE))
}

const saveSubmissions = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

// Delay Middleware
const delayMiddleware = (req, res, next) => {
  setTimeout(() => next(), 1000)
}

// Returns all submissions with updated moderation status
router.get('/', (req, res) => {
  try {
    let submissions = readSubmissions()

    // Simulate moderation status change
    submissions = submissions.map(sub => ({
      ...sub,
      status: sub.status === 'pending' ? getRandomStatus() : sub.status
    }))

    saveSubmissions(submissions)
    res.json(submissions)
  } catch (err) {
    console.error('Error in GET /submissions:', err)
    res.status(500).json({ error: 'Failed to read submissions' })
  }
})


router.post('/', delayMiddleware, (req, res) => {
  try {
    console.log('POST /submissions received:', req.body)

    const { video, stickers, challengeId, duration } = req.body

    if (!video || !duration || duration > 15) {
      return res.status(400).json({ error: 'Video missing or duration > 15s' })
    }

    const newSubmission = {
      id: Date.now(),
      video,
      stickers,
      challengeId,
      duration,
      status: 'pending'
    }

    const submissions = readSubmissions()
    submissions.push(newSubmission)
    saveSubmissions(submissions)

    res.json({ message: 'Submission pending review by moderator' })
  } catch (err) {
    console.error('Error in POST /submissions:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/preview', (req, res) => {
  const { video } = req.body
  if (!video) return res.status(400).json({ error: 'Missing video' })
  res.json({ message: `Previewing video: ${video}` })
})

export default router
