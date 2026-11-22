// Sahne 10 — böbrekler filtre: yarım bardak/dk, günde 150 quart
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKid = K(0, "kidneys"), tNiddk = K(1, "According"), tHalf = K(1, "half a cup"), t150 = K(2, "150");
  const pP = eout(ilerle(t, tHalf - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [40, 90, 1760])}>
        {/* beherdeki anlamsız ölçek yazısını örten küçük cam renkli yama */}
        <div style={{ position: "absolute", left: 868, top: 694, width: 120, height: 84,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #E8E4DD 0%, #E8E4DD 70%, rgba(232,228,221,0) 100%)" }} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={900} />
      <Etiket t={t} bas={tKid} bitis={tHalf} capa={[250, 560]} konum={[230, 175]} metin="THE FILTERS" renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tNiddk} />
      <VurguRozet t={t} bas={tHalf} bitis={t150 - 0.15} vurgu="½ CUP" not="of blood filtered every minute" x={1400} y={330} genislik={460} renk={RENK.altin} />
      <BaslikBlok t={t} bas={t150} satirlar={s.meta.baslik?.satirlar ?? []} x={1060} y={380} boyut={130} renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S10;
