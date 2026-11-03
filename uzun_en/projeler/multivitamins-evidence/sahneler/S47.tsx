// Sahne 47 — 2. madde: standart doz, mega-doz tek hapları atla.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Rozet: React.FC<{ t: number; bas: number; n: string; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - 56, top: y - 56, width: 112, height: 112, borderRadius: "50%", background: RENK.lacivert,
      border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 10px 26px rgba(48,40,34,0.25)", color: "#fff", display: "flex",
      alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70, transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(2, "Skip") - 0.15;
  const [sx, ax] = pop(t, K(2, "Skip"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={K(1, "multivitamin")} bitis={gec} capa={[810, 430]} konum={[310, 650]} metin="STANDARD MULTIVITAMIN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "recommended dose")} bitis={gec} capa={[1110, 790]} konum={[1520, 890]} metin="RECOMMENDED DOSE" renk={RENK.altin} />
      </Kamera>
      <Rozet t={t} bas={K(0, "Two")} n="2" x={150} y={170} />
      <BaslikBlok t={t} bas={K(1, "standard")} bitis={gec} satirlar={["STANDARD", "DOSE"]} x={90} y={330} boyut={84} />
      <Not t={t} bas={K(1, "COSMOS")} bitis={gec} metin="WHAT THE COSMOS TRIALS TESTED" x={96} y={470} boyut={30} genislik={460} agirlik={800} renk={RENK.altin} />
      {/* sağ sütun: mega-doz tek haplar */}
      <div style={{ position: "absolute", left: 1690 - 32, top: 160, opacity: ax, transform: `scale(${sx})` }}>
        <IkonYol ad="carpi" boyut={64} renk={RENK.mercan} kalinlik={9} />
      </div>
      <BaslikBlok t={t} bas={K(2, "mega-dose")} satirlar={["MEGA-DOSE", "SINGLE PILLS"]} x={1690} y={280} boyut={58} hiza="orta" renkler={[RENK.mercan, RENK.mercan]} />
      <Not t={t} bas={K(2, "unless")} metin="UNLESS YOUR DOCTOR SUGGESTS ONE" x={1690} y={430} boyut={28} genislik={340} hiza="orta" agirlik={800} />
    </>
  );
};

export default S47;
