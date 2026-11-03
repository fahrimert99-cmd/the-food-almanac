// Sahne 50 — mutfak sabahı: denemelerde en tutarlı değişim açlık glukozunda (tek sabah ölçümü), A1C'de (uzun dönem) değil.
import React from "react";
import { Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol, Baslik } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTr = K(0, "trials"), tFast = K(1, "fasting"), tMorn = K(1, "morning"), tLong = K(1, "long-term"), tA1 = K(1, "a1c");
  const aKart = Math.min(1, pop(t, tLong, 0.5)[1]);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [110, 70, 1700])}>
        <Etiket t={t} bas={tFast} bitis={7.9} capa={[707, 667]} konum={[420, 520]} metin="FASTING GLUCOSE" renk={RENK.yesil} />
        <Etiket t={t} bas={tMorn} bitis={7.9} capa={[1250, 505]} konum={[1480, 330]} metin="ONE MORNING READING" renk={RENK.altin} boyut={24} />
      </Kamera>
      <Cip t={t} bas={tTr} bitis={3.9} x={960} y={110} metin="WHAT THE TRIALS MEASURED" renk={RENK.lacivert} boyut={30} />
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 540, top: 50, width: 840, height: 190, opacity: aKart, borderRadius: 26,
          background: "rgba(252,248,236,0.96)", border: `4px solid ${RENK.altin}`, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }} />
      )}
      <Baslik t={t} bas={tLong} metin="LONG-TERM PICTURE" x={960} y={120} boyut={78} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={tA1} metin="WHAT YOUR A1C SHOWS" x={960} y={178} hiza="orta" boyut={34} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S50;
