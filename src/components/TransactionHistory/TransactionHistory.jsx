import PropTypes from 'prop-types';
import {
  Table,
  TableHeading,
  TableRow,
  TableBlock,
} from './TransactionHistory.styled';
import { Box } from 'components/Box';

export function TransactionHistory({ items }) {
  return (
    <Box as="table" ml={0} mr={0} width="opt" p={3}>
      <thead>
        <TableRow>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableBlock>{type}</TableBlock>
            <TableBlock>{amount}</TableBlock>
            <TableBlock>{currency}</TableBlock>
          </TableRow>
        ))}
      </tbody>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
