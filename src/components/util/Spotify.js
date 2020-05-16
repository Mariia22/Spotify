import SearchBar from "../SearchBar/SearchBar";

let userKey;
const redirectId = 'http://localhost:3000/';
const clientId = '065c83d7dcbd46b8885c5515aaaee748';
const Spotify = {
    getAccessToken() {
        if (userKey) {
            return userKey;
        }
        let userKeyMatch = window.location.href.match(/access_token=([^&]*)/);
        let expiresInTimeMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (userKeyMatch && expiresInTimeMatch) {
            userKey = userKeyMatch[1];
            let expiresIn = (Number.expiresInTimeMatch[1]);
            window.setTimeout(() => userKey = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return userKey;
        } else {
            let accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}
            &response_type=token&scope=playlist-modify-public&redirect_uri=${redirectId}`;

        }
    }

};

search(term){
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    }).
        then(response => { return response.json() }).
        then(jsonResponse => {
            return jsonResponse.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            })
        })

}
export default Spotify;