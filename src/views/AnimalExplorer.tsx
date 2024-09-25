import { Link } from "react-router-dom";
import "./AnimalExplorer.css";
import Button from "react-bootstrap/Button";

const AnimalExplorer = () => {
  return (
    <>
      <div className="animal-explorer">
        <div className="buttons-wrapper">
          <Button className="button" variant="secondary">
            <Link className="link" to="/animalList">Dogs</Link>
          </Button>
          <Button className="button" variant="secondary">
          <Link className="link" to="/animalList">Cats</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AnimalExplorer;
