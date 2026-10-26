// Sahne 56 — Panik yok, ilacı bırakma; eczacı/doktoru ara, olağandışı belirtileri bildir. Telefon solda, metin sağda.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // alt kenardaki harfli kutu (y>880) kamera dışında kalır
  const pencere = kameraYolu(t, s.sure, [0, 0, 1540], [40, 0, 1500]);
  const tCall = K(1, "Call");
  const b = s.meta.baslik?.satirlar ?? ["CALL, DON'T", "STOP"];
  const [sc, al] = pop(t, K(0, "grapefruit"), 0.5);
  const aHap = al * sol(t, tCall - 0.15);
  const ogeler = [
    { bas: K(1, "muscle"), metin: "UNUSUAL MUSCLE PAIN", renk: RENK.altin },
    { bas: K(1, "dizziness"), metin: "DIZZINESS", renk: RENK.altin },
    { bas: K(1, "irregular"), metin: "IRREGULAR HEARTBEAT", renk: RENK.altin },
  ];
  return (
    <>
      <Kamera gorsel="tam/56" pencere={pencere}>
        <Etiket t={t} bas={K(1, "pharmacist")} capa={[480, 560]} konum={[620, 260]} metin="PHARMACIST OR DOCTOR" renk={RENK.yesil} boyut={24} />
      </Kamera>
      {aHap > 0 && (
        <div style={{ position: "absolute", left: 1480, top: 220, transform: `translate(-50%, -50%) scale(${sc})`, opacity: aHap }}>
          <Hap metin="GRAPEFRUIT + AFFECTED MEDICINE" renk={RENK.mercan} boyut={26} />
        </div>
      )}
      <Baslik t={t} bas={K(0, "panic")} bitis={tCall - 0.15} metin="DON'T PANIC" x={1860} y={340} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "stop")} bitis={tCall - 0.15} metin="DON'T STOP" x={1860} y={455} boyut={100} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(0, "stop")} bitis={tCall - 0.15} metin="THE MEDICINE" x={1860} y={525} boyut={36} hiza="sag" agirlik={800} />
      <Baslik t={t} bas={tCall} metin={b[0]} x={1860} y={280} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tCall + 0.18} metin={b[1]} x={1860} y={385} boyut={104} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(1, "report")} metin="REPORT:" x={1130} y={480} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} ogeler={ogeler} x={1130} y={535} aralik={84} boyut={34} isaret="nokta" genislik={740} />
    </>
  );
};

export default S56;
