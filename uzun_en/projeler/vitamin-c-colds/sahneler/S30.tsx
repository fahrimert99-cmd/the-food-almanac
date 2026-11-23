// Sahne 30 — sonuçlar sıradan rutine taşınmayabilir. Görsel sağa kayar, solda metin.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, ilerle, kelimeZamani, einout } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const z = einout(ilerle(t, 0, s.sure));
  const bA = c[1].bas - 0.1, bB = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={[-420 + 40 * z, 0, 1920 - 40 * z]} sinirla={false}>
        <Etiket t={t} bas={K(2, "ordinary")} capa={[1020, 540]} konum={[1000, 150]} metin="DAILY ROUTINE" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={K(0, "before")} bitis={bA} metin="BEFORE ANYONE SIGNS UP" x={70} y={300} boyut={30} renk={RENK.altin} font="inter" aralik={4} />
      <Baslik t={t} bas={K(0, "marathon")} bitis={bA} metin="A MARATHON?" x={66} y={400} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "notice")} bitis={bA} metin="NOTICE WHAT" x={66} y={520} boyut={80} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "this")} bitis={bA} metin="THIS MEANS" x={66} y={610} boyut={80} renk={RENK.koyuYesil} />
      {/* 2. cümle */}
      <Liste t={t} x={70} y={260} aralik={150} boyut={34} isaret="sayi" genislik={640} ogeler={[
        { bas: K(1, "athletes"), bitis: bB, metin: "ATHLETES IN EXTREME EVENTS", renk: RENK.altin },
        { bas: K(1, "soldiers"), bitis: bB, metin: "SOLDIERS IN THE COLD", renk: RENK.lacivert },
        { bas: K(1, "short"), bitis: bB, metin: "SHORT BURSTS OF SEVERE PHYSICAL STRESS", renk: RENK.mercan },
      ]} />
      {/* 3. cümle */}
      <Baslik t={t} bas={K(2, "results")} metin="MAY NOT" x={66} y={330} boyut={120} renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "may")} metin="CARRY OVER" x={66} y={450} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={K(2, "ordinary")} metin="to an ordinary daily routine" x={70} y={560} boyut={38} />
    </>
  );
};

export default S30;
