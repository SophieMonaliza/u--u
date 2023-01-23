function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HARc7msY0/model.json', modelReady);
}
function modelReady(){
  classifier.classify( gotResults);
}
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    RGB_color_R = Math.floor(Math.random() * 255) + 1;
    RGB_color_G = Math.floor(Math.random() * 255) + 1;
    RGB_color_B = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    
    
    document.getElementById("result_label").style.color = "rgb("+RGB_color_R+","+RGB_color_G+","+RGB_color_B+")";
    document.getElementById("result_confidence").style.color = "rgb("+RGB_color_R+","+RGB_color_G+","+RGB_color_B+")";
  }
}