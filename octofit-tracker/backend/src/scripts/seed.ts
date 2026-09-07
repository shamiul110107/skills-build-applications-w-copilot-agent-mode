import mongoose from 'mongoose';
import { ActivityModel, LeaderboardModel, TeamModel, UserModel, WorkoutModel } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}), TeamModel.deleteMany({}), ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}), WorkoutModel.deleteMany({}),
    ]);
    await UserModel.insertMany([
      { username: 'maya', email: 'maya@example.com', name: 'Maya Chen', avatar: 'MC' },
      { username: 'jordan', email: 'jordan@example.com', name: 'Jordan Ellis', avatar: 'JE' },
      { username: 'riley', email: 'riley@example.com', name: 'Riley Morgan', avatar: 'RM' },
    ]);
    await TeamModel.insertMany([
      { name: 'Summit Seekers', description: 'Climb higher together.', memberUsernames: ['maya', 'jordan'] },
      { name: 'Daily Motion', description: 'Small steps, every day.', memberUsernames: ['riley'] },
    ]);
    await ActivityModel.insertMany([
      { username: 'maya', type: 'Run', durationMinutes: 32, calories: 310, completedAt: new Date('2026-09-05') },
      { username: 'jordan', type: 'Strength', durationMinutes: 45, calories: 280, completedAt: new Date('2026-09-06') },
      { username: 'riley', type: 'Cycling', durationMinutes: 55, calories: 420, completedAt: new Date('2026-09-06') },
    ]);
    await LeaderboardModel.insertMany([
      { username: 'maya', points: 980, workoutsCompleted: 18, rank: 1 },
      { username: 'riley', points: 860, workoutsCompleted: 16, rank: 2 },
      { username: 'jordan', points: 740, workoutsCompleted: 14, rank: 3 },
    ]);
    await WorkoutModel.insertMany([
      { title: 'Core Reset', category: 'Core', difficulty: 'beginner', durationMinutes: 20, exercises: ['Plank', 'Dead bug', 'Bird dog'] },
      { title: 'Power Circuit', category: 'Full body', difficulty: 'intermediate', durationMinutes: 35, exercises: ['Squat', 'Push-up', 'Mountain climber'] },
      { title: 'Endurance Builder', category: 'Cardio', difficulty: 'advanced', durationMinutes: 40, exercises: ['Burpee', 'High knees', 'Lunge jump'] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
