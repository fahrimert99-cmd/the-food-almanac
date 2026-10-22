// Sahne 9 — safra asidi kolesterolden yapılır; karaciğer daha çok kolesterol kullanır, LDL düşer.
import React from "react";
import { AdimAkisi, Baslik, BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKol = K(0, "cholesterol");
  const tKaybi = K(1, "lost");
  const tKaraciger = K(1, "liver");
  const tLdl = K(1, "LDL");
  const pPanel = eout(ilerle(t, 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1700], [60, 90, 1560])}>
        <Etiket t={t} bas={tKol - 0.1} bitis={tKaybi} capa={[917, 603]} konum={[1180, 790]} metin="BILE ACID" renk={RENK.yesil} />
        <Etiket t={t} bas={tKaraciger} capa={[330, 520]} konum={[820, 650]} metin="LIVER" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={860} opak={0.95} />
      <BaslikBlok t={t} bas={tKaybi} satirlar={s.meta.baslik!.satirlar} x={1860} y={250} boyut={104} hiza="sag"
        renkler={[RENK.yesil, RENK.koyuYesil]} />
      <AdimAkisi t={t} x={1470} y={640} boyut={28} numarali={false}
        adimlar={[
          { bas: tKaybi + 0.2, metin: "BILE LOST", renk: RENK.yesil },
          { bas: K(1, "uses more"), metin: "MORE CHOLESTEROL USED", renk: RENK.altin },
        ]} />
      <Baslik t={t} bas={tLdl} metin="LDL FALLS" x={1860} y={800} boyut={84} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S09;
