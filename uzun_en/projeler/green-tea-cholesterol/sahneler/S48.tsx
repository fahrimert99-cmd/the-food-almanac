// Sahne 48 — nadolol ve yeşil çay: solda üç fincan ve tansiyon aleti, sağda çalışma bilgileri.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "study")} />
      <Etiket t={t} bas={K(0, "blood")} bitis={K(0, "nadolol") + 1.2} capa={[690, 650]} konum={[1350, 560]} metin="BLOOD PRESSURE" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "nadolol")} metin="NADOLOL" x={1160} y={200} boyut={130} renk={RENK.koyuYesil} />
      <Liste t={t} x={1160} y={330} aralik={84} boyut={30} isaret="nokta" genislik={680} ogeler={[
        { bas: K(1, "ten"), metin: "10 HEALTHY VOLUNTEERS", renk: RENK.lacivert },
        { bas: K(1, "three"), metin: "ABOUT 3 CUPS A DAY", renk: RENK.yesil },
        { bas: K(1, "weeks"), metin: "FOR 2 WEEKS", renk: RENK.altin },
      ]} />
      <VurguRozet t={t} bas={K(1, "85")} vurgu="–85%" not="nadolol in the bloodstream" x={1470} y={650} renk={RENK.mercan} genislik={560} boyut={150} />
    </>
  );
};

export default S48;
