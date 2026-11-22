// Sahne 1 — 1993 pilav vakası: solda görsel, sağda kinetik başlık + rozet.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780]);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={w}>
        <Etiket t={t} bas={K(0, "rice")} capa={[420, 560]} konum={[250, 880]} metin="FRIED RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fried again")} capa={[620, 400]} konum={[330, 250]} metin="FRIED AGAIN" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "1993")} />
      <BaslikBlok t={t} bas={K(0, "cooked")} satirlar={["COOKED", "THE NIGHT BEFORE"]} x={1160} y={250} boyut={86}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(0, "14")} vurgu="14" not="PEOPLE SICKENED" x={1500} y={520} genislik={400} renk={RENK.mercan} />
    </>
  );
};

export default S01;
