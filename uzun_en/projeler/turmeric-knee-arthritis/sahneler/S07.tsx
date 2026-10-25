// Sahne 7 — ilk tuzak: baharat tozu ile deneylerdeki ekstrakt aynı şey değil.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, INTER, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPay = K(1, "small share");
  const kartSon = K(1, "not") - 0.1;
  const aK = eout(ilerle(t, tPay - 0.3, 0.5)) * sol(t, kartSon);
  const pB = eout(ilerle(t, K(1, "share"), 0.8));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={K(1, "turmeric powder")} bitis={K(1, "extracts") - 0.2} capa={[700, 830]} konum={[1050, 930]} metin="TURMERIC POWDER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "extracts")} capa={[980, 520]} konum={[1450, 630]} metin="TRIAL EXTRACT" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "first")} bitis={tPay - 0.4} metin="FIRST CATCH" x={1860} y={800} boyut={110} hiza="sag" renk={RENK.mercan} />
      {aK > 0 && (
        <div style={{ position: "absolute", left: 1220, top: 640, width: 640, height: 260, opacity: aK, background: "#FCF8EC",
          border: `3px solid ${RENK.lacivert}`, borderRadius: 24, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ position: "absolute", left: 30, top: 20, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
          <div style={{ position: "absolute", left: 30, top: 100, width: 580, height: 56, borderRadius: 12, background: "#E8E0CC", overflow: "hidden" }}>
            <div style={{ width: 80 * pB, height: "100%", background: RENK.altin }} />
          </div>
          <div style={{ position: "absolute", left: 30, top: 62, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.altin }}>CURCUMIN</div>
          <div style={{ position: "absolute", left: 30, top: 176, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.lacivert }}>THE REST OF THE SPICE</div>
        </div>
      )}
      <BaslikBlok t={t} bas={K(1, "not")} satirlar={["NOT THE", "SAME THING"]} x={1860} y={740} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "why that matters")} metin="WE WILL COME BACK TO THIS" x={1860} y={905} boyut={32} hiza="sag" renk={RENK.altin} agirlik={800} />
    </>
  );
};

export default S07;
