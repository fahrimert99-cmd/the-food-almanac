// Sahne 36 — konserve fasulye: sağda kâğıt panel (kutu etiketi kusurunu örter), solda nesne etiketleri.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pP = eout(ilerle(t, 0.2, 0.7));
  const tSod = K(2, "sodium,");
  const [sc, al] = pop(t, tSod, 0.5);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1800])}>
        <Etiket t={t} bas={K(1, "cooked")} bitis={tSod} capa={[820, 530]} konum={[360, 170]} metin="COOKED BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "rinse")} capa={[705, 330]} konum={[360, 170]} metin="RINSE" renk={RENK.yesil} />
      </Kamera>
      {/* sağ panel: konservenin bozuk etiketini tamamen örter */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 1180, right: 0, opacity: pP,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 70px, ${kagit(1)} 100%)` }} />
      <BaslikBlok t={t} bas={K(0, "canned beans")} satirlar={["CANNED BEANS", "STILL COUNT"]} x={1860} y={230} boyut={84} hiza="sag" />
      <Not t={t} bas={K(1, "simply")} metin="They are simply cooked beans" x={1860} y={440} hiza="sag" genislik={560} boyut={36} />
      <div style={{ position: "absolute", left: 1560, top: 590, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MAIN ISSUE: SODIUM" renk={RENK.mercan} boyut={30} />
      </div>
      <Liste t={t} x={1290} y={690} aralik={96} boyut={34} isaret="onay" genislik={600}
        ogeler={[{ bas: K(2, "no salt added"), metin: "NO SALT ADDED" }, { bas: K(2, "rinse the beans"), metin: "OR RINSE THEM" }]} />
    </>
  );
};

export default S36;
