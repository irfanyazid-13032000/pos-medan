function hitungHuruf(kalimat){
  arrHuruf = kalimat.toLowerCase().split("").filter((huruf)=>{return huruf !== " "})
  
  arrBesar = []
  for (let i = 0; i < arrHuruf.length; i++) {
    

    for (let j = 0; j < arrBesar.length; j++) {

      if (arrBesar[j][0] == arrHuruf[i]) {
        arrBesar[j][1] = arrBesar[j][1] + 1
        arrHuruf[i] = "dihapus"
      }
      
    }

    if (arrHuruf[i] == "dihapus") {
      continue
    }

    arrBesar.push([arrHuruf[i],1])
    
  }

  // console.log(arrBesar)

  for (let k = 0; k < arrBesar.length; k++) {
    console.log(arrBesar[k][0]+"="+arrBesar[k][1])
  }


}

hitungHuruf("coding is fun")