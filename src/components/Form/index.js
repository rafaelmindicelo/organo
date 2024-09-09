import TextField from '../TextField';
import DropdownList from '../DropdownList';
import './Form.css';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSaving = (event) => {
    event.preventDefault();
    props.onAddedCollaborator({
      name,
      role,
      image,
      team,
    });
    setName('');
    setRole('');
    setImage('');
    setTeam('');
  };
  return (
    <section className='form'>
      <form onSubmit={onSaving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          value={name}
          onChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          value={role}
          onChanged={(value) => setRole(value)}
        />
        <TextField
          label='Imagem'
          placeholder='Informe o endereço da imagem'
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label='Time'
          items={props.teams}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
