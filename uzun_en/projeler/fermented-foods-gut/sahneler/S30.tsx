// Sahne 30 — 2026 sistematik derleme: 8 çalışma, mütevazı ve tutarsız kaymalar, bifidobakteri 3/4.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2026 = K(0, "2026"), tSys = K(0, "systematic"), tEight = K(0, "eight"), tHuman = K(0, "human");
  const tMod = K(1, "modest"), tInc = K(1, "inconsistent"), tShifts = K(1, "shifts");
  const tBif = K(1, "bifidobacteria"), tAnother = K(1, "another"), tThree = K(1, "three");
  const cik = tBif - 0.2;
  const pPan = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1790])}>
        <Etiket t={t} bas={tSys} bitis={tEight + 1.5} capa={[560, 420]} konum={[640, 170]} metin="SYSTEMATIC REVIEW" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={700} />
      <KaynakEtiketi t={t} bas={t2026} metin={s.meta.etiket!} />
      <Baslik t={t} bas={tEight} bitis={cik} metin="8 STUDIES" x={1860} y={250} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tHuman} bitis={cik} metin="HUMAN STUDIES" x={1860} y={340} boyut={34} agirlik={800} hiza="sag" genislik={500} />
      <Baslik t={t} bas={tMod} bitis={cik} metin="MODEST," x={1860} y={500} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tInc} bitis={cik} metin="INCONSISTENT" x={1860} y={600} boyut={92} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={tShifts} bitis={cik} metin="SHIFTS" x={1860} y={700} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tBif} metin="BIFIDOBACTERIA" x={1860} y={290} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tAnother} metin="ANOTHER FRIENDLY GROUP" x={1860} y={364} boyut={34} agirlik={800} hiza="sag" genislik={560} />
      <VurguRozet t={t} bas={tThree} vurgu="3 OF 4" not="STUDIES THAT MEASURED THEM" x={1560} y={470} genislik={500} boyut={110} />
    </>
  );
};

export default S30;
