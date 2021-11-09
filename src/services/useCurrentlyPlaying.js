import { useEffect, useState } from "react";
import querystring from 'querystring'

export default function useCurrentlyPlaying() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // defaults
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token
      })
    });
  
    return response.json();
  };

  useEffect(() => {
    let didCancel = false;
    async function fetchNowPlaying() {
      const { access_token } = await getAccessToken();
      setLoading(true);
      fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(res => {
        if (res.status === 204 || res.status > 400) {
          return { is_playing: false };
        } else {
          return res.json()
        }
      })
      .then(data => {
        if (!didCancel) {
          setData(data)
          setLoading(false)
        }
      })
      .catch(err => {setError(err); setLoading(false)})
    }

    fetchNowPlaying()

    return () => { didCancel = true }
  }, []);


  return { data, error, loading }
}