import { useEffect, useState } from 'react';
import 's/components/css/SpotifyNowPlaying.css'

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
        return (
            <div className='overall'>
                <div className='spacer'>
                    <div className='inline-block'>
                        <p className='title'>Loading</p>
                    </div>
                    <img className='inline-block album-cover' src='/shared/placeholder.png'/>
                </div>
                
            </div>
        );
    }

    if (!result || !result.isPlaying) {
        return (
            <div className='overall'>
                <div className='spacer'>
                    <div className='inline-block'>
                        <p className='title'>Currently Offline</p>
                    </div>
                    <img className='inline-block album-cover' src='/shared/placeholder.png'/>
                </div>
                
            </div>
        );
    }

    return (
            <div className='overall'>
                <div className='spacer'>
                    <div className='inline-block'>
                        <p className='title'>{result.title}</p>
                        <p className='artist'>{result.artist}</p>
                    </div>
                    <img className='inline-block album-cover' src={result.albumImageUrl}/>
                </div>
                
            </div>
        /*
        <div className='overall'>
            <h2>Now Playing</h2>
            <img className='album-cover' src={result.albumImageUrl} alt={`${result.title} album art`} />
            <p>{result.title}</p>
            <p>{result.artist}</p>
            <a href={result.songUrl} target="_blank">Open in Spotify</a>
        </div>
        */
    );
}
