import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = () => {
  return (
    <>
      <div className="btn-small">
        <FontAwesomeIcon icon={faStar} color="yellow" /> 4.7
      </div>
    </>
  );
};

export default Rating;
