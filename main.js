const token = "9db684d5a3fcdae0a5c642ed869b749d94a8704b6f1ec44985052fcae76a26cce34da49d068c554d7fda188bb949d5d427fa6ae46fa4aeda896f9965b9292062"
const username = document.getElementById("username");
const out1 = document.getElementById("out1");
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
}