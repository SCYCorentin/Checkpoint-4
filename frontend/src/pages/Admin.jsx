import { useEffect, useState } from "react";
import "../styles/styles2.css";
import axios from "axios";

export default function Admin() {
  const [name, setName] = useState();
  const [hoursopen, setHoursOpen] = useState();
  const [feedback, setFeedback] = useState();
  const [services, setServices] = useState();
  const [city_id, setCity_id] = useState();
  const [api, setApi] = useState([]);

  const postName = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/coworkingplaces/`, {
      name,
      hoursopen,
      feedback,
      services,
      city_id,
    });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/coworkingplaces/`)
      .then((res) => setApi(res.data));
  }, []);

  const delName = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/coworkingplaces/${id}`)
      .then(() => getData())
      .catch((err) => console.warn(err));
  };
  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/coworkingplaces/`)
      .then((getdata) => setApi(getdata.data));
  };
  return (
    <div className="App">
      <h1 className="crudtitle">Corsair - Création et suppression d'espace</h1>
      <div className="parentcrud">
        <div className="parentcrud2">
          <h2 className="titleset">Nom de l'espace</h2>
          <input
            placeholder="Type..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2 className="titleset">Horaires</h2>
          <input
            placeholder="Type..."
            value={hoursopen}
            onChange={(e) => setHoursOpen(e.target.value)}
          />
          <h2 className="titleset">Feedback (Non obligatoire)</h2>
          <input
            placeholder="Type..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <h2 className="titleset">Description de l'espace</h2>
          <input
            placeholder="Type..."
            value={services}
            onChange={(e) => setServices(e.target.value)}
          />
          <h2 className="titleset">City_id</h2>
          <input
            placeholder="Type..."
            value={city_id}
            onChange={(e) => setCity_id(e.target.value)}
          />
          <button className="addnew" onClick={postName}>
            J'envoie ma requête
          </button>
        </div>
        <div className="childcrud">
          {api.map((val) => {
            return (
              <>
                <p>{val.name}</p>
                <button onClick={() => delName(val.id)}>Supprimer</button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
