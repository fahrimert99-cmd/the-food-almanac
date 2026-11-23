// Sahne 46 — ameliyattan 2 hafta önce bırak
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, eout, ilerle } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSur = K(0, "surgery"), tSup = K(1, "supplements"), tTwo = K(1, "two"), tNot = K(1, "not"), tTell = K(2, "Tell");
  const bit = tTell - 0.3;
  const yama = (x: number, y: number, w: number, h: number) => (
    <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
      background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
  );
  const aH = eout(ilerle(t, tTwo, 0.5));
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [60, 70, 1700])}>
        {/* takvimdeki sahte karalama izleri kâğıtla örtülür */}
        {yama(480, 190, 260, 60)}
        {yama(130, 530, 560, 50)}
        <Etiket t={t} bas={tSup} bitis={bit} capa={[1070, 520]} konum={[1520, 640]} metin="GINGER SUPPLEMENTS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 420, top: 380, opacity: aH, transform: "translate(-50%,-50%)" }}>
        {aH > 0 && <Hap metin="2 WEEKS" renk={RENK.mercan} boyut={44} />}
      </div>
      <Baslik t={t} bas={tSur} bitis={tTwo - 0.2} metin="SURGERY" x={1860} y={300} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={tTwo} bitis={bit} satirlar={["2 WEEKS", "BEFORE SURGERY"]} x={1860} y={280} boyut={100} hiza="sag" />
      <Not t={t} bas={tTwo + 0.4} bitis={bit} metin="stop ginger supplements, per MSKCC" x={1860} y={470} hiza="sag" genislik={600} boyut={32} />
      <Not t={t} bas={tNot} bitis={bit} metin="AND NOT AFTERWARD, TO CONTROL NAUSEA" x={1860} y={780} hiza="sag" genislik={560} boyut={32} agirlik={800} />
      <BaslikBlok t={t} bas={tTell} satirlar={["TELL YOUR", "SURGICAL TEAM"]} x={1860} y={300} boyut={100} hiza="sag" />
      <Not t={t} bas={K(2, "every")} metin="about every supplement you take" x={1860} y={530} hiza="sag" genislik={600} boyut={34} />
    </>
  );
};
export default S46;
