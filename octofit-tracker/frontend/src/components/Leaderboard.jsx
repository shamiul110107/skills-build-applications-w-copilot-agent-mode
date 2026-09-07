import CollectionState from './CollectionState.jsx'
import useCollection from './useCollection.jsx'

export default function Leaderboard() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/'
  const collection = useCollection(endpoint)
  return <CollectionState title="Leaderboard" emptyMessage="The leaderboard is waiting for its first scores." {...collection}>
    <div className="leaderboard-list">{collection.items.map((entry, index) => <article className="leaderboard-row" key={entry._id || entry.username}><span className="rank">{entry.rank || index + 1}</span><strong>{entry.username}</strong><span>{entry.workoutsCompleted} workouts</span><b>{entry.points} pts</b></article>)}</div>
  </CollectionState>
}