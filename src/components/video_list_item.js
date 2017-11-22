import React from 'react';

// React interprets ({video}) => ... as props.video
const VideoListItem = ({video}) => {
// same as 'const video = props.video'
// set my data reference variables for thumbnail image
const imageUrl = video.snippet.thumbnails.default.url;


  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          {/* dont forget to use curlies when referencing JS variables in JSX */}
          <img className="media-object" src={imageUrl} alt=""/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
