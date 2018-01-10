import React from 'react';

const VideoDetails = ({video}) => {
    if(!video){
        return <div> Loading ... </div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
            <div className="video-details col-md-8">
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={url} frameborder="0" className='embed-responsive-item'>

                    </iframe>
                </div>
                <div className='details'>
                    <div className='title'>{video.snippet.title}</div>
                    <div className='description'>{video.snippet.description}</div>
                </div>
            </div>
    );
};
export default VideoDetails;