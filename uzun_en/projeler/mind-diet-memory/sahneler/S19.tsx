// Sahne 19 — Yapraklı yeşillikler: günde ~1,3 porsiyon
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

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 10, 1920], [40, 40, 1820]);
  const b = s.meta.baslik;
  const bit = K(2, "People") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kam}>
        <Etiket t={t} bas={K(1, "spinach")} bitis={bit} capa={[520, 190]} konum={[800, 65]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "kale")} bitis={bit} capa={[860, 250]} konum={[1130, 130]} metin="KALE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "collards")} bitis={bit} capa={[1010, 520]} konum={[1300, 520]} metin="COLLARDS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <Baslik t={t} bas={K(0, "single")} metin="SINGLE FOODS" x={1130} y={190} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(1, "greens")} metin={b?.satirlar[0] ?? "LEAFY GREENS"} x={1130} y={290} boyut={100} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "one and a third")} vurgu={b?.vurgu ?? "1.3/day"} not={b?.not} x={1580} y={400} genislik={460} />
      <Pil t={t} bas={K(2, "slowly")} x={1580} y={680} metin="SLOWER DECLINE" renk={RENK.yesil} boyut={30} />
      <Pil t={t} bas={K(2, "almost")} x={1580} y={780} metin="VS. ALMOST NONE" renk={RENK.mercan} boyut={30} />
    </>
  );
};

export default S19;
