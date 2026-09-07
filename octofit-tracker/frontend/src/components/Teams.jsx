import CollectionState from './CollectionState.jsx'
import useCollection from './useCollection.jsx'

export default function Teams() {
  const collection = useCollection('teams')
  return <CollectionState title="Teams" emptyMessage="No teams have been created yet." {...collection}>
    <div className="row g-3">{collection.items.map((team) => <div className="col-md-6" key={team._id || team.name}><article className="info-card"><h2>{team.name}</h2><p>{team.description || 'Ready for a new challenge.'}</p><span>{team.memberUsernames?.length || 0} members</span></article></div>)}</div>
  </CollectionState>
}