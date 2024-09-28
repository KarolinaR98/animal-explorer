import { Link, useParams } from "react-router-dom";
import "./AnimalList.css";
import { useEffect, useState } from "react";
import { Animal } from "../types";
import { Card } from "react-bootstrap";

const AnimalList = () => {
  const params = useParams();

  const dogApiKey: string =
    "live_JH8D8ZjoX9oJ2WAGfl9uzNSUcpX4DKZwMqDlWlj2Rw6DLpqdOudiQKNAE2hGSO79";
  const catApiKey: string =
    "live_Nh7GkK8NNwZCGPN4AfkFLmUGt7WMWfCBLR0YVx2Iz3Gl3yQsOBhOT0ibVrhnixve";

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": params.type === "dog" ? dogApiKey : catApiKey,
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [animals, setAnimals] = useState<Animal[]>([]);

  const getAnimals = () => {
    setLoading(true);

    fetch(
      `https://api.the${params.type}api.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=12`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setAnimals(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAnimals();
  }, []);

  console.log(animals);
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center">
        {loading && <h2>Loading...</h2>}
        {!loading &&
          animals &&
          animals.map((animal) => {
            return (
              <Card key={animal.id} className="m-2" style={{ width: "18rem" }}>
                <Card.Img className="img" variant="top" src={animal.url} />
                <Card.Body>
                  <Card.Title>{animal.breeds?.[0].name}</Card.Title>
                  <Link className="btn btn-secondary" to={animal.id}>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default AnimalList;
