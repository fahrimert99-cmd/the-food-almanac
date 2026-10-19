// Sahne 40 — Sonuçlar çalışmaya göre değişir: 2009 brokoli çalışmasında buharda pişirme en çok besini korudu (Yuan 2009).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRes = K(0, "results"), t2009 = K(1, "2009"), tSteam = K(1, "steaming"), tOther = K(1, "other methods"),
    tChl = K(1, "chlorophyll"), tVit = K(1, "vitamin"), tTime = K(2, "time"), tWater = K(2, "water");
  const pPanel = 1;
  const pS = pop(t, tSteam + 0.2, 0.5), pC = pop(t, tChl, 0.5), pV = pop(t, tVit, 0.5), pT = pop(t, tTime, 0.5), pW = pop(t, tWater, 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [110, 60, 1700])} />
      {/* sağ panel: kronometre kadranındaki bozuk rakamları da örter */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 1230, right: 0, opacity: pPanel,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 18%, ${kagit(1)} 100%)` }} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={tRes} metin="RESULTS" x={1400} y={190} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tRes + 0.5} metin="DIFFER" x={1400} y={300} boyut={100} renk={RENK.mercan} />
      <Etiket t={t} bas={t2009} capa={[900, 330]} konum={[300, 200]} metin="2009 BROCCOLI" renk={RENK.yesil} />
      <Etiket t={t} bas={tSteam} capa={[780, 560]} konum={[250, 480]} metin="STEAMING" renk={RENK.yesil} />
      {pS[1] > 0 && (
        <div style={{ position: "absolute", left: 1400, top: 420, transform: `scale(${pS[0]})`, transformOrigin: "0 50%", opacity: pS[1] }}>
          <Hap metin="STEAMING: MOST KEPT" renk={RENK.yesil} boyut={28} />
        </div>
      )}
      <Not t={t} bas={tOther} metin="OTHER METHODS: LOSSES" x={1400} y={520} boyut={26} agirlik={800} renk={RENK.mercan} />
      {[{ p: pC, m: "CHLOROPHYLL", y: 580 }, { p: pV, m: "VITAMIN C", y: 660 }].map((o) => o.p[1] > 0 && (
        <div key={o.m} style={{ position: "absolute", left: 1400, top: o.y, display: "flex", alignItems: "center", gap: 16,
          transform: `scale(${o.p[0]})`, transformOrigin: "0 50%", opacity: o.p[1] }}>
          <Hap metin={o.m} renk={RENK.mercan} boyut={26} />
        </div>
      ))}
      <div style={{ position: "absolute", left: 1400, top: 800, display: "flex", gap: 14 }}>
        {[{ p: pT, m: "TIME" }, { p: pW, m: "WATER" }].map((o) => (
          <div key={o.m} style={{ transform: `scale(${o.p[0]})`, opacity: o.p[1] }}><Hap metin={o.m} renk={RENK.altin} boyut={30} /></div>
        ))}
      </div>
      <Not t={t} bas={tTime} metin="seem to matter" x={1400} y={866} boyut={28} />
    </>
  );
};

export default S40;
