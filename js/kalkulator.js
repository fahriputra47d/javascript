function tambah(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    }    
    else {
        var total = a1 + a2; //rumus
        frm.hasil.value = total; //penempatan hasil 
    }
    
}

function kurang(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    }    
    else {
       var total = a1 - a2; //rumus
       frm.hasil.value = total; //penempatan hasil 
    } 
    
}
function kali(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    }    
    else {
        var total = a1 * a2; //rumus
        frm.hasil.value = total; //penempatan hasil
    } 
    
}

function bagi(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    }    
    else {
        var total = a1 / a2; //rumus
        frm.hasil.value = total; //penempatan hasil
    } 

}

function pangkat(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    }    
    else {
        var total = Math.pow(a1,a2); //rumus
        frm.hasil.value = total; //penempatan hasil
    }
    
}

function kalk(tombol){
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    
            switch (tombol) {
                case 'tambah':
                    tambah();
                    break;
                case 'kurang':
                    kurang();
                    break;
                case 'kali':
                    kali();
                    break;
                case 'bagi':
                    bagi();
                    break;
                case 'pangkat':
                    pangkat();
                    break;

                default:
                    alert("error");
                    break;
        }
}


