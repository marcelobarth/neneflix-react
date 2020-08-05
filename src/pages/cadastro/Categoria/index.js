import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastrarCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3000/categorias'
      : 'https://neneflix-react.herokuapp.com/categorias';
    fetch(URL).then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        setCategorias([...resposta]);
      }
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {values.titulo}</h1>
      <form
        onSubmit={function handleSubmit(infoEvento) {
          infoEvento.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
      >
        <FormField
          label='Titulo da Categoria'
          type='text'
          name='titulo'
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>
      {categorias.length === 0 && (
        <div>
          {/*Carregando */}
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>;
        })}
      </ul>
      <Link to='/'>Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastrarCategoria;
