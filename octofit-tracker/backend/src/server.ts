import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectDatabase } from './config/database.js';
import { activityRoutes, leaderboardRoutes, teamRoutes, userRoutes, workoutRoutes } from './routes/index.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/workouts', workoutRoutes);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

connectDatabase()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      const codespaceName = process.env.CODESPACE_NAME;
      const apiUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
      console.log(`OctoFit Tracker API listening at ${apiUrl}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to octofit_db:', error);
    process.exit(1);
  });
