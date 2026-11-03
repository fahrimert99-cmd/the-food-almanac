// Sahne 12 — 2013 güncellemesi: 10 deney, 543 yetişkin, doz ve süre aralığı. Görsel ortada bant; sayılar üstte.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sayac, VurguRozet } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTen = K(0, "ten trials"), tAdult = K(0, "543"), t120 = K(1, "120 milligrams"), t6 = K(1, "6 grams"), tHafta = K(1, "four to eighteen");
  const [sc, al] = pop(t, tHafta, 0.55);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={t120} capa={[240, 430]} konum={[310, 330]} metin="120 MG" renk={RENK.altin} />
        <Etiket t={t} bas={t6} capa={[1693, 430]} konum={[1600, 330]} metin="6 G A DAY" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={tTen} vurgu={sayac(t, tTen, 10, 0.8)} not="TRIALS" x={760} y={125} genislik={300} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tAdult} vurgu={sayac(t, tAdult, 543, 1.0)} not="ADULTS WITH TYPE 2 DIABETES" x={1230} y={125} genislik={500} boyut={92} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 960, top: 855, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex",
        alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
        padding: "8px 28px 8px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.lacivert, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="saat" boyut={30} renk="#fff" />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>4 TO 18 WEEKS</span>
      </div>
    </>
  );
};
export default S12;
