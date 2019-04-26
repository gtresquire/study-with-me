import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div><iframe width="791" height="445" src="https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>;
    }
    // console.log(video);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    // console.log(videoSrc);
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;

