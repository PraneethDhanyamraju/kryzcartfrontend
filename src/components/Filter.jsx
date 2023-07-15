import React, { useEffect,useState } from "react";
import axios from "axios";
import Search from "./Search";
export default function Filter()
{
    const url=window.location.href.split('/');
return(
 <>
 <Search/><h1>Error No Such Details Found Matching for "{url[3]}"</h1>
 </>
);
}