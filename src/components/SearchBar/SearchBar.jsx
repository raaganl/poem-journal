import "./SearchBar.css"
import { SearchLine, Filter2Fill} from "@mingcute/react";
import React, { useRef, useState, useEffect, useContext } from 'react';
export default function SearchBar({onChange, placeHolder}){
    return(
        <div className = "search-container">
            <div className = "search-input-container">
                <SearchLine/>
                <input type="text" className = "search-input" placeHolder = {placeHolder} onChange = {onChange}/>
             </div>
            <hr className = "search-hr"></hr>
        </div>
    );
}``