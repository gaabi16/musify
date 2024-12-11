import React, { useState, useEffect } from "react";

const DataFetcher = ({ type, id, renderData }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clientId = "7aec7613dd6840dab4de83e43e5665e6";
  const clientSecret = "cd861cec74034e89a9b271b0079cad69";

  const getAccessToken = async () => {
    const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${encodedCredentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();

    if (data.access_token) {
      return data.access_token;
    } else {
      console.error("Error fetching access token", data);
      setError("Error fetching access token");
      return null;
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const accessToken = await getAccessToken();
      if (!accessToken) return;

      let url = "";
      if (type === "artists") {
        url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`; 
      } else if (type === "playlists") {
        url = `https://api.spotify.com/v1/playlists/${id}`;  
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("success");
        setData(data);
      } else {
        setError(`Error fetching ${type}: ${data.error.message}`);
        console.log("failure");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, id]);

  return renderData({ data, isLoading, error });
};

export default DataFetcher;
