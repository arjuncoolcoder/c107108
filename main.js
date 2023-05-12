function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DxzzCwJaq/model.json', modelReady);

}
 

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    if (error) {
      console.error(error);  
    } else {
      console.log(results);
        random_number_r = Math.floor(Math.random() * 225) +1;
        random_number_g = Math.floor(Math.random() * 225) +1;
        random_number_b = Math.floor(Math.random() * 225) +1;


        document.getElementById("result_label").innerHTML = 'I can hear' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


        img = document.getElementById('ant')
        img1 = document.getElementById('bunny')
        img2 = document.getElementById('dog')
        img3 = document.getElementById('tiger')


        if (results[0].label == "beeping") {
            img.src = 'ant.gif';
            img1.src = 'bnee.png';
            img2.src = 'dog.png.png';
            img3.src = 'tiger.png';
        } else if (results[0].label == "tapping") {
            img.src = 'ant.png';
            img1.src = 'bunny.gif';
            img2.src = 'dog.png.png';
            img3.src = 'tiger.png';
        } else if (results[0].label == "whistling") {
            img.src = 'ant.png';
            img1.src = 'bnee.png';
            img2.src = 'dog1_gif.gif';
            img3.src = 'tiger.png';
        }  else {
            img.src = 'ant.png';
            img1.src = 'bnee.png';
            img2.src = 'dog.png.png';
            img3.src = 'tiger.gif';
        } 






  }
}