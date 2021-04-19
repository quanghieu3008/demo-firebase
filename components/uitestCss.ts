import { Table, Button, Card, Form } from 'antd';
import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: none;
`;
export const Td = styled.td`
  border: 1px solid #111;
  min-width: 40px;
  text-align: center;
`;
export const BoxIcon = styled.div`
  /* width:100px; */
  /* position:absolute; */
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  &::after {
    width: 0;
    content: '';
    height: 0;
    border-top: 20px solid red;
    position: absolute;
    top: 0;
    margin-left: 10px;
    background-color: yellow;
    z-index: 11;
    border-bottom: 20px solid black;
  }
`;
export const BtnAdd = styled(Button)`
  margin-right: 10px;
`;
export const BtnEdit = styled(Button)`
  margin-right: 10px;
  background-color: #d0d0d0;
`;
export const CustomTable = styled(Table)`
  tr {
    th {
      background-color: #cbc7c6;
    }
  }
`;
export const CustomCard = styled(Card)`
  margin-top: 8%;
`;
export const CustomForm = styled(Form)`
  /* position:absolute;
z-index:10;
left:38%; */
`;
