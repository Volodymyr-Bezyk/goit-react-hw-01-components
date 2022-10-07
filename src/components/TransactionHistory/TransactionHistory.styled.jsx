import styled from 'styled-components';

export const TableHeading = styled.th`
  background-color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes[3]}px;
  padding: ${p => p.theme.space[3]}px;
  text-transform: uppercase;
`;
export const TableRow = styled.tr`
  text-align: center;

  transition: background-color 300ms ease-in;

  :nth-child(odd) {
    background-color: ${p => p.theme.colors.bg};
  }
  :hover {
    background-color: ${p => p.theme.colors.green};
  }
`;

export const TableBlock = styled.td`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  transition: color 300ms ease-in;
  cursor: pointer;
  :hover {
    color: ${p => p.theme.colors.red};
  }
  :first-child {
    text-transform: capitalize;
  }
`;
