// Sahne 54 — sınırlar (silmez, bakımın yerini tutmaz, uzun vadeli kanıt yok) + "ücretsiz, bu akşam dene".
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tErase = K(0, "erase a meal"), tCare = K(0, "replace care"), tLong = K(0, "long term");
  const tBut = K(1, "But it costs"), tTonight = K(1, "tonight");
  const bitisSol = tBut - 0.15;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const pSol = eout(ilerle(t, 0.1, 0.6)) * sol(t, bitisSol);
  const pSag = eout(ilerle(t, tBut - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={p}>
        {/* alt sol köşedeki sahte yazı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 0, top: 1034, width: 1000, height: 46, background: kagit(1) }} />
        <Etiket t={t} bas={tTonight} capa={[1095, 935]} konum={[760, 850]} metin="TRY IT TONIGHT" renk={RENK.altin} />
      </Kamera>
      <Panel a={pSol} taraf="sol" genislik={940} />
      <Liste t={t} isaret="carpi" boyut={40} x={90} y={290} aralik={110} genislik={800} ogeler={[
        { bas: tErase, metin: "WON'T ERASE A MEAL", renk: RENK.mercan, bitis: bitisSol },
        { bas: tCare, metin: "WON'T REPLACE CARE", renk: RENK.mercan, bitis: bitisSol },
        { bas: tLong, metin: "LONG-TERM: UNPROVEN", renk: RENK.altin, bitis: bitisSol },
      ]} />
      <Panel a={pSag} taraf="sag" genislik={780} />
      <Baslik t={t} bas={tBut} metin="COSTS" x={1240} y={330} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBut + 0.2} metin="NOTHING" x={1240} y={470} boyut={130} renk={RENK.koyuYesil} />
    </>
  );
};

export default S54;
