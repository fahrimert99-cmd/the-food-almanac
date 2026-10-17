// Sahne 14 — Ried 2019: yalnızca hipertansiyon, 12 deneme, 553 kişi; –8.3 sistolik, –5.5 diyastolik.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const b = m.baslik!;
  const tBas = K(1, "12"), tKisi = K(1, "553");
  const [sd, ad] = pop(t, K(2, "five"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <Panel a={eout(ilerle(t, tBas - 0.2, 0.6))} taraf="sag" genislik={560} />
      <KaynakEtiketi t={t} metin={m.etiket ?? ""} bas={K(0, "Ried")} />
      <Etiket t={t} bas={K(0, "repeated")} bitis={K(0, "hypertension") - 0.1} capa={[1000, 420]} konum={[1000, 120]} metin="REPEATED ANALYSIS" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "hypertension")} bitis={K(1, "covered") + 0.2} capa={[1000, 420]} konum={[1000, 120]} metin="HYPERTENSION ONLY" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tBas} satirlar={[b.satirlar[0]]} x={1860} y={170} boyut={92} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tKisi} satirlar={[b.satirlar[1]]} x={1860} y={270} boyut={92} hiza="sag" renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(2, "eight")} vurgu={b.vurgu!} not={b.not} x={1650} y={380} genislik={400} />
      <div style={{ position: "absolute", left: 1650, top: 700, transform: `translate(-50%, 0) scale(${sd})`, opacity: ad, background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px", whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800,
        fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>–5.5 DIASTOLIC</div>
    </>
  );
};

export default S14;
