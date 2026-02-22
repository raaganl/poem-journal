import PoemCard from "../../components/PoemCard/PoemCard"
import "./Works.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import SearchBar from "../../components/SearchBar/SearchBar"
import WorkTab from "../../components/WorkTab/WorkTab";
import { WorksContext } from '../../contexts/WorksContext';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState, useEffect, useContext } from 'react';
import "../page.css"

export default function Works() {
  const {getWorks} = useContext(WorksContext);
  const navigate = useNavigate();
  const allWorks = getWorks();

  const [searchValue, setSearchValue] = useState("");

  const filterSearch = () => {
    return allWorks.filter(work => {
      return work.body.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
  
  return (
  <div className = "page-content-container"> 
    <SearchBar placeHolder = "Search your works" onChange = {e => setSearchValue(e.target.value)}/>
    <ResponsiveMasonry
    columnsCountBreakPoints={{ 0: 1, 800: 2 }}
    gutterBreakPoints={{ 0: "1rem" }}
    >
      <Masonry gutter>
        {filterSearch().reverse().map(work => {
        return <PoemCard key={work.id} workId={work.id} workBody={work.body} workDate={work.date}/>;
      })}
      </Masonry>
    </ResponsiveMasonry>
  </div>);
}