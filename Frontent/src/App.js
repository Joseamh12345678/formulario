import './App.css';
import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [preguntas, setPreguntas] = useState({});
  const [isEnable, setIsEnable] = useState(true);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPreguntas((prevState) => ({ ...prevState, [name]: value }));

    // Verifica si todas las preguntas han sido respondidas
    const totalPreguntas = 15;
    if (Object.keys({ ...preguntas, [name]: value }).length === totalPreguntas) {
      setIsEnable(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      Swal.fire("Enviando los datos");
      Swal.showLoading();
      await axios.post("http://localhost:4000/form", preguntas);
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
        {/* Preguntas */}
        <div className="contenedor">
          <p>1. ¿Qué tan motivado te sientes en tu trabajo?</p>
          {["Muy motivado", "Motivado", "Poco motivado", "Nada motivado"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="motivacion"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>2. ¿Cómo calificarías tu ambiente laboral?</p>
          {["Excelente", "Bueno", "Regular", "Malo"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="ambiente"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>3. ¿Con qué frecuencia recibes reconocimiento por tu trabajo?</p>
          {["Siempre", "A veces", "Rara vez", "Nunca"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="reconocimiento"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>4. ¿Qué tan cómodo te sientes compartiendo tus ideas?</p>
          {["Muy cómodo", "Cómodo", "Poco cómodo", "Nada cómodo"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="ideas"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>5. ¿Cuánto apoyo sientes de tus compañeros?</p>
          {["Mucho apoyo", "Algo de apoyo", "Poco apoyo", "Sin apoyo"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="apoyo"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>6. ¿Qué tan claras son tus responsabilidades?</p>
          {["Muy claras", "Claras", "Poco claras", "Nada claras"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="responsabilidades"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>7. ¿Qué tan satisfecho estás con tus oportunidades de desarrollo profesional?</p>
          {["Muy satisfecho", "Satisfecho", "Poco satisfecho", "Nada satisfecho"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="desarrollo"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>8. ¿Cuántas veces al mes participas en actividades de equipo?</p>
          {["Más de 5 veces", "3-5 veces", "1-2 veces", "Nunca"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="actividades"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>9. ¿Qué tan alineados están tus objetivos personales con los de la empresa?</p>
          {["Muy alineados", "Alineados", "Poco alineados", "Nada alineados"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="alineacion"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>10. ¿Qué tan seguido recibes retroalimentación sobre tu trabajo?</p>
          {["Siempre", "A veces", "Rara vez", "Nunca"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="retroalimentacion"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>11. ¿Te sientes parte de la cultura de la empresa?</p>
          {["Sí", "Más o menos", "No"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="cultura"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>12. ¿Cómo calificarías tu equilibrio entre trabajo y vida personal?</p>
          {["Excelente", "Bueno", "Regular", "Malo"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="equilibrio"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>13. ¿Qué tan satisfecho estás con la comunicación dentro de tu equipo?</p>
          {["Muy satisfecho", "Satisfecho", "Poco satisfecho", "Nada satisfecho"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="comunicacion"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>14. ¿Qué tan fácil es para ti abordar a tu supervisor?</p>
          {["Muy fácil", "Fácil", "Difícil", "Muy difícil"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="supervisor"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

        <div className="contenedor">
          <p>15. ¿Cómo calificarías tu satisfacción general en el trabajo?</p>
          {["Muy satisfecho", "Satisfecho", "Poco satisfecho", "Nada satisfecho"].map((option) => (
            <Form.Check 
              type="radio"
              label={option}
              name="satisfaccion"
              value={option}
              onChange={onChange}
              key={option}
            />
          ))}
        </div>

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


