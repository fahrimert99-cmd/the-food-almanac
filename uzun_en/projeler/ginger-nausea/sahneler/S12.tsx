// Sahne 12 — 5 küçük çalışmadan 14 çalışmaya: sağda büyüyen kitap/çalışma sırası, solda gerçek kitap yığını.
import React from "react";
import { BaslikBlok, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t5 = K(0, "five small");
  const tSon = K(0, "last word");
  const t14 = K(1, "fourteen");
  const tHasta = K(1, "1,506");
  const tDort = K(1, "four times");
  const [sc, al] = pop(t, t5, 0.5);
  const [sh, ah] = pop(t, tHasta, 0.55);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2022")} />
      {/* 1. cümle: 5 küçük çalışma */}
      <div style={{ position: "absolute", left: 1230, top: 300, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * (t < t14 ? 1 : 0) }}>
        <Hap metin="5 SMALL TRIALS" renk={RENK.altin} boyut={32} />
      </div>
      <Not t={t} bas={tSon} bitis={t14} metin="not the last word" x={1234} y={380} boyut={32} agirlik={700} />
      {/* çalışma blokları: ilk 5 altın, kalan 9 yeşil */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 14 }, (_, i) => {
          const bas = i < 5 ? t5 + 0.15 * i : t14 + 0.45 + 0.09 * (i - 5);
          const [b, a] = pop(t, bas, 0.4);
          if (a <= 0) return null;
          const x = 1230 + i * 40, y = 530;
          return (
            <g key={i} opacity={a} transform={`translate(${x + 14} ${y + 30}) scale(${b}) translate(${-x - 14} ${-y - 30})`}>
              <rect x={x} y={y} width={28} height={60} rx={4} fill={i < 5 ? RENK.altin : RENK.yesil} />
              <rect x={x + 4} y={y + 8} width={5} height={44} rx={2} fill="#fff" opacity={0.3} />
            </g>
          );
        })}
      </svg>
      {/* 2. cümle: 14 çalışma, 1.506 hasta, yaklaşık dört kat */}
      <BaslikBlok t={t} bas={t14} satirlar={["14 TRIALS"]} x={1230} y={260} boyut={124} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={t14 + 0.4} metin="2022 meta-analysis" x={1234} y={350} boyut={30} />
      <div style={{ position: "absolute", left: 1230, top: 630, transform: `scale(${sh})`, transformOrigin: "0% 50%", opacity: ah }}>
        <Hap metin="1,506 PATIENTS" renk={RENK.yesil} boyut={34} />
      </div>
      <VurguRozet t={t} bas={tDort} vurgu="≈ 4×" not="AS MANY PATIENTS" x={1450} y={730} genislik={380} boyut={96} />
    </>
  );
};
export default S12;
