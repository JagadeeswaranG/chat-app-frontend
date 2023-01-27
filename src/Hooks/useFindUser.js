import axios from "axios";
import { useEffect, useState } from "react";

const useFindUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JlZDc4MTBlYTcyZTU1ODY4OWY5MTkiLCJpYXQiOjE2NzQwOTQyMTV9.YrGQPATHutEdX7E25akNF-JWnZCDKwxv6aECuEx3Cno";

  const accessToken = localStorage.getItem("accessToken");
  const getUser = async () => {
    try {
      const response = axios.get(`${process.env.REACT_APP_BASE_URL}/user`, {
      //  headers:{"Authorization": `Bearer ${accessToken}`},
        withCredentials: true,
      });
      if (response.data.success) {
        console.log(response.data);
        setUser(response.data.user);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getUser();
  }, []);

  return [user, setUser, loading];
};

export default useFindUser;
