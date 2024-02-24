import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-collapse: collapse;
`;

export const Th = styled.th`
  width: calc(100% / 3);
  background-color: #4682b4;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  border: 1px solid #a9a9a9;
`;

export const Td = styled.td`
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #a9a9a9;
  border: 1px solid #a9a9a9;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #dcdcdc;
  }
`;
