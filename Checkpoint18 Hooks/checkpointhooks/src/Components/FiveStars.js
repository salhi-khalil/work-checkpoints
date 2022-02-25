import ReactStars from "react-rating-stars-component";
import React from "react"; 

const FiveStars = (props) => {
    const ratingChanged = (newRating) => {
      props.Search(newRating);
      };
       
      return(
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={25}
          activeColor="#ffd700"
        />
             )
}

export default FiveStars
