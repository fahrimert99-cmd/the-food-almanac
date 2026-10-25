// Sahne 34 — günlük kullanımda sonuçlar çok değişken; kanıt kesinliği çok belirsiz. Kavanozlar + terazi.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KAV = [195, 460, 700, 990, 1270];

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDaily = K(0, "daily use"), tVar = K(0, "varied"), tTrial = K(0, "trial to"), tRev = K(0, "reviewers"), tCert = K(0, "certainty"), tVery = K(0, "very uncertain");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 260, 1920], [60, 300, 1780])}>
        {KAV.map((x, i) => {
          const [sc, al] = pop(t, tTrial + i * 0.2, 0.45);
          return (
            <div key={i} style={{ position: "absolute", left: x, top: 470, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
              <Hap metin="TRIAL" renk={RENK.altin} boyut={26} />
            </div>
          );
        })}
        <Etiket t={t} bas={tCert - 0.1} capa={[1590, 700]} konum={[1450, 300]} metin="CERTAINTY OF EVIDENCE" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <AltSis a={0.7} yukseklik={130} />
      <Not t={t} bas={tDaily} metin="DAILY USE" x={80} y={150} boyut={36} agirlik={800} renk={RENK.altin} bitis={tVery - 0.2} />
      <Not t={t} bas={tVar} metin="Results varied enormously" x={80} y={205} boyut={44} agirlik={800} bitis={tRev + 1.2} />
      <BaslikBlok t={t} bas={tVery} satirlar={["VERY", "UNCERTAIN"]} x={80} y={150} boyut={110} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S34;
