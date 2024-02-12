function kelompokin(arrKalimat) {
  let arrBesar = []
  for (let i = 0; i < arrKalimat.length; i++) {
    let arrHuruf = arrKalimat[i].split("")

    for (let j = 0; j < arrHuruf.length; j++) {

      for (let k = 0; k < arrBesar.length; k++) {
        if (arrBesar[k][0] == arrHuruf[j]) {
          arrBesar[k][1] = arrBesar[k][1] + 1
          arrHuruf[j] = "dipakai"
        }
        
      }

      if (arrHuruf[j] == "dipakai") {
        continue
      }

      arrBesar.push([arrHuruf[j],1])
    }
    

  }
  let arraySudahUrut = arrBesar.sort(function (a,b) { return b[1]-a[1]})
  // console.log(arraySudahUrut);

  let hurufArraySudahUrut = []

  for (let l = 0; l < arraySudahUrut.length; l++) {
    hurufArraySudahUrut.push(arraySudahUrut[l][0])
  }

  console.log(hurufArraySudahUrut.join(""));

  

}

kelompokin(["Pendanaan","Terproteksi","Untuk","Dampak","Berarti"])