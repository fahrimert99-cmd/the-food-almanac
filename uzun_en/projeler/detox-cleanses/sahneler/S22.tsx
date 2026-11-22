// Sahne 22 — çalışmanın sınırları: küçük, karşılaştırma grubu yok, toksin çıkışı ölçülmedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Baslik, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [l1, l2] = s.meta.baslik!.satirlar;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1850])}>
        <Etiket t={t} bas={K(1, "no comparison")} capa={[570, 620]} konum={[640, 880]} metin="NO COMPARISON GROUP" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "small,")} satirlar={[l1]} x={1180} y={170} boyut={100} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(1, "no comparison")} satirlar={[l2]} x={1180} y={285} boyut={100} renkler={[RENK.mercan]} />
      <Baslik t={t} bas={K(1, "measured")} metin="IT MEASURED" x={1186} y={430} boyut={28} renk={RENK.altin} font="inter" aralik={3} />
      <Liste t={t} x={1186} y={475} aralik={80} boyut={34} isaret="onay" genislik={680}
        ogeler={[{ bas: K(1, "weight"), metin: "WEIGHT" }, { bas: K(1, "gut bacteria"), metin: "GUT BACTERIA" },
          { bas: K(1, "body markers"), metin: "A FEW BODY MARKERS" }]} />
      <Liste t={t} x={1186} y={760} aralik={80} boyut={34} isaret="carpi" genislik={690}
        ogeler={[{ bas: K(2, "toxins"), metin: "TOXINS LEAVING THE BODY", renk: RENK.mercan }]} />
    </>
  );
};

export default S22;
