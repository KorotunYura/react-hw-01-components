import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  border: 2px solid #a9a9a9;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  border-bottom: 2px solid #a9a9a9;
`;

export const Avatar = styled.img`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: #dcdcdc;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  text-align: center;
  color: #a9a9a9;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  text-align: center;
  color: #a9a9a9;
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #dcdcdc;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-basis: calc((100%) / 3);
  padding: 20px 10px;
  &:not(:last-child) {
    border-right: 2px solid #a9a9a9;
  }
`;

export const Label = styled.span`
  color: #a9a9a9;
`;

export const Quantity = styled.span`
  font-size: 15px;
  font-weight: 800;
`;
