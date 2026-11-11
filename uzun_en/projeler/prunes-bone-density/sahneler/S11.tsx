// Sahne 11 — katılımcılar: 235 kadın, ortalama yaş 62, aralık 55–75 (bekleme odası).
import React from "react";
import { Baslik, ANTON, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Nokta: React.FC<{ t: number; bas: number; x: number; metin: string }> = ({ t, bas, x, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: 395, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, background: RENK.lacivert,
      color: "#fff", borderRadius: 14, padding: "2px 20px", fontFamily: ANTON, fontSize: 44, lineHeight: 1.3 }}>{metin}</div>
  );
};

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLed = K(0, "led by"), tMary = K(0, "Mary Jane"), tSouza = K(0, "Souza"), t235 = K(0, "235");
  const tYas = K(1, "62,"), tAralik = K(1, "from 55");
  const pCizgi = eout(ilerle(t, tAralik, 0.8));
  const [sd, ad] = pop(t, tYas + 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      {/* önce araştırmacı, sonra 235 */}
      <Baslik t={t} bas={tLed} bitis={4.1} metin="RESEARCHERS LED BY" x={1000} y={95} boyut={30} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      <Baslik t={t} bas={tMary} bitis={4.1} metin="MARY JANE" x={1000} y={170} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tSouza} bitis={4.1} metin="DE SOUZA" x={1000} y={275} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={t235} bitis={tYas - 0.15} vurgu="235" not="postmenopausal women" x={1000} y={120} genislik={460} />
      <VurguRozet t={t} bas={tYas} vurgu="62" not="average age" x={1000} y={120} genislik={460} renk={RENK.koyuYesil} />
      {/* yaş aralığı: 55 — 75, ortalama işareti */}
      <Nokta t={t} bas={tAralik} x={760} metin="55" />
      <Nokta t={t} bas={K(1, "to 75") + 0.1} x={1240} metin="75" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pCizgi > 0 && <line x1={800} y1={420} x2={800 + 400 * pCizgi} y2={420} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />}
        <g transform={`translate(${760 + 480 * (7 / 20)} 420) scale(${sd})`} opacity={ad}>
          <circle r={17} fill={RENK.mercan} stroke={RENK.kagitAcik} strokeWidth={4} />
          <text y={-34} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, fill: RENK.lacivert, letterSpacing: 1 }}>AVG 62</text>
        </g>
      </svg>
    </>
  );
};

export default S11;
