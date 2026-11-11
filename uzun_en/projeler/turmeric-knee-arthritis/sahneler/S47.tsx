// Sahne 47 — Madde 1: doktor/eczacıya danış. Sağ üstte başlık + risk listesi, solda şişe etiketleri.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0, 0.55);
  const tDoktor = K(1, "doctor");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [100, 50, 1700])}>
        {/* defterdeki anlamsız el yazısı parşömen rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 380, top: 625, width: 600, height: 300, transform: "rotate(-17deg)",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(240,232,212,1) 0%, rgba(240,232,212,1) 70%, rgba(240,232,212,0) 100%)" }} />
        <Etiket t={t} bas={K(2, "bottle")} capa={[760, 340]} konum={[340, 250]} metin="BRING THE BOTTLE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "every supplement")} capa={[700, 500]} konum={[330, 400]} metin="EVERY SUPPLEMENT" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 76, top: 64, width: 112, height: 112, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76,
        transform: `scale(${sc})`, opacity: al, border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>1</div>
      <Baslik t={t} bas={tDoktor - 0.6} metin="TALK TO YOUR" x={1860} y={150} boyut={62} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tDoktor - 0.45} metin="DOCTOR OR PHARMACIST" x={1860} y={222} boyut={62} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "especially")} metin="ESPECIALLY IF YOU TAKE OR HAVE:" x={1860} y={282} hiza="sag" boyut={26} agirlik={800} renk={RENK.altin} />
      <Liste t={t} x={1340} y={335} aralik={60} boyut={30} isaret="nokta" genislik={520}
        ogeler={[
          { bas: K(1, "blood thinner"), metin: "A BLOOD THINNER", renk: RENK.mercan },
          { bas: K(1, "gallstones"), metin: "GALLSTONES", renk: RENK.mercan },
          { bas: K(1, "liver problems"), metin: "LIVER PROBLEMS", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S47;
