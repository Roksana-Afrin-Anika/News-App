import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../../src/Images/news.jpeg";
const NewsItem = ({ author, title, description, src, url }) => {
  return (
    <>
      <Card
        className="bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "345px" }}
      >
        <Card.Img
          variant="top"
          style={{ height: "200px", width: "330px" }}
          src={src ? src : img}
        />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Title>{title.slice(0, 50)}</Card.Title>
          <Card.Text>
            {description ? description.slice(0, 90) : "The news is empty"}
          </Card.Text>

          <a href={url}>Read More</a>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsItem;
