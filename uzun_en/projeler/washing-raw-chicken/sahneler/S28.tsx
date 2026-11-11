// Sahne 28 — eğitim kampanyaları: Drexel broşür + video pilotu, sonuçlar (anlatımdaki ifadeler).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCamp = K(0, "campaigns"), tPilot = K(0, "pilots");
  const tDrexel = K(1, "Drexel"), tComic = K(1, "comic"), tVideo = K(1, "short videos");
  const tBilgi = K(1, "better knowledge"), tGuven = K(1, "more confidence"), tNot = K(1, "not washing");
  const bitB = tDrexel - 0.15;
  const aBant = eout(ilerle(t, tCamp - 0.1, 0.5)) * sol(t, bitB);
  const [s1, a1] = pop(t, tDrexel, 0.55);
  const [s2, a2] = pop(t, tBilgi, 0.55);
  const [s3, a3] = pop(t, tGuven, 0.55);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])}>
        <Etiket t={t} bas={tComic} bitis={tBilgi - 0.2} capa={[560, 830]} konum={[400, 703]} metin="COMIC BROCHURES" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tVideo} bitis={tBilgi - 0.2} capa={[640, 470]} konum={[1010, 440]} metin="SHORT VIDEOS" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={tNot} capa={[1300, 700]} konum={[1330, 470]} metin="NOT WASHING" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      {/* üst bant: yazı için kâğıt zemin */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1250, height: 400, opacity: aBant,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.96)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tCamp - 0.05} bitis={bitB} metin="EDUCATION CAMPAIGNS" x={70} y={200} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tPilot - 0.1} bitis={bitB} metin="worked in small pilots before" x={74} y={270} boyut={40} />
      <div style={{ position: "absolute", left: 980, top: 100, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
        <Hap metin="DREXEL UNIVERSITY" renk={RENK.lacivert} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 980, top: 190, transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
        <Hap metin="BETTER KNOWLEDGE" renk={RENK.yesil} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 980, top: 280, transform: `scale(${s3})`, transformOrigin: "0% 50%", opacity: a3 }}>
        <Hap metin="MORE CONFIDENCE" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S28;
