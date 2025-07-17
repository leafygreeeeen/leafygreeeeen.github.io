export default async function handler(req, res) {
    //fetching and converting necessary info
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    //requesting for access token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });
    const { access_token } = await tokenResponse.json();

    //requesting for now playing info
    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    //check if playing
    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    //unpacking and formating necessary info from song info
    const song = await nowPlayingResponse.json();
    
    const albumImageUrl = song.item.album.images[0].url;  //photo
    const artist = song.item.artists.map((_artist) => _artist.name).join(', '); //artists
    const isPlaying = song.is_playing; //isplaying
    const songUrl = song.item.external_urls.spotify;  //song link
    const title = song.item.name;  //title

    //package and return above info
    return res.status(200).json({
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
}
