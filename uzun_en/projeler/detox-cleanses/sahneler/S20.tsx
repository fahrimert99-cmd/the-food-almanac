// Sahne 20 — Henning çalışması: 3 gün meyve-sebze suyu, 14 gün normal yemek; zaman çizelgesi sağda.
import React from "react";
import { Panel, ANTON, Baslik, BaslikBlok, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const BX = 1240, BW = 620, BY = 520;       // çizelge çubuğu
const X4 = BX + (3 / 17) * BW;

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [l1, l2] = s.meta.baslik!.satirlar;
  const p3 = eout(ilerle(t, K(1, "three days"), 0.8));
  const p14 = eout(ilerle(t, K(1, "14 days"), 1.0));
  const [s4, a4] = pop(t, K(2, "day four"), 0.5);
  const [s17, a17] = pop(t, K(2, "day 17"), 0.5);
  const tJuice = K(0, "juice");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* takvimdeki okunaksız rakamları kâğıt rengi yama örter; başlık bunun üstünde durur */}
        <div style={{ position: "absolute", left: 40, top: 20, width: 740, height: 360,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 68%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={700} opak={1} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "Henning")} />
      <BaslikBlok t={t} bas={tJuice} satirlar={[l1, l2]} x={110} y={170} boyut={108} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "20 healthy")} vurgu={s.meta.baslik!.vurgu!} not="healthy adults" x={1550} y={150} boyut={110} genislik={400}
        renk={RENK.koyuYesil} />
      {/* zaman çizelgesi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <rect x={BX} y={BY} width={(3 / 17) * BW * p3} height={44} rx={10} fill={RENK.yesil} />
        <rect x={X4 + 4} y={BY} width={(14 / 17) * BW * p14 - 4} height={44} rx={10} fill={RENK.altin} />
        {a4 > 0 && <line x1={X4} x2={X4} y1={BY - 14} y2={BY + 120} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="10 8" opacity={a4} />}
        {a17 > 0 && <line x1={BX + BW} x2={BX + BW} y1={BY - 14} y2={BY + 120} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="10 8" opacity={a17} />}
      </svg>
      <Baslik t={t} bas={K(1, "three days")} metin="3 DAYS JUICE" x={BX} y={BY - 40} boyut={28} renk={RENK.koyuYesil} font="inter" aralik={1} />
      <Baslik t={t} bas={K(1, "14 days")} metin="14 DAYS NORMAL EATING" x={BX + BW} y={BY - 40} boyut={28} renk={RENK.lacivert} font="inter" aralik={1}
        hiza="sag" />
      <div style={{ position: "absolute", left: X4, top: BY + 140, transform: `translate(-50%,0) scale(${s4})`, opacity: a4 }}>
        <Hap metin="DAY 4" renk={RENK.mercan} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: BX + BW - 90, top: BY + 140, transform: `translate(-50%,0) scale(${s17})`, opacity: a17 }}>
        <Hap metin="DAY 17" renk={RENK.mercan} boyut={30} />
      </div>
      <Not t={t} bas={K(2, "dropped")} metin="WEIGHT DROPPED" x={BX} y={BY + 215} boyut={30} agirlik={800} />
      <Not t={t} bas={K(2, "still measurable")} metin="STILL MEASURABLE" x={BX} y={BY + 265} boyut={30} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S20;
