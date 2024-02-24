import {
  Item,
  Label,
  List,
  StatisticsContainer,
  Title,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage> {percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsContainer>
  );
};
