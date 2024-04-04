import React from 'react'

export default function Filter(props) {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }
  return (
    <div className='space-x-2 '>
        {
            filterData.map((Data)=>(
                <button onClick={()=>filterHandler(Data.title)} className='border-white  text-white bg-slate-900 rounded px-2' key='Data.id'>
                  { Data.title }
                  </button>
            ))
        }
    </div>
  )
}
