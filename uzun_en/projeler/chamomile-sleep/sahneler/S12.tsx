// Sahne 12 — BÖLÜM 3 açılışı: gece yatak odası solda, sağda katılımcı bilgileri.
import React from "react";
import { Baslik, BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800]);
  const t34 = K(1, "34");
  const aC = eout(ilerle(t, t34 + 0.5, 0.6));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={w}>
        <Etiket t={t} bas={K(1, "insomnia")} capa={[880, 640]} konum={[1100, 880]} metin="INSOMNIA" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={3.7} />
      <Baslik t={t} bas={0.2} bitis={t34 - 0.15} metin="THE OTHER SIDE" x={1100} y={300} boyut={90} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={t34} satirlar={["34 ADULTS", "WITH INSOMNIA"]} x={1100} y={250} boyut={104} />
      <div style={{ position: "absolute", left: 1104, top: 480, height: 6, width: 300 * aC, background: RENK.altin }} />
      <Liste t={t} isaret="nokta" x={1100} y={540} aralik={92} boyut={38} genislik={720}
        ogeler={[{ bas: K(1, "aged"), metin: "AGED 18 TO 65", renk: RENK.altin }, { bas: K(1, "lasting"), metin: "AT LEAST 6 MONTHS", renk: RENK.mercan }]} />
    </>
  );
};

export default S12;
