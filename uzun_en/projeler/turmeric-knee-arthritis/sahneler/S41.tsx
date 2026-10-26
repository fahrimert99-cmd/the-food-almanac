// Sahne 41 — vaka serisi sınırı: nadir; 7/10 gen varyantı, 3/7 karabiber.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(1, "black pepper"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 20, 1800])}>
        <Etiket t={t} bas={K(0, "case series")} bitis={c[1].bas - 0.1} capa={[780, 700]} konum={[1500, 740]} metin="A CASE SERIES" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "rare")} bitis={c[1].bas - 0.1} metin="RARE" x={50} y={190} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "cannot tell")} bitis={c[1].bas - 0.1} metin="a case series cannot tell us how often" x={50} y={280} boyut={28} genislik={290} agirlik={700} />
      <VurguRozet t={t} bas={K(1, "Seven")} vurgu="7 OF 10" not="carried a gene variant" x={195} y={130} genislik={310} boyut={76} />
      <VurguRozet t={t} bas={K(1, "three of the seven")} vurgu="3 OF 7" not="supplements tested" x={1560} y={640} genislik={340} boyut={76} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1560, top: 842, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 22px", fontFamily: INTER,
        fontWeight: 800, fontSize: 24, letterSpacing: 1, color: RENK.murekkep }}>ALSO BLACK PEPPER EXTRACT</div>
    </>
  );
};

export default S41;
