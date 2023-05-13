// let number = document.getElementById("number"),
//     minus = document.getElementById("minus"),
//     plus = document.getElementById("plus");

// console.log(number.innerHTML);

// minus.onclick = function(){
//     number.innerHTML = number.innerHTML - 1;
// };

// plus.onclick = function(){
//     number.innerHTML = Number(number.innerHTML) + 1;
// };


window.onclick = function (e) {
    if (e.target == categories__modal) {
        categories__modal.style.display = "none";
    } else if (e.target == your_order__modal) {
        your_order__modal.style.display = "none";
    }
};

let categories__modal = document.getElementById('categories__modal'),
    category = document.getElementById('category');

category.onclick = function () {
    categories__modal.style.display = "block";
};

let your_order__modal = document.querySelector(".your_order__modal"),
    finish_order = document.querySelector(".finish_order"),
    quantity = document.getElementById("quantity"),
    total = document.getElementById("total");

finish_order.onclick = function () {
    your_order__modal.style.display = "flex";
    quantity.innerHTML = count + "x";
    total.innerHTML = total.innerHTML + String(count * 599);
};

let product1 = document.getElementById("product1"),
    check1 = document.getElementById("check1"),
    count = 0;

product1.onclick = function() {
    if(check1.style.fontSize == "20px") {
        check1.style.fontSize = "0px";
        count-=1;
    } else {
        check1.style.fontSize = "20px";
        count+=1;
    }
};

let product2 = document.getElementById("product2"),
    check2 = document.getElementById("check2");

product2.onclick = function() {
    if(check2.style.fontSize == "20px") {
        check2.style.fontSize = "0px";
        count-=1;
    } else {
        check2.style.fontSize = "20px";
        count+=1;
    }
};

let product3 = document.getElementById("product3"),
    check3 = document.getElementById("check3");

product3.onclick = function() {
    if(check3.style.fontSize == "20px") {
        check3.style.fontSize = "0px";
        count-=1;
    } else {
        check3.style.fontSize = "20px";
        count+=1;
    }
};

let product4 = document.getElementById("product4"),
    check4 = document.getElementById("check4");

product4.onclick = function() {
    if(check4.style.fontSize == "20px") {
        check4.style.fontSize = "0px";
        count-=1;
    } else {
        check4.style.fontSize = "20px";
        count+=1;
    }
};

let product5 = document.getElementById("product5"),
    check5 = document.getElementById("check5");

product5.onclick = function() {
    if(check5.style.fontSize == "20px") {
        check5.style.fontSize = "0px";
        count-=1;
    } else {
        check5.style.fontSize = "20px";
        count+=1;
    }
};

let product6 = document.getElementById("product6"),
    check6 = document.getElementById("check6");

product6.onclick = function() {
    if(check6.style.fontSize == "20px") {
        check6.style.fontSize = "0px";
        count-=1;
    } else {
        check6.style.fontSize = "20px";
        count+=1;
    }
};

let product7 = document.getElementById("product7"),
    check7 = document.getElementById("check7");

product7.onclick = function() {
    if(check7.style.fontSize == "20px") {
        check7.style.fontSize = "0px";
        count-=1;
    } else {
        check7.style.fontSize = "20px";
        count+=1;
    }
};

let product8 = document.getElementById("product8"),
    check8 = document.getElementById("check8");

product8.onclick = function() {
    if(check8.style.fontSize == "20px") {
        check8.style.fontSize = "0px";
        count-=1;
    } else {
        check8.style.fontSize = "20px";
        count+=1;
    }
};

let product9 = document.getElementById("product9"),
    check9 = document.getElementById("check9");

product9.onclick = function() {
    if(check9.style.fontSize == "20px") {
        check9.style.fontSize = "0px";
        count-=1;
    } else {
        check9.style.fontSize = "20px";
        count+=1;
    }
};

let product10 = document.getElementById("product10"),
    check10 = document.getElementById("check10");

product10.onclick = function() {
    if(check10.style.fontSize == "20px") {
        check10.style.fontSize = "0px";
        count-=1;
    } else {
        check10.style.fontSize = "20px";
        count+=1;
    }
};

let product11 = document.getElementById("product11"),
    check11 = document.getElementById("check11");

product11.onclick = function() {
    if(check11.style.fontSize == "20px") {
        check11.style.fontSize = "0px";
        count-=1;
    } else {
        check11.style.fontSize = "20px";
        count+=1;
    }
};

let product12 = document.getElementById("product12"),
    check12 = document.getElementById("check12");

product12.onclick = function() {
    if(check12.style.fontSize == "20px") {
        check12.style.fontSize = "0px";
        count-=1;
    } else {
        check12.style.fontSize = "20px";
        count+=1;
        console.log(count);
    }
};


