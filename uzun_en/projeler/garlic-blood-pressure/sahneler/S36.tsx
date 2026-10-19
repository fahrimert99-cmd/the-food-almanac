// Sahne 36 — ana nokta: sarımsak reçeteli tedaviye ek, ilaç bırakılmaz (steteskop + sarımsak masası).
import React from "react";
import { AltSis, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "key point"), tSarimsak = K(1, "Garlic"), tRecete = K(1, "prescribed");
  const tDurma = K(2, "stop"), tDoktor = K(3, "Any");
  const pDur = eout(ilerle(t, tDurma - 0.3, 0.5)) * sol(t, tDoktor - 0.2, 0.3);
  const pDok = eout(ilerle(t, tDoktor, 0.5));
  const pKart = Math.max(pDur, pDok);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1760])}>
        <Etiket t={t} bas={tSarimsak} bitis={tDurma - 0.4} capa={[1495, 330]} konum={[1640, 150]} metin="GARLIC ADD-ON" renk={RENK.yesil} />
        <Etiket t={t} bas={tRecete} bitis={tDurma - 0.4} capa={[600, 335]} konum={[560, 175]} metin="PRESCRIBED TREATMENT" renk={RENK.lacivert} />
      </Kamera>
      <AltSis a={0.7} />
      <Baslik t={t} bas={tBaslik} bitis={tSarimsak + 0.9} metin="THE KEY POINT" x={90} y={110} boyut={92} renk={RENK.lacivert} />
      {/* alt kart: ilaç bırakılmaz / doktora danışılır */}
      <div style={{ position: "absolute", left: 110, top: 740, width: 900, height: 190, opacity: pKart, borderRadius: 24,
        background: "rgba(251,248,241,0.96)", border: `4px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.22)" }} />
      <Ikon t={t} bas={tDurma} bitis={tDoktor - 0.2} ad="carpi" x={190} y={835} boyut={88} zemin={RENK.mercan} />
      <Baslik t={t} bas={tDurma} bitis={tDoktor - 0.2} metin="DON'T STOP OR REPLACE" x={260} y={795} boyut={62} renk={RENK.mercan} />
      <Not t={t} bas={K(2, "blood")} bitis={tDoktor - 0.2} metin="a blood pressure medicine because of a supplement" x={262} y={838} boyut={30} genislik={720} />
      <Ikon t={t} bas={tDoktor} ad="onay" x={190} y={835} boyut={88} zemin={RENK.yesil} />
      <Baslik t={t} bas={tDoktor} metin="ASK YOUR DOCTOR" x={260} y={795} boyut={62} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(3, "through")} metin="any change should go through your doctor" x={262} y={838} boyut={30} genislik={720} />
    </>
  );
};
export default S36;
