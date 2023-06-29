import PropTypes from "prop-types";

const Reset = ({ onRest }) => {
  return (
    <div>
      <button className="btn btn-info" onClick={onRest}>
        Reset
      </button>
    </div>
  );
};

Reset.propTypes = {
  onRest: PropTypes.func.isRequired,
};

export default Reset;
