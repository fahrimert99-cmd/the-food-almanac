// Tek sahne önizlemesi (kare.mjs kullanır): sahne + filigran/rozet/altyazı, kare 0 = sahnenin başı.
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import "../fontlar";
import { RENK } from "../zaman";
import { UstKatman } from "./Katmanlar";
import { SP, SahneAyar, TAM, sahneBul } from "./veri";

export const Onizleme: React.FC<{ id: number; Bilesen: React.FC<SP>; ayar?: SahneAyar }> = ({ id, Bilesen, ayar }) => {
  const s = sahneBul(id);
  const t = useCurrentFrame() / TAM.fps;
  return (
    <AbsoluteFill style={{ backgroundColor: RENK.kagit }}>
      <Bilesen t={t} s={s} />
      <UstKatman tAbs={s.bas + t} sahneler={[s]} ayar={() => ayar} />
    </AbsoluteFill>
  );
};
