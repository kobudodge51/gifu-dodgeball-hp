/* 大会データ（公式情報）。大会の追加・変更はここだけ書き換えれば、トップと大会予定ページに反映されます。 */
window.JDBA_TOURNAMENTS = [
  {name:"C級審判認定会・伝達レベルアップ講習会", date:"2026-04-26", venue:"席田小学校 他", org:"岐阜県協会", kind:"講習会"},
  {name:"第21回 さるぼぼカップ in 高山", date:"2026-06-07", venue:"飛騨高山ビッグアリーナ", org:"岐阜県協会", note:"6月6日(土) 親子ドッジ・準備"},
  {name:"第16回 フレッシュカップ", date:"2026-06-27", venue:"池田町総合体育館", org:"フレッシュカップ実行委員会"},
  {name:"第35回 夏の全国小学生ドッジボール選手権 岐阜県大会", date:"2026-07-19", venue:"池田町総合体育館", org:"岐阜県協会"},
  {name:"ヒマラヤカップ2026", date:"2026-10-18", venue:"岐阜メモリアルセンター で愛・ふれ愛ドーム", org:"岐阜県協会", note:"10月17日(土) 13時〜準備", entry:"closed"},
  {name:"ぴょこたんカップ2026", date:"2026-11-21", venue:"OKBぎふ清流アリーナ", org:"岐阜県協会", note:"クリスマスパーティ", categories:["オフィシャルの部（小3〜6年）","ジュニアの部（小1〜4年）"], capLabel:"参加チーム", capacity:"26チーム（オフィシャル11・ジュニア15）", url:"https://kobudodge51.github.io/pyoko2026/", urlLabel:"要項・速報ページ"},
  {name:"第19回 霞渓杯", date:"2026-11-29", venue:"池田町総合体育館", org:"霞渓杯実行委員会", entry:"closed"},
  {name:"関ケ原合戦2026", date:"2026-12-06", venue:"池田町総合体育館", org:"岐阜県協会", entry:"closed"},
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

/* 大会結果。新しい大会が先頭。teams の並びは 優勝・準優勝・第3位 の順 */
window.JDBA_RESULTS = [
  {name:"ヒマラヤカップ2026", date:"2026-10-18", venue:"岐阜メモリアルセンター で愛・ふれ愛ドーム", divisions:[
    {name:"オフィシャル", teams:["本郷サンダーズ（愛知県）","鷺洲軍団（大阪府）","御影No.1（兵庫県）"]},
    {name:"ジュニア", teams:["SOULMAX池田Jr（岐阜県）","大林ファイターズJr（愛知県）"]},
    {name:"女子", teams:["DOPAL（愛知県）","DaMonde（愛知県）"]},
    {name:"U15", teams:["神楽（大阪府）","DRAGON BALLⓇ（愛知県）"]},
    {name:"ファイター", teams:["鳴門渦潮ハリケーン（徳島県）","強敵燦鶴（群馬県）","Feujon（岐阜県）"]}
  ]},
  {name:"ぎふスポーツフェスティバル2026 第35回夏の全国小学生ドッジボール選手権 岐阜県大会", date:"2026-07-19", venue:"池田町総合体育館", note:"8月16日に群馬県高崎アリーナで開催される全国大会に岐阜県代表として出場します。", divisions:[
    {name:"", teams:["SOULMAX池田（池田町）","ガンバベアーズ（岐阜市）","GOLDENWINGS（可児市）"]}
  ]},
  {name:"第16回 フレッシュカップ", date:"2026-06-27", venue:"池田町総合体育館", divisions:[
    {name:"オフィシャルの部　決勝トーナメント", teams:["菅原ダイナマイトハリケーン（大阪府）","METS萩原（愛知県）",[3,"SOUL MAX池田（岐阜県）"],[3,"三和っ子パラダイス（愛知県）"]]},
    {name:"オフィシャルの部　ふれあいトーナメント", teams:["ガンバベアーズ（岐阜市）"]}
  ]},
  {name:"さるぼぼカップ2026", date:"2026-06-07", venue:"飛騨高山ビッグアリーナ", divisions:[
    {name:"オフィシャルの部　決勝トーナメント", teams:["新庄ソルジャーズ（奈良県）","ガンバベアーズ（岐阜市）","Attacks Zero1（富山県）","針原パイレーツ（富山県）"]},
    {name:"ジュニアの部", teams:["SOULMAX池田Jr","ガッツJ",[3,"島デビチビターズ"],[3,"ガンバベアーズJr"]]}
  ]},
  {name:"コモカップ　岐阜県大会", date:null, venue:"", divisions:[
    {name:"リトルの部", teams:["ガンバレクマサン（岐阜市）","SOUL MAX池田 リトル（揖斐郡池田町）","6ネンズSP ちび（本巣市）","JOUSEI りとる（岐阜市）"]}
  ]}
];
