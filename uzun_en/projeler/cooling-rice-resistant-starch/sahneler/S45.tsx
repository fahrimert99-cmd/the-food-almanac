// Sahne 45 — belirtiler: 1–6 saat içinde başlar, genelde hafiftir. Görsel sağa kayar, solda metin.
import React from "react";
import { ANTON, Baslik, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure);
  const tKapat = K(1, "It") - 0.2;
  const pP = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/45" pencere={[-440 + 50 * z, 40 - 10 * z, 1920 - 40 * z]} sinirla={false} />
      <Panel a={pP} taraf="sol" genislik={900} opak={1} />
      {/* ilk cümle: başlangıç süresi + belirtiler */}
      <Baslik t={t} bas={K(0, "starts")} bitis={tKapat} metin="STARTS FAST" x={70} y={180} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "one")} bitis={tKapat} vurgu="1–6 HOURS" not="usually within" x={330} y={260} genislik={520} boyut={92} />
      <Liste t={t} isaret="nokta" x={70} y={560} aralik={86} boyut={38} genislik={700}
        ogeler={[
          { bas: K(0, "nausea"), metin: "NAUSEA", renk: RENK.altin, bitis: tKapat },
          { bas: K(0, "cramps"), metin: "CRAMPS", renk: RENK.altin, bitis: tKapat },
          { bas: K(0, "vomiting"), metin: "VOMITING", renk: RENK.altin, bitis: tKapat },
          { bas: K(0, "diarrhea"), metin: "DIARRHEA", renk: RENK.altin, bitis: tKapat },
        ]} />
      {/* ikinci cümle */}
      <Baslik t={t} bas={K(1, "mild")} metin="USUALLY MILD" x={70} y={220} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "passes")} metin="PASSES ON ITS OWN" x={70} y={340} boyut={64} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "reason")} metin="But there is no reason to take the chance." x={70} y={460} boyut={36} genislik={700} />
    </>
  );
};

export default S45;
