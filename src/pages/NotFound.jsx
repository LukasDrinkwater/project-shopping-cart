import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2> Page not found or under construction!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, nam?
      </p>

      <p>
        Go to the <Link to="/">Homepage.</Link>
      </p>
    </div>
  );
};

export default NotFound;
