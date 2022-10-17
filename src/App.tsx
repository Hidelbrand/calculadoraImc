import { useState } from 'react';
import styles from './App.module.css'
import powerImage from './assents/powered.png'
import {levels, calcularImc} from './helpers/imc'

const App = () => {
const [heightField, setHeightField] = useState<number>(0);
const [weightField, setWeightField] = useState<number>(0);

const handleCalculateButton = () => {
  if (heightField && weightField) {
    
  } else {
    alert ("Digite todos os campos.")
  }
}

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>Imc é a sigla para índice de massa corpórea, parâmetro adotado pela Organização Mundia da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number"
          placeholder='Digite a sua altura. Ex 1.5 (em métros)'
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))} />

<input 
          type="number"
          placeholder='Digite o seu peso. Ex 71.5 (em kg)'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))} />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
    </div>
    </div>
  );
}

export default App;