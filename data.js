/* 大会データ（公式情報）。大会の追加・変更はここだけ書き換えれば、トップと大会予定ページに反映されます。 */
window.JDBA_TOURNAMENTS = [
  {name:"C級審判認定会・伝達レベルアップ講習会", date:"2026-04-26", venue:"席田小学校 他", org:"岐阜県協会", kind:"講習会"},
  {name:"第21回 さるぼぼカップ in 高山", date:"2026-06-07", venue:"飛騨高山ビッグアリーナ", org:"岐阜県協会", note:"6月6日(土) 親子ドッジ・準備"},
  {name:"フレッシュカップ", date:"2026-06-27", venue:"池田町総合体育館", org:"フレッシュカップ実行委員会"},
  {name:"第35回 夏の全国小学生ドッジボール選手権 岐阜県大会", date:"2026-07-19", venue:"池田町総合体育館", org:"岐阜県協会"},
  {name:"ヒマラヤカップ2026", date:"2026-10-18", venue:"岐阜メモリアルセンター で愛・ふれ愛ドーム", org:"岐阜県協会", note:"10月17日(土) 13時〜準備", entry:"closed"},
  {name:"ぴょこたんカップ2026", date:"2026-11-21", venue:"OKBぎふ清流アリーナ", org:"岐阜県協会", note:"クリスマスパーティ", url:"https://kobudodge51.github.io/pyoko2026/", urlLabel:"速報ページ"},
  {name:"第19回 霞渓杯", date:"2026-11-29", venue:"池田町総合体育館", org:"霞渓杯実行委員会", entry:"open"},
  {name:"関ケ原合戦2026", date:"2026-12-06", venue:"池田町総合体育館", org:"岐阜県協会"},
  {name:"第36回 春の全国小学生ドッジボール選手権 岐阜県大会", date:"2027-02-14", venue:"池田町総合体育館", org:"岐阜県協会"},
  {name:"6年生ファイナルドッジ", date:null, venue:"未定", org:"岐阜県協会"}
];
(function(){
  var W=["日","月","火","水","木","金","土"];
  var n=new Date(Date.now()+9*3600e3), today=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate());
  window.JDBA_TOURNAMENTS.forEach(function(t){
    if(!t.date){t.status="tbd";return;}
    var p=t.date.split("-").map(Number), d=new Date(Date.UTC(p[0],p[1]-1,p[2]));
    t.y=p[0];t.m=p[1];t.d=p[2];t.w=W[d.getUTCDay()];
    t.days=Math.round((d.getTime()-today)/864e5);
    t.status=t.days<0?"past":"up";
    t.label=t.m+"月"+t.d+"日（"+t.w+"）";
  });
})();
