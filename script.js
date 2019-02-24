var vitals = new Object();
vitals.BPRate = 0;
vitals.RRrate = 0;
vitals.HRrate = 0;
vitals.TempRate = 0;
vitals.COPD = false;
vitals.Sats = 0;
vitals.Oxygen = false;
vitals.Alert = 0;


function checkValueBP (aName, aValue){
  var box = aName + "Box"
  var BPRate = 0
  if (aValue <= 90  || aValue >= 220)
  {
    document.getElementById(box).style.backgroundColor="red";
    vitals.BPRate = 3
  }
  else if (aValue > 90  && aValue <= 100)
  {
    document.getElementById(box).style.backgroundColor="orange";
    vitals.BPRate = 2
  }
  else if (aValue > 101  && aValue <= 110)
  {
    document.getElementById(box).style.backgroundColor="yellow";
    vitals.BPRate = 1
  }
  else if (aValue > 111  && aValue <= 219)
  {
    document.getElementById(box).style.backgroundColor="lightgreen";
    vitals.BPRate = 0
  }

};
function checkValueRR (aName, aValue){
  var box = aName + "Box"
  var RRrate = 0
  if (aValue <= 8  || aValue >= 25)
  {
  document.getElementById(box).style.backgroundColor="red";
    vitals.RRrate = 3
  }
  else if (aValue >= 21  && aValue <= 24)
  {
    document.getElementById(box).style.backgroundColor="orange";
    vitals.RRrate = 2
  }
  else if (aValue >= 9  && aValue <= 11)
  {
    document.getElementById(box).style.backgroundColor="yellow";
    vitals.RRrate = 1
  }
  else if (aValue >= 12  && aValue <= 20)
  {
    document.getElementById(box).style.backgroundColor="lightgreen";
    vitals.RRrate = 0
  }

};
function checkValueHR (aName, aValue){
  var box = aName + "Box"
  var HRrate = 0
  if (aValue <= 40  || aValue >= 131)
  {
  document.getElementById(box).style.backgroundColor="red";
    vitals.HRrate = 3
  }
  else if (aValue >= 111  && aValue <= 130)
  {
    document.getElementById(box).style.backgroundColor="orange";
    vitals.HRrate = 2
  }
  else if ((aValue > 41  && aValue <= 50) ||(aValue > 91  && aValue <= 110) )
  {
    document.getElementById(box).style.backgroundColor="yellow";
    vitals.HRrate = 1
  }
  else if (aValue >= 51  && aValue <= 90)
  {
    document.getElementById(box).style.backgroundColor="lightgreen";
    vitals.HRrate = 0
  }

};
function checkTemperature (aName, aValue){
  var box = aName + "Box"
  var TempRate = 0
  if (aValue <= 35.1)
  {
  document.getElementById(box).style.backgroundColor="red";
    vitals.TempRate = 3
  }
  else if (aValue >= 39.0)
  {
    document.getElementById(box).style.backgroundColor="orange";
    vitals.TempRate = 2
  }
  else if ((aValue > 35.1  && aValue <= 36.0) ||(aValue > 38.1  && aValue <= 39.0)) {
    document.getElementById(box).style.backgroundColor="yellow";
    vitals.TempRate = 1
  }
  else if (aValue >= 36.1  && aValue <= 38.0)
  {
    document.getElementById(box).style.backgroundColor="lightgreen";
    vitals.TempRate = 0
  }

};
function checkCOPD(aValue)
{
  vitals.COPD = aValue
};
function checkOxygen(aValue)
{
  vitals.Oxygen = aValue
};
function checkSats(aName, aValue)
{
  var box = aName + "Box"
  if (vitals.COPD == false){
    if (aValue <= 91 )
  {
  document.getElementById(box).style.backgroundColor="red";
    console.log("here")
    vitals.Sats = 3
  }
  else if (aValue > 91  && aValue <= 93)
  {
    document.getElementById(box).style.backgroundColor="orange";
    vitals.Sats = 2
  }
  else if (aValue > 93  && aValue <= 95)
  {
    document.getElementById(box).style.backgroundColor="yellow";
    vitals.Sats = 1
  }
  else if (aValue >= 96 )
  {
    document.getElementById(box).style.backgroundColor="lightgreen";
    vitals.Sats = 0
  }
  }
  else if (vitals.COPD)

  {
    console.log("oxygen")
    if ((aValue <=83) || (aValue >= 97  && document.getElementById("oxygen").checked))
    {
  document.getElementById(box).style.backgroundColor="red";
    vitals.Sats = 3
    }
    else if ((aValue == 84 ||  aValue == 85) || (aValue == 95 || aValue == 96  && vitals.Oxygen == true))
    {
        document.getElementById(box).style.backgroundColor="orange";
    vitals.Sats = 2
    }
    else if ((aValue == 86  || aValue == 87) || ((aValue == 93 || aValue == 94 ) && document.getElementById("oxygen").checked))
    {
    document.getElementById(box).style.backgroundColor="yellow";
    vitals.Sats = 1
     }
  else if (aValue >= 88  && aValue <= 92)
  {
    document.getElementById(box).style.backgroundColor="lightgreen";
    vitals.Sats = 0
  }

  }
  }
function checkAlertness(aName, aValue)
{
  var box = aName + "Box"
  if (aValue == false){
    vitals.Alert = 3
    document.getElementById(box).style.backgroundColor="red";
  }
  else
  {
    vitals.Alert = 0;
    document.getElementById(box).style.backgroundColor="white";
  }
}
function resultCalc()
{
  var result =
vitals.BPRate + vitals.RRrate + vitals.HRrate + vitals.TempRate +
vitals.Sats + vitals.Alert
  if (result >= 7 || vitals.BPRate == 3 || vitals.RRrate == 0 || vitals.HRrate == 3 || vitals.TempRate == 3 || vitals.Sats ==3 || vitals.Alert ==3){
  document.getElementById("resultBox").style.backgroundColor ="red";
  document.getElementById("resultBox").innerHTML = "Patient should be assessed immediately by clinical team!";
}
  else if (result >4 && result <=6)
  {
    document.getElementById("resultBox").style.backgroundColor ="orange";
    document.getElementById("resultBox").innerHTML = "Patient should be reassessed urgently by a specialist nurse or ward doctor ";
  }
  else if (result <= 4)
  {
    document.getElementById("resultBox").style.backgroundColor ="lightgreen";
    document.getElementById("resultBox").innerHTML = "Patient can wait";

  }

  ;

  document.getElementById("resultName").innerHTML = document.getElementById("Name").value;
  document.getElementById("resultQueue").innerHTML = String(parseInt(Math.random()*10)) + " out of " + String(parseInt((Math.random()*10))*15);
}
