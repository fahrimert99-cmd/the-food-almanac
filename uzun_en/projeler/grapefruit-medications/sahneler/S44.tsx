// Sahne 44 — portakal suyu felodipin düzeyini artırmadı (1991 çalışması + CMAJ).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kagit, pop } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const [sc, al] = pop(t, K(1, "CMAJ"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])}>
        {/* sol alttaki imza kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 0, top: 960, width: 360, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "orange")} capa={[410, 600]} konum={[640, 270]} metin="ORANGE JUICE" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={880} opak={1} />
      <Baslik t={t} bas={K(0, "1991")} bitis={c[1].bas - 0.1} metin="1991 STUDY" x={1860} y={250} boyut={34} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <BaslikBlok t={t} bas={K(0, "orange")} satirlar={b.satirlar} x={1860} y={370} boyut={120} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "did not")} metin="felodipine level: no rise" x={1860} y={640} hiza="sag" genislik={760} boyut={36} />
      <div style={{ position: "absolute", right: 60, top: 770, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="CMAJ REVIEW: NO SIMILAR REACTION" renk={RENK.yesil} boyut={28} />
      </div>
    </>
  );
};

export default S44;
