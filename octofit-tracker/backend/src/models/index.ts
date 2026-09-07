import mongoose, { type InferSchemaType } from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  name: { type: String, required: true, trim: true },
  avatar: { type: String, default: '' },
}, { timestamps: true });

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  memberUsernames: { type: [String], default: [] },
}, { timestamps: true });

const activitySchema = new mongoose.Schema({
  username: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  calories: { type: Number, required: true, min: 0 },
  completedAt: { type: Date, required: true },
}, { timestamps: true });

const leaderboardSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  points: { type: Number, required: true, min: 0 },
  workoutsCompleted: { type: Number, required: true, min: 0 },
  rank: { type: Number, required: true, min: 1 },
}, { timestamps: true });

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  exercises: { type: [String], default: [] },
}, { timestamps: true });

export type User = InferSchemaType<typeof userSchema>;
export type Team = InferSchemaType<typeof teamSchema>;
export type Activity = InferSchemaType<typeof activitySchema>;
export type LeaderboardEntry = InferSchemaType<typeof leaderboardSchema>;
export type Workout = InferSchemaType<typeof workoutSchema>;

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export const TeamModel = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const ActivityModel = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const LeaderboardModel = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
export const WorkoutModel = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);