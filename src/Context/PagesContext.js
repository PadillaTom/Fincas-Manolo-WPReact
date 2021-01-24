import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PagesContext = () => {
  // Fecthing Pages:
  const [myPages, setMyPages] = useState([]);

  useEffect(() => {
    const pages = axios
      .get('http://www.fincas-manolo.cf/wp-json/wp/v2/posts')
      .then((data) => {
        setMyPages(data);
      });
    console.log(pages);
  }, []);
  return <div></div>;
};

export default PagesContext;
