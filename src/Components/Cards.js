import React from 'react';
import Card from './Card';
import { filterData } from '../data';
import { useState } from 'react';

export default function Cards(props) {
  const { courses } = props;
  const [likedcourse, setLikedcourse] = useState([]);
  let category=props.category
  let setCategory=props.setCategoryategory

  function getcourses() {
    let Allcourses = [];
    if (category === "All") {
      Object.values(courses).forEach(array => {
        array.forEach(coursedata => {
          Allcourses.push(coursedata);
        });
      });
    } else {
      return courses[category];
    }
    return Allcourses;
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 '>
      {getcourses().map(course => (
        <Card
          key={course.id}
          setCategory={setCategory}
          category={category}
          course={course}
          likedcourse={likedcourse}
          setLikedcourse={setLikedcourse}
        />
      ))}
    </div>
  );
}
