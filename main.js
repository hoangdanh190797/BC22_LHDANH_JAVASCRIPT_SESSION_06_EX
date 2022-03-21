/*
Tìm số nguyên dương nhỏ nhất sao cho:
1 + 2 + … + n > 10000
*/
function soNgduongNhonhat (){
    var suM = 0;
    for(var i = 1; i < 10000/2; i++)
    {
        suM += i;
        if(suM > 10000)
        {
            return i;
        }
    }
}
var kQbT1 = "Số nguyên dương nhỏ nhất: " + soNgduongNhonhat();
document.getElementById("footerBt01").innerHTML = kQbT1;

//---------------------------------------------------------------------------- 
/*
Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)
*/

function tinhTongbT02 (so__X, so__N){
    var suM = 0;
    for(var i = 1; i <= so__N; i++ )
    {
        suM += Math.pow(so__X, i);
    }
    return suM;
}

document.getElementById("btnBt02").onclick = function () {
    var so__X = +document.getElementById("so__X__bai__02").value;
    var so__N = +document.getElementById("so__N__bai__02").value;
    var kQbT2 = tinhTongbT02(so__X, so__N);
    document.getElementById("footerBt02").innerHTML=kQbT2;
}

//---------------------------------------------------------------------------- 
/*
Nhập vào n. Tính giai thừa 1*2*...n
*/

function tinhTongbT03 (so__N) {
    var giaiThua = 1;
    for(var i = 1; i <= so__N; i++)
    {
        giaiThua *= i;
    }
    return giaiThua;
}

document.getElementById("btnBt03").onclick = function () {
    var so__N = +document.getElementById("so__N__bai__03").value;
    var kQbT3 = tinhTongbT03(so__N);
    document.getElementById("footerBt03").innerHTML=kQbT3;
}

//---------------------------------------------------------------------------- 

/*
Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
background màu xanh.
*/

document.getElementById("btnBt04").onclick = function () {
    var tagP = "";
    for(var i = 1; i <= 10; i++)
    {
        if(i % 2 == 0)
        {
            tagP += "<div style='color:white; background-color:red'> Khối chẵn số: "+ i +"</div>";
        }
        else
        {
            tagP += "<div style='color:white; background-color:blue'> Khối lẻ số: "+ i +"</div>";
        }
    }
    document.getElementById("taoThediv").innerHTML = tagP;
}