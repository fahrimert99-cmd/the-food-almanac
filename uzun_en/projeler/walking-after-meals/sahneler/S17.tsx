// Sahne 17 — DiPietro 2013: ten kişi, tüm-oda kalorimetre (sol panel düzeni)
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOlder = K(0, "older adults"), tRisk = K(0, "at risk"), tTen = K(0, "ten"), tCal = K(0, "calorimeter,"), tEn = K(0, "measures");
  return (
    <>
      {/* sağdaki tahtadaki sahte yazılar kadraj dışında kalır */}
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 60, 1500], [60, 90, 1430])}>
        <Etiket t={t} bas={tCal - 0.3} capa={[1100, 560]} konum={[880, 690]} metin="WHOLE-ROOM CALORIMETER" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sol" genislik={820} opak={0.96} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Loretta") - 0.3} />
      <Baslik t={t} bas={tOlder} metin="OLDER ADULTS" x={70} y={300} boyut={100} renk={RENK.lacivert} />
      <Not t={t} bas={tRisk} metin="at risk of impaired glucose tolerance" x={74} y={380} boyut={34} genislik={620} />
      <VurguRozet t={t} bas={tTen} vurgu="10" not="PEOPLE IN THE STUDY" x={290} y={500} genislik={420} boyut={110} />
      <Not t={t} bas={tEn} metin="MEASURES ENERGY USE" x={74} y={790} boyut={40} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S17;
