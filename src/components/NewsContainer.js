import React from 'react';
import NewsCard from './NewsCard';
import "../App.css";

function NewsContainer({ articles }) {
  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsContainer;
