# Giggle Challenge Submission Backend

This is a lightweight Node.js + Express backend that simulates a challenge submission workflow like in the Giggle app.

---

## 📦 Tech Stack

- Node.js
- Express.js
- Body-parser
- Multer (optional)
- File storage in local JSON

---

## 📂 Project Structure

giggle-project/
│
├── routes/
│ ├── challenges.js
│ └── submissions.js
│
├── data/
│ └── submissions.json
│
├── utils/
│ └── moderation.js
│
├── app.js
├── package.json
└── README.md


---

## 🚀 How to Run

1. Clone or download the repo
2. Run `npm install`
3. Start the server: `node app.js`
4. Visit: `http://localhost:3000/challenges`

---

## Feature Completed

1. Returns 5 dummy challenges with realistic data
2. Validates & stores a submission (JSON-based, no DB)
3. Shows all submissions, randomly updates moderation status
4. Simulates previewing a video
5. 1-second delay added before processing submissions
6. Submissions saved in data/submissions.json
7. Shows "GIGGLE" banner on server start

---

## 🧪 API Endpoints (Test with Postman)

| Method | Route                        | Description                                |
|--------|------------------------------|--------------------------------------------|
| GET    | /challenges                  | Get 5 dummy challenges                     |
| POST   | /submissions                 | Submit a video (via JSON payload)          |
| POST   | /submissions/preview         | Simulate previewing the video              |
| GET    | /submissions                 | View all submitted entries                 |

---

## Assumptions

1. Video field is accepted as a string (e.g., filename or URL), not an actual file
2. The moderation status is randomly assigned on every fetch of /submissions.
3. Assumed local storage using a data/submissions.json file




