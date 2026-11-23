// Sahne 9 — karaciğer: sindirir, enerji depolar, zehirleri uzaklaştırır
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLiver = K(0, "liver"), tDig = K(0, "digest"), tSto = K(0, "store"), tRem = K(0, "remove");
  const tClock = K(1, "around the clock"), tDiet = K(1, "no special");
  const pP = eout(ilerle(t, tLiver - 0.3, 0.7));
  const [sc1, al1] = pop(t, tClock, 0.5);
  const [sc2, al2] = pop(t, tDiet, 0.5);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1780])} />
      <KaynakEtiketi t={t} metin="MEDLINEPLUS · NATIONAL LIBRARY OF MEDICINE" bas={0.2} bitis={tLiver} />
      <Panel a={pP} taraf="sag" genislik={720} />
      <Etiket t={t} bas={tLiver} capa={[480, 560]} konum={[560, 170]} metin="LIVER" renk={RENK.mercan} />
      <Baslik t={t} bas={tLiver + 0.1} metin="THE LIVER" x={1240} y={250} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={tDig - 0.2} metin="Your liver…" x={1244} y={340} boyut={32} renk={RENK.gri} />
      <Liste t={t} x={1240} y={410} aralik={96} boyut={36} isaret="onay" genislik={620} ogeler={[
        { bas: tDig, metin: "DIGESTS FOOD" },
        { bas: tSto, metin: "STORES ENERGY" },
        { bas: tRem, metin: "REMOVES POISONS" },
      ]} />
      <div style={{ position: "absolute", left: 1240, top: 770, opacity: al1, transform: `scale(${sc1})`, transformOrigin: "0 50%" }}>
        <Hap metin="AROUND THE CLOCK" renk={RENK.altin} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1240, top: 850, opacity: al2, transform: `scale(${sc2})`, transformOrigin: "0 50%" }}>
        <Hap metin="NO SPECIAL DIET" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S09;
