import { Profile } from '../../types/profile';
import ResultCard from '../ResultCard';

import './styles.css';
type Props = {
  profile?: Profile;
};
const ResultContainer = ({ profile }: Props) => {
  return (
    <div className="result-container">
      <div className="profile-image">
        <img src={profile?.avatar_url} alt={profile?.name} />
      </div>
      <div className="profile-records">
        <h3>Informações</h3>
        <ResultCard title="Perfil" description={profile?.url} link={true} />
        <ResultCard title="Seguidores" description={profile?.followers} />
        <ResultCard title="Localidade" description={profile?.location} />
        <ResultCard title="Número" description={profile?.name} />
      </div>
    </div>
  );
};

export default ResultContainer;