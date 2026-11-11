// Sahne 14 — perspektif: LDL 130 içinde 4,5 puanlık düşüş (~%3,5).
import React from "react";
import { Baslik, Kamera, INTER, ANTON, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const BX = 1230, BY = 260, BW = 600, BH = 80;      // 130 puan = 600 px
  const kesit = (4.5 / 130) * BW;                    // ölçekli 4,5 puan
  const p = eout(ilerle(t, K(0, "LDL"), 0.9));
  const [sd, ad] = pop(t, K(0, "four"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860])} />
      {/* ölçekli çubuk: LDL 130 ve içinde küçük kesit */}
      <Not t={t} bas={K(0, "130,") - 0.3} metin="LDL 130" x={BX} y={BY - 62} boyut={40} agirlik={800} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <rect x={BX} y={BY} width={BW * p} height={BH} rx={10} fill={RENK.yesil} opacity={0.9} />
        <rect x={BX + BW - kesit} y={BY - 12} width={kesit} height={BH + 24} rx={4} fill={RENK.mercan} opacity={ad} />
      </svg>
      <div style={{ position: "absolute", left: BX + BW - kesit / 2, top: BY - 112, transform: `translate(-50%, 0) scale(${sd})`, opacity: ad,
        fontFamily: ANTON, fontSize: 52, color: RENK.mercan, whiteSpace: "nowrap" }}>–4.5</div>
      <VurguRozet t={t} bas={K(0, "three")} vurgu="≈3.5%" not="of an LDL of 130" x={1540} y={430} genislik={400} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "Real,")} metin={b.satirlar[0]} x={1860} y={710} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "but")} metin={b.satirlar[1]} x={1860} y={825} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S14;
