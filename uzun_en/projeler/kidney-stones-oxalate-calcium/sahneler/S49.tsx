// Sahne 49 — sınırlar: yalnızca erkekler. Boş kâğıt alanına sağdan başlık.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLimits = K(0, "limits"), tMen = K(1, "only men"), tEd = K(1, "editorial"), tUnk = K(1, "unknown"), tWomen = K(1, "women");
  const [sc, al] = pop(t, tUnk, 0.5);
  const [s2, a2] = pop(t, tWomen, 0.45);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [20, 0, 1800], [110, 40, 1700])}>
        <Etiket t={t} bas={tEd} capa={[880, 545]} konum={[1330, 740]} metin="EDITORIAL" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tLimits - 0.1} bitis={tMen - 0.1} metin="THE LIMITS" x={1230} y={300} boyut={96} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={tMen} satirlar={["MEN ONLY"]} x={1230} y={300} boyut={110} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tMen + 0.35} metin="in the 2002 trial" x={1236} y={380} boyut={36} renk={RENK.gri} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1230, top: 500, display: "flex", alignItems: "center", gap: 18,
          transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <div style={{ width: 70, height: 70 }}>
            <Ikon t={t} bas={tUnk} ad="soru" x={35} y={35} boyut={70} zemin={RENK.altin} />
          </div>
          <div style={{ opacity: a2, transform: `scale(${s2})`, transformOrigin: "0 50%", background: RENK.kagitAcik,
            border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "12px 28px", fontFamily: INTER, fontWeight: 800,
            fontSize: 30, letterSpacing: 2, color: RENK.murekkep, whiteSpace: "nowrap" }}>WOMEN: UNKNOWN</div>
        </div>
      )}
    </>
  );
};
export default S49;
