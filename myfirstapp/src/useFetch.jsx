import React, { useEffect, useState } from 'react'

export const useFetch = (defaultcourses = []) => {
     const [haslike, sethaslike] = useState(false);
  
     const [dummy, setdummy] = useState(true);
     
     const [courses, setcourses] = useState(defaultcourses);

     return [haslike, dummy, courses , setcourses , sethaslike];
}
