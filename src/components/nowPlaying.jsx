import { useEffect, useState } from 'react';

export default function SpotifyNowPlaying() {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch('/api/retrieveNowPlaying')
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch now playing:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!result || !result.isPlaying) {
        return (
            <div>
                <p>Currently Offline</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Now Playing</h2>
            <img src={result.albumImageUrl} alt={`${result.title} album art`} />
            <p>{result.title}</p>
            <p>{result.artist}</p>
            <a href={result.songUrl} target="_blank">Open in Spotify</a>
        </div>
    );
}
