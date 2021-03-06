import { useCallback } from "react";
import querystring from "querystring";
import useSWR from "swr";

export default function useLastPlayed() {
  // defaults
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=50`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const getAccessToken = useCallback(async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
        scope: "user-read-recently-played",
      }),
    });

    return response.json();
  }, [TOKEN_ENDPOINT, basic, refresh_token]);

  const { data, error } = useSWR(
    "last-played",
    async () => {
      const { access_token } = await getAccessToken();
      const response = await fetch(LAST_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      return await response.json();
    },
    {
      refreshInterval: 5000,
    }
  );

  return { data, error, loading: !data };
}
