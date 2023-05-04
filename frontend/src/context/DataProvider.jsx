import { createContext, useEffect, useState } from "react";

// BOX for all my data
export const Context = createContext();

const BACKEND_URL = "http://localhost:5000/books"

// PROVIDER of data
// brings all the data from the box to the pages and components
export const DataProvider = ({ children }) => {
  
  const [books, setBooks] = useState([]);
  // list with fav items
  const [favs, setFavs] = useState([]);

  // fetch data on startup in useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BACKEND_URL)
      const booksApi = await response.json() // extract data from response package using json parser
      console.log(booksApi)
      // store the books we got from API in our books frontend array 
      // using the setter function
      setBooks(booksApi)
    }

    fetchData()
  }, [])

  // whatever we wrap this provider around
  // provide to those components our data
  // with value prop we tell WHAT data to share
  return (
    <Context.Provider value={{ books, favs, setFavs }}>{children}</Context.Provider>
  );
};
