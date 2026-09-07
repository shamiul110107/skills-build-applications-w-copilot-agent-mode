export default function CollectionState({ title, loading, error, items, emptyMessage, children }) {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>{title}</h1>
        </div>
        <span className="record-count">{items.length} records</span>
      </div>
      {loading && <div className="status-message">Loading your data...</div>}
      {error && <div className="alert alert-warning" role="alert">{error}</div>}
      {!loading && !error && items.length === 0 && <div className="status-message">{emptyMessage}</div>}
      {!loading && !error && items.length > 0 && children}
    </section>
  )
}