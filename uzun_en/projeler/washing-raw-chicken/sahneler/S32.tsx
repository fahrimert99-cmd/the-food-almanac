// Sahne 32 — yalnızca ısı: USDA FSIS alıntısı, 165 derece.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUsda = K(1, "USDA's"), tKill = K(1, "kill"), tIc = K(1, "internal temperature"), t165 = K(1, "165");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={tIc} capa={[800, 675]} konum={[1330, 860]} metin="INTERNAL TEMPERATURE" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <Parcaciklar t={t} bas={0.0} kaynak={[500, 800]} hedef={[520, 170]} adet={26} aralik={0.2} omur={2.4} yayilma={500} kavis={-60}
        renk={RENK.altinAcik} boyut={6} tohum="s32" hedefYayilma={300} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tUsda} />
      <BaslikBlok t={t} bas={0.02} satirlar={["ONLY HEAT"]} x={1350} y={400} boyut={112} renkler={[RENK.mercan]} />
      <BaslikBlok t={t} bas={tKill - 0.1} satirlar={["KILLS THEM"]} x={1350} y={520} boyut={112} renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={t165} vurgu="165°F" not="safe internal temperature" x={1560} y={620} genislik={420} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};

export default S32;
