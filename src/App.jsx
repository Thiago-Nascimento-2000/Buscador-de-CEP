import { Container, InputSearch, ContainerForm, ButtonSubmit, BoxSearchAndSubmite, Title } from './components/Container.style'
import { api } from './services/api'

import { FiSearch } from 'react-icons/fi';

import { useState } from 'react'


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha o campo com um CEP")
      return;
    } 

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    }catch{
      alert("CEP Invalido");
      setInput("");
    }
  }



  return (
    <Container>
      <Title>Buscador de CEP</Title>
      <BoxSearchAndSubmite>
      <InputSearch
      placeholder='Digite seu CEP aqui'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <ButtonSubmit
      onClick={handleSearch}
      >Buscar
      <FiSearch size={15}
      />
      </ButtonSubmit>
      </BoxSearchAndSubmite>
      {Object.keys(cep).length > 0 && (
      <ContainerForm>
        <h1>CEP: {cep.cep} </h1>
        <span>Bairro: {cep.bairro} </span>
        <span>Rua: {cep.logradouro} </span>
        <span>Cidade: {cep.localidade} - {cep.uf} </span>
      </ContainerForm>
      )}
    </Container>
  )
}

export default App
