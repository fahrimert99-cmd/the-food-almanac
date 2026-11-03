// Sahne 38 — AHA: yarar, balık daha az sağlıklı yiyeceğin yerine geçtiğinde en büyük; "takas, ekleme değil".
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const [sc, al] = pop(t, K(0, "American Heart"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={pencere}>
        <Etiket t={t} bas={K(0, "seafood") - 0.1} capa={[640, 540]} konum={[900, 330]} metin="SEAFOOD" renk={RENK.yesil} boyut={30} />
        <Etiket t={t} bas={K(0, "less healthy") - 0.1} capa={[560, 150]} konum={[930, 70]} metin="LESS HEALTHY FOODS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {al > 0 && (
        <div style={{ position: "absolute", left: 1330, top: 140, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
          background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "12px 28px 12px 20px", display: "flex", alignItems: "center", gap: 14,
          fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, whiteSpace: "nowrap" }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />AMERICAN HEART ASSOCIATION
        </div>
      )}
      <Not t={t} bas={K(0, "advisory")} metin="advisory" x={1334} y={210} boyut={30} agirlik={700} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "So what fish")} satirlar={["A SWAP,", "NOT AN ADD-ON"]} x={1310} y={470} boyut={84} />
      <Not t={t} bas={K(1, "part of the story")} metin="part of the story" x={1314} y={660} boyut={36} genislik={560} />
    </>
  );
};

export default S38;
