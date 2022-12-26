import styled from '@emotion/styled';


export const ContactsList = styled.ul`
  margin-left: 0;
  margin-top: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  min-width: 280px;
`;

export const ContactRow = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
`;

export const ButtonOnDelete = styled.button`
  background-color: white;
  display: flex;
  height: 20px;
  width: 40px;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-size: 12px;

  &:hover {
    border: 1px solid lightcoral;
  }
`;
