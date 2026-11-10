// Sahne 38 — EFSA: 800 mg EGCG/gün ve üzeri ekstre; güvenli doz belirlenemedi
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tExt = K(0, "supplements"), t800 = K(0, "800"), tLiver = K(0, "raised"), tNo = K(1, "could not");
  const [sc, al] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        {/* karaciğerin etrafındaki açık dikdörtgeni zemine eşitle */}
        <div style={{ position: "absolute", left: 888, top: 688, width: 372, height: 324, background: "#F7F6F7", mixBlendMode: "multiply" }} />
        <Etiket t={t} bas={tLiver} capa={[1090, 830]} konum={[1100, 630]} metin="LIVER ENZYMES" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, tExt, 0.6))} taraf="sag" genislik={600} />
      <BaslikBlok t={t} bas={tExt} satirlar={["EXTRACT"]} x={1860} y={210} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={t800} vurgu="800 mg" not="EGCG a day or more" x={1600} y={320} genislik={440} renk={RENK.mercan} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1600, top: 880, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="NO CONFIDENT SAFE DOSE" renk={RENK.altin} boyut={28} />
        </div>
      )}
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S38;
