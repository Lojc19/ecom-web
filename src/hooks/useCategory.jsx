import { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get cat
  const getCategories = async () => {
    try {
      const { data } = await axios.get("https://api-nhaxinh.onrender.com/api/category/all");
      setCategories(data?.data);
    } catch (error) {
      //toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}