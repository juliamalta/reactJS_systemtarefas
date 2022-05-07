import React, {useState ,useEffect , useMemo ,useCallback} from 'react';

import './style.css';

function App() {


const [ tarefas, setTarefas ] = useState([
'Pagar a conta de luz',
'Estudar React Hooks'

]);


const [ input ,setInput ] = useState ('');


useEffect(() => {

  const tarefasStorage= localStorage.getItem('tarefas');

  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage));
  }

} ,[]);


useEffect(()=> {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}, [tarefas]);

const handleAdd =useCallback(() => {

  setTarefas([...tarefas ,input] )
    setInput('');

} ,[input ,tarefas]);

const totalTarefas = useMemo (()=>tarefas.length,[tarefas]);




  return (
    <div className="container">
    <ul>
      {tarefas.map(tarefas => (
        <li key={tarefas}>{tarefas}</li>
      ))}
      
    </ul>
    <br/>
    <strong>voce tem {totalTarefas} tarefas</strong>
<input type="text" value={input} onChange={(e) =>setInput( e.target.value)} className="input"/>
<button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
