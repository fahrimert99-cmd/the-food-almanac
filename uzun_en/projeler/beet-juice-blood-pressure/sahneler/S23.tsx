// Sahne 23 — dürüstlük notu: tek merkez, 4 hafta, yazarın ticari bağı; bağımsız uzun çalışma.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

// Şişe etiketlerindeki anlamsız yazıyı kâğıt rengi yamalarla örter (görsel koordinatı)
const YAMALAR: [number, number, number][] = [[1078, 617, 66], [1133, 613, 58], [1185, 622, 58], [1255, 627, 62], [1335, 608, 58]];

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDur = K(0, "honesty"), tHafta = K(1, "four weeks"), tMerkez = K(1, "one centre"), tYazar = K(1, "one author");
  const tUrun = K(1, "nitrate products"), tUzun = K(2, "longer"), tGuven = K(2, "reassuring");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 60, 1720])}>
        {YAMALAR.map(([x, y, w], i) => (
          <div key={i} style={{ position: "absolute", left: x - w / 2, top: y - 19, width: w, height: 38, borderRadius: 5, background: "#EFEBE0" }} />
        ))}
        <Etiket t={t} bas={tUrun} bitis={tUzun} capa={[1330, 560]} konum={[1590, 520]} metin="NITRATE PRODUCTS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tDur} bitis={tUzun - 0.1} satirlar={["SOME HONESTY"]} x={1850} y={150} boyut={88} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1020} y={250} aralik={74} boyut={32} genislik={830} ogeler={[
        { bas: tHafta, metin: "FOUR WEEKS", renk: RENK.altin, bitis: tUzun - 0.1 },
        { bas: tMerkez, metin: "ONE CENTRE", renk: RENK.altin, bitis: tUzun - 0.1 },
        { bas: tYazar, metin: "AUTHOR DIRECTS NITRATE COMPANY", renk: RENK.mercan, bitis: tUzun - 0.1 },
      ]} />
      <BaslikBlok t={t} bas={tUzun} satirlar={["LONGER,", "INDEPENDENT", "TRIAL"]} x={1850} y={150} boyut={84} hiza="sag" />
      <Not t={t} bas={tGuven} metin="WOULD BE REASSURING" x={1850} y={440} hiza="sag" boyut={34} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S23;
