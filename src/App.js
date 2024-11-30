import logo from './logo.svg';
import './App.css';

function App() {
  const [answers, setAnswers] = useState({});

  const questionnaire ={
 
  };

  const onChange = (e)=>{
    e.preventDefault();
    const data = answers;
    data [e.target.name] = e.target.value;
    console.log(data);
    setAnswers(data);
  }

  const onSubmit = ()=>{
      //Validar que las preguntas fueron contestadas
      const questionUnanswered = [];
      questionnaire.preguntas.map((pregunta,i)=>{
        if(!answers[`pregunta_${i}`}]){
          questionUnanswered.push(i + 1)
        }
      })
      if(questionUnanswered.length > 0){
        Swal.fire("Opppss!, parece que faltan preguntas por contestar",
          questionUnanswered.join('.'),
          "error"
        );
        return;
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
