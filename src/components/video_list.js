import React from 'react';
import ListItem from './list_item'
const VideosList = (props) => {
    const ListItems = props.videos.map((video)=>{
        return <ListItem key={video.etag} video={video} />
    });
  return (
      <ul className="col-md-4 listGroup">
          {ListItems}
      </ul>
  );
};

export default VideosList;