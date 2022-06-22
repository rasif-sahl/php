import React from 'react';
import { Link  } from "react-router-dom";

export function Pagination({previousLink, previous, nextLink, next}) {
    console.log(previousLink)
    return  <div className="pagination">
        <div className="previous"><Link to ={previousLink} className="previousLink">{previous}</Link></div>
        <div className="next"><Link to ={nextLink} className="nextLink">{next}</Link></div>
    </div>
}