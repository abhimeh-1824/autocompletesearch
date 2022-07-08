import React, { useEffect } from "react";
import { useState } from "react";
import UsersList from "../BasicUserCard/UsersList";
import Search from "../Search/Search";
import "./detailsusercard.css";
import Pagination from "./Pagginet/Pagination";
const DetailsUserCard = () => {
  const [userName, setUserName] = useState("morty");
  const [currentpage, setcurrentpage] = useState(1);
  const [usersData, setUsersData] = useState([]);
  const [totalDataPageLength, settotalDataPageLength] = useState(0);
  const itemPerpage = 6;
  const lastIndexOfElement = currentpage * itemPerpage;
  const fistIndexOfElement = lastIndexOfElement - itemPerpage;
  useEffect(() => {
    userDataFetch();
  }, [userName, currentpage]);

  const userDataFetch = async () => {
    try {
      let data = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${userName}&page=${currentpage}`
      );
      let userInformation = await data.json();
      setUsersData(
        userInformation.results.slice(fistIndexOfElement, lastIndexOfElement)
      );
      console.log(usersData);
      settotalDataPageLength(userInformation.results.length);
      
    } catch (error) {
      setUsersData(
        usersData
      );
    }
  };

  let pages = [];
  for (var i = 1; i <Math.ceil(totalDataPageLength / itemPerpage); i++) {
    pages.push(i);
  }

  const handlePageNumber = (number) => {
    if(number==="next")
    {
      setcurrentpage(
        currentpage+1
      );

    }else if(number==="pre")
    {
      setcurrentpage(
        currentpage-1
      );
    }
    else{
      setcurrentpage(
        number 
      );
    }
    
  };

  return (
    <div className="details-user-card">
      <Search setUserName={setUserName} />
      <UsersList usersData={usersData} />
      <Pagination pages={pages} handlePageNumber={handlePageNumber} />
    </div>
  );
};

export default DetailsUserCard;
