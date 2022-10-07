import PropTypes from 'prop-types';
import {
  Block,
  Title,
  StatList,
  StatItem,
  StatName,
  StatValue,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Block>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatName>{label}</StatName>
            <StatValue>{percentage} %</StatValue>
          </StatItem>
        ))}
      </StatList>
    </Block>
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
