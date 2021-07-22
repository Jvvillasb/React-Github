import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
    title?: string;
    description?: Object;
    link?: boolean;
}

const ResultCard = ( { title, description, link} : Props) => {

    const path : string = description ? description.toString() : '';

    return (
      <div className="records-container">
        <div className="result-title">{title}: </div>
        {link ? (
          <>
            <div className="result-description link">
              <Link
                to={{
                  pathname:
                    path,
                }}
                target="_blank"
              >{' '}
              {description}
              </Link>
            </div>
          </>
        ) : (
          <div className="result-description">{description}</div>
        )}
      </div>
    );
}

export default ResultCard;