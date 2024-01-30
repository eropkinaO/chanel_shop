import Chanel from "./Chanel";
import ChanelsData from "../../Data/ChanelsData";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/chanelSlice";

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