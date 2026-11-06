// Sahne 25 — Ogata: öğle sonrası daha yüksek, 24 saatlik ortalama aynı.
import React from "react";
import { AltSis, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

// Açılan hap: x,y = merkez
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; boyut?: number }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, boyut = 30,
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

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBit = K(1, "But") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [60, 0, 1700], [150, 40, 1600])}>
        <Etiket t={t} bas={K(0, "nine")} bitis={tBit} capa={[1250, 560]} konum={[840, 400]} metin="9 HEALTHY YOUNG MEN" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "lunch")} bitis={tBit} capa={[790, 690]} konum={[470, 560]} metin="LUNCH" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={K(0, "higher")} bitis={tBit} satirlar={["HIGHER SUGAR", "AFTER LUNCH"]} x={90} y={210} boyut={92}
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Baslik t={t} bas={K(1, "24 hours")} metin="24-HOUR AVERAGE" x={90} y={190} boyut={84} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "not")} vurgu="NO DIFFERENCE" not="average blood sugar" x={400} y={270} genislik={600} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};
export default S25;
