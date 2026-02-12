export default function TopSongListItem({ song, rank }) {
  function formatDuration(seconds) {
    if (!seconds) return '--'
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  function formatPlaycount(playcount) {
    if (!playcount) return '--'
    if (playcount < 1000000) {
      return `${(playcount / 1000).toFixed(1)}K`
    }
    return `${(playcount / 1000000).toFixed(1)}M`
  }

  return (
    <li className="song-item">
      <span className="song-rank">{rank}</span>
      <div className="song-artist-thumb">
        {song.artist?.image ? (
          <img src={song.artist.image} alt="" className="song-artist-image" />
        ) : (
          <span className="song-artist-placeholder" aria-hidden>♫</span>
        )}
      </div>
      <div className="song-info">
        <span className="song-title">{song.title}</span>
        <span className="song-artist">{song.artist?.name ?? '—'}</span>
      </div>
      <span className="song-meta song-duration">{formatDuration(song.durationSeconds)}</span>
      <span className="song-meta song-playcount">{formatPlaycount(song.playcount)}</span>
    </li>
  )
}