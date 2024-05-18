import { useState, useEffect } from "react";
import axios from "axios";

export default function useRoom() {
  const [rooms, setRooms] = useState([]);

  //get cat
  const getRooms = async () => {
    try {
      const { data } = await axios.get("https://api-nhaxinh.onrender.com/api/room/all");
      setRooms(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  return rooms;
}