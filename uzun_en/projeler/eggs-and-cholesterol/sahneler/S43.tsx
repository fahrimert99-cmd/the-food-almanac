// Sahne 43 — tip 2 diyabet: yüksek taban risk, Harvard kohortları (HR 1.06, geniş hata payı).
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDiy = K(0, "type 2"), tRisk = K(0, "higher baseline"), tKucuk = K(0, "any small effect");
  const tHar = K(1, "Harvard"), tYum = K(1, "at least an egg"), tHR = K(1, "1.06"), tMarj = K(1, "wide margin");
  const [sm, am] = pop(t, tMarj, 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 50, 1740])}>
        {/* ölçerin altındaki küçük sahte yazı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 400, top: 945, width: 200, height: 60,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tRisk} bitis={7.6} capa={[470, 640]} konum={[960, 430]} metin="HIGHER BASELINE RISK" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tYum} capa={[1150, 790]} konum={[1230, 520]} metin="1+ EGG A DAY" renk={RENK.altin} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tDiy} metin="TYPE 2" x={160} y={215} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDiy + 0.15} metin="DIABETES" x={160} y={330} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={tKucuk} bitis={7.6} metin="Any small effect counts for more" x={160} y={430} boyut={34} />
      <Not t={t} bas={tHar} metin="HARVARD COHORTS" x={160} y={430} boyut={34} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={tHR} vurgu="1.06" not="HAZARD" x={1600} y={170} genislik={330} />
      <div style={{ position: "absolute", left: 1600, top: 400, transform: `translate(-50%,0) scale(${sm})`, opacity: am }}>
        <Hap metin="WIDE MARGIN OF ERROR" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S43;
