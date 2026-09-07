import CollectionState from './CollectionState.jsx'
import useCollection from './useCollection.jsx'

export default function Activities() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/'
  const collection = useCollection(endpoint)
  return <CollectionState title="Activities" emptyMessage="No activities logged yet." {...collection}>
    <div className="table-responsive data-table-wrap"><table className="table align-middle data-table"><thead><tr><th>Athlete</th><th>Activity</th><th>Duration</th><th>Calories</th><th>Completed</th></tr></thead><tbody>{collection.items.map((activity) => <tr key={activity._id || `${activity.username}-${activity.completedAt}`}><td>{activity.username}</td><td>{activity.type}</td><td>{activity.durationMinutes} min</td><td>{activity.calories}</td><td>{new Date(activity.completedAt).toLocaleDateString()}</td></tr>)}</tbody></table></div>
  </CollectionState>
}