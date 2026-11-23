// Sahne 3 — bozuk para kesesi: nerede harcanır? Sağda kâğıt panel + liste.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])}>
        <Etiket t={t} bas={K(0, "money")} capa={[870, 790]} konum={[520, 905]} metin="YOUR MONEY" renk={RENK.altin} />
      </Kamera>
      {/* görselin sağ kenarındaki dikiş kâğıt zeminle örtülür */}
      <div style={{ position: "absolute", left: 900, top: 0, bottom: 0, width: 260, opacity: p,
        background: `linear-gradient(to right, ${kagit(0)}, ${kagit(1)})` }} />
      <div style={{ position: "absolute", left: 1160, top: 0, bottom: 0, right: 0, opacity: p, background: kagit(1) }} />
      <BaslikBlok t={t} bas={0.25} satirlar={["WHERE TO", "SPEND"]} x={1190} y={210} boyut={120} />
      <Liste t={t} x={1190} y={500} aralik={104} boyut={34} isaret="onay" genislik={680}
        ogeler={[{ bas: K(0, "helps"), metin: "WHERE IT HELPS" }]} />
      <Liste t={t} x={1190} y={604} aralik={104} boyut={34} isaret="carpi" genislik={680}
        ogeler={[{ bas: K(0, "doesn't"), metin: "WHERE IT DOESN'T", renk: RENK.mercan }]} />
      <Liste t={t} x={1190} y={708} aralik={104} boyut={34} isaret="nokta" genislik={680}
        ogeler={[{ bas: K(0, "your money"), metin: "WHERE MONEY GOES FURTHEST", renk: RENK.altin }]} />
    </>
  );
};

export default S03;
