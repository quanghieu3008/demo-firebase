import styled from 'styled-components';

export const NameAcc = styled.span`
  font-weight: 600;
  margin-left: 10px;
`;
export const AvarIcon = styled.span`
  cursor: pointer;
`;
export const Hr = styled.hr`
  background: #dadde1;
  border-width: 0;
  color: #dadde1;
  height: 1px;
`;
export const UpLoad = styled.div`
  margin: 10px;
  width: 100px;
`;
export const PickImg = styled.input`
  /* ::file-selector-button {
    
    background-color:#5A5D62;
    padding:8px;
    border:0px;
    border-radius: .2em;
    color:white;
    font-weight:600
   
} */
  color: white;
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: 'Chọn ảnh từ thư viện';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 0.1px solid white;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
    color: black;
    padding-left: 23.5%;
    padding-right: 23.5%;
  }
  :hover::before {
    border: 0.1px solid black;
  }
  /* :active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
} */
  /* margin-left:10px;
 
  color: #9FA6B6;
  font-weight: 600; */
`;
