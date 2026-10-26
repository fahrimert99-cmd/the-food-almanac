// Sahne 17 — pernisiyöz anemi payı ve besinden serbest kalmayan B12 payı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPern = K(0, "pernicious"), t15 = K(1, "15"), tProb = K(1, "problems"), t60 = K(1, "60");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [160, 180, 1600], [200, 200, 1520])}>
        <Etiket t={t} bas={tPern} bitis={tProb - 0.1} capa={[1180, 740]} konum={[1180, 590]} metin="PERNICIOUS ANEMIA" renk={RENK.mercan} />
        <VurguRozet t={t} bas={t15} bitis={tProb - 0.1} vurgu="15–20%" not="of cases" x={1180} y={380} genislik={300} boyut={84} renk={RENK.mercan} />
        <Etiket t={t} bas={tProb} capa={[590, 690]} konum={[1080, 470]} metin="NOT FREED FROM FOOD" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={t60 - 0.1} satirlar={["OVER 60%", "FROM FOOD"]} x={140} y={190} boyut={104} />
      <Not t={t} bas={t60 + 0.5} metin="of cases: B12 not freed from food" x={146} y={375} genislik={620} boyut={34} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S17;
