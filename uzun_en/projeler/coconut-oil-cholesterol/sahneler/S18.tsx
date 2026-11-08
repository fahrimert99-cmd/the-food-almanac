// Sahne 18 — ek faydalar görülmedi: hindistancevizi, kavanoz, mezura; sağda sonuç satırları.
import React from "react";
import { Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string }> = ({ t, bas, bitis, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1150, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
      padding: "8px 28px 8px 12px", boxShadow: "0 8px 20px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.gri, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ width: 20, height: 5, borderRadius: 3, background: "#fff" }} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(0, "no significant"), tOil = K(0, "coconut oil"), tBody = K(0, "body weight"), tWaist = K(0, "waist"),
    tSugar = K(0, "blood sugar"), tInf = K(0, "inflammation"), tExtra = K(1, "extra health"), tShow = K(1, "didn't show up");
  const tSon = tExtra - 0.2;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [0, 190, 1760])}>
        <Etiket t={t} bas={tOil} bitis={tBody + 0.4} capa={[630, 690]} konum={[900, 560]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tWaist} bitis={tSon} capa={[470, 905]} konum={[860, 860]} metin="WAIST SIZE" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tNo} satirlar={s.meta.baslik?.satirlar ?? []} x={1150} y={200} boyut={112} />
      <Satir t={t} bas={tBody} bitis={tSon} y={470} metin="BODY WEIGHT" />
      <Satir t={t} bas={tWaist} bitis={tSon} y={565} metin="WAIST SIZE" />
      <Satir t={t} bas={tSugar} bitis={tSon} y={660} metin="BLOOD SUGAR" />
      <Satir t={t} bas={tInf} bitis={tSon} y={755} metin="INFLAMMATION MARKERS" />
      <Baslik t={t} bas={tExtra} metin="EXTRA BENEFITS" x={1150} y={520} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tShow} metin="DIDN'T SHOW UP HERE" x={1150} y={620} boyut={46} renk={RENK.mercan} font="inter" agirlik={800} />
    </>
  );
};

export default S18;
