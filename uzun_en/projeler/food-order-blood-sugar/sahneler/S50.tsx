// Sahne 50 — Beş: restoranda ekmek sepeti beklesin; salata/sebze başlangıç; karışık yemeğe sebze yanı ekle ve oradan başla.
import React from "react";
import { ANTON, Baslik, Etiket, GorselKart, Ikon, IkonYol, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

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

// Sıra numarası rozeti (pop). x,y = merkez
const SiraNo: React.FC<{ t: number; bas: number; no: string; renk: string; x: number; y: number }> = ({ t, bas, no, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - 36, top: y - 36, width: 72, height: 72, borderRadius: "50%", background: renk, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 42, transform: `scale(${sc})`, opacity: al,
      border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.24)" }}>{no}</div>
  );
};

const KARTLAR = [
  { ifade: "sandwich", ad: "SANDWICH", gorsel: "tam/21", kirp: [10, 290, 670, 785] as [number, number, number, number], x: 1300, aci: -2 },
  { ifade: "pasta bowl", ad: "PASTA BOWL", gorsel: "tam/42", kirp: [860, 170, 1760, 845] as [number, number, number, number], x: 1680, aci: 2 },
];

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const R = 1860; // sağ başlık bloğunun sağ kenarı
  // 1) ekmek sepeti beklesin
  const tRest = K(1, "At restaurants"), tLet = K(1, "let the bread"), tSepet = K(1, "bread basket"), tWait = K(1, "wait");
  // 2) salata / sebze başlangıç
  const tOrder = K(2, "Order"), tSalad = K(2, "salad"), tVeg = K(2, "vegetable starter"), tStarter = K(2, "starter");
  // 3) karışık yemekler
  const tIf = K(2, "if a dish"), tDish = K(2, "dish mixes"), tHepsi = K(2, "everything together");
  // 4) sebze yanı ekle, oradan başla
  const tAdd = K(2, "add a side"), tSebze = K(2, "of vegetables"), tStart = K(2, "start there");
  // 1. başlık "WAIT" okunabilsin diye "A SALAD"dan hemen önce çekilir; "ORDER" üst satırı onunla gelir
  const c1 = tSalad - 0.35, c2 = tIf - 0.2, c3 = tAdd - 0.2;
  const tOrderBas = Math.max(tOrder, c1 + 0.3);
  // kamera penceresi: panelin üstünde kalması gereken etiketler ekran koordinatına çevrilir
  const pw = kameraYolu(t, s.sure, [40, 25, 1840], [90, 50, 1740]);
  const E = (x: number, y: number): [number, number] => [(x - pw[0]) * (1920 / pw[2]), (y - pw[1]) * (1920 / pw[2])];
  const pPanel = eout(ilerle(t, tIf, 0.6));
  return (
    <>
      <Kamera gorsel="tam/50" pencere={pw}>
        <Etiket t={t} bas={tSepet} bitis={c2} capa={[600, 420]} konum={[890, 330]} metin="BREAD BASKET" renk={RENK.mercan} />
        {/* bekleme saati: ekmek sepeti hapının hemen sağında (görselle birlikte hareket eder) */}
        <Ikon t={t} bas={tWait} bitis={c2} ad="saat" x={1102} y={330} boyut={80} zemin={RENK.altin} />
        <Etiket t={t} bas={tStarter} bitis={c2} capa={[985, 650]} konum={[960, 462]} metin="STARTER" renk={RENK.yesil} />
      </Kamera>
      <IpucuNo t={t} no={5} x={175} y={160} nabizBitis={tRest} bitis={c2} />

      {/* 1) başlık */}
      <Baslik t={t} bas={tRest} bitis={c1} metin="AT RESTAURANTS" x={R} y={165} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="sag" />
      <Baslik t={t} bas={tLet} bitis={c1} metin="LET THE BREAD BASKET" x={R} y={262} boyut={78} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tWait} bitis={c1} metin="WAIT" x={R} y={385} boyut={128} renk={RENK.mercan} hiza="sag" />
      {/* 2) başlık */}
      <Baslik t={t} bas={tOrderBas} bitis={c2} metin="ORDER" x={R} y={165} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="sag" />
      <Baslik t={t} bas={tSalad} bitis={c2} metin="A SALAD" x={R} y={268} boyut={112} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={tVeg} bitis={c2} metin="OR A VEGETABLE STARTER" x={R} y={372} boyut={38} renk={RENK.lacivert} font="inter" aralik={3} hiza="sag" />

      {/* 3) sağ panel + karışık yemek kartları */}
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      <Baslik t={t} bas={tDish} bitis={c3} metin="IF A DISH MIXES" x={R} y={165} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="sag" />
      <Baslik t={t} bas={tHepsi} bitis={c3} metin="EVERYTHING TOGETHER" x={R} y={262} boyut={88} renk={RENK.lacivert} hiza="sag" />
      {KARTLAR.map((k) => {
        const b = K(2, k.ifade);
        return (
          <React.Fragment key={k.ad}>
            <GorselKart t={t} bas={b} gorsel={k.gorsel} kirp={k.kirp} x={k.x} y={560} w={330} h={248} aci={k.aci} />
            <Baslik t={t} bas={b + 0.15} metin={k.ad} x={k.x} y={752} boyut={50} renk={RENK.lacivert} hiza="orta" />
          </React.Fragment>
        );
      })}

      {/* 4) sebze yanı önce */}
      <Baslik t={t} bas={tAdd} metin="ADD A SIDE OF VEGETABLES" x={R} y={165} boyut={30} renk={RENK.altin} font="inter" aralik={5} hiza="sag" />
      <Baslik t={t} bas={tStart} metin="AND START THERE" x={R} y={262} boyut={88} renk={RENK.koyuYesil} hiza="sag" />
      {/* sebze yanı: sepetle başlık arasındaki boşlukta, önünde 1 numara (panelin üstünde) */}
      <Etiket t={t} bas={tSebze} capa={E(930, 660)} konum={E(985, 345)} metin="VEGETABLES" renk={RENK.yesil} boyut={30} />
      <SiraNo t={t} bas={tStart} no="1" renk={RENK.yesil} x={E(795, 345)[0]} y={E(795, 345)[1]} />
      <SiraNo t={t} bas={tStart + 0.2} no="2" renk={RENK.lacivert} x={1490} y={420} />
    </>
  );
};

export default S50;
