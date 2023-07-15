import React, { useEffect,useState } from "react";
import axios from "axios";

export default function Search()
{
    const[value,setValue]=useState();
 
    return(
    <div class="input-group">
    <input class="form-control border-end-0 border rounded-pill " type="text" placeholder='Search' id="example-search-input" onChange={(e)=>{setValue(e.target.value)}}/>
    <span class="input-group-append">
        <button class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
            <i class="fa fa-search" onClick={()=>{
               window.location.href=`/${value}`

            }}></i>
        </button>
    </span>
</div>
    );
}