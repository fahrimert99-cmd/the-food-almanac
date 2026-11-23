// Sahne 15 — 4 yılda bir 131 maddelik anket; gluten alımı beş eşit gruba ayrıldı.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tFive = K(1, "five"), out = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 0, 1840])}>
        <Etiket t={t} bas={K(0, "questionnaire")} bitis={out} capa={[760, 820]} konum={[560, 910]} metin="131 ITEMS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "gluten")} bitis={K(1, "then")} capa={[330, 520]} konum={[560, 250]} metin="GLUTEN INTAKE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "four")} bitis={out} metin="EVERY 4 YEARS" x={70} y={130} boyut={100} renk={RENK.lacivert} style={{ textShadow: `0 0 18px ${RENK.kagit}` }} />
      <Baslik t={t} bas={tFive} metin="FIVE EQUAL GROUPS" x={70} y={130} boyut={90} renk={RENK.koyuYesil} />
      {[0, 1, 2, 3, 4].map((i) => {
        const [sc, al] = pop(t, tFive + 0.3 + i * 0.18, 0.45);
        return (
          <div key={i} style={{ position: "absolute", left: 70 + i * 100, top: 210, width: 76, height: 76, borderRadius: "50%",
            background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 44, transform: `scale(${sc})`, opacity: al * sol(t, 1e9),
            border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 6px 16px rgba(48,40,34,0.2)" }}>{i + 1}</div>
        );
      })}
    </>
  );
};

export default S15;
