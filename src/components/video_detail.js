import React from 'react';

const VideoDetail = ({video}) => {
  // once again, passing a variable name in curlies as an argument to a functional component tells React to search for a property of that name in props (ie props.video).

// the YT API call will not be instantaneous, so return a loading message until the API call yields some return data:
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  // ^ template literal ^ , same as :
  // const url = "https://www.youtube.com/embed" + videoId;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} frameborder="0"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
