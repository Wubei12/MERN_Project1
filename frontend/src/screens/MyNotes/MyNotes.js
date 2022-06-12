import { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";
import axios from "axios";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
    }
  };

  const fetchNotes = async () => {
    const data = await axios.get("http://localhost:8000/api/notes");

    console.log(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Wubei!">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create A New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card style={{ margin: 10 }}>
            <Card.Header className="row justify-content-between" style={{ display: "flex", backgroundColor: "orange" }}>
              <Accordion.Header>
                <span
                  className="col-2"
                  style={{
                    color: "brown",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
              </Accordion.Header>
              <div className="col-2" style={{ alignSelf: "center" }}>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>              
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - Date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
