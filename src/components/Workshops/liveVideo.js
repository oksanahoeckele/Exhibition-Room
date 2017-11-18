import React, { Component } from 'react';
import {
  Route,
  HashRouter,
  Link
} from "react-router-dom";


class liveVideo extends Component {
  render() {

    return (
      <div>
        <div className="wrapper">
           <div className="container section">
             <div className="col-md-12">
               <h2>Future Workshops</h2>
               <div className="slick-carousel" id="newIn">
                 <div className="movie-slide">
                   <div className="movie-poster">
                     <aside>
                       <div>
                         <Link to="live_stream" className="play">
                          <i className="material-icons">play_arrow</i>
                         </Link>
                         <a href="single-movie.html" className="read-more">read more</a>
                         <span className="date">Released: 7 Mar, 2017</span>
                       </div>
                     </aside>
                     <img src="images/movie-1.jpg" alt="Movie title" />
                   </div>
                   <h4 className="no-underline">The last post</h4>
                   <div className="star-rating">
                     <i className="material-icons">star_rate</i>
                     <i className="material-icons">star_rate</i>
                     <i className="material-icons">star_rate</i>
                     <i className="material-icons">star_rate</i>
                     <i className="material-icons">star_rate</i>
                   </div>
                 </div>
               </div>
           </div>
        </div>
       </div>
      </div>
    );
  }
}

export default liveVideo;
