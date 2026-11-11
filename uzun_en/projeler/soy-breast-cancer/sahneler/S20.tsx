// Sahne 20 — örüntü ER+/ER− ve tamoksifen kullananlarda/kullanmayanlarda geçerli. Etiketler tofu ve ilaç şişesinde.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [120, 70, 1680])}>
        <Etiket t={t} bas={K(0, "positive")} capa={[700, 470]} konum={[450, 200]} metin="ER-POSITIVE TUMORS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "not")} capa={[600, 540]} konum={[450, 300]} metin="ER-NEGATIVE TUMORS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "tamoxifen")} capa={[905, 340]} konum={[620, 110]} metin="TAMOXIFEN USERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "did not")} capa={[915, 400]} konum={[1040, 105]} metin="NON-USERS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "pattern held")} metin="PATTERN HELD" x={1860} y={270} boyut={72} renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={K(0, "pattern held") + 0.35} ad="onay" x={1370} y={270} boyut={80} />
    </>
  );
};

export default S20;
