// Sahne 8 — Maughan & Griffin derlemesi: zaman çizgisi, ardından doz başlığı.
import React from "react";
import { ANTON, AltSis, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCal = K(0, "studies");
  const tYil = K(0, "1966");
  const tDoz = K(1, "250");
  const tFinc = K(1, "roughly");
  const tKisa = K(1, "briefly");
  const bitisYil = tDoz - 0.15;

  // 1966 — 2002 zaman çizgisi (sağ boş kâğıt alanı)
  const pYil = eout(ilerle(t, tYil, 0.5));
  const pCizgi = eout(ilerle(t, K(0, "between"), 1.4));
  const aYil = pYil * sol(t, bitisYil);
  const yil = (m: string, x: number, bas: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: 420, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol(t, bitisYil),
        background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "6px 30px",
        fontFamily: ANTON, fontSize: 64, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{m}</div>
    );
  };

  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 60, 1500], [0, 110, 1360])}>
        <Etiket t={t} bas={tCal} bitis={K(0, "2002") - 0.1} capa={[240, 540]} konum={[230, 200]} metin="STUDY REVIEW" renk={RENK.altin} />
        <Etiket t={t} bas={tFinc} capa={[760, 700]} konum={[1010, 640]} metin="2–3 CUPS" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.5} yukseklik={130} />
      {yil("1966", 1380, tYil)}
      {yil("2002", 1730, K(0, "2002"))}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1470} x2={1470 + 180 * pCizgi} y1={420} y2={420} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="14 10"
          opacity={aYil} />
      </svg>
      <Not t={t} bas={tYil + 0.3} bitis={bitisYil} metin="STUDIES PUBLISHED" x={1555} y={500} hiza="orta" boyut={30} agirlik={800} />
      <BaslikBlok t={t} bas={tDoz} satirlar={["250–300 MG", "AT ONCE"]} x={1860} y={300} boyut={100} hiza="sag" />
      <Not t={t} bas={tKisa} metin="BRIEFLY RAISED URINE OUTPUT" x={1860} y={540} hiza="sag" boyut={32} agirlik={800} genislik={560} renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S08;
