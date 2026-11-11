// Sahne 6 — dal üstünde greyfurt: bitkinin savunması, ince bağırsak.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitA = K(0, "defense.") + 0.9;
  const bitB = K(1, "small") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [50, 40, 1760])}>
        {/* sağ kenardaki yarım bağırsak parçaları örtülür */}
        <div style={{ position: "absolute", left: 1850, top: 740, width: 70, height: 250, background: "#FBF6DF" }} />
        <div style={{ position: "absolute", left: 1840, top: 1030, width: 80, height: 50, background: "#FBF6DF" }} />
        <Etiket t={t} bas={K(0, "Plants")} bitis={1.9} capa={[1050, 430]} konum={[560, 420]} metin="THE PLANT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "compounds")} bitis={1.9} capa={[1330, 830]} konum={[960, 740]} metin="GRAPEFRUIT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "chemical")} bitis={bitA} satirlar={["CHEMICAL", "DEFENSE"]} x={70} y={190} boyut={112} />
      <Baslik t={t} bas={K(1, "people,")} metin="IN PEOPLE" x={70} y={110} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <BaslikBlok t={t} bas={K(1, "unexpected")} bitis={bitB} satirlar={["UNEXPECTED", "SIDE EFFECT"]} x={70} y={230} boyut={96}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} isaret="onay" boyut={40} x={70} y={260} aralik={100} genislik={800}
        ogeler={[{ bas: K(1, "small"), metin: "SMALL INTESTINE", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" boyut={40} x={70} y={360} aralik={100} genislik={800}
        ogeler={[{ bas: K(1, "not"), metin: "NOT THE STOMACH", renk: RENK.mercan }]} />
    </>
  );
};

export default S06;
