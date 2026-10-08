// Tam video kompozisyonu: tüm sahneler (çapraz geçişli) + üst katmanlar + ses.
import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame } from "remotion";
import "../fontlar";
import { RENK, kis } from "../zaman";
import { UstKatman } from "./Katmanlar";
import { KAYIT } from "./kayit";
import { Genel } from "./kutuphane";
import { TAM } from "./veri";

export const Tam: React.FC = () => {
  const t = useCurrentFrame() / TAM.fps;
  const G = TAM.gecis;
  const S = TAM.sahneler;
  const son = S[S.length - 1].bas + S[S.length - 1].sure;
  return (
    <AbsoluteFill style={{ backgroundColor: RENK.kagit }}>
      {S.map((s, i) => {
        const yerel = t - s.bas;
        if (yerel < -G || yerel > s.sure + G) return null;
        // gelen sahne üstte belirir; giden sahne tamamen örtülene kadar görünür kalır
        const a = i > 0 && yerel < G ? kis((yerel + G) / (2 * G)) : 1;
        const Bilesen = KAYIT[s.id]?.default ?? Genel;
        return (
          <AbsoluteFill key={s.id} style={{ opacity: a }}>
            <Bilesen t={Math.max(0, yerel)} s={s} />
          </AbsoluteFill>
        );
      })}
      <UstKatman tAbs={t} sahneler={S} ayar={(id) => KAYIT[id]?.ayar} />
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: kis((t - son + 0.2) / 0.8) }} />
      <Audio src={staticFile("tam_karisim.wav")} />
    </AbsoluteFill>
  );
};
