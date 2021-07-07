import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import api from "../../services/api";
import { addReverveRequest } from '../../store/modules/reserve/actions';

import { MdFlightTakeoff } from 'react-icons/md'
import './style.css';

export default function Home({ history }) {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(id){
    dispatch(addReverveRequest(id));

  }

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? "Disponivel" : "Indisponivel"}</span>

            <button type="button" onClick={()=> handleAdd(trip.id)}>
              <div>
                <MdFlightTakeoff size={16} color="#fff" />
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
