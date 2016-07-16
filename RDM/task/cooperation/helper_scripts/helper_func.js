// random(a,b); Returns random number between a and b, inclusive
function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

// Shuffles Array
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

// Compute Median
function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);
    if (values.length % 2) {
        return values[half];
    } else {
        return (values[half-1] + values[half]) / 2.0;
    }
}

/* showSlide(id); Displays each slide */
function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

var forbiddenIds = ["A1TLNLB9D87H6","A3W6T1WDYXMR3","A5EU1AQJNC7F2","A2NAKIXS3DVGAA","A2O5OJXCUFQ3FV",
"A3KVH7IYW9XEJX","AHDBHMH3AY1V2","A4J4GGMKJ68L0","AT8WISY6ZVNWA","A12PDGA7CXTS32","A1DS5O8MSI3ZH0",
"A3DZ46U9XRLVBI","A2QKKZVUIKMQFT","A2R02DYCDLY75U","A1LJ4WAEDGELVL","A2TZJKKUN0LSHY",
"A2LXPQS44US390","AIOF4ZQQ9UDZ4","ANZKTE853UXSD","A249TNDSY03Z7Y","A14W0AXTJ3R19V",
"AL03X7TW8ZCB0","A3066746SS2O8Z","AOPG07J95DDJT","A3JI3B5GTVA95F","A251BVRUXN0QRW",
"AG7Y8I6GGHYWN","A3P74FP62XNVYI","ASF5V3K4IFP4K","A29JN6FK6OCXX5","A1QTQISKEHWSKZ",
"ATLCQW5CAWDLA","A3L1VB6K50WQ44","A1S0JKGJLC87A6","A2RYN1S6OSO9KX","A207IHY6GERCFO",
"A1MO07YOP3THQ2","A177EXELDLWTWV","AVI7K876BV3QL","AMG9Y1YLBTKIV","A1QB42OYEG1553",
"AUVC78LEL0T6L","A1A7U8TF7JAMGN","AV3P6MAFNWXTI","A1HU9IOTYXB4YY","A31KV6ETEFLOEM",
"A3JBJAYWROF6K4","A207149DHAS89K","A3E3RCR51Z8EVP","A2R9VWNAOREXQ7","AAJ1ZQECDZBEE",
"A3EYWJCIO1MG9W","A2N7FCPFBBYKNE","A2P065E9CYMYJL","A2F79GFUWU5O96","A3O8W872FSEQ9A",
"AAJEPFSQNC6X","A2P6RT4EV4B2PU","A38EPBV0ED7Y47","A1MYLQQL8BBOYT","A2HHKBW8HQWI66",
"AGFWV1U4CJXP5","A27O2IILV3S5YS","A3HKVC1X7EMZU","A138BU1VWM2RKN","A167ZMF9JA4564",
"A18TCR555RWUZV","A4T1X0PO5N1G9","A3EWR58W0SA885","A1H198MRIM37T1","A2YGAEODJ5SSF6",
"A1FHS282JP487T","A3P5WIW36V70AI","A3BI0AX5T5GVO3","A3RIBFIB7C8D20","A1TH0PTGDSBWMO",
"A25CAT0W9W97Z8","A2GVO501TN3076","A160HFSRDNT91E","A1G69P73SBVUR4","A2G7N0X0PNX0EE",
"A29XL6EF65TG9T","A3ASF4ZVP6BUGO","A2E3TO92MCQ9XU","A3LJ2FHESYV9QQ","AE39BR846NHHW",
"A2MH7VT69O390F","A1BPV7X3HFU3S","A2MG1LLIKMGAMX","A3579N2TITA69M","A1PT63J40GNSZF",
"A610SH5RY1NG1","A3S96RKRERLL93","ACRKDBKAS8GM1","A2JQR5BQRLVT1U","AL4QXJSJQGT4H",
"A3FURNEHDNA7AR","A2A8HRBDYBV6XJ","A2T22FJ28MIGI","A2CFE6AZS73RNS","A3NS1DN6J7Z3EU",
"AU2NVT51E749C","A9FCR1QRZAM3U","A3AY0315YWWNXY","A36W1S4Z2LSNTC","ACVEFRSUAPSEQ",
"A1BNR1ZAF1QGWG","A2HGRSPR50ENHL","A2YO837C0O1E91","A3FOKP72T5I4FR","AHJQDF8PAHVDP",
"A3R25SV8HUGML2","A38HODAQUKJKKS","A16ANYLVNPKCVG","A1QIJ8PQO27CJC","AT3C00TKZK13L",
"A3OV174HQJIJK8","A19CS1OXZSDDTT","ASTDBTVY3WP1K","A1BAEFJ2OG7NJ0","A36470UBRH28GO",
"A1POZ8CU7KPXN1","A3RL02A3JRAUS4","A1F8MOWCCVDIH2","A8L450UGY77XB","A3D9L5CQXK1YJL",
"AU849EHZNGV2Z","A110KENBXU7SUJ","A27BSYPO6JCB4Q","A3843S9LWPDN2K","A264067K4VJPMA",
"AB1X97ASE626Q","A3G55RJTW3BSGM","A3096ZOP616ZIN","A150GMV1YQWWB3","A1EVCIA9FEFUPE",
"A3HNPSPTA0NIR6","A11S43P3WNLIZD","ADVIE0ZHLWDDH","A3LKPARORDKLWT","A173LV77LF3SHB",
"A142ZRU284W9O","A2U77P7ML4ZXDB","A1YC558J4E5KZ","A15K0L6NGQXOM0","A1SUU1QIRDZXJC",
"ANK8K5WTHJ61C","A1FGN2JF4LCF9B","A1ZDUMHAM754IJ","A3PPRVK6XK6GP5","A2U2HC38IZKZFC",
"A2G2SLPT39TUKP","A3D3NEQ158WUB0","A1JNC3HWWHJD2J","A35NZAXRVLAC0G","AW34JRQ2PDQAV",
"A3MTAJHYHCIJK4","A271BMHV42XZPU","AZSAF65XFKDK7","A28JIPBK8BEKHS","A3AE627X3R2JQI"];

// Block turkers who have done a version of this experiment before
if (_(forbiddenIds).contains(turk.workerId)) {
  location.href = "already.html"
}


function gen_order() {
//  all_stim = [[1, 1], [1, 2], [1, 3], [1, 4],
//  [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6],
//  [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6],[4,7],[4,8],
//  [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
//  [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16],
//  [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
//  [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6],[8,7],[8,8],
//  [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6],
//  [11, 1], [11, 2], [11, 3], [11, 4]];


  all_stim = [[1, .5, 0], [1, .5, 0], [1, .5, 0], [1, .5, 0],
  [1, .3, 1], [1, .3, 1], [1, .3, 1], [1, .3, 1], [1, .3, 1], [1, .3, 1],
  [1, .2, 2], [1, .2, 2], [1, .2, 2], [1, .2, 2], [1, .2, 2], [1, .2, 2],[1, .2, 2],[1, .2, 2],
  [1, .1, 3], [1, .1, 3], [1, .1, 3], [1, .1, 3], [1, .1, 3], [1, .1, 3],[1, .1, 3],[1, .1, 3],[1, .1, 3],[1, .1, 3],[1, .1, 3],[1, .1, 3],[1, .1, 3],[1, .1, 3],
  [1, 0, 4], [-1, 0, 5], [1, 0, 4], [-1, 0, 5], [1, 0, 4], [-1, 0, 5],[1, 0, 4],[-1, 0, 5],[1, 0, 4],[-1, 0, 5],[1, 0, 4],[-1, 0, 5],[1, 0, 4],[-1, 0, 5],[1, 0, 4],[-1, 0, 5],
  [-1, .1, 6], [-1, .1, 6], [-1, .1, 6], [-1, .1, 6], [-1, .1, 6], [-1, .1, 6],[-1, .1, 6],[-1, .1, 6],[-1, .1, 6],[-1, .1, 6],[-1, .1, 6],[-1, .1, 6],[-1, .1, 6],[-1, .1, 6],
  [-1, .2, 7], [-1, .2, 7], [-1, .2, 7], [-1, .2, 7], [-1, .2, 7], [-1, .2, 7],[-1, .2, 7],[-1, .2, 7],
  [-1, .3, 8], [-1, .3, 8], [-1, .3, 8], [-1, .3, 8], [-1, .3, 8], [-1, .3, 8],
  [-1, .5, 9], [-1, .5, 9], [-1, .5, 9], [-1, .5, 9]];
  return all_stim.shuffle();
}

function gen_predictions(){
  predictions = [[1,1,2,2].shuffle(),
  [1,1,1,2,2,2].shuffle(),
  [1,1,1,1,2,2,2,2].shuffle(),
  [1,1,1,1,1,1,1,2,2,2,2,2,2,2].shuffle(),
  [1,1,1,1,2,2,2,2].shuffle(),
  [1,1,1,1,2,2,2,2].shuffle(),
  [1,1,1,1,1,1,1,2,2,2,2,2,2,2].shuffle(),
  [1,1,1,1,2,2,2,2].shuffle(),
  [1,1,1,2,2,2].shuffle(),
  [1,1,2,2].shuffle()]

  return predictions;
}

function shuffling(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
