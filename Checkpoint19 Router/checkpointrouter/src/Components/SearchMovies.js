import React from "react";
import { Form, FormControl} from "react-bootstrap";
import FiveStars from "./FiveStars";

const SearchMovies = (props) => {
  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.SearchBy1}/>
        <FiveStars Search={props.SearchBy2}/>
      </Form>
    </div>
  );
};

export default SearchMovies;
