
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
    let params = useParams();
    console.log("Params:", params);

    // Assume you have some function to fetch content details based on contentId
    // For demonstration purposes, let's assume it's a simple array of content objects
    const content = [
        { id: 'abc123', type: 'trailer', trailerLink: 'https://www.youtube.com/watch?v=abc123' },
        { id: 'def456', type: 'otherType', /* other content details */ }
    ];

    // Find the content object with the matching contentId
    const selectedContent = content.find(item => item.id === params.contentId);

    if (!selectedContent) {
        return <div>Content not found</div>;
    }

    // Assume different rendering based on content type
    if (selectedContent.type === 'trailer') {
        return (
            <div className="react-player-container">
                <ReactPlayer
                    controls={true}
                    playing={true}
                    url={selectedContent.trailerLink}
                    width="100%"
                    height="100%"
                />
            </div>
        );
    } else {
        // Render other types of content here
        return <div>Render other types of content</div>;
    }
};

export default Trailer;


// import {useParams} from 'react-router-dom';
// import ReactPlayer from 'react-player';
// import './Trailer.css';

// import React from 'react'

// const Trailer = () => {

//     let params = useParams();
//     console.log(params);
//     // let key = params.ytTrailerId;
    
// //    console.log("ytTrailerId:", key);
//      <div className="react-player-container">
//             { (
//                 <ReactPlayer
//                     controls={true}
//                     playing={true}
//                     url={`https://www.youtube.com/watch?v=BRb4U99OU80`}
//                     width="100%"
//                     height="100%"
//                 />
//             ) }
//         </div>
//   return (
//     <div className="react-player-container">
//     { (
//         <ReactPlayer
//             controls={true}
//             playing={true}
//             url={`https://www.youtube.com/watch?v=BRb4U99OU80`}
//             width="100%"
//             height="100%"
//         />
//     )}
// </div>
   
//   )
// }

// export default Trailer