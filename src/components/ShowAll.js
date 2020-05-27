import React from 'react';
import { useParams } from "react-router-dom";
import useFetchFromAPI from '../hooks/UseFetchFromAPI';
import CardSection from "./CardSection"

const ShowAll = () => {
  const params = useParams();

  const urlSearch = params.genres === "trending" ?
    `https://api.themoviedb.org/3/${params.genres}/${params.media}/week?api_key=f15ba837f67c60dc9c2c9154ce892db4&page=${params.pageNumber}`
    :
    `https://api.themoviedb.org/3/${params.media}/${params.genres}?api_key=f15ba837f67c60dc9c2c9154ce892db4&page=${params.pageNumber}`;

  const data = useFetchFromAPI(urlSearch);

  const titleMedia = params.media === 'movie' ? "Movies" : "Tv Shows"

  let titleCategory = '';
  switch (params.genres) {
    case "popular":
      titleCategory = 'Popular';
      break;
    case "trending":
      titleCategory = 'Trending';
      break;
    case "top_rated":
      titleCategory = 'Top Rated';
      break;
    case "upcoming":
      titleCategory = 'Upcoming';
      break;
    case "now_playing":
      titleCategory = 'Now Playing';
      break;
    case "on_the_air":
      titleCategory = 'Currently Airing';
      break;
    case "airing_today":
      titleCategory = 'Airing Today';
      break;
    default:
      break;
  }

  console.log(params);
  console.log(data);

  return (
    <>{data &&
      <CardSection
        info={data.results}
        titleall={`${titleCategory} ${titleMedia}`}
        cardnumber={20}
        media={params.media}
      ></CardSection>
    }

    </>
  );
}

export default ShowAll;