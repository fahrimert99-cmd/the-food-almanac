// Sahne 49 — Dört: sıvı şekere dikkat. Meyve suyu mideden hızlı geçer; yemekle ya da sonra, aç karnına değil.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, IkonYol, Kamera, Liste, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani,
  pop, sol } from "../kutuphane";

// İpucu numarası: büyük daire + altında 5'li ilerleme noktaları (önceki ipuçları onaylı, sıradaki nabız atar)
const IpucuNo: React.FC<{ t: number; no: number; x: number; y: number; nabizBitis?: number; bitis?: number }> = ({
  t, no, x, y, nabizBitis = 0, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, 0.02, 0.6);
  const a = sol(t, bitis);
  if (a <= 0) return null;
  const u = (t % 1.3) / 1.3;
  return (
    <div style={{ opacity: a }}>
      <div style={{ position: "absolute", left: x - 92, top: y - 92, width: 184, height: 184, borderRadius: "50%",
        background: RENK.lacivert, border: `7px solid ${RENK.altin}`, boxSizing: "border-box", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: ANTON, fontSize: 118, lineHeight: 1, color: "#fff", transform: `scale(${sc})`, opacity: al,
        boxShadow: "0 12px 28px rgba(48,40,34,0.25)" }}>{no}</div>
      {[1, 2, 3, 4, 5].map((i) => {
        const [s2, a2] = pop(t, 0.3 + i * 0.08, 0.45);
        const r = i === no ? 19 : 14;
        const cx = x + (i - 3) * 48, cy = y + 132;
        return (
          <React.Fragment key={i}>
            {i === no && t > 0.8 && t < nabizBitis && (
              <div style={{ position: "absolute", left: cx - 19 - 22 * u, top: cy - 19 - 22 * u, width: 38 + 44 * u, height: 38 + 44 * u,
                borderRadius: "50%", border: `4px solid ${RENK.altin}`, boxSizing: "border-box", opacity: (1 - u) * 0.8 }} />
            )}
            <div style={{ position: "absolute", left: cx - r, top: cy - r, width: r * 2, height: r * 2, borderRadius: "50%",
              boxSizing: "border-box", transform: `scale(${s2})`, opacity: a2, display: "flex", alignItems: "center", justifyContent: "center",
              background: i < no ? RENK.yesil : i === no ? RENK.altin : RENK.kagitAcik,
              border: i > no ? `3px solid ${RENK.murekkep}` : `3px solid ${RENK.kagitAcik}`, boxShadow: "0 4px 10px rgba(48,40,34,0.18)" }}>
              {i < no && <IkonYol ad="onay" boyut={20} renk="#fff" kalinlik={7} />}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// "FAST": hız çizgileriyle kinetik kelime. x,y = sol-orta
const Hizli: React.FC<{ t: number; bas: number; bitis: number; x: number; y: number }> = ({ t, bas, bitis, x, y }) => {
  const p = eout(ilerle(t, bas, 0.45));
  const a = p * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y - 60, height: 120, display: "flex", alignItems: "center", gap: 16, opacity: a,
      transform: `translateX(${(1 - p) * -70}px) skewX(-8deg)` }}>
      <svg width={110} height={80}>
        {[18, 40, 62].map((yy, k) => (
          <line key={yy} x1={110 - (k === 1 ? 104 : 74) * p} y1={yy} x2={104} y2={yy} stroke={RENK.mercan} strokeWidth={8} strokeLinecap="round" />
        ))}
      </svg>
      <span style={{ fontFamily: ANTON, fontSize: 104, lineHeight: 1, color: RENK.mercan }}>FAST</span>
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDikkat = K(1, "Be careful"), tSivi = K(1, "liquid"), tSeker = K(1, "sugar");
  const tJuice = K(2, "Juice"), tTatli = K(2, "sweet drinks"), tGec = K(2, "pass"), tMide = K(2, "stomach"), tHiz = K(2, "fast");
  const tWith = K(3, "with or after"), tMeal = K(3, "meal"), tNot = K(3, "not on");
  // ikinci yarı: başlık ve meyve suyu katmanları liste gelmeden söner
  const tCikis = tWith - 0.45;
  const [sT, aT] = pop(t, tTatli, 0.5);
  const aTatli = aT * sol(t, tCikis);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 15, 1880], [40, 40, 1800])}>
        {/* meyve suyundan mideye hızlı akış, sonra mideden çıkış */}
        <Parcaciklar t={t} bas={tGec} kaynak={[492, 552]} hedef={[1595, 610]} adet={34} aralik={0.045} omur={1.05} yayilma={70}
          hedefYayilma={110} kavis={-90} tohum="s49a" boyut={6} />
        <Parcaciklar t={t} bas={tGec + 0.9} kaynak={[1590, 680]} hedef={[1318, 800]} adet={26} aralik={0.05} omur={0.8} yayilma={90}
          hedefYayilma={30} kavis={-10} tohum="s49b" boyut={5} />
        {/* JUICE hapı altta (çizgi diğer hapın altından geçmesin), SWEET DRINKS üstüne eklenir */}
        <Etiket t={t} bas={tJuice} bitis={tCikis} capa={[472, 612]} konum={[225, 502]} metin="JUICE" renk={RENK.mercan} boyut={24} />
        {aTatli > 0 && (
          <div style={{ position: "absolute", left: 225, top: 436, transform: `translate(-50%, -50%) scale(${sT})`, opacity: aTatli }}>
            <Hap metin="SWEET DRINKS" renk={RENK.mercan} boyut={24} />
          </div>
        )}
        <Etiket t={t} bas={tMide} capa={[1640, 690]} konum={[1650, 330]} metin="STOMACH" renk={RENK.altin} />
        <Etiket t={t} bas={tMeal} capa={[800, 705]} konum={[840, 520]} metin="MEAL" renk={RENK.yesil} />
      </Kamera>
      <IpucuNo t={t} no={4} x={175} y={160} nabizBitis={tDikkat} />
      {/* başlık */}
      <Baslik t={t} bas={tDikkat} bitis={tCikis} metin="BE CAREFUL WITH" x={660} y={150} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tSivi} bitis={tCikis} metin="LIQUID" x={655} y={262} boyut={128} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSeker} bitis={tCikis} metin="SUGAR" x={1000} y={262} boyut={128} renk={RENK.mercan} />
      <Hizli t={t} bas={tHiz} bitis={tCikis} x={985} y={430} />
      {/* kural: yemekle ya da sonra / aç karnına değil */}
      <Liste t={t} x={660} y={150} boyut={46} isaret="onay" ogeler={[{ bas: tWith, metin: "WITH OR AFTER A MEAL", renk: RENK.yesil }]} />
      <Liste t={t} x={660} y={262} boyut={46} isaret="carpi" ogeler={[{ bas: tNot, metin: "ON AN EMPTY STOMACH", renk: RENK.mercan }]} />
    </>
  );
};

export default S49;
