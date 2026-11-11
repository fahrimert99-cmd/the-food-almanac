// Sahne 19 — HDL yükseldi ama LDL'yi dengelediği gösterilmedi (AHA 2017); dürüst kısım sonra.
import React from "react";
import { Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 28px", fontFamily: INTER, fontWeight: 800,
      fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 20px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>{metin}</div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRaise = K(0, "raise"), tHdl = K(0, "HDL,"), tAha = K(1, "American Heart"), tOff = K(1, "offsets"), tHigh = K(1, "higher LDL"),
    tHold = K(2, "Hold that"), tHonest = K(2, "honest part");
  const [sx, ax] = pop(t, tOff, 0.5);
  const aCmp = ax * sol(t, tHold - 0.2);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1800])}>
        <Etiket t={t} bas={0.1} bitis={tAha} capa={[390, 800]} konum={[720, 700]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tAha} capa={[400, 280]} konum={[690, 190]} metin="AHA · 2017 REVIEW" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tRaise} satirlar={s.meta.baslik?.satirlar ?? []} x={940} y={200} boyut={110} />
      <VurguRozet t={t} bas={tHdl} bitis={tOff - 0.3} vurgu={s.meta.baslik?.vurgu ?? "+4"} not={s.meta.baslik?.not} x={1180} y={450} genislik={400} boyut={120} renk={RENK.yesil} />
      {aCmp > 0 && (
        <>
          <Kutu t={t} bas={tOff - 0.1} bitis={tHold - 0.2} x={940} y={540} metin="HDL RISE" renk={RENK.yesil} />
          <div style={{ position: "absolute", left: 1215, top: 540, transform: `translate(0,-50%) scale(${sx})`, opacity: aCmp, fontFamily: INTER, fontWeight: 800,
            fontSize: 56, color: RENK.mercan }}>≠</div>
          <Kutu t={t} bas={tHigh - 0.1} bitis={tHold - 0.2} x={1290} y={540} metin="HIGHER LDL" renk={RENK.mercan} />
        </>
      )}
      <Baslik t={t} bas={tHonest - 0.4} metin="THE HONEST PART" x={940} y={730} boyut={70} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tHonest + 0.3} metin="LATER IN THE VIDEO" x={944} y={805} boyut={34} renk={RENK.gri} font="inter" agirlik={800} aralik={4} />
    </>
  );
};

export default S19;
