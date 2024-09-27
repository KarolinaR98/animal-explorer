import { Link } from "react-router-dom";
import "./AnimalExplorer.css";

const AnimalExplorer = () => {
  return (
    <>
      <div className="animal-explorer">
        <div className="buttons-wrapper">
          <Link className="btn btn-secondary m-2" to="/animalList/dog">
            Dogs
          </Link>

          <Link className="btn btn-secondary" to="/animalList/cat">
            Cats
          </Link>
        </div>
      </div>
    </>
  );
};

export default AnimalExplorer;
