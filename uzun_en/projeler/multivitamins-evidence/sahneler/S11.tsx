// Sahne 11 — 14.641 hekim: sağda başlık, 50+ rozeti, sonra rastgele iki kol ve "kör" not.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1480, top: y, width: 380, height: 72, transform: `scale(${sc})`, opacity: al, display: "flex",
      alignItems: "center", justifyContent: "center", background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 20,
      fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(0, "14,641"), tHekim = K(0, "physicians,"), tYas = K(0, "aged");
  const tRast = K(1, "randomly"), tVit = K(1, "multivitamin"), tPla = K(1, "placebo,"), tKor = K(1, "neither");
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1760]);
  const s2 = s.cumleler[1].bas;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={cam} />
      <Panel a={eout(ilerle(t, 0.1, 0.8))} genislik={600} />
      <BaslikBlok t={t} bas={tSayi - 0.1} satirlar={s.meta.baslik!.satirlar} x={1460} y={170} boyut={104} renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <Etiket t={t} bas={tHekim} bitis={s2} capa={[990, 648]} konum={[1020, 520]} metin="MALE US PHYSICIANS" renk={RENK.lacivert} boyut={26} />
      <VurguRozet t={t} bas={tYas} bitis={s2} vurgu="50+" not="AGED 50 OR OLDER" x={1670} y={520} genislik={340} boyut={96} />
      <div style={{ position: "absolute", left: 1480, top: 470, opacity: eout(ilerle(t, tRast, 0.5)) }}>
        <Not t={t} bas={tRast} metin="RANDOMLY ASSIGNED" x={0} y={0} boyut={26} agirlik={800} renk={RENK.altin} genislik={380} />
      </div>
      <Kutu t={t} bas={tVit} y={550} metin="DAILY MULTIVITAMIN" renk={RENK.yesil} />
      <Kutu t={t} bas={tPla} y={650} metin="PLACEBO" renk={RENK.mercan} />
      <Ikon t={t} bas={tKor} ad="soru" x={1520} y={840} boyut={72} zemin={RENK.lacivert} />
      <Not t={t} bas={tKor + 0.1} metin="NEITHER KNEW WHO GOT WHICH" x={1572} y={815} boyut={26} agirlik={800} genislik={310} />
    </>
  );
};

export default S11;
