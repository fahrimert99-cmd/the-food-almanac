// Sahne 20 — haftalık hap kutusu: üçüncü deneme, 101 yetişkin, 8 hafta.
import React from "react";
import { Etiket, Ikon, Kamera, KaynakEtiketi, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; x: number; renk: string }> = ({ t, bas, metin, x, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: 868, transform: `translate(-50%,0) scale(${sc})`, opacity: al, background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5,
      color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Hap t={t} bas={K(0, "101")} metin="101 ADULTS" x={330} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(0, "curcumin")} bitis={9.0} capa={[860, 330]} konum={[1000, 75]} metin="CURCUMIN EXTRACT" renk={RENK.altin} />
      <Hap t={t} bas={K(0, "500")} metin="500 MG TWICE A DAY" x={800} renk={RENK.altin} />
      <Hap t={t} bas={K(0, "placebo")} metin="OR PLACEBO" x={1190} renk={RENK.lacivert} />
      <Hap t={t} bas={K(0, "eight")} metin="8 WEEKS" x={1500} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(0, "eight") + 0.2} ad="saat" x={1760} y={905} boyut={80} zemin={RENK.koyuYesil} />
    </>
  );
};

export default S20;
