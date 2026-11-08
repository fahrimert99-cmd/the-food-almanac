// Sahne 54 — İpucu 5: kayıt tut. Solda tansiyon aleti + defter etiketlenir, sağda başlık ve üç adımlı liste.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc5, al5] = pop(t, K(0, "Five"), 0.55);
  const tKeep = K(1, "Keep"), tBp = K(2, "blood pressure"), tWrite = K(2, "write"), tBring = K(2, "bring");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 90, 1760])}>
        <Etiket t={t} bas={tBp} capa={[440, 495]} konum={[420, 250]} metin="HOME MONITOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={tWrite} capa={[520, 790]} konum={[1020, 840]} metin="WRITE IT DOWN" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1040, top: 80, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
        transform: `scale(${sc5})`, opacity: al5, border: `4px solid ${RENK.kagitAcik}` }}>5</div>
      <BaslikBlok t={t} bas={tKeep} satirlar={["WRITE IT", "DOWN"]} x={1040} y={250} boyut={104} />
      <Liste t={t} x={1040} y={470} aralik={100} boyut={36} isaret="onay" genislik={800} ogeler={[
        { bas: tBp, metin: "READINGS AT HOME", renk: RENK.lacivert },
        { bas: tWrite + 0.3, metin: "WRITE THEM DOWN", renk: RENK.altin },
        { bas: tBring, metin: "BRING TO APPOINTMENTS", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S54;
