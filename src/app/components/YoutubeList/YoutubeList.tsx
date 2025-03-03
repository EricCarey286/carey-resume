"use client"
import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Slider from "../Slider/Slider";
const PLAYLIST_ID = "PLMvVU3l5gyKWcAGstohdAaMC6dPUttMIb";

const YoutubeList = () => {
  const [data, setData] = useState<{ error?: boolean; items?: any[] }>({ error: false, items: [] });
  const [apiKey, setApiKey] = useState<string>("");

  useEffect(() => {
    // Directly assign the environment variable
    const key = process.env.YOUTUBE_API_KEY;
    if (key) {
      setApiKey(key);
    } else {
      console.error("Error: API key is missing in .env file");
      setData({ error: true });
    }
  }, []);

  useEffect(() => {
    if (!apiKey) return; // Ensure API key exists before making the request

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${apiKey}`
        );
        const result = await response.json();

        if (result.error) {
          setData({ error: true });
        } else {
          setData({ items: result.items || [] });
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setData({ error: true });
      }
    };

    fetchVideos();
  }, [apiKey]); // ✅ `apiKey` is correctly used in `useEffect`

  return (
    <Section title="Youtube Top 10 of the Week" heading="Youtube Top 10 of the Week" id="youtube">
      <p>Slide through to see my favorite YouTube videos of the week! Courtesy of the YouTube API v3</p>

      {data.error ? (
        <p>There was an error fetching the videos</p>
      ) : (
        <Slider>
          {data.items?.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <li key={id} className="slider-li">
                <a href={`https://www.youtube.com/watch?v=${resourceId?.videoId}`} target="_blank" rel="noopener noreferrer">
                  <p>
                    <img className="slider-img" src={medium?.url} alt={title} />
                  </p>
                  <h3 className="slider-title">{title}</h3>
                </a>
              </li>
            );
          })}
        </Slider>
      )}
    </Section>
  );
};

export default YoutubeList;