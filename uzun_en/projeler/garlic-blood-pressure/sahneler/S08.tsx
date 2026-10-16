// Sahne 8 — Law 2009: 10 puanlık sistolik düşüş. Sol panel + sağda tansiyon aleti (ortadaki sahte yazı panelin altında).
import React from "react";
import { BaslikBlok, KaynakEtiketi, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [560, 250, 1360], [620, 260, 1290])} />
      <Panel a={pPanel} taraf="sol" genislik={960} opak={1} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(1, "2009")} />}
      <Not t={t} bas={K(1, "147")} metin="147 DRUG TRIALS" x={90} y={170} boyut={40} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "ten")} satirlar={m.baslik?.satirlar ?? []} x={90} y={330} boyut={104} />
      <VurguRozet t={t} bas={K(1, "22")} vurgu="–22%" not="coronary events" x={270} y={600} genislik={380} boyut={96} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "41")} vurgu={m.baslik?.vurgu ?? ""} not="strokes" x={690} y={600} genislik={380} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "41") + 0.5} metin="in blood pressure drug trials" x={90} y={820} boyut={34} />
    </>
  );
};
export default S08;
