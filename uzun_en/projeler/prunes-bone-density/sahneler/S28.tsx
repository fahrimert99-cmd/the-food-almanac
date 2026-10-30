// Sahne 28 — Damani 2024: 183 kadın, bağışıklık hücreleri, daha az enflamatuvar sinyal
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const tImm = K(1, "Immune");
  const [s1, a1] = pop(t, K(1, "less"), 0.55);
  const [s2, a2] = pop(t, K(1, "stimulated"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kam}>
        <Etiket t={t} bas={tImm} capa={[1320, 420]} konum={[1640, 330]} metin="IMMUNE CELLS" renk={RENK.koyuYesil} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "183") - 0.05} bitis={tImm - 0.2} vurgu="183" not="women who finished" x={230} y={190} genislik={340} />
      <div style={{ position: "absolute", left: 1560, top: 118, transform: `translate(-50%, 0) scale(${s1})`, opacity: a1 }}>
        <Hap metin="LESS INFLAMMATORY SIGNALS" renk={RENK.yesil} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 260, top: 190, transform: `translate(-50%, 0) scale(${s2})`, opacity: a2 * eout(ilerle(t, K(1, "stimulated"), 0.4)) }}>
        <Hap metin="STIMULATED IN THE LAB" renk={RENK.altin} boyut={24} />
      </div>
    </>
  );
};

export default S28;
