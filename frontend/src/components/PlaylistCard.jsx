export default function PlaylistCard({ playlist }) {
  const songCount = playlist.songs?.length ?? 0

  return (
    <article className="playlist-card">
      <div className="playlist-card-icon" aria-hidden>♫</div>
      <div className="playlist-card-content">
        <h3 className="playlist-card-title">{playlist.name}</h3>
        <p className="playlist-card-meta">
          {songCount} {songCount === 1 ? 'song' : 'songs'}
          {playlist.description && ` · ${playlist.description}`}
        </p>
      </div>
    </article>
  )
}
