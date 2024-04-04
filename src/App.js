import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify-modernize";
import Spinner from "./Components/Spinner";

const App = (props) => {
  const [category, setCategory] = useState(filterData[0].title);
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  async function fetchData(){
    setLoading(true);
   try{
    let response=await fetch(apiUrl);
    let output=await response.json();
    setCourses(output.data);

   }
   catch(error){
    toast.error("Network Issues")
   }
   setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return <div className="flex flex-col gap-4 min-h-[100vh] bg-slate-400 text-white">
    
    <div className="bg-slate-900 font-bold h-10 w-full text-center text-xl"  > 
      <Navbar ></Navbar>
    </div>
    <div className="text-center "> 
      <Filter  filterData={filterData}
         category={category}
        setCategory={setCategory}
      ></Filter>
    </div>
    <div > 
      {
        loading ?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
      }
    </div>
  </div>;
};

export default App;
