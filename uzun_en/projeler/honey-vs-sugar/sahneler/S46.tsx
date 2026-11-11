// Sahne 46 — "Two. Count it": diyabette balın karbonhidratı öğün planında sayılır (Mayo Clinic).
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Two"), 0.5);
  const [sh, ah] = pop(t, K(2, "just as you would"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 40, 1720])}>
        <Etiket t={t} bas={K(2, "honey's")} capa={[1000, 520]} konum={[1290, 490]} metin="HONEY'S CARBOHYDRATE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "meal plan")} capa={[1500, 800]} konum={[1530, 910]} metin="MEAL PLAN" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="Mayo Clinic · Diabetes foods" bas={K(2, "Mayo Clinic")} />
      {/* numara rozeti + başlık sağ üstte */}
      <div style={{ position: "absolute", left: 1170, top: 140, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 80, transform: `scale(${sc})`, opacity: al,
        border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>2</div>
      <Baslik t={t} bas={K(1, "Count")} metin="COUNT IT" x={1860} y={195} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(2, "diabetes")} metin="IF YOU HAVE DIABETES" x={1860} y={290} hiza="sag" boyut={32} agirlik={800} renk={RENK.altin} />
      {ah > 0 && (
        <div style={{ position: "absolute", right: 60, top: 335, transform: `scale(${sh})`, transformOrigin: "100% 50%", opacity: ah }}>
          <Hap metin="COUNT IT JUST AS YOU WOULD SUGAR" renk={RENK.yesil} boyut={26} />
        </div>
      )}
    </>
  );
};

export default S46;
