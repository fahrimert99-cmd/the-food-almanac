// Sahne 26 — bağırsakta kalsiyum ve oksalat birleşir
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Panel, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  const tBind = K(0, "bind");
  const tStool = K(1, "stool");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 20, 1860], [80, 60, 1720])} />
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <BaslikBlok t={t} bas={0.4} satirlar={["BINDING", "IN THE GUT"]} x={1860} y={250} boyut={100} hiza="sag" />
      {/* kalsiyum küresi ve oksalat kristali */}
      <Etiket t={t} bas={K(0, "calcium")} bitis={tBind + 0.6} capa={[600, 633]} konum={[330, 880]} metin="CALCIUM" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "oxalate,")} bitis={tBind + 0.6} capa={[722, 700]} konum={[1000, 905]} metin="OXALATE" renk={RENK.mercan} />
      {/* birleşme: kümelenen parçalar */}
      <Etiket t={t} bas={tBind} bitis={tStool - 0.3} capa={[440, 500]} konum={[250, 130]} metin="BOUND TOGETHER" renk={RENK.yesil} />
      <Parcaciklar t={t} bas={tStool} kaynak={[620, 640]} hedef={[1180, 520]} adet={16} aralik={0.12} kavis={-60} tohum="s26" renk={RENK.altinAcik} />
      <Liste t={t} x={1310} y={600} isaret="onay" boyut={32} genislik={560} aralik={84}
        ogeler={[{ bas: tStool, metin: "LEAVE IN THE STOOL" }, { bas: K(1, "instead"), metin: "NOT ABSORBED" }]} />
    </>
  );
};
export default S26;
