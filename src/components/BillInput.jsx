import PropTypes from "prop-types";

const BillInput = ({ bill, onSetBill }) => {
  //   console.log(bill);
  return (
    <div className="mt-2">
      <label className="label label-text mr-2">How Much is The Bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Type Bill here"
        className="input input-bordered input-info w-full max-w-xs"
      />
    </div>
  );
};

BillInput.propTypes = {
  bill: PropTypes.number.isRequired,
  onSetBill: PropTypes.func.isRequired,
};

export default BillInput;
