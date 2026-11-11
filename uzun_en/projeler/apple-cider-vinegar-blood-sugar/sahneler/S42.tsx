// Sahne 42 — vinegar tabletleri: solda başlık + etiketler, ardından ürün farkları listesi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTab = K(0, "tablets"), tInj = K(1, "esophageal injury"), tTabs = K(1, "tablets,");
  const tSize = K(1, "tablet size"), tAcid = K(1, "acidity"), tCont = K(1, "acid content"), tVar = K(1, "varied widely");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [90, 60, 1740])}>
        {/* sağ alttaki imza kalıntısı yer rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1400, top: 890, width: 200, height: 100,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(243,213,163) 0%, rgb(243,213,163) 60%, rgba(243,213,163,0) 100%)" }} />
        <Etiket t={t} bas={tInj - 0.1} bitis={tSize - 0.3} capa={[420, 740]} konum={[520, 400]} metin="ESOPHAGEAL INJURY" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tTabs - 0.4} bitis={tSize - 0.3} capa={[820, 740]} konum={[880, 520]} metin="VINEGAR TABLETS" renk={RENK.altin} boyut={30} />
      </Kamera>
      <Baslik t={t} bas={tTab} metin="TABLET RISKS" x={140} y={220} boyut={110} renk={RENK.lacivert} bitis={tSize - 0.3} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2005")} />
      <Liste t={t} x={140} y={170} aralik={96} boyut={42} isaret="nokta" ogeler={[
        { bas: tSize, metin: "TABLET SIZE", renk: RENK.altin },
        { bas: tAcid, metin: "ACIDITY", renk: RENK.altin },
        { bas: tCont, metin: "ACID CONTENT", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={tVar} metin="VARIED WIDELY" x={140} y={520} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S42;
