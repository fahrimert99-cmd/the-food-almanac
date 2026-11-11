// Sahne 30 — katılımcılar: 20.995 kişi, dahil olma ölçütleri, yaklaşık beş yıl izlem.
import React from "react";
import { BaslikBlok, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKisi = K(0, "20,995"), tInme = K(1, "stroke"), tYa = K(1, "or"), tYas = K(1, "60"), tIzlem = K(2, "followed"), tBes = K(2, "five");
  const [s1, a1] = pop(t, tInme, 0.5);
  const [s2, a2] = pop(t, tYa, 0.4);
  const [s3, a3] = pop(t, tYas, 0.5);
  const [s4, a4] = pop(t, tBes, 0.5);
  const p = eout(ilerle(t, tIzlem, 1.5));
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1840])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={tKisi} satirlar={["20,995", "PEOPLE"]} x={1000} y={230} boyut={140} />
      <Not t={t} bas={tKisi + 0.8} metin="took part" x={1006} y={500} boyut={38} agirlik={800} />
      {/* ölçütler */}
      <div style={{ position: "absolute", left: 1000, top: 570, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="HISTORY OF STROKE" renk={RENK.mercan} boyut={38} />
      </div>
      <div style={{ position: "absolute", left: 1006, top: 650, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2,
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 6, color: RENK.gri }}>OR</div>
      <div style={{ position: "absolute", left: 1000, top: 705, transform: `scale(${s3})`, transformOrigin: "0 50%", opacity: a3 }}>
        <Hap metin="AGE 60+ WITH HIGH BP" renk={RENK.altin} boyut={38} />
      </div>
      {/* izlem süresi çizgisi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {p > 0 && (
          <>
            <line x1={1010} y1={880} x2={1010 + 770 * p} y2={880} stroke={RENK.lacivert} strokeWidth={8} strokeLinecap="round" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1={1010 + i * 154} y1={862} x2={1010 + i * 154} y2={898} stroke={RENK.lacivert} strokeWidth={5}
                opacity={p * 5 >= i ? 1 : 0} />
            ))}
          </>
        )}
      </svg>
      <div style={{ position: "absolute", left: 1000, top: 800, transform: `scale(${s4})`, transformOrigin: "0 50%", opacity: a4 }}>
        <Hap metin="FOLLOWED NEARLY 5 YEARS" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S30;
