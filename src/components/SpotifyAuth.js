// SpotifyAuth.js
import React, { useEffect } from 'react';
import { generateCodeVerifier, generateCodeChallenge } from './pkceUtils';
import { useAuth } from './AuthContext';

const CLIENT_ID = '48ef35fb800844c3ac170bc67ebedf8a';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SPOTIFY_AUTH_URL = new URL('https://accounts.spotify.com/authorize');
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

export default function SpotifyAuth() {
    const { accessToken, setAccessToken } = useAuth();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        const codeVerifier = localStorage.getItem('code_verifier');

        if (code && codeVerifier) {
            getAccessToken(code, codeVerifier);
        }
    }, []);

    const redirectToSpotifyAuth = () => {
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = generateCodeChallenge(codeVerifier);
        localStorage.setItem('code_verifier', codeVerifier);

        const scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

        const params =  {
            response_type: 'code',
            client_id: CLIENT_ID,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: REDIRECT_URI,
          }
          
          SPOTIFY_AUTH_URL.search = new URLSearchParams(params).toString();
          window.location.href = SPOTIFY_AUTH_URL.toString();
    };

    const getAccessToken = async (code, codeVerifier) => {
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            code_verifier: codeVerifier,
        });

        const response = await fetch(SPOTIFY_TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        });

        const data = await response.json();
        if (data.access_token) {
            setAccessToken(data.access_token);
        }
    };

    return (
        <div>
            <button onClick={redirectToSpotifyAuth}>Login with Spotify</button>
        </div>
    );
}