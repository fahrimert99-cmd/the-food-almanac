// Sahne 18 — anket formları ve 4 yılda 505 taş: kaynak etiketi, nesne etiketi, sayaçlı rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, AltSis, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, sayac } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAnket = K(0, "questionnaires");
  const tYil = K(1, "four years");
  const t505 = K(1, "505");
  const cik = K(1, "Over") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 0, 1720])}>
        <Etiket t={t} bas={tAnket} bitis={cik} capa={[960, 640]} konum={[1010, 330]} metin="FOOD QUESTIONNAIRES" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.8} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tYil} metin="OVER 4 YEARS" x={1030} y={118} boyut={72} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t505} vurgu={sayac(t, t505, 505, 1.1)} not="men developed a stone" x={1030} y={186} genislik={430}
        renk={RENK.mercan} />
    </>
  );
};

export default S18;
