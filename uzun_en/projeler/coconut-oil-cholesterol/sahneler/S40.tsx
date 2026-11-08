// Sahne 40 — Denge: ara sıra kullanım sorun değil; kaygı düzenli, yüksek alım.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const PopHap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 28,
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

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKaynak = K(1, "Rob"), tAra = K(1, "occasional"), tZarar = K(1, "unlikely"), tSon = K(2, "regular,");
  return (
    <>
      {/* pencere sol alttaki imza kalıntısını (x<300) dışarıda tutar */}
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [380, 100, 1500], [440, 120, 1400])}>
        <Etiket t={t} bas={tAra} bitis={tSon - 0.2} capa={[1213, 505]} konum={[1000, 330]} metin="OCCASIONAL USE" renk={RENK.yesil} />
        <Etiket t={t} bas={tZarar} bitis={tSon - 0.2} capa={[520, 570]} konum={[700, 410]} metin="UNLIKELY HARMFUL" renk={RENK.yesil} />
        <Etiket t={t} bas={tSon} capa={[1250, 650]} konum={[1420, 420]} metin="REGULAR, HIGH INTAKE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={tKaynak + 3.6} satirlar={["A LITTLE", "IS FINE"]} x={960} y={190} boyut={104} hiza="orta" />
      <PopHap t={t} bas={tKaynak} bitis={tSon - 0.2} metin="ROB VAN DAM · 2020 REVIEW" renk={RENK.altin} x={480} y={96} />
    </>
  );
};

export default S40;
