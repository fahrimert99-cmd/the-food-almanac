// Sahne 26 — temizlik işe yarar ama kusursuz değil: 7 kişiden 1'inin lavabosunda hâlâ mikrop.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780]);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={w}>
        <Etiket t={t} bas={K(0, "Cleaning")} bitis={K(1, "one in seven")} capa={[470, 520]} konum={[1000, 150]} metin="CLEANING UP" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "chicken")} capa={[940, 800]} konum={[1000, 560]} metin="RAW CHICKEN" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0, 0.6))} genislik={720} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "CDC")} />
      <Baslik t={t} bas={K(1, "one in seven")} metin="1 IN 7" x={1380} y={300} boyut={200} renk={RENK.altin} />
      <Not t={t} bas={K(1, "cleaned")} x={1380} y={460} boyut={32} genislik={500} agirlik={800}
        metin={(s.meta.baslik?.not ?? "").toUpperCase()} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "still had")} metin="STILL HAD GERMS" x={1380} y={640} boyut={74} renk={RENK.koyuYesil} />
    </>
  );
};
export default S26;
