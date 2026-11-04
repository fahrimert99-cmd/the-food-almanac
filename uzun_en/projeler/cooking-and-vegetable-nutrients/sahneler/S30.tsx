// Sahne 30 — havuçlar, doğranmış parçalar, püre: simüle sindirimde çiğ parçalardan %3 beta-karoten salındı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCar = K(0, "carrots");
  const tLab = K(0, "in the lab");
  const tYil = K(1, "2002");
  const tSim = K(1, "simulated");
  const tRaw = K(2, "raw carrot");
  const tPct = K(2, "3 percent");
  const [sL, aL] = pop(t, tLab, 0.5);
  const [sS, aS] = pop(t, tSim, 0.5);
  const aL2 = aL * sol(t, 3.4), aS2 = aS * sol(t, tPct - 0.2);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [120, 90, 1700])}>
        <Etiket t={t} bas={tRaw} capa={[880, 650]} konum={[1020, 340]} metin="RAW PIECES" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tCar} bitis={3.4} metin="CARROTS" x={1400} y={140} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      {aL2 > 0 && (
        <div style={{ position: "absolute", left: 1400, top: 230, transform: `translate(-50%, 0) scale(${sL})`, opacity: aL2 }}>
          <Hap metin="AT LEAST IN THE LAB" renk={RENK.altin} boyut={32} />
        </div>
      )}
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tYil} />
      {aS2 > 0 && (
        <div style={{ position: "absolute", left: 1400, top: 150, transform: `translate(-50%, 0) scale(${sS})`, opacity: aS2 }}>
          <Hap metin="SIMULATED DIGESTION" renk={RENK.altin} boyut={36} />
        </div>
      )}
      <VurguRozet t={t} bas={tPct} vurgu="3%" not="of beta-carotene released" x={1400} y={100} boyut={110} genislik={420} renk={RENK.mercan} />
    </>
  );
};

export default S30;
