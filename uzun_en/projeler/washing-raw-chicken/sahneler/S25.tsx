// Sahne 25 — 2019 USDA mutfak çalışması: yan salatalar %25, gönüllülerin %75'i el yıkamadı.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780]);
  const tAbout = K(1, "About") - 0.1;
  const t25 = K(1, "25"), t75 = K(1, "75");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={w}>
        <Etiket t={t} bas={K(1, "side salads")} capa={[800, 640]} konum={[1000, 790]} metin="SIDE SALAD" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0, 0.6))} genislik={800} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={K(0, "2019")} bitis={tAbout} metin="2019" x={1230} y={330} boyut={170} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "USDA")} bitis={tAbout} metin="USDA KITCHEN STUDY" x={1230} y={490} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "similar")} bitis={tAbout} metin="SIMILAR PATTERN" x={1230} y={580} boyut={72} renk={RENK.altin} />
      <VurguRozet t={t} bas={t25} vurgu="25%" not="OF SIDE SALADS CONTAMINATED" x={1560} y={170} genislik={460} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t75} vurgu="75%" not="OF VOLUNTEERS DID NOT WASH HANDS" x={1560} y={460} genislik={520} renk={RENK.altin} />
      <Not t={t} bas={K(1, "even")} x={1560} y={720} hiza="orta" boyut={30} genislik={520} agirlik={800}
        metin="EVEN THOUGH THEY SAID THEY HAD" renk={RENK.lacivert} />
    </>
  );
};
export default S25;
