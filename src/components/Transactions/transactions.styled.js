import styled from '@emotion/styled';

export const TransactionBox = styled.table`
  width: 300px;

`;
export const TransactionHead = styled.thead``;
export const TransactionList = styled.tr`
width: 98px;
height: 35px;
padding: 0px;
margin: 0px;
`;
export const TransactionDescriptionText = styled.th`
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
padding: 0px;
margin: 0px;
background-color: #cacaca;
`;
export const TransactionInfo = styled.tbody`
padding: 0px;
margin: 0px;
text-align: center;

`;
export const TransactionValue = styled.td`
padding: 0px;
margin: 0px;
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
background-color: #fcfad5;

`;



