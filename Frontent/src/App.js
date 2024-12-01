import './App.css';
import { useState, useEffect } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [preguntas, setPreguntas] = useState({});
  const [isEnable, setIsEnable] = useState(true);
  const totalPreguntas = 15;

  const onChange = (e) => {
    const { name, value } = e.target;
    setPreguntas((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setIsEnable(Object.keys(preguntas).length !== totalPreguntas);
  }, [preguntas]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Enviando los datos",
        didOpen: () => Swal.showLoading()
      });
      await axios.post("http://localhost:4000/save-answers", preguntas);
      Swal.fire("Datos registrados con éxito", "", "success");
    } catch (error) {
      Swal.fire("Ocurrió un error al registrar los datos", "", "error");
    }
  };

  return (
    <Container>
      <header>
        <nav>
          <h1 className="etiqueta1">Evaluación Docente</h1>
        </nav>
      </header>

      <Card className="mt-3">
        <Card.Body>
          <p>INSTRUCCIONES:</p>
          <ul>
            <li>1) Lee cada pregunta detenidamente...</li>
            <li>2) Selecciona la opción que mejor describa tu experiencia...</li>
            <li>3) Responde con honestidad y objetividad...</li>
            <li>4) No dejes preguntas sin contestar...</li>
            <li>5) En caso de dudas sobre una pregunta...</li>
            <li>6) Confidencialidad: Todas tus respuestas son anónimas...</li>
          </ul>
        </Card.Body>
      </Card>

      <Form onSubmit={onSubmit}>
        {[
          { label: "1. ¿Qué tan motivado te sientes en tu trabajo?", name: "motivacion", options: ["Muy motivado", "Motivado", "Poco motivado", "Nada motivado"] },
          { label: "2. ¿Cómo calificarías tu ambiente laboral?", name: "ambiente", options: ["Excelente", "Bueno", "Regular", "Malo"] },
          { label: "3. ¿Con qué frecuencia recibes reconocimiento por tu trabajo?", name: "reconocimiento", options: ["Siempre", "A veces", "Rara vez", "Nunca"] },
          { label: "4. ¿Qué tan cómodo te sientes compartiendo tus ideas?", name: "ideas", options: ["Muy cómodo", "Cómodo", "Poco cómodo", "Nada cómodo"] },
          { label: "5. ¿Cuánto apoyo sientes de tus compañeros?", name: "apoyo", options: ["Mucho apoyo", "Algo de apoyo", "Poco apoyo", "Sin apoyo"] },
          { label: "6. ¿Qué tan claras son tus responsabilidades?", name: "responsabilidades", options: ["Muy claras", "Claras", "Poco claras", "Nada claras"] },
          { label: "7. ¿Qué tan satisfecho estás con tus oportunidades de desarrollo profesional?", name: "desarrollo", options: ["Muy satisfecho", "Satisfecho", "Poco satisfecho", "Nada satisfecho"] },
          { label: "8. ¿Cuántas veces al mes participas en actividades de equipo?", name: "actividades", options: ["Más de 5 veces", "3-5 veces", "1-2 veces", "Nunca"] },
          { label: "9. ¿Qué tan alineados están tus objetivos personales con los de la empresa?", name: "alineacion", options: ["Muy alineados", "Alineados", "Poco alineados", "Nada alineados"] },
          { label: "10. ¿Qué tan seguido recibes retroalimentación sobre tu trabajo?", name: "retroalimentacion", options: ["Siempre", "A veces", "Rara vez", "Nunca"] },
          { label: "11. ¿Te sientes parte de la cultura de la empresa?", name: "cultura", options: ["Sí", "Más o menos", "No"] },
          { label: "12. ¿Cómo calificarías tu equilibrio entre trabajo y vida personal?", name: "equilibrio", options: ["Excelente", "Bueno", "Regular", "Malo"] },
          { label: "13. ¿Qué tan satisfecho estás con la comunicación dentro de tu equipo?", name: "comunicacion", options: ["Muy satisfecho", "Satisfecho", "Poco satisfecho", "Nada satisfecho"] },
          { label: "14. ¿Qué tan fácil es para ti abordar a tu supervisor?", name: "supervisor", options: ["Muy fácil", "Fácil", "Difícil", "Muy difícil"] },
          { label: "15. ¿Cómo calificarías tu satisfacción general en el trabajo?", name: "satisfaccion", options: ["Muy satisfecho", "Satisfecho", "Poco satisfecho", "Nada satisfecho"] },
        ].map((question, index) => (
          <Card className="mt-3" key={index}>
            <Card.Body>
              <div className="contenedor">
                <p>{question.label}</p>
                {question.options.map((option) => (
                  <Form.Check 
                    type="radio"
                    label={option}
                    name={question.name}
                    value={option}
                    onChange={onChange}
                    key={option}
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}

        <div className="boton-contenedor mt-3">
          <Button type="submit" disabled={isEnable} variant="primary">Enviar</Button>
          <Button variant="secondary" className="ml-2">Cancelar</Button>
        </div>
      </Form>

      <footer>
        <nav>
          <ul>
            <li>Gracias por tus respuestas.</li>
          </ul>
        </nav>
      </footer>
    </Container>
  );
}

export default App;
