// Sahne 21 — Yaban mersini ve çilek: Nurses' Health Study
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Ortu, RENK, SP, VurguRozet, kameraYolu, einout, eout, ilerle,
  kelimeZamani, pop, sol } from "../kutuphane";

// Hap etiketi (ekran koordinatı, pop ile gelir)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30, bitis = 1e9,
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

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 20, 1920], [40, 40, 1830]);
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kam}>
        <Etiket t={t} bas={K(2, "blueberries")} capa={[400, 380]} konum={[330, 220]} metin="BLUEBERRIES" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "strawberries")} capa={[800, 440]} konum={[860, 190]} metin="STRAWBERRIES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <Baslik t={t} bas={K(0, "Berries")} metin={b?.satirlar[0] ?? "BERRIES"} x={1320} y={190} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Nurses'")} metin="NURSES' HEALTH STUDY" x={1324} y={284} boyut={30} renk={RENK.altin} font="inter" aralik={4} />
      <VurguRozet t={t} bas={K(1, "16,010")} vurgu="16,010" not="WOMEN, 70 AND OLDER" x={1600} y={360} genislik={460} boyut={96} />
      <Pil t={t} bas={K(2, "slower")} x={1600} y={600} metin="SLOWER DECLINE" renk={RENK.yesil} boyut={30} />
      <VurguRozet t={t} bas={K(2, "two and a half")} vurgu="UP TO 2.5 YRS" not={b?.not} x={1580} y={680} genislik={540} boyut={74} />
    </>
  );
};

export default S21;
