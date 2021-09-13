import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';

import MoviesGallery from '../components/MoviesGallery/MoviesGallery';

import api from '../utils/ApiServices';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [hasMorePage, setHasMorePage] = useState(true);

  useEffect(() => {
    api.resetPage();
    getTrendingMovies();
  }, []);

  function getTrendingMovies() {
    if (api.currentPage > api.allPages) {
      alert(`There are no pages left`);
      setHasMorePage(false);
      return;
    }

    api
      .fetchTrendingMovies()
      .then(({ total_pages, results }) => {
        api.increasePage();
        api.setAllPages(total_pages);
        setMovies(prev => [...prev, ...results]);
      })
      .catch(({ message }) => console.log(message));
  }

  return (
    <>
      <InfiniteScroll
        className="InfiniteScroll"
        dataLength={movies.length}
        next={getTrendingMovies}
        hasMore={hasMorePage}
        loader={<LoaderSpinner />}
      >
        {!!movies.length && <MoviesGallery MoviesData={movies} />}
      </InfiniteScroll>
    </>
  );
}
