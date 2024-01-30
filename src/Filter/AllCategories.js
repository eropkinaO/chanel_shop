import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="menu"> 
            
            {["ALL","Fragnance","Bags","Watches","Lipstick"].map
            ((category, index) => <Filter key={index} category={category}/>)}
        </div>
    )
}

export default AllCategories;