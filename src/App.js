import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Spinner } from "react-bootstrap";
import NewsCard from "./Components/NewsCard";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=90dbf1958cc7423da14e4d90356138ab"
    )
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div className="container mx-auto">
      <Row xs={1} md={3} className="g-4">
        {news.length === 0 ? (
          <Spinner animation="grow" variant="danger" className="mx-auto" />
        ) : (
          news.map(article => (
            <NewsCard article={article} key={article.urlToImage} />
          ))
        )}
      </Row>
    </div>
  );
}

export default App;
