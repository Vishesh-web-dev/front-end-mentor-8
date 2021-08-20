var custom = document.getElementById("grid-custom");
  function func1(){
    custom.style.textAlign = "right";
    custom.removeAttribute("placeholder");
    
  }
  function func2(){
    if(custom.value == ""){
      custom.style.textAlign = "center";
      custom.setAttribute("placeholder","Custom")
    }
  }
 //***************//

  var bill = document.getElementById("bill");
  var people = document.getElementById("people");
  var griditems = document.getElementsByClassName("grid-items");
  var ans1 = document.getElementById("ans1");
  var ans2 = document.getElementById("ans2");
  var error = document.getElementById("error");
  
  function tip1() {
    if (people.value == 0 || isNaN(people.value)) {
      error.style.display = "initial";
      return;
    }
    custom.value = "";
    custom.setAttribute("placeholder","Custom");
    error.style.display = "none";
    griditems[0].style.backgroundColor = "hsl(172, 67%, 45%)";
    griditems[0].style.color = "hsl(183, 100%, 15%)";
    
    griditems[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[1].style.color = "hsl(185, 41%, 84%)";

    griditems[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[2].style.color = "hsl(185, 41%, 84%)";

    griditems[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[3].style.color = "hsl(185, 41%, 84%)";

    griditems[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[4].style.color = "hsl(185, 41%, 84%)";
    
    let totalperperson =(Number(bill.value)*5)/ 100;
    let tipperperson = totalperperson/Number(people.value);
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + tipperperson;
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + totalperperson;
  }
  function tip2() {
    if (people.value == 0 || isNaN(people.value)) {
      error.style.display = "initial";
      return;
    }
    custom.value = "";
    custom.setAttribute("placeholder","Custom");
    error.style.display = "none";
    griditems[1].style.backgroundColor = "hsl(172, 67%, 45%)";
    griditems[1].style.color = "hsl(183, 100%, 15%)";

    griditems[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[0].style.color = "hsl(185, 41%, 84%)";

    griditems[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[2].style.color = "hsl(185, 41%, 84%)";

    griditems[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[3].style.color = "hsl(185, 41%, 84%)";

    griditems[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[4].style.color = "hsl(185, 41%, 84%)";

    let totalperperson =(Number(bill.value)*10)/ 100;
    let tipperperson = totalperperson/Number(people.value);
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + tipperperson;
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + totalperperson;
  }
  function tip3() {
    if (people.value == 0 || isNaN(people.value)) {
      error.style.display = "initial";
      return;
    }
    custom.value = "";
    custom.setAttribute("placeholder","Custom");
    error.style.display = "none";
    griditems[2].style.backgroundColor = "hsl(172, 67%, 45%)";
    griditems[2].style.color = "hsl(183, 100%, 15%)";

    griditems[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[1].style.color = "hsl(185, 41%, 84%)";

    griditems[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[0].style.color = "hsl(185, 41%, 84%)";

    griditems[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[3].style.color = "hsl(185, 41%, 84%)";

    griditems[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[4].style.color = "hsl(185, 41%, 84%)";

    let totalperperson =(Number(bill.value)*15)/ 100;
    let tipperperson = totalperperson/Number(people.value);
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + tipperperson;
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + totalperperson;
  }
  function tip4() {
    if (people.value == 0 || isNaN(people.value)) {
      error.style.display = "initial";
      return;
    }
    custom.value = "";
    custom.setAttribute("placeholder","Custom");
    error.style.display = "none";
    griditems[3].style.backgroundColor = "hsl(172, 67%, 45%)";
    griditems[3].style.color = "hsl(183, 100%, 15%)";

    griditems[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[1].style.color = "hsl(185, 41%, 84%)";

    griditems[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[2].style.color = "hsl(185, 41%, 84%)";

    griditems[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[0].style.color = "hsl(185, 41%, 84%)";

    griditems[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[4].style.color = "hsl(185, 41%, 84%)";

    let totalperperson =(Number(bill.value)*25)/ 100;
    let tipperperson = totalperperson/Number(people.value);
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + tipperperson;
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + totalperperson;
  }
  function tip5() {
    if (people.value == 0 || isNaN(people.value)) {
      error.style.display = "initial";
      return;
    }
    custom.value = "";
    custom.setAttribute("placeholder","Custom");
    error.style.display = "none";
    griditems[4].style.backgroundColor = "hsl(172, 67%, 45%)";
    griditems[4].style.color = "hsl(183, 100%, 15%)";

    griditems[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[1].style.color = "hsl(185, 41%, 84%)";

    griditems[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[2].style.color = "hsl(185, 41%, 84%)";

    griditems[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[3].style.color = "hsl(185, 41%, 84%)";

    griditems[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[0].style.color = "hsl(185, 41%, 84%)";

    let totalperperson =(Number(bill.value)*50)/ 100;
    let tipperperson = totalperperson/Number(people.value);
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + tipperperson;
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + totalperperson;
  }
//custom
  function tip6() {
    if (people.value == 0 || isNaN(people.value)) {
        error.style.display = "initial";
        custom.value = "";
        custom.setAttribute("placeholder","Custom");
      return;
    }
    error.style.display = "none";
    griditems[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[0].style.color = "hsl(185, 41%, 84%)";
    
    griditems[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[1].style.color = "hsl(185, 41%, 84%)";

    griditems[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[2].style.color = "hsl(185, 41%, 84%)";

    griditems[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[3].style.color = "hsl(185, 41%, 84%)";

    griditems[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[4].style.color = "hsl(185, 41%, 84%)";
    let totalperperson =(Number(bill.value)*(Number(custom.value)))/ 100;
    let tipperperson = totalperperson/Number(people.value);
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + tipperperson;
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + totalperperson;
  }
  
  function reset()
  {
    error.style.display = "none";
    griditems[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[0].style.color = "hsl(185, 41%, 84%)";
    
    griditems[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[1].style.color = "hsl(185, 41%, 84%)";

    griditems[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[2].style.color = "hsl(185, 41%, 84%)";

    griditems[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[3].style.color = "hsl(185, 41%, 84%)";

    griditems[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    griditems[4].style.color = "hsl(185, 41%, 84%)";
    custom.value = "";
    custom.setAttribute("placeholder","Custom");
    custom.style.textAlign = "center";
    bill.value = "";
    people.value = "";
    ans1.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + "0.00";
    ans2.innerHTML = `<i class="fas fa-dollar-sign doller" ></i>` + "0.00";
  }