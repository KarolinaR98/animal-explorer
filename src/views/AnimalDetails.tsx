import { useParams } from "react-router-dom";
import "./AnimalDetails.css";
import { useEffect, useState } from "react";
import { Animal } from "../types";
import { Card } from "react-bootstrap";

const AnimalDetails = () => {
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

  const [animal, setAnimal] = useState<Animal>();

  const getAnimal = () => {
    fetch(
      `https://api.the${params.type}api.com/v1/images/${params.id}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        setAnimal(result);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        {animal ? (
          <Card className="mt-3 mb-3" style={{ width: "30rem" }}>
            <Card.Img variant="top" src={animal.url} />
            <Card.Body>
              {animal.breeds?.[0].name && <Card.Title>{animal.breeds?.[0].name}</Card.Title>}
              {animal.breeds?.[0].breed_group && <Card.Text className="mb-2">
                Breed group: {animal.breeds?.[0].breed_group}
              </Card.Text>}
              {animal.breeds?.[0].temperament && <Card.Text className="mb-2">
                Temperament: {animal.breeds?.[0].temperament}
              </Card.Text>}
              {animal.breeds?.[0].life_span && <Card.Text>Life span: {animal.breeds?.[0].life_span}</Card.Text>}
            </Card.Body>
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default AnimalDetails;
