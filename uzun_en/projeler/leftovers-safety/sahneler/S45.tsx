// Sahne 45 — CDC: onaylı enfeksiyonların neredeyse yarısı hastane bakımı.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYari = K(0, "nearly half"), tHas = K(1, "hospital.");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        <Etiket t={t} bas={tHas} capa={[700, 700]} konum={[480, 900]} metin="HOSPITAL CARE" renk={RENK.mercan} />
      </Kamera>
      <Panel a={1} genislik={1000} opak={0.97} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={tYari} metin="NEARLY HALF" x={1000} y={230} boyut={140} renk={RENK.koyuYesil} />
      <Not t={t} bas={tYari + 0.4} metin="of confirmed infections at 65 and older led to hospital care" x={1000} y={320} genislik={820} boyut={36} />
      <Liste t={t} x={1000} y={490} isaret="nokta" boyut={32} aralik={68} genislik={800}
        ogeler={[
          { bas: K(0, "Salmonella,"), metin: "SALMONELLA", renk: RENK.altin },
          { bas: K(0, "Campylobacter,"), metin: "CAMPYLOBACTER", renk: RENK.altin },
          { bas: K(0, "Listeria"), metin: "LISTERIA", renk: RENK.altin },
          { bas: K(0, "E."), metin: "E. COLI", renk: RENK.altin },
        ]} />
      <Not t={t} bas={K(2, "confirmed")} metin="Confirmed cases only: tend to be the more severe ones." x={1000} y={810} genislik={820} boyut={36} renk={RENK.mercan} agirlik={800} />
    </>
  );
};
export default S45;
