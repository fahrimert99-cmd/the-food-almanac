// Sahne 49 — tostun üzerine tarçın serpmek: mutfakta kullanılan miktarlar NIH'e göre büyük olasılıkla güvenli.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDust = K(0, "dusting"), tNat = K(1, "national"), tCook = K(1, "cooking"), tSafe = K(1, "safe.");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [150, 60, 1700], [210, 110, 1560])}>
        <Etiket t={t} bas={tDust} bitis={3.4} capa={[780, 500]} konum={[560, 200]} metin="CINNAMON DUSTING" renk={RENK.altin} />
      </Kamera>
      <Cip t={t} bas={tNat} bitis={6.8} x={960} y={110} metin="NATIONAL INSTITUTES OF HEALTH" renk={RENK.lacivert} boyut={28} />
      <BaslikBlok t={t} bas={tCook} satirlar={["IN COOKING", "LIKELY SAFE"]} x={140} y={190} boyut={84} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={tSafe} ad="onay" x={1560} y={300} boyut={110} />
    </>
  );
};

export default S49;
