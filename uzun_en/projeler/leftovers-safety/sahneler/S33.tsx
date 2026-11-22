// Sahne 33 — derin tencere; ortada tutulan ısı, tehlike bölgesi, sonra ısıya çıkış yolu (parçacıklar).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMid = K(0, "middle"), tDanger = K(0, "danger"), tOut = K(0, "outside"), tFix = K(1, "fix"), tGive = K(1, "give");
  const aP = eout(ilerle(t, tFix - 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tMid} bitis={tFix - 0.3} capa={[960, 520]} konum={[1640, 780]} metin="HOT IN THE MIDDLE" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tDanger} bitis={tFix - 0.3} capa={[520, 440]} konum={[250, 250]} metin="DANGER ZONE" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tOut} bitis={tFix - 0.3} capa={[1120, 780]} konum={[1640, 900]} metin="OUTSIDE FEELS COOL" renk={RENK.lacivert} boyut={28} />
        <Parcaciklar t={t} bas={tGive} kaynak={[960, 520]} hedef={[960, 150]} adet={26} aralik={0.12} omur={1.8} kavis={-80} yayilma={300} hedefYayilma={300} tohum="s33" />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={tFix} satirlar={["GIVE THE HEAT", "SOMEWHERE", "TO GO"]} x={1860} y={330} boyut={92} hiza="sag" />
    </>
  );
};

export default S33;
