import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import TeamMember from './TeamMember'
import Form from './Form'

const initialFormValue = {
  username: '',
  email: '',
  role : ''
}

function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValue] = useState(initialFormValue)

  const [error, setError ] = useState('');

  const updateForm= (inputName, inputValue) => {
    setFormValue({...formValues,[inputName]:inputValue});
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role : formValues.role
    }
    if (!newMember.username || !newMember.email || !newMember.role) {
      setError('All fields are required!')
    } else {
      setTeam([ newMember, ...team ]);
      setFormValue(initialFormValue);
      setError("")
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <h2>{error}</h2>

        <Form 
        value= {formValues} 
        update= {updateForm}
        submit = {submitForm}
        />

        {
          team.map (people => {
            return (
              <TeamMember
              key = {people.id}
              details= {people}
              />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
