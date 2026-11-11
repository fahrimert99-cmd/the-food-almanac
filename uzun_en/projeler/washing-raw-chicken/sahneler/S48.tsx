// Sahne 48 — açık soru: hiç ölçülmemiş; çalışmalar bakterinin yolunu izledi.
import React from "react";
import { BaslikBlok, Kamera, Liste, Not, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tNobody = K(0, "nobody"), tIll = K(0, "illnesses"), tTrack = K(1, "tracked"), tWhere = K(1, "where");
  const tNot = K(1, "not how");
  const gec = c[1].bas - 0.1;
  // bakteri noktaları: tavuktan sağ üste yay
  const nokta = Array.from({ length: 9 }, (_, i) => {
    const u = ((t - tWhere - i * 0.28) / 1.8);
    if (u <= 0 || u >= 1) return null;
    const e = einout(u);
    const x = 1300 + 420 * e, y = 580 - 40 * e - 130 * Math.sin(Math.PI * e);
    return <circle key={i} cx={x} cy={y} r={9} fill={RENK.mercan} opacity={Math.sin(Math.PI * u)} />;
  });
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <BaslikBlok t={t} bas={tNobody} bitis={gec} satirlar={["OPEN", "QUESTION"]} x={1860} y={170} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tIll} bitis={gec} metin="HOW MANY ILLNESSES FROM RINSING ALONE?" x={1860} y={420} hiza="sag" boyut={30}
        genislik={620} />
      <Not t={t} bas={tTrack} metin="THE STUDIES TRACKED:" x={1230} y={130} boyut={26} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="onay" x={1230} y={190} boyut={34} genislik={640}
        ogeler={[{ bas: tWhere, metin: "WHERE BACTERIA TRAVEL", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" x={1230} y={290} boyut={34} genislik={640}
        ogeler={[{ bas: tNot, metin: "HOW MANY GOT SICK", renk: RENK.mercan }]} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>{nokta}</svg>
    </>
  );
};

export default S48;
