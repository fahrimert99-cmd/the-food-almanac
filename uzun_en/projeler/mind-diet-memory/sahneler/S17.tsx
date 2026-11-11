// Sahne 17 — Bilişsel testler: 960 yetişkin, ~4,7 yıl, daha yavaş gerileme
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

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 20, 1920], [50, 40, 1810]);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kam}>
        <Etiket t={t} bas={K(0, "thinking")} capa={[600, 430]} konum={[250, 330]} metin="THINKING SKILLS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "MIND scores")} capa={[1500, 600]} konum={[1640, 380]} metin="HIGHER SCORE" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <VurguRozet t={t} bas={K(1, "960")} vurgu="960" not="OLDER ADULTS" x={215} y={500} genislik={300} boyut={96} />
      <Pil t={t} bas={K(1, "seven")} x={215} y={760} metin="4.7 YEARS" renk={RENK.altin} boyut={28} />
      <Baslik t={t} bas={K(1, "slower")} metin="SLOWER DECLINE" x={56} y={190} boyut={58} renk={RENK.koyuYesil} />
    </>
  );
};

export default S17;
