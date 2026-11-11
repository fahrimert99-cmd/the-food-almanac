// Sahne 35 — eşit dağılım ve akşama yığılma: önce tabak etiketleri, sonra çubuklar.
import React from "react";
import { AbsoluteFill, AltSis, Baslik, CubukGrafik, Etiket, Kamera, Not, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrtu = K(1, "other,") - 0.2;
  const pOrtu = eout(ilerle(t, tOrtu, 0.6));
  const tG = K(0, "30");
  const adlar = ["BREAKFAST", "LUNCH", "DINNER"];
  const capalar: [number, number][] = [[400, 330], [960, 330], [1500, 330]];
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {capalar.map((c, i) => (
          <Etiket key={i} t={t} bas={tG + i * 0.45} bitis={tOrtu + 0.4} capa={c} konum={[c[0], 520]} metin={`${adlar[i]} · 30 G`}
            renk={RENK.yesil} boyut={26} />
        ))}
      </Kamera>
      <AltSis a={0.7} yukseklik={130} />
      <Baslik t={t} bas={0.2} bitis={tOrtu + 0.4} metin="EVEN SPREAD" x={960} y={90} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
      <Ortu a={0.95 * pOrtu} />
      {pOrtu > 0 && (
        <>
          <Baslik t={t} bas={tOrtu + 0.2} metin="MOSTLY AT DINNER" x={960} y={170} boyut={84} renk={RENK.mercan} hiza="orta" />
          <Not t={t} bas={tOrtu + 0.6} metin="vs. about 30 g at each meal" x={960} y={235} hiza="orta" boyut={32} renk={RENK.gri} agirlik={700} />
          <CubukGrafik t={t} bas={K(1, "11")} x={360} y={360} w={1200} h={400} maks={72} birimEtiketi="GRAMS OF PROTEIN"
            cubuklar={[
              { etiket: "BREAKFAST", deger: 11, metin: "11 G", renk: RENK.altin, bas: K(1, "11") - 0.5 },
              { etiket: "LUNCH", deger: 16, metin: "16 G", renk: RENK.altin, bas: K(1, "16") - 0.5 },
              { etiket: "DINNER", deger: 63, metin: "63 G", renk: RENK.mercan, bas: K(1, "63") - 0.5 },
            ]} />
        </>
      )}
    </>
  );
};

export default S35;
