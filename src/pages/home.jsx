import SpotifyNowPlaying from 's/components/nowPlaying';

export default function home(){
    return(
        <div>
            <h1>Hello World</h1>
            <p>Hi! I'm Kegan. Decided i wanted a portfolio website. so here we are. 
            Everything here is more or less self taught, so it's a little rough
            Hopefully by the time you see this it's a lot more complete and polished</p>

            
            <div style={{ padding: '2rem' }}>
                <SpotifyNowPlaying />
            </div>
        </div>
    )
}