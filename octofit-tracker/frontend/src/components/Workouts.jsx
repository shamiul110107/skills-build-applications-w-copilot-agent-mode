import CollectionState from './CollectionState.jsx'
import useCollection from './useCollection.jsx'

export default function Workouts() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/'
  const collection = useCollection(endpoint)
  return <CollectionState title="Workouts" emptyMessage="No workouts are available yet." {...collection}>
    <div className="row g-3">{collection.items.map((workout) => <div className="col-md-6" key={workout._id || workout.title}><article className="info-card"><div className="d-flex justify-content-between gap-2"><h2>{workout.title}</h2><span className="tag">{workout.difficulty}</span></div><p>{workout.category} / {workout.durationMinutes} min</p><ul>{workout.exercises?.map((exercise) => <li key={exercise}>{exercise}</li>)}</ul></article></div>)}</div>
  </CollectionState>
}