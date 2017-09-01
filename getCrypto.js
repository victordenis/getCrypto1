function getCrypto(String Crytpo, String Currency){
  getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + Crytpo + "&tsyms="+Currency);
 }
