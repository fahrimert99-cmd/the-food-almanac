// Sahne 29 — Yao 2019 meta-analizi: 6 deney, ~49.000 kişi; her kırık −%6, kalça kırığı −%16.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYao = K(0, "Yao"), tPool = K(0, "pooled"), tSix = K(1, "Six"), t49 = K(1, "49,000");
  const t6 = K(1, "6 percent"), t16 = K(1, "16 percent");
  const pPanel = eout(ilerle(t, tPool - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [60, 60, 1760])}>
        {/* şişedeki bozuk etiket yazısını boş etiketle örter */}
        <div style={{ position: "absolute", left: 976, top: 652, width: 242, height: 122, background: "#EFEDE5",
          border: "3px solid #302822", borderRadius: 6 }} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={700} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tYao} />
      <Etiket t={t} bas={tPool} bitis={3.5} capa={[420, 330]} konum={[820, 220]} metin="POOLED TRIALS" renk={RENK.altin} boyut={30} />
      <BaslikBlok t={t} bas={tPool} satirlar={["POOLED", "TRIALS"]} x={1860} y={190} boyut={96} hiza="sag" />
      <Not t={t} bas={tSix} metin="six trials · about 49,000 people" x={1860} y={365} hiza="sag" boyut={30} genislik={620} />
      <VurguRozet t={t} bas={t6 - 0.1} vurgu="–6%" not="fractures of any kind" x={1500} y={450} renk={RENK.altin} genislik={400} boyut={96} />
      <VurguRozet t={t} bas={t16 - 0.1} vurgu="–16%" not="hip fractures" x={1500} y={680} renk={RENK.yesil} genislik={400} boyut={110} />
    </>
  );
};

export default S29;
