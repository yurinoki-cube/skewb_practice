var cornerColor = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5];
var centerColor = [0,1,2,3,4,5];

//skewbの色を初期化する関数
function skewb_status_reset(){
  //センター
  for(var i=0;i<=5;i++){
    centerColor[i] = i;
  }
  //コーナー
  var cnt = 0;
  for(var j=0;j<=23;j=j+4){
    cornerColor[j+0] = cnt;
    cornerColor[j+1] = cnt;
    cornerColor[j+2] = cnt;
    cornerColor[j+3] = cnt;
    cnt++;
  }
}

function skewb_revers(data){

  var alg = new Array(data.length-1);

  var cnt = data.length-1;

  for (var i = 0;i <=data.length-1;i++){

    switch(data[i]){
      case 'r':
        alg[cnt] = 'r\'';
        break;
      case 'r\'':
          alg[cnt] = 'r';
          break;
      case 'R':
          alg[cnt] = 'R\'';
          break;
      case 'R\'':
          alg[cnt] = 'R';
          break;
      case 'B':
          alg[cnt] = 'B\'';
          break;
      case 'B\'':
          alg[cnt] = 'B';
          break;
      case 'b':
          alg[cnt] = 'b\'';
          break;
      case 'b\'':
          alg[cnt] = 'b';
          break;
    }
    cnt = cnt -1
  }
  return alg;
}




//skewbを回転させる関数
function skewb_turn(str){

  var buffer;//バッファ
  switch(str){
    case 'r':
      buffer = centerColor[1];
      centerColor[1] = centerColor[2];
      centerColor[2] = centerColor[5];
      centerColor[5] = buffer;

      buffer = cornerColor[5];
      cornerColor[5] = cornerColor[11];
      cornerColor[11] = cornerColor[21];
      cornerColor[21] = buffer;

      buffer = cornerColor[10];
      cornerColor[10] = cornerColor[23];
      cornerColor[23] = cornerColor[4];
      cornerColor[4] = buffer;

      buffer = cornerColor[1];
      cornerColor[1] = cornerColor[15];
      cornerColor[15] = cornerColor[17];
      cornerColor[17] = buffer;

      buffer = cornerColor[20];
      cornerColor[20] = cornerColor[7];
      cornerColor[7] = cornerColor[9];
      cornerColor[9] = buffer;

      break;

    case 'r\'':
      buffer = centerColor[1];
      centerColor[1] = centerColor[5];
      centerColor[5] = centerColor[2];
      centerColor[2] = buffer;

      buffer = cornerColor[5];
      cornerColor[5] = cornerColor[21];
      cornerColor[21] = cornerColor[11];
      cornerColor[11] = buffer;

      buffer = cornerColor[10];
      cornerColor[10] = cornerColor[4];
      cornerColor[4] = cornerColor[23];
      cornerColor[23] = buffer;

      buffer = cornerColor[1];
      cornerColor[1] = cornerColor[17];
      cornerColor[17] = cornerColor[15];
      cornerColor[15] = buffer;

      buffer = cornerColor[20];
      cornerColor[20] = cornerColor[9];
      cornerColor[9] = cornerColor[7];
      cornerColor[7] = buffer;

      break;

    case 'R':
      buffer = centerColor[1];
      centerColor[1] = centerColor[4];
      centerColor[4] = centerColor[2];
      centerColor[2] = buffer;

      buffer = cornerColor[17];
      cornerColor[17] = cornerColor[9];
      cornerColor[9] = cornerColor[4];
      cornerColor[4] = buffer;

      buffer = cornerColor[16];
      cornerColor[16] = cornerColor[11];
      cornerColor[11] = cornerColor[6];
      cornerColor[6] = buffer;

      buffer = cornerColor[0];
      cornerColor[0] = cornerColor[21];
      cornerColor[21] = cornerColor[13];
      cornerColor[13] = buffer;

      buffer = cornerColor[8];
      cornerColor[8] = cornerColor[5];
      cornerColor[5] = cornerColor[19];
      cornerColor[19] = buffer;

      break;

    case 'R\'':
      buffer = centerColor[1];
      centerColor[1] = centerColor[2];
      centerColor[2] = centerColor[4];
      centerColor[4] = buffer;

      buffer = cornerColor[17];
      cornerColor[17] = cornerColor[4];
      cornerColor[4] = cornerColor[9];
      cornerColor[9] = buffer;

      buffer = cornerColor[16];
      cornerColor[16] = cornerColor[6];
      cornerColor[6] = cornerColor[11];
      cornerColor[11] = buffer;

      buffer = cornerColor[0];
      cornerColor[0] = cornerColor[13];
      cornerColor[13] = cornerColor[21];
      cornerColor[21] = buffer;

      buffer = cornerColor[8];
      cornerColor[8] = cornerColor[19];
      cornerColor[19] = cornerColor[5];
      cornerColor[5] = buffer;

      break;

    case 'B':
      buffer = centerColor[1];
      centerColor[1] = centerColor[3];
      centerColor[3] = centerColor[4];
      centerColor[4] = buffer;

      buffer = cornerColor[19];
      cornerColor[19] = cornerColor[6];
      cornerColor[6] = cornerColor[13];
      cornerColor[13] = buffer;

      buffer = cornerColor[12];
      cornerColor[12] = cornerColor[17];
      cornerColor[17] = cornerColor[7];
      cornerColor[7] = buffer;

      buffer = cornerColor[2];
      cornerColor[2] = cornerColor[9];
      cornerColor[9] = cornerColor[23];
      cornerColor[23] = buffer;

      buffer = cornerColor[18];
      cornerColor[18] = cornerColor[4];
      cornerColor[4] = cornerColor[15];
      cornerColor[15] = buffer;

      break;

    case 'B\'':
      buffer = centerColor[1];
      centerColor[1] = centerColor[4];
      centerColor[4] = centerColor[3];
      centerColor[3] = buffer;

      buffer = cornerColor[19];
      cornerColor[19] = cornerColor[13];
      cornerColor[13] = cornerColor[6];
      cornerColor[6] = buffer;

      buffer = cornerColor[12];
      cornerColor[12] = cornerColor[7];
      cornerColor[7] = cornerColor[17];
      cornerColor[17] = buffer;

      buffer = cornerColor[2];
      cornerColor[2] = cornerColor[23];
      cornerColor[23] = cornerColor[9];
      cornerColor[9] = buffer;

      buffer = cornerColor[18];
      cornerColor[18] = cornerColor[15];
      cornerColor[15] = cornerColor[4];
      cornerColor[4] = buffer;

      break;

    case 'b':
      buffer = centerColor[1];
      centerColor[1] = centerColor[5];
      centerColor[5] = centerColor[3];
      centerColor[3] = buffer;

      buffer = cornerColor[7];
      cornerColor[7] = cornerColor[23];
      cornerColor[23] = cornerColor[15];
      cornerColor[15] = buffer;

      buffer = cornerColor[22];
      cornerColor[22] = cornerColor[13];
      cornerColor[13] = cornerColor[5];
      cornerColor[5] = buffer;

      buffer = cornerColor[3];
      cornerColor[3] = cornerColor[19];
      cornerColor[19] = cornerColor[11];
      cornerColor[11] = buffer;

      buffer = cornerColor[14];
      cornerColor[14] = cornerColor[6];
      cornerColor[6] = cornerColor[21];
      cornerColor[21] = buffer;

      break;

    case 'b\'':
      buffer = centerColor[1];
      centerColor[1] = centerColor[3];
      centerColor[3] = centerColor[5];
      centerColor[5] = buffer;

      buffer = cornerColor[7];
      cornerColor[7] = cornerColor[15];
      cornerColor[15] = cornerColor[23];
      cornerColor[23] = buffer;

      buffer = cornerColor[22];
      cornerColor[22] = cornerColor[5];
      cornerColor[5] = cornerColor[13];
      cornerColor[13] = buffer;

      buffer = cornerColor[3];
      cornerColor[3] = cornerColor[11];
      cornerColor[11] = cornerColor[19];
      cornerColor[19] = buffer;

      buffer = cornerColor[14];
      cornerColor[14] = cornerColor[21];
      cornerColor[21] = cornerColor[6];
      cornerColor[6] = buffer;

      break;

      case 'x\'':
      buffer = centerColor[0];
      centerColor[0] = centerColor[4];
      centerColor[4] = centerColor[1];
      centerColor[1] = centerColor[5];
      centerColor[5] = buffer;

      buffer = cornerColor[0];
      cornerColor[0] = cornerColor[17];
      cornerColor[17] = cornerColor[5];
      cornerColor[5] = cornerColor[20];
      cornerColor[20] = buffer;

      buffer = cornerColor[1];
      cornerColor[1] = cornerColor[16];
      cornerColor[16] = cornerColor[4];
      cornerColor[4] = cornerColor[21];
      cornerColor[21] = buffer;

      buffer = cornerColor[2];
      cornerColor[2] = cornerColor[19];
      cornerColor[19] = cornerColor[7];
      cornerColor[7] = cornerColor[22];
      cornerColor[22] = buffer;

      buffer = cornerColor[3];
      cornerColor[3] = cornerColor[18];
      cornerColor[18] = cornerColor[6];
      cornerColor[6] = cornerColor[23];
      cornerColor[23] = buffer;

      buffer = cornerColor[8];
      cornerColor[8] = cornerColor[9];
      cornerColor[9] = cornerColor[11];
      cornerColor[11] = cornerColor[10];
      cornerColor[10] = buffer;

      buffer = cornerColor[12];
      cornerColor[12] = cornerColor[13];
      cornerColor[13] = cornerColor[15];
      cornerColor[15] = cornerColor[14];
      cornerColor[14] = buffer;
      break;

      case 'x':
      buffer = centerColor[0];
      centerColor[0] = centerColor[5];
      centerColor[5] = centerColor[1];
      centerColor[1] = centerColor[4];
      centerColor[4] = buffer;

      buffer = cornerColor[0];
      cornerColor[0] = cornerColor[20];
      cornerColor[20] = cornerColor[5];
      cornerColor[5] = cornerColor[17];
      cornerColor[17] = buffer;

      buffer = cornerColor[1];
      cornerColor[1] = cornerColor[21];
      cornerColor[21] = cornerColor[4];
      cornerColor[4] = cornerColor[16];
      cornerColor[16] = buffer;

      buffer = cornerColor[2];
      cornerColor[2] = cornerColor[22];
      cornerColor[22] = cornerColor[7];
      cornerColor[7] = cornerColor[19];
      cornerColor[19] = buffer;

      buffer = cornerColor[3];
      cornerColor[3] = cornerColor[23];
      cornerColor[23] = cornerColor[6];
      cornerColor[6] = cornerColor[18];
      cornerColor[18] = buffer;

      buffer = cornerColor[8];
      cornerColor[8] = cornerColor[10];
      cornerColor[10] = cornerColor[11];
      cornerColor[11] = cornerColor[9];
      cornerColor[9] = buffer;

      buffer = cornerColor[12];
      cornerColor[12] = cornerColor[14];
      cornerColor[14] = cornerColor[15];
      cornerColor[15] = cornerColor[13];
      cornerColor[13] = buffer;
      break;
  }
}
