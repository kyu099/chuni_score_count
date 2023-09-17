const token = "9db684d5a3fcdae0a5c642ed869b749d94a8704b6f1ec44985052fcae76a26cce34da49d068c554d7fda188bb949d5d427fa6ae46fa4aeda896f9965b9292062"
const username = document.getElementById("username");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");
let songdata = new Array();
let masterdata = new Array();
let masterscore = 0;
let lostscore = 0;

document.getElementById("test").onclick = async () => {
  try {
    const response = await axios.get('https://api.chunirec.net/2.0/records/showall.json?region=jp2&user_name=' + username.value + '&token=' + token);
    songdata = response.data.records;
  } catch (error) {
    console.error(error);
  }

  masterdata = [];
  masterscore = 0;
  for(i = 0; i < songdata.length; i++) {
    if(songdata[i].diff == "MAS"){
      masterdata.push(songdata[i]);
      masterscore += songdata[i].score;
    }
  }
  out1.innerHTML = ""
  lostscore = masterdata.length * 1010000 - masterscore;
  out1.innerHTML = `あなたの失点は <b>${lostscore}</b> 点です`
  //console.log(masterdata);

  let score = {"10":0, "10.5":0, "11":0, "11.5":0, "12":0, "12.5":0, "13":0, "13.5":0, "14":0, "14.5":0, "15":0};
  let count = {"10":0, "10.5":0, "11":0, "11.5":0, "12":0, "12.5":0, "13":0, "13.5":0, "14":0, "14.5":0, "15":0};
  let lostscore_level = {"10":0, "10.5":0, "11":0, "11.5":0, "12":0, "12.5":0, "13":0, "13.5":0, "14":0, "14.5":0, "15":0};
  for(i = 0; i < masterdata.length; i++) {
    if(masterdata[i].level == 10){
      score["10"] += masterdata[i].score;
      count["10"] += 1;
    } else if(masterdata[i].level == 10.5){
      score["10.5"] += masterdata[i].score;
      count["10.5"] += 1;
    } else if(masterdata[i].level == 11){
      score["11"] += masterdata[i].score;
      count["11"] += 1;
    } else if(masterdata[i].level == 11.5){
      score["11.5"] += masterdata[i].score;
      count["11.5"] += 1;
    } else if(masterdata[i].level == 12){
      score["12"] += masterdata[i].score;
      count["12"] += 1;
    } else if(masterdata[i].level == 12.5){
      score["12.5"] += masterdata[i].score;
      count["12.5"] += 1;
    } else if(masterdata[i].level == 13){
      score["13"] += masterdata[i].score;
      count["13"] += 1;
    } else if(masterdata[i].level == 13.5){
      score["13.5"] += masterdata[i].score;
      count["13.5"] += 1;
    } else if(masterdata[i].level == 14){
      score["14"] += masterdata[i].score;
      count["14"] += 1;
    } else if(masterdata[i].level == 14.5){
      score["14.5"] += masterdata[i].score;
      count["14.5"] += 1;
    } else if(masterdata[i].level == 15){
      score["15"] += masterdata[i].score;
      count["15"] += 1;
    }
  }

  lostscore_level["10"] = count["10"] * 1010000 - score["10"];
  lostscore_level["10.5"] = count["10.5"] * 1010000 - score["10.5"];
  lostscore_level["11"] = count["11"] * 1010000 - score["11"];
  lostscore_level["11.5"] = count["11.5"] * 1010000 - score["11.5"];
  lostscore_level["12"] = count["12"] * 1010000 - score["12"];
  lostscore_level["12.5"] = count["12.5"] * 1010000 - score["12.5"];
  lostscore_level["13"] = count["13"] * 1010000 - score["13"];
  lostscore_level["13.5"] = count["13.5"] * 1010000 - score["13.5"];
  lostscore_level["14"] = count["14"] * 1010000 - score["14"];
  lostscore_level["14.5"] = count["14.5"] * 1010000 - score["14.5"];
  lostscore_level["15"] = count["15"] * 1010000 - score["15"];

  out2.innerHTML = "";
  out2.innerHTML += `<tr> <th>レベル</th> <th>失点</th> </tr>`;
  out2.innerHTML += `<tr> <td>10</td> <td>${lostscore_level["10"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>10+</td> <td>${lostscore_level["10.5"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>11</td> <td>${lostscore_level["11"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>11+</td> <td>${lostscore_level["11.5"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>12</td> <td>${lostscore_level["12"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>12+</td> <td>${lostscore_level["12.5"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>13</td> <td>${lostscore_level["13"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>13+</td> <td>${lostscore_level["13.5"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>14</td> <td>${lostscore_level["14"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>14+</td> <td>${lostscore_level["14.5"]}</td> </tr>`;
  out2.innerHTML += `<tr> <td>15</td> <td>${lostscore_level["15"]}</td> </tr>`;



  let score_genre = {"POPS&ANIME":0, "niconico":0, "東方Project":0, "VARIETY":0, "イロドリミドリ":0, "ゲキマイ":0, 
  "ORIGINAL":0}
  let count_genre = {"POPS&ANIME":0, "niconico":0, "東方Project":0, "VARIETY":0, "イロドリミドリ":0, "ゲキマイ":0, 
  "ORIGINAL":0}
  let lostscore_genre = {"POPS&ANIME":0, "niconico":0, "東方Project":0, "VARIETY":0, "イロドリミドリ":0, "ゲキマイ":0, 
  "ORIGINAL":0}
  for(let i = 0; i < masterdata.length; i++){
    if(masterdata[i].genre == "POPS&ANIME"){
      score_genre["POPS&ANIME"] += masterdata[i].score;
      count_genre["POPS&ANIME"] += 1;
    } else if(masterdata[i].genre == "niconico"){
      score_genre["niconico"] += masterdata[i].score;
      count_genre["niconico"] += 1;
    } else if(masterdata[i].genre == "東方Project"){
      score_genre["東方Project"] += masterdata[i].score;
      count_genre["東方Project"] += 1;
    } else if(masterdata[i].genre == "VARIETY"){
      score_genre["VARIETY"] += masterdata[i].score;
      count_genre["VARIETY"] += 1;
    } else if(masterdata[i].genre == "イロドリミドリ"){
      score_genre["イロドリミドリ"] += masterdata[i].score;
      count_genre["イロドリミドリ"] += 1;
    } else if(masterdata[i].genre == "ゲキマイ"){
      score_genre["ゲキマイ"] += masterdata[i].score;
      count_genre["ゲキマイ"] += 1;
    } else if(masterdata[i].genre == "ORIGINAL"){
      score_genre["ORIGINAL"] += masterdata[i].score;
      count_genre["ORIGINAL"] += 1;
    }
  }
  lostscore_genre["POPS&ANIME"] = count_genre["POPS&ANIME"] * 1010000 - score_genre["POPS&ANIME"];
  lostscore_genre["niconico"] = count_genre["niconico"] * 1010000 - score_genre["niconico"];
  lostscore_genre["東方Project"] = count_genre["東方Project"] * 1010000 - score_genre["東方Project"];
  lostscore_genre["VARIETY"] = count_genre["VARIETY"] * 1010000 - score_genre["VARIETY"];
  lostscore_genre["イロドリミドリ"] = count_genre["イロドリミドリ"] * 1010000 - score_genre["イロドリミドリ"];
  lostscore_genre["ゲキマイ"] = count_genre["ゲキマイ"] * 1010000 - score_genre["ゲキマイ"];
  lostscore_genre["ORIGINAL"] = count_genre["ORIGINAL"] * 1010000 - score_genre["ORIGINAL"];

  out3.innerHTML = "";
  out3.innerHTML += `<tr> <th>ジャンル</th> <th>失点</th> </tr>`;
  out3.innerHTML += `<tr> <td>POPS&ANIME</td> <td>${lostscore_genre["POPS&ANIME"]}</td> </tr>`;
  out3.innerHTML += `<tr> <td>niconico</td> <td>${lostscore_genre["niconico"]}</td> </tr>`;
  out3.innerHTML += `<tr> <td>東方Project</td> <td>${lostscore_genre["東方Project"]}</td> </tr>`;
  out3.innerHTML += `<tr> <td>VARIETY</td> <td>${lostscore_genre["VARIETY"]}</td> </tr>`;
  out3.innerHTML += `<tr> <td>イロドリミドリ</td> <td>${lostscore_genre["イロドリミドリ"]}</td> </tr>`;
  out3.innerHTML += `<tr> <td>ゲキマイ</td> <td>${lostscore_genre["ゲキマイ"]}</td> </tr>`;
  out3.innerHTML += `<tr> <td>ORIGINAL</td> <td>${lostscore_genre["ORIGINAL"]}</td> </tr>`;
}