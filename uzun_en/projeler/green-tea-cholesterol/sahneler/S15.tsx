// Sahne 15 — içecek olarak yeşil çay: çalışmaların yaklaşık çeyreği, –2.6 mg/dL, belirsiz.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tCeyrek = K(1, "quarter");
  const [sh, ah] = pop(t, K(2, "statistically"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 60, 1840])}>
        {/* kâğıtlardaki anlamsız el yazısı: kâğıt rengi sisle örtülü, yalnız fincan ve demlik açık */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080,
          background: `radial-gradient(ellipse 620px 400px at 540px 470px, ${kagit(0)} 48%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(1, "green")} bitis={K(2, "On") + 0.3} capa={[540, 560]} konum={[300, 330]} metin="GREEN TEA DRINK" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "catch")} metin="THE CATCH" x={1860} y={190} boyut={64} renk={RENK.altin} hiza="sag" />
      {/* dört kareden biri dolu: yaklaşık çeyrek */}
      <div style={{ position: "absolute", right: 60, top: 270, display: "flex", gap: 14 }}>
        {[0, 1, 2, 3].map((i) => {
          const [sc, al] = pop(t, tCeyrek - 0.15 + i * 0.07, 0.45);
          return <div key={i} style={{ width: 88, height: 88, borderRadius: 14, transform: `scale(${sc})`, opacity: al,
            background: i === 0 ? RENK.yesil : "transparent", border: `4px solid ${i === 0 ? RENK.yesil : RENK.lacivert}` }} />;
        })}
      </div>
      <Not t={t} bas={tCeyrek + 0.3} metin="ABOUT A QUARTER USED THE DRINK" x={1860} y={382} hiza="sag" genislik={640} boyut={28} agirlik={800} />
      <Baslik t={t} bas={K(1, "drink.")} metin={m.baslik!.satirlar[0]} x={1860} y={535} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(2, "2.6")} vurgu={m.baslik!.vurgu!} not="mg/dL LDL" x={1650} y={620} genislik={340} renk={RENK.altin} />
      <div style={{ position: "absolute", right: 60, top: 870, transform: `scale(${sh})`, transformOrigin: "100% 50%", opacity: ah }}>
        <Hap metin="NOT STATISTICALLY CLEAR" renk={RENK.mercan} boyut={26} />
      </div>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};

export default S15;
