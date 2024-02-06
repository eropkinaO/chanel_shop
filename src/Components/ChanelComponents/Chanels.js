import Chanel from "./Chanel";
import ChanelsData from "../../Data/ChanelsData";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/chanelSlice";

const Chanels = () => {
   
    const selectedCategory = useSelector(getSelectedCategory);


    return(
        <div className="container">
            {ChanelsData
            .filter(chanel => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === chanel.category;
            })
            .map(((element, index) => <Chanel key={index} chanel={element}/>))}
        </div>
    )}

export default Chanels;