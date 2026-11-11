// Sahne 52 — THREE: dondur (duraklat düğmesi).
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, Hap } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tB = K(2, "use");
  const tC = K(3, "freezing");
  const [sc, al] = pop(t, K(1, "pause"), 0.5);
  const aP = al * sol(t, tB - 0.1, 0.3);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        {/* ekmek poşetindeki bozuk yazılı etiket boş etiketle değiştirilir */}
        <ellipse cx={770} cy={560} rx={30} ry={23} fill="#F3EFE6" stroke="#302822" strokeWidth={2.5} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1860} y={250} boyut={92} hiza="sag" />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={tC} />}
      {/* duraklat düğmesi */}
      {aP > 0 && (
        <div style={{ position: "absolute", left: 1420, top: 560, width: 190, height: 190, borderRadius: "50%", background: RENK.lacivert,
          transform: `scale(${sc})`, opacity: aP, display: "flex", alignItems: "center", justifyContent: "center", gap: 22,
          boxShadow: "0 10px 26px rgba(48,40,34,0.25)", border: `5px solid ${RENK.kagitAcik}` }}>
          <div style={{ width: 28, height: 90, background: "#fff", borderRadius: 6 }} />
          <div style={{ width: 28, height: 90, background: "#fff", borderRadius: 6 }} />
        </div>
      )}
      <Etiket t={t} bas={K(1, "freezer")} bitis={tB - 0.1} capa={[420, 640]} konum={[900, 900]} metin="FREEZER" renk={RENK.lacivert} />
      {/* use / freeze by -> dondur, çöpe atma */}
      <Liste t={t} isaret="nokta" x={1190} y={470} boyut={34} genislik={690} ogeler={[
        { bas: tB, metin: "USE BY / FREEZE BY", renk: RENK.altin, bitis: tC - 0.2 }]} />
      <Liste t={t} isaret="onay" x={1190} y={560} boyut={34} genislik={690} ogeler={[
        { bas: K(2, "freezing"), metin: "FREEZE IT", renk: RENK.yesil, bitis: tC - 0.2 }]} />
      <Liste t={t} isaret="carpi" x={1190} y={650} boyut={34} genislik={690} ogeler={[
        { bas: K(2, "trash"), metin: "NOT THE TRASH", renk: RENK.mercan, bitis: tC - 0.2 }]} />
      {/* Listeria sınırı */}
      <Liste t={t} isaret="carpi" x={1190} y={520} boyut={32} genislik={700} ogeler={[
        { bas: K(3, "eliminate"), metin: "DOESN'T ELIMINATE LISTERIA", renk: RENK.mercan }]} />
      <Liste t={t} isaret="carpi" x={1190} y={610} boyut={32} genislik={700} ogeler={[
        { bas: K(3, "fix"), metin: "WON'T FIX A RISKY FOOD", renk: RENK.mercan }]} />
    </>
  );
};

export default S52;
