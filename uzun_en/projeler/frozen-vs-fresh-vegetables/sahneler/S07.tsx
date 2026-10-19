// Sahne 7 — limon ve bardak solda; sağ boşlukta başlık ve C vitamininin üç zayıflığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Parcaciklar t={t} bas={K(1, "dissolves")} kaynak={[500, 560]} hedef={[760, 260]} adet={20} aralik={0.18} omur={1.8} tohum="c7" />
        <Etiket t={t} bas={K(2, "vitamin")} capa={[470, 860]} konum={[900, 905]} metin="VITAMIN C" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Vitamin")} satirlar={s.meta.baslik!.satirlar} x={1000} y={170} boyut={118} />
      <Liste t={t} x={1000} y={450} aralik={96} boyut={40} isaret="nokta" genislik={860} ogeler={[
        { bas: K(1, "dissolves"), metin: "DISSOLVES IN WATER", renk: RENK.altin },
        { bas: K(1, "heat"), metin: "EASILY DESTROYED BY HEAT", renk: RENK.mercan },
        { bas: K(1, "oxygen"), metin: "…AND BY OXYGEN", renk: RENK.mercan },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(2, "That's")} />
    </>
  );
};

export default S07;
