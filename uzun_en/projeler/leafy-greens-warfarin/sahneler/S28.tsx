// Sahne 28 — MedlinePlus: hafta hafta tutarlı miktar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  const b = s.meta.baslik;
  const tB = K(0, "eat consistent");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={w}>
        <Etiket t={t} bas={K(0, "vitamin K foods")} capa={[933, 560]} konum={[1560, 760]} metin="VITAMIN K FOODS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="MedlinePlus · National Library of Medicine" bas={0.3} />
      <Baslik t={t} bas={tB} metin={b?.satirlar[0] ?? ""} x={1250} y={400} boyut={118} renk={RENK.koyuYesil} />
      <Not t={t} bas={tB + 0.4} metin={b?.not ?? ""} x={1254} y={470} boyut={32} genislik={560} />
    </>
  );
};

export default S28;
