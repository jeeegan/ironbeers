import React from 'react';
import { Input } from 'reactstrap';

const Search = (props) => {
  return(
    <div style={{margin: "10px"}}>
      <Input name="search" type="text" value={props.search} onChange={props.onChange} style={{height: "40px", fontSize: "20px"}}></Input>
    </div>
  )
}

export default Search;