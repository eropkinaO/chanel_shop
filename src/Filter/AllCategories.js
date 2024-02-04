import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="filtered">
        <div className="menu"> 
            
            {["ALL","Fragnance","Bags","Watches","Lipstick"].map
            ((category, index) => <Filter key={index} category={category}/>)}
        </div>
        </div>
    )
}

export default AllCategories;