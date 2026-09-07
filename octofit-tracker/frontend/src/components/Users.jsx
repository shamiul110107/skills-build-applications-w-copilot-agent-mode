import CollectionState from './CollectionState.jsx'
import useCollection from './useCollection.jsx'

export default function Users() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/'
  const collection = useCollection(endpoint)
  return <CollectionState title="Athletes" emptyMessage="No athletes registered yet." {...collection}>
    <div className="row g-3">{collection.items.map((user) => <div className="col-md-6 col-lg-4" key={user._id || user.username}><article className="info-card"><div className="avatar">{user.name?.charAt(0) || '?'}</div><h2>{user.name}</h2><p>@{user.username}</p><span>{user.email}</span></article></div>)}</div>
  </CollectionState>
}