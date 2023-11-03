import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainContainer() {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movies) return ;
    const mainMovie = movies[0]
    const {overview,original_title, id} = mainMovie
  return (
    <div>
      <VideoTitle title = {original_title} overview={overview} txtColor={'text-white'} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
