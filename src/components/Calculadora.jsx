import React, { useState } from 'react';
import styled from 'styled-components';

const Botao = styled.button`
 width: 75px;
  height: 75px;
  font-size: 24px;
  background-color: #E0E0E0;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 320px) and (max-width: 500px) {
    width: 3.0rem;
    height: 3.0rem;
    margin-top:15px;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    width: 70px;
    height: 70px;
    font-size: 18px;
    margin: 4px;
    border-radius: 50%;
  }

  @media (min-width: 901px) and (max-width: 1500px) {
    width: 90px;
    height: 90px;
    font-size: 20px;
    margin: 5px;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  
`;

const Container = styled.div`
  background-color: #F4F4F4;
  width: 25%;
  height: 87vh;
  border-radius: 1em;
 padding:1rem;
  text-align: right;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: black;
  margin-top:40px;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 80%;
    height: 30rem;
  }

  @media (min-width: 501px) and (max-width: 900px) {
    width: 70%;
    height: 38rem;
  }

  @media (min-width: 901px) and (max-width: 1500px) {
    width:55%;
    height: 700px;
  }
`;

const ContainerButton= styled.div`
display:flex;
justify-content:center;
width: 100%;
height: 65vh;
 
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 400px;
  }

  @media (min-width: 501px) and (max-width: 900px) {
    width: 100%;
    height: 420px;
   
  }

  @media (min-width: 901px) and (max-width: 1500px) {
    width: 100%;
    height: 550px;
   
  }
 
`

const ContainerOperador = styled.div`
  width:30%;
  height:63vh;

  @media (min-width: 320px) and (max-width: 500px) {
    width:30%;
  height:400px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  }

  @media (min-width: 501px) and (max-width: 900px) {
  
   width:20%;
  
  }

  @media (min-width: 901px) and (max-width: 1500px) {
   
    width:20%;
    height:550px;
    
    display:flex;
    flex-direction:column;
    align-items:center;
    
  }
`

const ContainerNumber = styled.div`
width: 76%;
  height: 63vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 76%;
    height: 400px;
  }

  @media (min-width: 501px) and (max-width: 900px) {
  
  }

  @media (min-width: 901px) and (max-width: 1500px) {
  
   width: 70%;
    height: 550px;
    
  }

`

const BotaoLaranja = styled.button`
  background-color: #FF9500;
  color: #ffffff;
  width: 75px;
  height: 75px;
  font-size: 24px;
  margin: 8px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 320px) and (max-width: 500px) {
    width: 3.4rem;
    height: 3.4rem;
    margin:0;
   
  }

  @media (min-width: 501px) and (max-width: 900px) {
    width: 70px;
    height: 70px;
    font-size: 18px;
    margin: 12.3px;
  }

  @media (min-width: 901px) and (max-width: 1500px) {
    width: 90px;
    height: 90px;
    font-size: 20px;
    margin: 10px;
    
  }
`

const Visor = styled.h1 `
  color: #fff;
  font-size: 3.5em;
  border-bottom:3px solid #131212;
  margin-right:20px;
  font-family: 'Open Sans', sans-serif;

  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 2em;
  }

  @media (min-width: 501px) and (max-width: 900px) {
    font-size: 2.5em;
  }

  @media (min-width: 901px) and (max-width: 1500px) {
    font-size: 3em;
    margin:30px;
  }

`

const BotaoCalculadora = styled.button `
  width: 80px;
  height: 80px;
  font-size: 24px;
  margin: 5px;
  background-color: #E0E0E0;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 320px) and (max-width: 500px) {
    width: 60px;
    height: 60px;
    font-size: 16px;
    margin: 3px;
  }

  @media (min-width: 501px) and (max-width: 900px) {
    width: 70px;
    height: 70px;
    font-size: 18px;
    margin: 4px;
  }

  @media (min-width: 901px) and (max-width: 1500px) {
    width: 90px;
    height: 90px;
    font-size: 20px;
    margin: 5px;
  }

  `


export const Calculadora = () => {
  const [num, setNum] = useState('0');
  const [numAntigo, setNumAntigo] = useState('0');
  const [operador, setOperador] = useState('');
  const [esperandoNovoNumero, setEsperandoNovoNumero] = useState(false);

  const inserirNumero = (e) => {
    const numero = e.target.value;
    if (esperandoNovoNumero) {
      setNum(numero);
      setEsperandoNovoNumero(false);
    } else {
      setNum(num === '0' ? numero : num + numero);
    }
  };

  const limpar = () => {
    setNum('0');
    setNumAntigo('0');
    setOperador('');
  };

  const trocarSinal = () => {
    setNum(String(-parseFloat(num)));
  };

  const lidarComOperador = (e) => {
    const operadorEntrada = e.target.value;
    if (operador) {
      calcular();
      setOperador(operadorEntrada);
    } else {
      setOperador(operadorEntrada);
      setNumAntigo(num);
      setEsperandoNovoNumero(true);
    }
  };

  const calcular = () => {
    const novoNumero = parseFloat(num);
    const numeroAntigo = parseFloat(numAntigo);

    switch (operador) {
      case '+':
        setNum(String(numeroAntigo + novoNumero));
        break;
      case '-':
        setNum(String(numeroAntigo - novoNumero));
        break;
      case 'x':
        setNum(String(numeroAntigo * novoNumero));
        break;
      case '/':
        if (novoNumero !== 0) {
          setNum(String(numeroAntigo / novoNumero));
        } else {
          setNum('Erro');
        }
        break;
      default:
        return;
    }

    setOperador('');
  };

  return (
    <Main>
      <Container>
        <Visor>{num}</Visor>
        <ContainerButton>
          <ContainerNumber>
          <Botao onClick={limpar}>AC</Botao>
          <Botao onClick={trocarSinal}>+/-</Botao>
          <Botao onClick={() => setNum(String(parseFloat(num) / 100))}>%</Botao>
          <Botao value="7" onClick={inserirNumero}>7</Botao>
          <Botao value="8" onClick={inserirNumero}>8</Botao>
          <Botao value="9" onClick={inserirNumero}>9</Botao>
          <Botao value="4" onClick={inserirNumero}>4</Botao>
          <Botao value="5" onClick={inserirNumero}>5</Botao>
          <Botao value="6" onClick={inserirNumero}>6</Botao>
          <Botao value="1" onClick={inserirNumero}>1</Botao>
          <Botao value="2" onClick={inserirNumero}>2</Botao>
          <Botao value="3" onClick={inserirNumero}>3</Botao>
          <Botao value="0" onClick={inserirNumero}>0</Botao>
          <Botao onClick={() => setNum(num + '.')} value=".">.</Botao>
        </ContainerNumber>

        <ContainerOperador>
          <BotaoLaranja value="/" onClick={lidarComOperador}>/</BotaoLaranja>
          <BotaoLaranja value="x" onClick={lidarComOperador}>x</BotaoLaranja>
          <BotaoLaranja value="-" onClick={lidarComOperador}>-</BotaoLaranja>
          <BotaoLaranja value="+" onClick={lidarComOperador}>+</BotaoLaranja>
          <BotaoLaranja onClick={calcular}>=</BotaoLaranja>
        </ContainerOperador>
        </ContainerButton>
      </Container>
    </Main>
  );
};
