// Sahne 8 — EFSA: bağırsakta kalın jel, safra asidi geri emilimi azalır.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Panel, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEfsa = K(0, "European");
  const tJel = K(1, "thick gel");
  const tSafra = K(1, "bile acid");
  const tGeri = K(1, "taken back up");
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const [sc, al] = pop(t, tGeri + 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [260, 90, 1700], [330, 120, 1560])}>
        <Etiket t={t} bas={tJel} bitis={tSafra + 1.8} capa={[980, 520]} konum={[1590, 330]} metin="THICK OAT GEL" renk={RENK.altin} />
        <Etiket t={t} bas={tSafra} capa={[917, 603]} konum={[1590, 760]} metin="BILE ACID" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={640} opak={0.9} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={tEfsa} metin="EFSA" x={70} y={300} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={tEfsa + 0.2} metin="SMALL INTESTINE" x={74} y={410} boyut={50} renk={RENK.koyuYesil} />
      <Parcaciklar t={t} bas={tGeri} kaynak={[960, 600]} hedef={[960, 250]} adet={14} aralik={0.18} omur={1.6} renk={RENK.yesil} tohum="b8" />
      <div style={{ position: "absolute", left: 70, top: 600, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
        whiteSpace: "nowrap" }}>
        <span style={{ fontFamily: ANTON, fontSize: 36, color: RENK.mercan }}>↓</span>LESS BILE ACID TAKEN UP
      </div>
    </>
  );
};

export default S08;
