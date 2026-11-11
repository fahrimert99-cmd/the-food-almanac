// Sahne 35 — pişince tavuktaki mikroplar asıl sorun değil; asıl yol: lavabo, eller, ısıtılmayan yiyecek.
import React from "react";
import { Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTavuk = K(0, "chicken"), tPisti = K(0, "cooked");
  const tSink = K(1, "sink"), tEl = K(1, "hands"), tSalata = K(1, "never get heated");
  const [sc, al] = pop(t, tPisti, 0.55);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={tTavuk} bitis={tPisti - 0.1} capa={[960, 520]} konum={[960, 200]} metin="RAW CHICKEN" renk={RENK.mercan} boyut={32} />
        <Etiket t={t} bas={tSink} capa={[1620, 800]} konum={[1620, 905]} metin="SINK" renk={RENK.lacivert} boyut={32} />
        <Etiket t={t} bas={tEl} capa={[1180, 700]} konum={[1250, 880]} metin="HANDS" renk={RENK.mercan} boyut={32} />
        <Etiket t={t} bas={tSalata} capa={[260, 330]} konum={[270, 590]} metin="NEVER HEATED" renk={RENK.altin} boyut={30} />
      </Kamera>
      <div style={{ position: "absolute", left: 960, top: 200, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol(t, 1e9) }}>
        <Hap metin="ONCE COOKED" renk={RENK.yesil} boyut={32} />
      </div>
      <Ikon t={t} bas={tPisti + 0.2} ad="onay" x={1190} y={200} boyut={72} />
    </>
  );
};

export default S35;
