import './styles.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Profile } from '../../types/profile';
import ResultContainer from '../../components/ResultContainer';


type FormData = {
  user: string;
};

const GitSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });
  const [profileId, setProfile] = useState<Profile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      })
  };

  useEffect(() => {
      console.log(profileId);
      
  }, [profileId])

  return (
    <div className="user-search-container">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
        <ResultContainer profile={profileId}/>
    </div>
  );
};

export default GitSearch;