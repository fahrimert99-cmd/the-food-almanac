// Sahne 54 — Cochrane özeti: 29 karşılaştırma, 11.306 kişi; ~%8 kısalma.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, ANTON, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const yama = (l: number, t: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: l, top: t, width: w, height: h,
  background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)`,
});

const Sayi: React.FC<{ t: number; bas: number; bitis: number; sayi: string; ad: string; y: number }> = ({ t, bas, bitis, sayi, ad, y }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * (1 - eout(ilerle(t, bitis, 0.4)));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1190, top: y, transform: `translate(-50%,0) scale(${sc})`, opacity: a, textAlign: "center",
      width: 400, padding: "6px 0 12px", background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24,
      boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 92, lineHeight: 1.05, color: RENK.koyuYesil }}>{sayi}</div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.lacivert }}>{ad}</div>
    </div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure);
  const tBitis = s.cumleler[0].bas + s.cumleler[0].sure + 0.1;
  const tKes = K(0, "clearly cut");
  const [sp_, ap] = pop(t, tKes, 0.55);
  const ap2 = ap * (1 - eout(ilerle(t, tBitis, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        {/* takvimdeki bozuk rakamları örten kâğıt yamalar */}
        <div style={yama(955, 130, 500, 400)} />
        <div style={yama(460, 120, 520, 150)} />
      </Kamera>
      <KaynakEtiketi t={t} metin="COCHRANE REVIEW" bas={K(0, "Cochrane")} />
      <Sayi t={t} bas={K(0, "29")} bitis={tBitis} sayi="29" ad="COMPARISONS" y={160} />
      <Sayi t={t} bas={K(0, "11,306")} bitis={tBitis} sayi="11,306" ad="PEOPLE" y={340} />
      <Etiket t={t} bas={K(0, "vitamin")} bitis={tBitis} capa={[730, 560]} konum={[240, 360]} metin="DAILY VITAMIN C" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1190, top: 530, transform: `translate(-50%,0) scale(${sp_})`, opacity: ap2 }}>
        <Hap metin="NO CLEAR CUT" renk={RENK.mercan} boyut={30}
          style={{ borderColor: RENK.mercan }} />
      </div>
      <VurguRozet t={t} bas={K(1, "8")} vurgu="≈ 8%" not="SHORTER COLDS · ADULTS" x={1190} y={210} genislik={440} renk={RENK.koyuYesil} />
    </>
  );
};

export default S54;
