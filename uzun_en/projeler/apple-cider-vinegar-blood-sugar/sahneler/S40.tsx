// Sahne 40 — diş laboratuvar çalışması: su bardağı + diş fırçası; sağda/solda senkron vuruşlar.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDish = K(0, "teeth in a dish"), tSaliva = K(0, "saliva"), tDilute = K(1, "dilute");
  const tNot = K(1, "not to sip");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [110, 60, 1700])}>
        <Etiket t={t} bas={tSaliva - 0.1} bitis={tDilute - 0.3} capa={[420, 520]} konum={[200, 700]} metin="NO SALIVA" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tDilute - 0.1} capa={[650, 400]} konum={[200, 560]} metin="DILUTE IT" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <Baslik t={t} bas={tDish} bitis={tNot - 0.2} metin="TEETH IN A DISH" x={1010} y={110} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin="DON'T SIP ALL DAY" x={1010} y={110} boyut={70} renk={RENK.mercan} />
    </>
  );
};

export default S40;
