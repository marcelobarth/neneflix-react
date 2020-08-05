import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastrarVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=od7keaByWMM',
    categoria: 'Front End',
  });
  return (
    <PageDefault>
      <h1>Cadastro Video</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: 1,
            })
            .then(() => {
              console.log('Cadastrou!');
              history.push('/');
            });
        }}
      >
        <FormField
          label='Título do Video'
          name='titulo'
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label='URL'
          name='url'
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label='Categoria'
          name='url'
          value={values.titulo}
          onChange={handleChange}
        />
        <Button type='submit'>Cadastrar</Button>
      </form>

      <Link to='/cadastro/categoria'>Cadastro Categoria</Link>
    </PageDefault>
  );
}

export default CadastrarVideo;
