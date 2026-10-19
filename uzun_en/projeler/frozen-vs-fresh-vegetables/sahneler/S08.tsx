// Sahne 8 — çiftlikten rafa yolculuk + Favell 1998.
import React from "react";
import { AdimAkisi, Baslik, Etiket, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAdim = K(1, "In") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={K(0, "travelling")} bitis={tAdim - 2.2} capa={[1400, 430]} konum={[1560, 290]} metin="TRAVELLING" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fridge")} bitis={tAdim} capa={[545, 520]} konum={[190, 400]} metin="YOUR FRIDGE" renk={RENK.yesil} />
      </Kamera>
      <div style={{ opacity: sol(t, tAdim, 0.4) }}>
      <AdimAkisi t={t} x={1400} y={130} boyut={28} numarali={false} adimlar={[
        { bas: K(0, "farm"), metin: "FARM", renk: RENK.yesil },
        { bas: K(0, "warehouse"), metin: "WAREHOUSE", renk: RENK.altin },
        { bas: K(0, "shop,"), metin: "SHOP", renk: RENK.mercan },
      ]} />
      </div>
      <VurguRozet t={t} bas={K(1, "1998,")} vurgu="1998" not="MEASURING THE WHOLE JOURNEY" x={1400} y={90} genislik={520} boyut={92} />
      <Baslik t={t} bas={K(1, "Favell")} metin="D J FAVELL" x={1860} y={330} boyut={66} renk={RENK.koyuYesil} hiza="sag" />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S08;
