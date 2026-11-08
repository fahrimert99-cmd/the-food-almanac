// Sahne 13 — terazi: sodyum/potasyum oranı, 1:1 hedefi, batı diyetinde 2-3 kat sodyum.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t3 = K(2, "sodium");
  const [sc, al] = pop(t, t3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1760])}>
        <Etiket t={t} bas={K(0, "sodium")} capa={[560, 590]} konum={[700, 440]} metin="SODIUM" renk={RENK.lacivert} bitis={t3 - 0.1} />
        <Etiket t={t} bas={K(0, "potassium")} capa={[1180, 600]} konum={[1100, 410]} metin="POTASSIUM" renk={RENK.altin} />
        <div style={{ position: "absolute", left: 507, top: 450, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="SODIUM 2–3× HIGHER" renk={RENK.mercan} boyut={30} />
        </div>
      </Kamera>
      <BaslikBlok t={t} bas={0.4} satirlar={["SODIUM :", "POTASSIUM"]} x={140} y={190} boyut={92} />
      <VurguRozet t={t} bas={K(1, "one")} vurgu="1 : 1" not="ratio the reviewers suggest" x={960} y={110} genislik={470} />
      <KaynakEtiketi t={t} metin="Aburto et al. · BMJ · 2013" />
    </>
  );
};

export default S13;
