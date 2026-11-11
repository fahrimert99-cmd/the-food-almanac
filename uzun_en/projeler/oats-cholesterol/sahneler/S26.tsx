// Sahne 26 — 2016 analizi: 58 çalışmadan yalnızca 9'u daha yüksek kalite. Sağda 58 noktalı diyagram.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const X0 = 1250, Y0 = 350, AD = 62;

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t58 = K(1, "2016"), tVar = K(1, "varied widely"), tNine = K(1, "nine"), tExag = K(2, "exaggerate");
  const aVar = eout(ilerle(t, tVar, 0.4)) * sol(t, c[2].bas - 0.1);
  const aExag = eout(ilerle(t, tExag, 0.4));
  const aTop = eout(ilerle(t, t58, 0.5));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      {t >= t58 && (
        <div style={{ position: "absolute", right: 60, top: 262, opacity: aTop, fontFamily: "Inter, sans-serif" }}>
          <Hap metin="58 TRIALS" renk={RENK.gri} boyut={26} />
        </div>
      )}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 58 }, (_, i) => {
          const r = Math.floor(i / 10), k = i % 10;
          const bas = t58 + 0.15 + i * 0.02;
          const [sc, al] = pop(t, bas, 0.35);
          if (al <= 0) return null;
          const gold = i < 9 ? eout(ilerle(t, tNine + i * 0.09, 0.35)) : 0;
          const cx = X0 + k * AD, cy = Y0 + r * AD;
          return (
            <g key={i} transform={`translate(${cx} ${cy}) scale(${sc})`} opacity={al}>
              <circle r={21} fill="#D9D3C6" stroke={RENK.gri} strokeWidth={2} />
              {gold > 0 && <circle r={21 * (0.6 + 0.4 * gold)} fill={RENK.altin} opacity={gold} stroke={RENK.altinAcik} strokeWidth={4} />}
            </g>
          );
        })}
      </svg>
      <Baslik t={t} bas={tNine} metin="9 OF 58" x={1860} y={170} boyut={104} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={tNine + 0.5} metin="trials rated higher quality" x={1860} y={216} hiza="sag" boyut={30} agirlik={800} />
      <div style={{ position: "absolute", right: 60, top: 770, opacity: aVar, transform: `translateX(${(1 - aVar) * 30}px)` }}>
        {t >= tVar && <Hap metin="RESULTS VARIED WIDELY" renk={RENK.mercan} boyut={30} />}
      </div>
      <div style={{ position: "absolute", right: 60, top: 770, opacity: aExag, transform: `translateX(${(1 - aExag) * 30}px)` }}>
        {t >= tExag && <Hap metin="WEAK TRIALS: EXAGGERATE OR HIDE" renk={RENK.mercan} boyut={28} />}
      </div>
    </>
  );
};

export default S26;
