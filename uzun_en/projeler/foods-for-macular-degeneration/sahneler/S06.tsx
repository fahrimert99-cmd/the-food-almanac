// Sahne 6 — göz çizimi solda; sağda ŞEMATİK retina + makula ve ne işe yaradığı.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const CX = 1500, CY = 390, R = 175;

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRetina = K(0, "retina."), tMakula = K(1, "macula,");
  const pR = eout(ilerle(t, tRetina - 0.1, 0.7));
  const [sm, am] = pop(t, tMakula, 0.6);
  const aTag = eout(ilerle(t, tRetina + 0.3, 0.5));
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 20, 1760], [40, 60, 1680])}>
        <Etiket t={t} bas={K(0, "your eye")} bitis={tRetina + 0.8} capa={[650, 500]} konum={[900, 810]} metin="YOUR EYE" renk={RENK.altin} />
      </Kamera>
      {/* şematik retina */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <circle cx={CX} cy={CY} r={R * pR} fill="#EBCFBF" stroke={RENK.lacivert} strokeWidth={5} opacity={pR} />
        <circle cx={CX} cy={CY} r={R * pR * 0.7} fill="none" stroke={RENK.lacivert} strokeOpacity={0.2} strokeWidth={3} strokeDasharray="10 10" />
        <circle cx={CX} cy={CY} r={34 * sm} fill={RENK.altin} stroke="#fff" strokeWidth={5} opacity={am} />
      </svg>
      <Baslik t={t} bas={tRetina} metin="RETINA" x={CX} y={CY - R - 50} boyut={64} hiza="orta" renk={RENK.lacivert} bitis={tMakula - 0.1} />
      <Baslik t={t} bas={tMakula} metin="THE MACULA" x={CX} y={CY - R - 50} boyut={72} hiza="orta" renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: CX - 100, top: CY + R + 18, width: 200, textAlign: "center", opacity: aTag,
        fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
      <Not t={t} bas={tMakula + 0.25} metin={s.meta.baslik!.not!} x={CX} y={CY + R + 56} hiza="orta" boyut={32} agirlik={800} renk={RENK.lacivert} />
      <Liste t={t} isaret="onay" boyut={32} aralik={72} x={1180} y={715} ogeler={[
        { bas: K(1, "read,"), metin: "READ" },
        { bas: K(1, "recognize"), metin: "RECOGNIZE FACES" },
        { bas: K(1, "fine"), metin: "SEE FINE DETAIL" },
      ]} />
    </>
  );
};

export default S06;
