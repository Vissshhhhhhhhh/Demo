import Course from "./Course";
import Benz from './assets/benz.webp'
import Fer from './assets/ferrari.jpg'
import Pors from './assets/porsche.webp'
import { useFetch } from "./useFetch";

function CourseList() {
  const defaultcourses = [{
       name: "Benz",
       image: Benz,
       price: 599,
     },
     {
       name: "Ferrai",
       image: Fer,
       price: 499,
     },
     {
       name: "Porsche",
       image: Pors,
       price: 299,
     }];
     
 const [haslike, dummy , courses , setcourses] = useFetch(defaultcourses); 
  if (!courses) {
    return <></>;
  }
  // useEffect(() => {
  // }, []);
 

  function handledelete(name) {
    const newcourses = courses.filter((course) => course.name != name);
    setcourses(newcourses);
  }

  //  courses.sort((x, y) => y.count - x.count); // Sorting using sort() operator as in java Collections

  //  const vfm = courses.filter((cou)=> cou.price<500); // Filtering using filter()

  const coursesList = courses.map((course, index) => {
    return (
      <Course
        key={index}
        name={course.name}
        price={course.price} 
        image={course.image}
        delete={handledelete}
      />
    );
  });

  return <>{coursesList}</>;
}

export default CourseList;

