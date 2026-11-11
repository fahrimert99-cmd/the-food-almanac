// Sahne 54 — terazi: kanıt dengesiz, fayda mütevazı, ürün ≠ mutfak baharatı
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEq = K(0, "uneven"), tMod = K(0, "modest"), tTar = K(0, "joint scans");
  const tUrun = K(1, "belongs to the product"), tMutfak = K(1, "turmeric in your kitchen");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])} />
      <Etiket t={t} bas={tEq} bitis={tMod + 0.5} capa={[960, 200]} konum={[960, 80]} metin="EVIDENCE: UNEVEN" renk={RENK.altin} />
      <Etiket t={t} bas={tMod} bitis={tTar - 0.2} capa={[1290, 700]} konum={[1640, 560]} metin="BENEFIT: MODEST" renk={RENK.yesil} />
      <Etiket t={t} bas={tTar} bitis={tUrun - 0.2} capa={[960, 480]} konum={[300, 140]} metin="JOINT SCANS: NO CHANGE" renk={RENK.lacivert} />
      <Etiket t={t} bas={tUrun} capa={[1290, 540]} konum={[1640, 300]} metin="THE PRODUCT TESTED" renk={RENK.mercan} />
      <Etiket t={t} bas={tMutfak} capa={[620, 620]} konum={[300, 400]} metin="KITCHEN TURMERIC" renk={RENK.altin} />
    </>
  );
};

export default S54;
