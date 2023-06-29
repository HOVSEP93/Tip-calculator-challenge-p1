import PropTypes from "prop-types";

const OutPut = ({ bill, tip }) => {
  return (
    <div>
      <h1 className="text-3xl">
        You Pay $ {bill + tip} ($ {bill} + $ {tip} Tip) 😇
      </h1>
    </div>
  );
};

OutPut.propTypes = {
  bill: PropTypes.number.isRequired,
  tip: PropTypes.number.isRequired,
};

export default OutPut;
