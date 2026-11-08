// Sahne 36 — limon, sirke, tuz: pişirmenin yerini tutmaz.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTuz = K(0, "salt water"), tSirke = K(0, "vinegar"), tLimon = K(0, "lemon");
  const tBaslik = K(0, "substitute"), tIsi = K(1, "heat");
  const [sc, al] = pop(t, tIsi + 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1740])}>
        <Etiket t={t} bas={tTuz} bitis={tBaslik + 1} capa={[560, 440]} konum={[860, 230]} metin="SALT WATER" renk={RENK.altin} />
        <Etiket t={t} bas={tSirke} bitis={tBaslik + 1} capa={[353, 480]} konum={[200, 150]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={tLimon} bitis={tBaslik + 1} capa={[260, 693]} konum={[290, 880]} metin="LEMON JUICE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tBaslik} satirlar={["NO SHORTCUT", "FROM LEMON"]} x={1230} y={250} boyut={104} />
      <div style={{ position: "absolute", left: 1230, top: 520, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "12px 30px 12px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 22, height: 22, borderRadius: "50%", background: RENK.mercan }} />
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>ONLY HEAT KILLS IT</span>
      </div>
      <Not t={t} bas={tIsi + 0.5} metin="Heat reliably kills the bacteria." x={1230} y={610} boyut={30} genislik={560} />
    </>
  );
};

export default S36;
