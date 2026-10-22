// Sahne 34 — yalnızca erkekler: 50, 59, 72; boş sandalye kadın ve yaşlı yetişkin sorusu.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SAYILAR = [
  { ifade: "50,", metin: "50" },
  { ifade: "59", metin: "59" },
  { ifade: "72", metin: "72" },
];

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(1, "women")} capa={[780, 300]} konum={[1620, 190]} metin="WOMEN?" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "older")} capa={[800, 590]} konum={[1620, 700]} metin="OLDER ADULTS?" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "only")} satirlar={["ONLY", "MEN"]} x={70} y={250} boyut={104} />
      {SAYILAR.map((n, i) => {
        const [sc, al] = pop(t, K(0, n.ifade), 0.5);
        return (
          <div key={n.metin} style={{ position: "absolute", left: 70 + i * 150, top: 560, width: 126, height: 126, borderRadius: "50%",
            transform: `scale(${sc})`, opacity: al, background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center",
            justifyContent: "center", fontFamily: ANTON, fontSize: 62, border: `4px solid ${RENK.kagitAcik}`,
            boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n.metin}</div>
        );
      })}
      <Not t={t} bas={K(0, "50,") + 0.2} metin="MEN ENROLLED IN THE THREE TRIALS" x={70} y={710} boyut={28} agirlik={800} genislik={420} />
    </>
  );
};

export default S34;
