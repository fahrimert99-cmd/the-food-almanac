// Sahne 60 — warfarin ve K vitamini; 12 kişilik çalışmada INR 2.6 -> 3.3
import React from "react";
import { Baslik, CubukGrafik, Etiket, Kamera, Ortu, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// köşelerdeki brokoli kümeleri kâğıt yamayla örtülür
const YAMALAR: [number, number, number, number][] = [
  [40, 0, 520, 420], [1440, 0, 460, 420], [20, 640, 560, 440], [1420, 640, 500, 440],
];

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrtu = K(1, "twelve-person") - 0.2;
  const pOrtu = eout(ilerle(t, tOrtu, 0.6));
  const pGor = 1 - pOrtu;
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [330, 20, 1300], [400, 60, 1150])}>
        {YAMALAR.map(([x, y, w, h], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: w, height: h,
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        ))}
        <Etiket t={t} bas={K(0, "warfarin")} bitis={tOrtu} capa={[1480, 560]} konum={[1330, 230]} metin="WARFARIN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "vitamin")} bitis={tOrtu} capa={[740, 330]} konum={[520, 640]} metin="VITAMIN K" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ opacity: pGor }}>
        <Baslik t={t} bas={K(0, "changes")} bitis={tOrtu} metin="BIG CHANGES MOVE INR" x={960} y={96} boyut={78}
          renk={RENK.lacivert} hiza="orta" />
      </div>
      <Ortu a={0.97 * pOrtu} />
      {pOrtu > 0 && (
        <>
          <Baslik t={t} bas={K(1, "twelve-person")} metin="12-PERSON TRIAL" x={960} y={140} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
          <VurguRozet t={t} bas={K(1, "80")} vurgu="–80%" not="VITAMIN K INTAKE" x={420} y={420} genislik={440} renk={RENK.altin} />
          <CubukGrafik t={t} bas={K(1, "2.6")} x={780} y={330} w={820} h={470} maks={4}
            cubuklar={[
              { etiket: "BEFORE", deger: 2.6, metin: "INR 2.6", renk: RENK.yesil, bas: K(1, "2.6") },
              { etiket: "AFTER", deger: 3.3, metin: "INR 3.3", renk: RENK.mercan, bas: K(1, "3.3") - 0.2 },
            ]} />
        </>
      )}
    </>
  );
};

export default S60;
