import { Link } from "react-router-dom";
import "./AnimalExplorer.css";
import Button from "react-bootstrap/Button";

const AnimalExplorer = () => {
  return (
    <>
      <div className="animal-explorer">
        <div className="buttons-wrapper">
          <Link className="link" to="/animalList">
            <Button className="button" variant="secondary">
              Dogs
            </Button>
          </Link>

          <Link className="link" to="/animalList">
            <Button className="button" variant="secondary">
              Cats
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AnimalExplorer;
