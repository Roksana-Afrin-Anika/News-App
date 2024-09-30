import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const API_KEY = "225ec571bcee4e03a748e64ea0a6d564";

const NewsBoard = ({ categor }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categor}&apiKey=${API_KEY}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles || []);
      });
    console.log(process.env.VITE_API_KEY);
  }, [categor]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, idx) => {
        return (
          <NewsItem
            key={idx}
            author={news.author}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
