// Sahne 11 — USE BY: federal olarak tanımlı değil; bazı hazır gıdalarda önerilir, zorunlu değildir.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(3, "We'll") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={K(2, "refrigerated")} bitis={tSon} capa={[560, 720]} konum={[1480, 880]} metin="REFRIGERATED READY-TO-EAT" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Use")} metin="USE BY" x={1860} y={300} boyut={150} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "Federal")} metin="not defined by federal regulators" x={1860} y={420} hiza="sag" genislik={640}
        boyut={40} agirlik={800} renk={RENK.mercan} />
      <Liste t={t} x={1230} y={600} aralik={90} boyut={36} isaret="onay" genislik={620} ogeler={[
        { bas: K(2, "recommend"), metin: "RECOMMENDED", renk: RENK.yesil, bitis: tSon },
        { bas: K(2, "not"), metin: "NOT REQUIRED", renk: RENK.mercan, bitis: tSon },
      ]} />
      <Baslik t={t} bas={K(3, "We'll")} metin="WHY THAT MATTERS" x={1860} y={640} boyut={84} hiza="sag" renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S11;
