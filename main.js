


//回転記号を入力する関数
function input_alg(str){
  if (algForm.alg_text.value ==""){
    algForm.alg_text.value = str;
  }else{
    algForm.alg_text.value =algForm.alg_text.value + " " + str;
  }
}
//回転記号を消す関数
function delete_alg(){
  if (algForm.alg_text.value ==""){
//    alert("OK");
  }else{
    algForm.alg_text.value =algForm.alg_text.value.slice(0,-2);
  }
}

function scramble_alg(){

  skewb_status_reset();

  var alg = algForm.alg_text.value.split(' ');
  var realg = skewb_revers(alg);

  for (var i = 0;i <=realg.length;i++){
    skewb_turn(realg[i]);
  }
  init();
}


function rotation_start(str){
  skewb_turn(str);
  init();
}
