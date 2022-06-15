import styled from "styled-components";

export const HomeContainer = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   width: 100%;
   min-height: 100vh;
   padding-top: 100px;
   background-color: wheat;
   align-items: center;
`;
export const PesList = styled.div`
   display: flex;
   flex-direction: column;
   width: 80%;
   max-width: 1200px;
`;
export const PesItem = styled.div`
   display: grid;
   width: 100%;
   margin-bottom: 15px;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 40px;
   grid-template-areas: 'jmeno rasa zvuk tlacitko';
`;
export const PesItemDetail = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   font-size: 16px;
   align-items: center;
   justify-content: center;
   background-color: orange;
   &:nth-child(1){
      grid-area: jmeno;
   }
   &:nth-child(2){
      grid-area: rasa;
   }
   &:nth-child(3){
      grid-area: zvuk;
   }
`;
export const PesItemOdstranit = styled.button`
   display: flex;
   width: 100%;
   height: 100%;
   font-size: 16px;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   grid-area: tlacitko;
   background-color: blue;
`;
export const PridejPsa = styled.div`
   display: grid;
   width: 80%;
   max-width: 1200px;
   margin: 25px 0;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 40px;
   grid-template-areas: 'jmeno rasa zvuk tlacitko';
   gap: 10px;
`;
export const PridejPsaDetail = styled.input`
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;
   background-color: white;
   padding-left: 10px;
   &:nth-child(1){
      grid-area: jmeno;
   }
   &:nth-child(2){
      grid-area: rasa;
   }
   &:nth-child(3){
      grid-area: zvuk;
   }
`;
export const PridejPsaButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   background-color: yellow;
   grid-area: tlacitko;
   cursor: pointer;
`;