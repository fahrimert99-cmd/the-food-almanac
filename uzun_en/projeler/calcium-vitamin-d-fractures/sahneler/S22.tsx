// Sahne 22 — "herkes için değil": solda kapı görseli, sağda başlık ve çarpılı istisna listesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "big catch"), tCom = K(1, "community-dwelling"), tNot = K(2, "doesn't apply"), tHome = K(2, "nursing homes");
  const tNext = K(3, "get to them");
  const ogeler = [
    { bas: K(2, "osteoporosis"), metin: "OSTEOPOROSIS" },
    { bas: K(2, "past fracture"), metin: "PAST FRACTURE" },
    { bas: K(2, "high fall"), metin: "HIGH FALL RISK" },
    { bas: K(2, "vitamin D deficiency"), metin: "VITAMIN D DEFICIENCY" },
    { bas: tHome, metin: "NURSING HOMES" },
  ].map((o) => ({ ...o, renk: RENK.mercan }));
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tCom} bitis={tNot} capa={[330, 600]} konum={[700, 800]} metin="COMMUNITY-DWELLING" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tHome} capa={[600, 470]} konum={[540, 215]} metin="NURSING HOMES" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={["NOT FOR", "EVERYONE"]} x={1080} y={180} boyut={112} />
      <Not t={t} bas={tNot} metin="The advice does not apply to:" x={1086} y={425} boyut={34} genislik={760} renk={RENK.gri} agirlik={700} />
      <Liste t={t} ogeler={ogeler} x={1086} y={490} aralik={80} boyut={36} isaret="carpi" genislik={780} />
      <Not t={t} bas={tNext} metin="We'll get to them next." x={1086} y={895} boyut={34} genislik={760} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S22;
