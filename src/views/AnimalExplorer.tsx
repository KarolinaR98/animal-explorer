import { Link } from "react-router-dom";
import "./AnimalExplorer.css";

const AnimalExplorer = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="container">
            <div className="inner cover">
              <h1 className="cover-heading">Make your day better</h1>
              <p className="lead">
                Explore a cute world of cats and dogs and enjoy their adorable
                photos!
                <br />
                <br />
                Choose which pets you'd like to explore
              </p>
              <p className="lead">
                <Link
                  className="btn btn-lg btn-default m-2"
                  to="/animalList/dog"
                >
                  Dogs
                </Link>

                <Link className="btn btn-lg btn-default" to="/animalList/cat">
                  Cats
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalExplorer;
