
function dataSubmit() {
    let fname = document.getElementById('fn').value;
    let lname = document.getElementById('ln').value;
    let email = document.getElementById('em').value;
    let phone = document.getElementById('pn').value;
    let bdate = document.getElementById('bd').value;
    let division = document.getElementById('divi').value;
    let diploma = document.getElementById('dp').value;
    let bsc = document.getElementById('bsc').value;
    let msc = document.getElementById('msc').value;
    let gander = document.form.gndr.value;
    let shortDis = document.getElementById('abt').value;

    let dip_check = document.getElementById('dp').checked;
    let bsc_check = document.getElementById('bsc').checked;
    let msc_check = document.getElementById('msc').checked;

    let awindow = open("", "Show Data", "toolbar=yes, width=400, heifht=450");

    if (fname == '' || lname == '' || email == '' || phone == '' || bdate == '' || division == '' || diploma == '' || bsc == '' || msc == '' || gander == '') {
        if (fname == '') {
            document.getElementById('f_err').removeAttribute('hidden');
            document.getElementById('f_err').setAttribute('class', 'err_msg');
            document.getElementById('fn').setAttribute('class', 'input_err form-control');

        }
        if (lname == '') {
            document.getElementById('l_err').removeAttribute('hidden');
            document.getElementById('l_err').setAttribute('class', 'err_msg');
            document.getElementById('ln').setAttribute('class', 'input_err form-control');

        }
        if (phone == '') {
            document.getElementById('p_err').removeAttribute('hidden');
            document.getElementById('p_err').setAttribute('class', 'err_msg');
            document.getElementById('pn').setAttribute('class', 'input_err form-control');
        }
        if (bdate == '') {
            document.getElementById('bd_err').removeAttribute('hidden');
            document.getElementById('bd_err').setAttribute('class', 'err_msg');
            document.getElementById('bd').setAttribute('class', 'input_err form-control');
        }
        if (division == '') {
            document.getElementById('divi_err').removeAttribute('hidden');
            document.getElementById('divi_err').setAttribute('class', 'err_msg');
            document.getElementById('divi').setAttribute('class', 'input_err form-select');
        }
    } else {
        if (fname && lname && email && phone && bdate && division && gander && shortDis && dip_check && bsc_check && msc_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + diploma + " " + bsc + " " + msc + "<br>Short Discription :" + shortDis);
        } else if (fname && lname && email && phone && bdate && division && gander && dip_check && bsc_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + diploma + " " + bsc + "<br>Short Discription :" + shortDis);
        }
        else if (fname && lname && email && phone && bdate && division && gander && dip_check && msc_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + diploma + " " + msc + "<br>Short Discription :" + shortDis);
        }
        else if (fname && lname && email && phone && bdate && division && gander && bsc_check && msc_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + bsc + " " + msc + "<br>Short Discription :" + shortDis);
        }
        else if (fname && lname && email && phone && bdate && division && gander && dip_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + diploma + "<br>Short Discription :" + shortDis);
        }
        else if (fname && lname && email && phone && bdate && division && gander && bsc_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + bsc + "<br>Short Discription :" + shortDis);
        }
        else if (fname && lname && email && phone && bdate && division && gander && msc_check) {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + msc);
        } else {
            awindow.document.write("Full Name :" + fname + " " + lname + "<br>E_mail :" + email + "<br>Phone :" + phone + "<br>Birth Date :" + bdate + "<br>Division :" + division + "<br>Gander :" + gander + "<br>Education :" + "<br>Short Discription :" + shortDis);
        }
    }

}

function validemail() {
    let email_format = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/
    email = document.form.email.value;

    if (email_format.test(email)) {
        document.getElementById('e_err').innerHTML = "E-mail is Validet";
        document.getElementById('e_err').setAttribute('class', 'success_msg');
        document.getElementById('em').setAttribute('class', 'input_success form-control');

    } else {
        document.getElementById('e_err').innerHTML = "Enter a valid E-mail";
        document.getElementById('e_err').setAttribute('class', 'err_msg');
        document.getElementById('em').setAttribute('class', 'input_err form-control');
    }
}
