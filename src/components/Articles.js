import React, { useState, useEffect } from 'react';
import NewsContainer from './NewsContainer';
import "../App.css";

function Articles() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0318afd0660549e9b2669a5cea4a4ab8')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{textAlign:'center',marginTop:'1rem', fontSize:'2.4rem',color:'#cc8800'}}>Health Articles India</h1>
      <NewsContainer articles={news} />
    </div>
  );
}

export default Articles;
