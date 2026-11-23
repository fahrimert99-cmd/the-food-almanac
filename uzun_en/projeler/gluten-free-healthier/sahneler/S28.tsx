// Sahne 28 — 2011 çalışması: 34 yetişkin, kör test. Sağ panelde başlık ve notlar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const [l1, l2] = m.baslik?.satirlar ?? ["34 ADULTS", "BLINDED TEST"];
  const t34 = K(0, "34"), tIbs = K(0, "irritable bowel"), tDiet = K(0, "gluten-free"), tHaf = K(1, "six weeks");
  const tBread = K(1, "bread"), tMuf = K(1, "muffins"), tBlind = K(1, "nobody knew");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        {/* görselin sağ kenarındaki dikey gölge çizgisini kâğıtla örter */}
        <div style={{ position: "absolute", left: 1230, top: 0, width: 690, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 14%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={tBread} capa={[400, 500]} konum={[330, 300]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={tMuf} capa={[907, 340]} konum={[907, 190]} metin="MUFFINS" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.8))} taraf="sag" genislik={760} opak={1} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={0.2} />}
      <Baslik t={t} bas={t34} metin={l1} x={1250} y={230} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBlind} metin={l2} x={1250} y={350} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={tIbs} metin="With irritable bowel syndrome" x={1254} y={470} boyut={32} genislik={580} />
      <Not t={t} bas={tDiet} metin="Symptoms controlled on a gluten-free diet" x={1254} y={570} boyut={32} genislik={580} />
      <Not t={t} bas={tHaf} metin="Up to six weeks · gluten or none" x={1254} y={670} boyut={32} genislik={580} />
    </>
  );
};

export default S28;
