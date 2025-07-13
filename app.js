import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import challengesRoute from './routes/challenges.js'
import submissionsRoute from './routes/submissions.js'


const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use('/challenges', challengesRoute)
app.use('/submissions', submissionsRoute)

// ASCII Art on start
console.log(`
╗ ██████╗ ██╗ ██████╗  ██████╗ ██╗     ███████╗
██╔════╝ ╗██║██╔════╝  ██╔════╝ ██║     ██╔════╝
██║  ███╗╝██║██║  ███╗ ██║  ███╗██║     █████╗  
██║   ██║ ██║██║   ██║ ██║   ██║██║     ██╔══╝  
╚██████╔╝ ██║╚██████╔╝╚██████╔╝███████╗███████╗
╚═════╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
Server started on http://localhost:${PORT}
`)

app.listen(PORT)
