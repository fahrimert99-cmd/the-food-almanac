// Sahne 22 — çalışmalarda potasyum klorür hapları kullanıldı; sonuç muz hakkında değil.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPill = K(0, "potassium chloride"), tNot = K(0, "not bananas"), tDo = K(1, "can do"), tDay = K(2, "banana a day");
  const [s1, a1] = pop(t, K(1, "results show"), 0.5);
  const [s2, a2] = pop(t, tDay - 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [120, 80, 1700], [200, 120, 1560])} />
      <Etiket t={t} bas={tPill} bitis={tNot + 0.2} capa={[1000, 880]} konum={[1500, 330]} metin="POTASSIUM CHLORIDE PILLS" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tNot} capa={[330, 650]} konum={[250, 250]} metin="NOT BANANAS" renk={RENK.mercan} boyut={28} />
      <div style={{ position: "absolute", left: 1000, top: 300, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
        <Hap metin="SHOWN: WHAT POTASSIUM CAN DO" renk={RENK.yesil} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 400, transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
        <Hap metin="NOT SHOWN: A BANANA A DAY" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};

export default S22;
