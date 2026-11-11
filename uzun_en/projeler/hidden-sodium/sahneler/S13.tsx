// Sahne 13 — ortalama 3.500 mg: sağ boş kâğıtta başlık, sonra ortalama ile sınır çubukları.
import React from "react";
import { BaslikBlok, Hap, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Cubuk: React.FC<{ t: number; bas: number; y: number; w: number; renk: string; ad: string; deger: string }> = ({ t, bas, y, w, renk, ad, deger }) => {
  const a = eout(ilerle(t, bas, 0.4)), p = eout(ilerle(t, bas, 0.9));
  if (a <= 0) return null;
  return (
    <>
      <div style={{ position: "absolute", left: 1400, top: y - 44, opacity: a, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>
        {ad} · <span style={{ color: renk }}>{deger}</span>
      </div>
      <div style={{ position: "absolute", left: 1400, top: y, width: w * p, height: 46, borderRadius: 10, background: renk, opacity: a }} />
    </>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tOrt = K(0, "average,"), tSay = K(0, "3,500"), tYuk = K(1, "well"), tLim = K(1, "recommended");
  const [sc, al] = pop(t, tOrt, 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} />
      <div style={{ position: "absolute", right: 60, top: 140, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="ON AVERAGE" renk={RENK.altin} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={tSay} satirlar={b.satirlar} x={1860} y={290} boyut={140} hiza="sag" renkler={[RENK.mercan]} />
      <Not t={t} bas={tSay + 0.3} metin={b.not!} x={1860} y={380} hiza="sag" boyut={30} genislik={520} />
      <Cubuk t={t} bas={tYuk} y={560} w={460} renk={RENK.mercan} ad="THIS STUDY" deger="3,500 MG" />
      <Cubuk t={t} bas={tLim} y={690} w={460 * 2300 / 3500} renk={RENK.yesil} ad="USUAL LIMIT" deger="2,300 MG" />
    </>
  );
};

export default S13;
