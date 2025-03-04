"use client"
import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import { YoutubeListProps } from "../../types";

const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export const config = {
  fetchCache: "force-no-store",
};

const YoutubeList: React.FC<YoutubeListProps> = ({ apiKey }) => {
  console.log('apiKey = ' + apiKey);
  const [data, setData] = useState({
    items: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_PLAYLIST_API}?part=snippet&maxResults=10&playlistId=PLMvVU3l5gyKWcAGstohdAaMC6dPUttMIb&key=${apiKey}&timestamp=${new Date().getTime()}`,
        {
          cache: "no-cache", //no chache to keep playlist real time
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section
      title="Youtube Top 10 of the Week"
      heading="Youtube Top 10 of the Week"
      id="youtube"
    >
      <p>
        Slide through to see my favorite youtube videos of the week! Courtsey of
        the YouTube API v3
      </p>
      {
        loading &&
          <div>Loading...</div>
      }
      {error &&
          <div>There was an error loading the videos. Please check back later!</div>
      }
      <Slider>
        {data.items.map((item: any) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li key={id} className="slider-li">
              <a
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                target="_blank"
              >
                <p>
                  <img className="slider-img" src={medium.url} alt={title} />
                </p>
                <h3 className="slider-title">{title}</h3>
              </a>
            </li>
          );
        })}
      </Slider>
    </Section>
  );
}

export default YoutubeList;