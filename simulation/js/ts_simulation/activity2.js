function activity2() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 2</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='internal_calculations_2();' id='act2-temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
}
//for starting first activity
function start_act2() {
    let temp_btn = (document.getElementById('act2-temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Equation 2', 'act2-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act2-div'>
         <p style="text-align:left;" class="fs-18px fb-500">Equation,</p>
         
            <div>
               $$
                  \\int_{${x1_a2}}^{${x2_a2}}{2 \× x^2 + 1} = a \× \\int_{-1}^{1}{f(u)du} \⇒ x = au+b
               $$
            </div>
            <br>
            <div>
               $$
                  x1 = ${x1_a2} \\quad x2 = ${x2_a2}
               $$
            </div>
            <br>
            <div id="act2-ab-div">
            <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$ a = \\frac{x2-x1}{2} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act2-a-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$ b = \\frac{x2+x1}{2} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act2-b-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a2_verify_a_b();' style='position: relative; left: 0w;' id='act2-vf-ab-btn'>Verify</button>
            </div>
      </div>
   `;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function internal_calculations_2() {
    x1_a2 = 0;
    x2_a2 = 0;
    a_a2 = 0;
    b_a2 = 0;
    x_u1_a2 = 0;
    x_u2_a2 = 0;
    I_a2 = 0;
    x1_a2 = Math.round(Math.random() * 4 + 1);
    x2_a2 = x1_a2 + 3;
    a_a2 = get_a(x1_a2, x2_a2);
    b_a2 = get_b(x1_a2, x2_a2);
    x_u1_a2 = a_a2 * u1_a1 + b_a2;
    x_u2_a2 = a_a2 * u2_a1 + b_a2;
    I_a2 = a_a2 * (f2(x_u1_a2) + f2(x_u2_a2));
    start_act2();
}
function a2_verify_a_b() {
    let a_inp = (document.getElementById('act2-a-inp'));
    let b_inp = (document.getElementById('act2-b-inp'));
    console.log(a_a2, b_a2);
    if (!verify_values(parseFloat(a_inp.value), a_a2)) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect a value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    if (!verify_values(parseFloat(b_inp.value), b_a2)) {
        b_inp.style.border = '1px solid red';
        alert('Incorrect b value');
        return;
    }
    else {
        b_inp.style.border = '1px solid #ced4da';
        b_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-ab-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center">
         <div class="col-md-5">
            $$ a = \\frac{x2-x1}{2} = ${a_a2}  $$
         </div>
         <div class="col-md-5">
            $$ b = \\frac{x2+x1}{2} = ${b_a2} $$
         </div>
      </div>
      <button class='btn btn-info std-btn' onclick='a2_load_I();' style='position: relative; left: 0w;' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a2_load_I() {
    let outer_div = (document.getElementById('act2-div'));
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    outer_div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">Calculate,</p>
      <div>
         $$a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(\\frac{1}{\\sqrt{3}} \\right)+ f\\left(\\frac{-1}{\\sqrt{3}}\\right)\\right)$$
      </div>
      <br>

      <div id="act2-I-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-8">
               $$ I = a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(a\× \\frac{1}{\\sqrt{3}} +b \\right)+ f\\left(a \\times\\frac{-1}{\\sqrt{3}}+ b\\right)\\right)  = $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act2-I-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a2_verify_I();' style='position: relative; left: 0w;' id='act2-vf-I-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a2_verify_I() {
    let I_inp = (document.getElementById('act2-I-inp'));
    console.log(I_a2);
    if (!verify_values(parseFloat(I_inp.value), parseFloat(I_a2.toFixed(3)))) {
        I_inp.style.border = '1px solid red';
        alert('Incorrect I value');
        return;
    }
    else {
        I_inp.style.border = '1px solid #ced4da';
        I_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-I-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div>
      $$ I = a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(a\× frac{1}{\\sqrt{3}} +b \\right)+ f\\left(a \\times\\frac{-1}{\\sqrt{3}}+ b\\right)\\right)  = ${parseFloat(I_a2.toFixed(3))} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' onclick='activity3();' style='position: relative; left: 0w;' id='act2-btn2'>Activity 3</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
activity1();
//# sourceMappingURL=activity2.js.map