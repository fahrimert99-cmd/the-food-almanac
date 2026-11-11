// Sahne 13 — Uygulama ve takip: ücretsiz zeytinyağı, eğitim seansları, ortanca 4,8 yıl takip, sayılan olaylar.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tUcret = K(0, "free"), tEgit = K(0, "education"), t48 = K(1, "4.8");
  const tAt = K(1, "heart attacks"), tIn = K(1, "strokes"), tOl = K(1, "deaths");
  const [sc, al] = pop(t, t48, 0.6);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        {/* takvimin anlamsız yazılı sayfası boşaltılır, yerine 4.8 yazılır */}
        <div style={{ position: "absolute", left: 755, top: 482, width: 243, height: 326, background: "#F3EEE2" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            transform: `scale(${sc})`, opacity: al }}>
            <div style={{ fontFamily: ANTON, fontSize: 120, lineHeight: 1, color: RENK.koyuYesil }}>4.8</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 4, color: RENK.lacivert }}>YEARS</div>
          </div>
        </div>
      </Kamera>
      <Etiket t={t} bas={tUcret} bitis={tEgit - 0.2} capa={[433, 440]} konum={[600, 100]} metin="FREE OLIVE OIL" renk={RENK.koyuYesil} />
      <Liste t={t} x={1230} y={300} aralik={100} boyut={32} isaret="onay" genislik={650} ogeler={[
        { bas: tUcret, metin: "FREE EXTRA VIRGIN OIL", renk: RENK.koyuYesil, bitis: t48 - 0.2 },
        { bas: tEgit, metin: "EDUCATION SESSIONS", renk: RENK.altin, bitis: t48 - 0.2 },
      ]} />
      <BaslikBlok t={t} bas={t48} satirlar={m.baslik!.satirlar} x={1860} y={190} boyut={120} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={t48 + 0.5} metin={m.baslik!.not!} x={1860} y={270} hiza="sag" genislik={560} boyut={34} />
      <Liste t={t} x={1260} y={470} aralik={96} boyut={34} isaret="nokta" genislik={620} ogeler={[
        { bas: tAt, metin: "HEART ATTACKS", renk: RENK.mercan },
        { bas: tIn, metin: "STROKES", renk: RENK.altin },
        { bas: tOl, metin: "HEART DEATHS", renk: RENK.lacivert },
      ]} />
    </>
  );
};

export default S13;
