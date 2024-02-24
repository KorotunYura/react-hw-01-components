import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #a9a9a9;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #a9a9a9;
`;

export const List = styled.ul`
  display: flex;
  background-color: #b0c4de;
`;

export const Item = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 5);
  padding-top: 20px;
  padding-bottom: 20px;
  &:not(:last-child) {
    border-right: 2px solid #a9a9a9;
  }
`;

export const Label = styled.span`
  color: #e0ffff;
  /* text-align: center; */
`;

export const Percentage = styled.span`
  color: #e0ffff;
  font-size: 24px;
  /* text-align: center; */
`;
