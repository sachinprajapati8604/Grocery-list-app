var sr = 0;
var grandTotal = 0;

//calling Add function by enter key  
let name = document.getElementById('item-name-input');
let price = document.getElementById('item-price-input');
let qty = document.getElementById('item-qty-input');

price.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addbtn").click();
    }
});
name.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addbtn").click();
    }
});
qty.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addbtn").click();
    }
});

function insertItem() {
    let name = document.getElementById('item-name-input').value;
    let p = Number(document.getElementById('item-price-input').value);
    let qty = Number(document.getElementById('item-qty-input').value);
    let price = p * qty;
    if (name != "" && price != "" && qty != "") {
        sr++;
        let table = document.getElementById('table');
        let tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        td2.dataset.nsTest = name;
        td3.dataset.nsTest = price;
        td4.dataset.nsTest = qty;
        td1.innerText = sr;
        td2.innerText = name;
        td3.innerText = price;
        td4.innerText = qty;
        tr.append(td1, td2, td4, td3)
        tbody.append(tr);
        table.append(tbody);

        grandTotal += Number(price);
        let h2 = document.getElementById('grandTotal');
        h2.innerHTML = `Total Amount: &#8377; ${grandTotal}`;

        let inWords = document.getElementById('in-words');
        inWords.innerHTML = convertToWords(grandTotal) + " only";

        reset();

    } else {
        swal("please fill all fields");
    }


}

function reset() {
    document.getElementById('item-name-input').value = "";
    document.getElementById('item-price-input').value = "";
    document.getElementById('item-qty-input').value = '1';
}



//creating number to words

var one = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ",
    "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];


var ten = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];

function numToWords(n, s) {
    var str = "";
    if (n > 19) {
        str += ten[parseInt(n / 10)] + one[n % 10];
    }
    else {
        str += one[n];
    }

    if (n != 0) {
        str += s;
    }

    return str;
}

function convertToWords(n) {
    var out = "";

    out += numToWords(parseInt(n / 10000000), "crore ");


    out += numToWords(parseInt((n / 100000) % 100), "lakh ");


    out += numToWords(parseInt((n / 1000) % 100), "thousand ");

    out += numToWords(parseInt((n / 100) % 10), "hundred ");

    if (n > 100 && n % 100 > 0) {
        out += "and ";
    }

    out += numToWords(parseInt(n % 100), "");

    return out;
}


