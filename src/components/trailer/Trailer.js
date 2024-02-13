import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

import React from 'react'

const Trailer = () => {

    let params = useParams();
    console.log(params);
    // let key = params.ytTrailerId;
    
//    console.log("ytTrailerId:", key);
     <div className="react-player-container">
            { (
                <ReactPlayer
                    controls={true}
                    playing={true}
                    url={`https://www.youtube.com/watch?v=BRb4U99OU80`}
                    width="100%"
                    height="100%"
                />
            ) }
        </div>
  return (
    <div className="react-player-container">
    { (
        <ReactPlayer
            controls={true}
            playing={true}
            url={`https://www.youtube.com/watch?v=BRb4U99OU80`}
            width="100%"
            height="100%"
        />
    )}
</div>
   
  )
}

export default Trailer