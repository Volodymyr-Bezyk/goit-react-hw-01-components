import styled from 'styled-components';

export const Picture = styled.img`
  max-width: ${p => p.theme.sizes.full};
  height: ${p => p.theme.sizes.auto};
  display: block;
`;

export const Name = styled.p`
  margin: ${p => p.theme.space[1]};
  cursor: pointer;
  font-size: ${p => p.theme.styles.h1.fz}px;
  font-weight: ${p => p.theme.styles.h1.fontWeight};

  transition: color 600ms ease;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;
export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;
export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;
export const StatsItem = styled.li``;
export const StatsName = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;
export const StatsQuantity = styled.span`
  color: ${p => p.theme.colors.accent};
  cursor: pointer;
`;
