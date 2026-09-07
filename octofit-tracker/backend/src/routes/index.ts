import { Router } from 'express';
import { ActivityModel, LeaderboardModel, TeamModel, UserModel, WorkoutModel } from '../models/index.js';

function collectionRoutes(model: { find: Function; create: Function }) {
  const router = Router();
  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find());
    } catch (error) {
      next(error);
    }
  });
  router.post('/', async (request, response, next) => {
    try {
      response.status(201).json(await model.create(request.body));
    } catch (error) {
      next(error);
    }
  });
  return router;
}

export const userRoutes = collectionRoutes(UserModel);
export const teamRoutes = collectionRoutes(TeamModel);
export const activityRoutes = collectionRoutes(ActivityModel);
export const workoutRoutes = collectionRoutes(WorkoutModel);

export const leaderboardRoutes = Router();
leaderboardRoutes.get('/', async (_request, response, next) => {
  try {
    response.json(await LeaderboardModel.find().sort({ points: -1 }));
  } catch (error) {
    next(error);
  }
});
leaderboardRoutes.post('/', async (request, response, next) => {
  try {
    response.status(201).json(await LeaderboardModel.create(request.body));
  } catch (error) {
    next(error);
  }
});