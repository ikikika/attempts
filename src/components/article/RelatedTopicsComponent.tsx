import React from "react";

const RelatedTopicsComponent = ({topicsData}: {topicsData: string[]}) => {
    return <div>
        <h5>Related Topics</h5>
        {
            topicsData.map((data, index)=>(<span key={index}>{data} </span>))
        }
    </div>
}

export default RelatedTopicsComponent;