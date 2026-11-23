// Sahne 37 — iki kemer, iki sepet: sağda iki sonuç ve "çelişki yok" başlığı.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tF = K(1, "french"), tS = K(2, "stanford"), tT = K(3, "they");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1820])} />
      <Etiket t={t} bas={tF} capa={[347, 545]} konum={[340, 790]} metin="FRENCH STUDY" renk={RENK.mercan} />
      <Baslik t={t} bas={tF} metin="AN ASSOCIATION" x={1330} y={230} boyut={66} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "in a young")} metin="IN A YOUNG, HEALTH-CONSCIOUS GROUP" x={1334} y={285} boyut={28} genislik={520} agirlik={700} />
      <Etiket t={t} bas={tS} capa={[1027, 535]} konum={[1030, 790]} metin="STANFORD REVIEW" renk={RENK.yesil} />
      <Baslik t={t} bas={tS} metin="NUTRIENTS" x={1330} y={470} boyut={66} renk={RENK.yesil} />
      <Not t={t} bas={K(2, "measured")} metin="WHAT THE REVIEW MEASURED" x={1334} y={525} boyut={28} genislik={520} agirlik={700} />
      <BaslikBlok t={t} bas={tT} satirlar={["NO REAL", "CONFLICT"]} x={1330} y={710} boyut={92} />
    </>
  );
};
export default S37;
