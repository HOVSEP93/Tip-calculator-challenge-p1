import PropTypes from "prop-types";

const Percentage = ({ children, percentage, onSelect }) => {
  //   console.log(percentage);
  return (
    <div>
      <label className="label label-text mr-2">{children}</label>
      <select
        className="select select-info w-full max-w-xs"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">That was Bad (0%) 🤬</option>
        <option value="5">Nahhh (5%) ☹️</option>
        <option value="10">Normal (10%) 😒</option>
        <option value="15">It Was Good (15%) 😀</option>
        <option value="20">Amazing Service (20%) 🤗</option>
      </select>
    </div>
  );
};

Percentage.propTypes = {
  children: PropTypes.node.isRequired,
  percentage: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Percentage;
