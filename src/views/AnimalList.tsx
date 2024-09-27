import { useParams } from "react-router-dom";
import "./AnimalList.css";
import { useEffect, useState } from "react";
import { Animal } from "../types";
import { Button, Card } from "react-bootstrap";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key":
    "live_JH8D8ZjoX9oJ2WAGfl9uzNSUcpX4DKZwMqDlWlj2Rw6DLpqdOudiQKNAE2hGSO79",
});

const requestOptions = {
  method: "GET",
  headers: headers,
};

const AnimalList = () => {
  const params = useParams();
  const [animals, setAnimals] = useState<Animal[]>([]);

  const getAnimals = () => {
    fetch(
      `https://api.the${params.type}api.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => setAnimals(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAnimals();
  }, []);

  console.log(animals);
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center">
        {animals &&
          animals.map((animal) => {
            return (
              <Card className="m-2" style={{ width: "18rem" }}>
                <Card.Img className="img" variant="top" src={animal.url} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant="secondary">Read more</Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default AnimalList;
