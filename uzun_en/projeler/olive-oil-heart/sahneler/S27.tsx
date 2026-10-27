// Sahne 27 — 28 yıllık izlem: zeytinlik üstünde gökyüzü boşluğunda istif kartlar, sonra −19% rozeti.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const Hapci: React.FC<{ t: number; bas: number; bitis: number; y: number; sayi: string; ad: string; renk: string }> = ({ t, bas, bitis, y, sayi, ad, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const cik = t > bitis ? Math.max(0, 1 - (t - bitis) / 0.4) : 1;
  if (al <= 0 || cik <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al * cik,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 22, padding: "4px 26px 8px", textAlign: "center",
      boxShadow: "0 10px 26px rgba(48,40,34,0.22)", whiteSpace: "nowrap" }}>
      <span style={{ fontFamily: ANTON, fontSize: 70, color: renk }}>{sayi}</span>{" "}
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{ad}</span>
    </div>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.1;
  const tIns = K(0, "92,000"), tYil = K(0, "28"), tOlum = K(0, "36,856");
  const tKasik = K(1, "tablespoon"), t19 = K(1, "19 percent");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [60, 50, 1760])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
      <Hapci t={t} bas={tIns} bitis={bit} y={130} sayi="~92,000" ad="PEOPLE" renk={RENK.koyuYesil} />
      <Hapci t={t} bas={tYil} bitis={bit} y={240} sayi="28" ad="YEARS" renk={RENK.altin} />
      <Hapci t={t} bas={tOlum} bitis={bit} y={350} sayi="36,856" ad="DEATHS" renk={RENK.lacivert} />
      <Etiket t={t} bas={tKasik} capa={[1573, 800]} konum={[1150, 900]} metin="OLIVE OIL" renk={RENK.yesil} />
      <VurguRozet t={t} bas={t19} vurgu="–19%" not="risk of dying from cardiovascular disease" x={960} y={150} genislik={560} renk={RENK.koyuYesil} />
    </>
  );
};

export default S27;
