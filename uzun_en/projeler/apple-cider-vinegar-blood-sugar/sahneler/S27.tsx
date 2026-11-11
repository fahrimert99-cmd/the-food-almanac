// Sahne 27 — 2007 pilot çalışma: 10 kişi, tip 1 diyabet + gastropareziyi; 30 ml sirke, kahvaltıdan önce, iki hafta.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAdam = K(0, "ten people");
  const tTip = K(0, "type 1");
  const tYavas = K(0, "slow stomach");
  const tMl = K(1, "30");
  const tOnce = K(1, "before breakfast");
  const tIki = K(1, "two weeks");
  const bit = K(1, "drank") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={tMl} capa={[690, 430]} konum={[1130, 440]} metin="30 ML IN WATER" renk={RENK.altin} />
        <Etiket t={t} bas={tOnce} capa={[1190, 690]} konum={[1580, 330]} metin="BEFORE BREAKFAST" renk={RENK.yesil} />
        <Etiket t={t} bas={tIki} capa={[1340, 655]} konum={[1580, 440]} metin="FOR TWO WEEKS" renk={RENK.yesil} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Liste t={t} isaret="nokta" x={1080} y={150} aralik={88} boyut={34} genislik={760}
        ogeler={[
          { bas: tAdam, metin: "10 PEOPLE", renk: RENK.altin, bitis: bit },
          { bas: tTip, metin: "TYPE 1 DIABETES", renk: RENK.altin, bitis: bit },
          { bas: tYavas, metin: "SLOW STOMACH (GASTROPARESIS)", renk: RENK.altin, bitis: bit },
        ]} />
    </>
  );
};

export default S27;
