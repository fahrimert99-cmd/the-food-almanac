// Sahne 15 — dürüst özet: terazi üzerinde iki etiket (bulantı hafifler olabilir / kusma gösterilmedi).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOzet = K(0, "honest summary");
  const tAmel = K(1, "After surgery");
  const tBul = K(1, "take the edge off");
  const tKus = K(1, "hasn't been shown");
  const [sc, al] = pop(t, tAmel, 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={tBul} capa={[560, 640]} konum={[390, 820]} metin="MAY EASE NAUSEA" renk={RENK.yesil} />
        <Etiket t={t} bas={tKus} capa={[1300, 650]} konum={[1540, 820]} metin="VOMITING: NOT SHOWN" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tOzet - 0.2} satirlar={["THE HONEST", "SUMMARY"]} x={90} y={150} boyut={72} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 90, top: 330, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="AFTER SURGERY" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};
export default S15;
