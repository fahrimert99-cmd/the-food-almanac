// Sahne 18 — Crawford 2009: 109 yetişkin, A1C > 7, 90 gün, yarısı günde 1 g tarçın. Defterin üstündeki sahte yazı kamerayla kesilir.
import React from "react";
import { Etiket, Hap, Kamera, kagit, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t109 = K(0, "109"), tA1c = K(0, "A1C above"), t90 = K(1, "90 days"), tHalf = K(1, "half took"), tCare = K(1, "usual care"), tGram = K(1, "one gram");
  const [sc, al] = pop(t, tCare, 0.55);
  return (
    <>
      {/* pencere y>=310: defterin üst kenarındaki bozuk yazılar hiç görünmez */}
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [260, 260, 1500], [340, 300, 1340])}>
        {/* defterin üst kenarındaki bozuk harfleri kâğıt rengiyle örter */}
        <div style={{ position: "absolute", left: 470, top: 150, width: 1000, height: 190, background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tHalf} capa={[640, 715]} konum={[760, 905]} metin="HALF TOOK 1 G DAILY" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tGram + 0.6} capa={[1107, 790]} konum={[1450, 905]} metin="CINNAMON" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={t109} vurgu={sayac(t, t109, 109, 0.9)} not="ADULTS, TYPE 2 DIABETES" x={330} y={135} genislik={470} boyut={88} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tA1c} vurgu="> 7" not="STARTING A1C" x={860} y={135} genislik={330} boyut={88} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t90} vurgu="90" not="DAYS" x={1240} y={135} genislik={240} boyut={88} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1420, top: 165, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="ON TOP OF USUAL CARE" renk={RENK.altin} />
      </div>
    </>
  );
};
export default S18;
