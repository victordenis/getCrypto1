function getCrypto(){
  
  let crypto = req.body.result.parameters['Cryptographic_Currencies'];
  let currency = req.body.result.parameters['sys.currency-name'];
  a= getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + crytpo + "&tsyms="+ currency);
  let output = "Current price for " + crypto + " in " + currency +  is "  + a ;    
   }
