// Sahne 47 — hedef: günde bir bardak, yarım bardak iyi bir başlangıç
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tListe = K(2, "Canned,");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 15, 1860])}>
        {/* ölçü kabı */}
        <Etiket t={t} bas={K(0, "cup")} capa={[290, 560]} konum={[620, 300]} metin="MEASURING CUP" renk={RENK.altin} />
      </Kamera>
      {/* sağ boş kâğıt: başlık, sayı, not, sonra liste */}
      <BaslikBlok t={t} bas={0.05} satirlar={b?.satirlar ?? ["A CUP", "A DAY"]} x={1330} y={200} boyut={120} bitis={tListe - 0.2}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(0, "190") - 0.1} bitis={tListe - 0.2} vurgu="≈ 190 G" not="as in the trial" x={1560} y={470} genislik={440} boyut={96} renk={RENK.yesil} />
      <Not t={t} bas={K(1, "Half")} bitis={tListe - 0.2} metin={b?.not ?? "half a cup is a good start"} x={1330} y={730} genislik={520} boyut={34} />
      <Liste t={t} x={1330} y={380} aralik={110} boyut={40} isaret="onay" genislik={520} ogeler={[
        { bas: K(2, "Canned,"), metin: "CANNED" },
        { bas: K(2, "frozen"), metin: "FROZEN" },
        { bas: K(2, "dried"), metin: "DRIED" },
      ]} />
      <Not t={t} bas={K(2, "all")} metin="all count" x={1330} y={720} boyut={36} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S47;
