import PropTypes from "prop-types";
import { useFetch } from "./useFetch";

const styles = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

function Course(props) {
  const [haslike, dummy, courses, setcourses, sethaslike] = useFetch();

  // Here Shorthand for handling missing data same as conditional rendering
  function BuyNow() {
    sethaslike(!haslike);
  }

  return (
    <div className="card">
      <img src={props.image} style={styles} alt="im" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <button onClick={(event) => BuyNow()}>
        {haslike ? "Already Purchased" : "Buy Now"}
      </button>
      <button
        onClick={() => {
          props.delete(props.name);
          () => setdummy(false);
        }}
      >
        delete
      </button>
    </div>
  ); //Handling events in react without '()'
}

// Course.propTypes = {
//   name : PropTypes.string
// };
// Course.defaultProps = {
//   name: "Racing car",
//   price: 2.4,
//   image: fer,
//   show: false,
// };
export default Course;
