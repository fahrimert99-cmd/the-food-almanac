// Sahne 16 — NIH'nin temkinli tutumu: sol panelde kurum adı ve "sınırlı kanıt".
import React from "react";
import { Baslik, BaslikBlok, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      {/* sol siyah şerit dışında kalan pencere */}
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [280, 20, 1580], [340, 50, 1480])} />
      <Panel a={pPanel} taraf="sol" genislik={920} opak={0.97} />
      <Baslik t={t} bas={K(0, "US")} metin="US NIH" x={70} y={300} boyut={150} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "National")} metin="NATIONAL INSTITUTES OF HEALTH" x={74} y={410} boyut={34} agirlik={800} genislik={780} />
      <Not t={t} bas={K(1, "center")} metin="NCCIH · COMPLEMENTARY MEDICINE" x={74} y={470} boyut={30} renk={RENK.altin} agirlik={800} genislik={780} />
      <BaslikBlok t={t} bas={K(1, "limited")} satirlar={["LIMITED", "EVIDENCE"]} x={70} y={610} boyut={100}
        renkler={[RENK.lacivert, RENK.lacivert]} />
      <Baslik t={t} bas={K(1, "small")} metin="SMALL EXTENT" x={70} y={865} boyut={70} renk={RENK.altin} />
    </>
  );
};

export default S16;
