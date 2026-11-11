// Sahne 60 — eritritol: açık soru; kalp olayları ve pıhtılaşma belirteçleri, kanıtlanmış zarar yok.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIf = K(1, "If");
  const sonra = tIf - 0.15;
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Etiket t={t} bas={K(0, "Erythritol")} bitis={tIf + 1.2} capa={[620, 620]} konum={[260, 400]} metin="ERYTHRITOL" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "open")} bitis={sonra} metin="THE OPEN QUESTION" x={140} y={110} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "heart")} bitis={tIf + 1.2} capa={[860, 540]} konum={[790, 300]} metin="HEART EVENTS" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "clotting")} bitis={tIf + 1.2} capa={[740, 580]} konum={[470, 500]} metin="CLOTTING MARKERS" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "not")} bitis={sonra} metin="NOT PROVEN" x={1860} y={290} boyut={58} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={K(0, "not") + 0.15} bitis={sonra} metin="HARMFUL" x={1860} y={355} boyut={58} renk={RENK.altin} hiza="sag" />
      <Ikon t={t} bas={K(1, "doctor") - 0.5} ad="soru" x={1700} y={300} zemin={RENK.yesil} />
      <Baslik t={t} bas={K(1, "ask")} metin="ASK YOUR" x={1860} y={410} boyut={58} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(1, "ask") + 0.15} metin="DOCTOR" x={1860} y={475} boyut={58} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S60;
