const api = "https://hirc-api.azurewebsites.net/";

console.log("Starting Health Insurance Risk Calculator... ");

function ping() {
  $.ajax({
    type:"GET",
    url: api + "/ping",
    dataType: "text",
    success: function (response) {
      console.log(response);
    }
  })
}

function totalRiskCalculator() {
  score = {

  }
}

function bmiCalculator() {

}

function bpCalculator() {


}

function diabetesRiskCalculator() {

}

function cancerRiskCalculator() {
  
}

function alzheimersRiskCalculator() {
  
}