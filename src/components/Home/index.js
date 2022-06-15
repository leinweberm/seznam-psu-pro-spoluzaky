import React, { useRef, useState } from 'react';
import { HomeContainer, PesItem, PesItemDetail, PesItemOdstranit, PesList, PridejPsa, PridejPsaButton, PridejPsaDetail } from './homeStyles';
import { SeznamPsu } from './seznamPsu';

export default function Home() {
  const pocetPsu = useRef(SeznamPsu.length);
  const [seznamPsu, setSeznamPsu] = useState(SeznamPsu);
  const [pridejPsa, setPridejPsa] = useState({
    id: (pocetPsu.current + 1),
    jmeno: '',
    rasa: '',
    zvuk: '',
  });

  const handleChange = (e) => {
    setPridejPsa({...pridejPsa, [e.target.name]: e.target.value});
  };

  const handleAdd = (e) => {
    setSeznamPsu(seznamPsu => {
      return [...seznamPsu, pridejPsa];
    });
    pocetPsu.current++;
    setPridejPsa({
      id: (pocetPsu.current + 1),
      jmeno: '',
      rasa: '',
      zvuk: '',
    });  
  }

  const handleDelete = (e) => {
    const removeId = e.target.getAttribute("data-id");
    setSeznamPsu(seznamPsu.filter(pes => pes.id != removeId));
  };

  return (
    <HomeContainer> 
      <h1>TOTO JE DOMOVSKÁ STRÁNKA</h1>
      <PridejPsa>
        <PridejPsaDetail
          type="text" name='jmeno' placeholder='jméno psa' value={pridejPsa.jmeno} onChange={handleChange}>
        </PridejPsaDetail>
        <PridejPsaDetail
          type="text" name='rasa' placeholder='zadejte rasu' value={pridejPsa.rasa} onChange={handleChange}>
        </PridejPsaDetail>
        <PridejPsaDetail type="text" name='zvuk' placeholder='jak dělá váš pes?' value={pridejPsa.zvuk} onChange={handleChange} >
        </PridejPsaDetail>
        <PridejPsaButton onClick={handleAdd}>
          PŘIDAT
        </PridejPsaButton>
      </PridejPsa>
      <PesList>
        <PesItem>
          <PesItemDetail>jméno</PesItemDetail>
          <PesItemDetail>rasa</PesItemDetail>
          <PesItemDetail>zvuk</PesItemDetail>
          <PesItemOdstranit />
        </PesItem>
        {seznamPsu.map((pes) => (
          <PesItem key={pes.id}>    
            <PesItemDetail>{ pes.jmeno }</PesItemDetail>
            <PesItemDetail>{ pes.rasa }</PesItemDetail>
            <PesItemDetail>{ pes.zvuk }</PesItemDetail>
            <PesItemOdstranit data-id={pes.id} onClick={handleDelete}>ODSTRANIT</PesItemOdstranit>
          </PesItem>
        ))}
      </PesList>   
    </HomeContainer>
  )
}
