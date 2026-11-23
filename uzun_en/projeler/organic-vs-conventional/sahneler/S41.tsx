// Sahne 41 — liste USDA verisinden; Winter & Katz: tespit var mı, ne kadar, ne kadar toksik.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUsda = K(0, "USDA test results"), tGuide = K(0, "fair guide"), tDet = K(0, "detectable");
  const tWK = K(1, "Winter and Katz"), tRank = K(1, "ranking"), tFound = K(1, "whether residues"), tMuch = K(1, "how much"), tTox = K(1, "how toxic");
  const pPanel = eout(ilerle(t, tWK + 0.3, 0.7));
  const satirlar = [
    { bas: tFound, metin: "WHETHER FOUND", ok: true },
    { bas: tMuch, metin: "HOW MUCH", ok: false },
    { bas: tTox, metin: "HOW TOXIC", ok: false },
  ];
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tUsda} bitis={tGuide - 0.2} capa={[1380, 600]} konum={[1500, 300]} metin="USDA TEST RESULTS" renk={RENK.lacivert} />
        <Etiket t={t} bas={tGuide} bitis={tDet - 0.2} capa={[640, 200]} konum={[1250, 130]} metin="A FAIR GUIDE" renk={RENK.yesil} />
        <Etiket t={t} bas={tDet} bitis={tWK - 0.2} capa={[740, 160]} konum={[1300, 260]} metin="DETECTABLE RESIDUE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tWK} />
      <Panel a={pPanel} taraf="sag" genislik={920} opak={1} />
      <Baslik t={t} bas={tRank} metin="THE RANKING COUNTED" x={1340} y={330} boyut={30} renk={RENK.altin} font="inter" aralik={4} />
      {satirlar.map((r, i) => {
        const [sc, al] = pop(t, r.bas, 0.5);
        const renk = r.ok ? RENK.yesil : RENK.mercan;
        return (
          <div key={i} style={{ position: "absolute", left: 1340, top: 400 + i * 120, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%",
            display: "flex", alignItems: "center", gap: 22 }}>
            <div style={{ width: 70, height: 70, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad={r.ok ? "onay" : "carpi"} boyut={40} renk="#fff" />
            </div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.murekkep, letterSpacing: 1, whiteSpace: "nowrap" }}>{r.metin}</div>
            {!r.ok && <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, color: RENK.mercan, letterSpacing: 2, whiteSpace: "nowrap" }}>NOT COUNTED</div>}
          </div>
        );
      })}
    </>
  );
};

export default S41;
