import styled from 'styled-components';
import { getRandomColor } from 'utils/getRandomColor';

export const Block = styled.section`
  text-align: center;
`;
export const Title = styled.h2`
  font-size: ${p => p.theme.styles.h1.fz}px;
  font-weight: ${p => p.theme.styles.h1.fontWeight};
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
`;
export const StatItem = styled.li`
  border: 2px solid ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[3]}px;
  transition: color 500ms linear, transform 500ms ease;
  cursor: pointer;
  background-color: #${getRandomColor};

  :hover {
    background-color: ${p => p.theme.colors.hover};
    transform: scale(1.1);
  }
`;
export const StatName = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-right: ${p => p.theme.space[4]}px;
`;
export const StatValue = styled.span`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;
