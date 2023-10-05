// NewsCard.js
import React from 'react';

function NewsCard({ article }) {
  const redirectToArticle = () => {
    window.open(article.url, '_blank');
  };

  return (
    <div className="news-card" onClick={redirectToArticle}>
      <div className="news-image">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <div className="news-details">
        <h3>{article.source.name}</h3>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>Author: {article.author || 'Unknown'}</p>
        <p>Published At: {new Date(article.publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default NewsCard;
