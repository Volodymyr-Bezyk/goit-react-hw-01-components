import PropTypes from 'prop-types';
import {
  Title,
  StatList,
  StatItem,
  StatName,
  StatValue,
} from './Statistics.styled';
import { Box } from 'components/Box';

export function Statistics({ title, stats }) {
  return (
    <Box textAlign="center">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatName>{label}</StatName>
            <StatValue>{percentage} %</StatValue>
          </StatItem>
        ))}
      </StatList>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
