// Sahne 44 — Good Choices (albacore) ve kaçınılacaklar (kılıç balığı vb.).
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlb = K(0, "albacore,"), tGood = K(0, "Good"), tMore = K(0, "more mercury");
  const tSw = K(1, "Swordfish,"), tAvoid = K(1, "avoid");
  const sw = [
    { bas: tSw, metin: "SWORDFISH" }, { bas: K(1, "shark,"), metin: "SHARK" }, { bas: K(1, "king"), metin: "KING MACKEREL" },
    { bas: K(1, "marlin,"), metin: "MARLIN" }, { bas: K(1, "orange"), metin: "ORANGE ROUGHY" }, { bas: K(1, "bigeye"), metin: "BIGEYE TUNA" },
  ];
  const pP = eout(ilerle(t, s.cumleler[1].bas - 0.1, 0.7));
  const [sc, al] = pop(t, tGood, 0.5);
  const bit0 = s.cumleler[1].bas - 0.05;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={tAlb} capa={[940, 700]} konum={[760, 900]} metin="CANNED ALBACORE" renk={RENK.altin} bitis={bit0} />
        <Etiket t={t} bas={tSw} capa={[760, 190]} konum={[500, 400]} metin="SWORDFISH" renk={RENK.mercan} bitis={1e9} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={720} />
      <div style={{ position: "absolute", left: 1300, top: 410, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * (1 - Math.min(1, pP * 4)),
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>GOOD CHOICES</div>
      <Not t={t} bas={tMore} metin="MORE MERCURY" x={1300} y={480} boyut={30} agirlik={800} renk={RENK.altin} bitis={bit0} />
      <Baslik t={t} bas={tSw - 0.3} metin="AVOID" x={1330} y={450} boyut={90} renk={RENK.mercan} />
      <Liste t={t} ogeler={sw.map((o) => ({ ...o, renk: RENK.mercan }))} x={1330} y={520} aralik={68} boyut={30} isaret="carpi" genislik={560} />
    </>
  );
};
export default S44;
