import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify-modernize';


export default function Card(props) {
    let course=props.course;
    let category=props.category;
    let likedcourse=props.likedcourse
    let setLikedcourse=props.setLikedcourse
    function clicked(){
      if(likedcourse.includes(course.id)){
        //agar pehle se course like hai to..
        setLikedcourse((prev)=>prev.filter((cid)=>(cid!==course.id)));
        toast.warning("like removed!"); 
      }
      else{
        if(likedcourse.length===0){
          setLikedcourse(course.id);
        }
        else{
          setLikedcourse((prev)=>[...prev,course.id])
        }
        toast.success("Likes succesfully!")
      }
    }
  return (
    <div className='bg-slate-900 m-2 rounded-md'>
        <div className='relative'>
            <img className='rounded' src={course.image.url}/>
            <div className='text-xl p-1 absolute right-2 bottom-3 bg-slate-200 rounded-[60px] '>
            <button onClick={clicked}>
              {
                likedcourse.includes(course.id)?(    <FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
              }
            </button> 
            </div>
        </div>
        
        <div>
        <p className='font-bold px-2 my-1'>{course.title}</p>
        <p className='px-2 py-1'>
        {
          course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
        }  
        </p>

        </div>
    </div>
  )
}

