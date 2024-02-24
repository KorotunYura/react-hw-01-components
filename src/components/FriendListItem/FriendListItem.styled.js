import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $status }) => {
    if ($status) {
      return '#008000';
    }
    return '#B22222';
  }};
`;

export const Avatar = styled.img`
  background-color: #dcdcdc;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 24px;
`;
