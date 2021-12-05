import PropTypes from "prop-types";
import { Wrapper } from "./styles";
const Transaction = ({ transaction: { value, label } }) => (
  <Wrapper value={value}>
    Label:{label}
    <p>Value:{value}</p>
    <br />
  </Wrapper>
);
Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Transaction;
