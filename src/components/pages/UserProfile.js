// UserProfile.js
import React, { useEffect, useState } from 'react';
import { useAuth } from './../AuthContext';
import SpotifyAuth from './../SpotifyAuth';

const SPOTIFY_PROFILE_URL = 'https://api.spotify.com/v1/me';

export default function UserProfile() {
    const { accessToken } = useAuth();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        if (accessToken) {
            fetchUserProfile();
        }
    }, [accessToken]);

    const fetchUserProfile = async () => {
        const response = await fetch(SPOTIFY_PROFILE_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const data = await response.json();
        setUserProfile(data);
    };

    return (
        <div>
            {userProfile ? (
                <div>
                    <h2>{userProfile.display_name}'s Profile</h2>
                    <img src={userProfile.images[0]?.url} alt="Profile" width={150} />
                    <p>Followers: {userProfile.followers.total}</p>
                    <p>Country: {userProfile.country}</p>
                </div>
            ) : (
                <SpotifyAuth />
            )}
        </div>
    );
}