// Sahne 49 — ne ölçüldü / ne ölçülmedi: üstteki boş kâğıtta değişen başlık.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b1 = c[1].bas - 0.1, b2 = c[2].bas - 0.1;
  const tAnahtar = K(2, "significantly");
  const [sc, al] = pop(t, K(2, "not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 70, 1820])}>
        <Etiket t={t} bas={K(0, "trials")} bitis={b1} capa={[600, 420]} konum={[420, 800]} metin="THE TRIALS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "TONE")} capa={[1230, 440]} konum={[1500, 280]} metin="TONE TRIAL" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={0.05} bitis={b1} metin="THESE TRIALS MEASURED" x={140} y={105} boyut={30} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(0, "blood")} bitis={K(0, "whether") - 0.05} metin="BLOOD PRESSURE" x={140} y={175} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "whether")} bitis={b1} metin="WHETHER IT STAYED CONTROLLED" x={140} y={175} boyut={62} renk={RENK.koyuYesil} />
      {/* 2. cümle */}
      <Baslik t={t} bas={c[1].bas} bitis={b2} metin="NOT BUILT TO PROVE FEWER" x={140} y={105} boyut={30} renk={RENK.mercan} font="inter" aralik={5} />
      <Baslik t={t} bas={K(1, "heart")} bitis={b2} metin="HEART ATTACKS OR STROKES" x={140} y={175} boyut={72} renk={RENK.lacivert} />
      {/* 3. cümle */}
      <Baslik t={t} bas={c[2].bas} metin="IN TONE:" x={140} y={105} boyut={30} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(2, "heart")} metin="HEART AND CIRCULATION EVENTS" x={140} y={175} boyut={62} renk={RENK.lacivert} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 140, top: 255, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <Hap metin="NO SIGNIFICANT DIFFERENCE" renk={RENK.yesil} boyut={30} />
        </div>
      )}
    </>
  );
};
export default S49;
