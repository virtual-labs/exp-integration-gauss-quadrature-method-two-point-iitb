function activity3() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 3</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='internal_calculations_3();' id='act3-temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
}
//for starting first activity
function start_act3() {
    let temp_btn = (document.getElementById('act3-temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Equation 3', 'act3-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act3-div'>
         <p style="text-align:left;" class="fs-18px fb-500">Equation,</p>
         
            <div>
               $$
                  \\int_{${x1_a3}}^{${x2_a3}}{\\frac{1}{1+x^2}} = a \× \\int_{-1}^{1}{f(u)du} \⇒ x = au+b
               $$
            </div>
            <br>
            <div>
               $$
                  x1 = ${x1_a3} \\quad x2 = ${x2_a3}
               $$
            </div>
            <br>
            <div id="act3-ab-div">
            <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$ a = \\frac{x2-x1}{2} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act3-a-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$ b = \\frac{x2+x1}{2} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act3-b-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a3_verify_a_b();' style='position: relative; left: 0w;' id='act3-vf-ab-btn'>Verify</button>
            </div>
      </div>
   `;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
}
function internal_calculations_3() {
    x1_a3 = 0;
    x2_a3 = 0;
    a_a3 = 0;
    b_a3 = 0;
    x_u1_a3 = 0;
    x_u2_a3 = 0;
    I_a3 = 0;
    x1_a3 = Math.round(Math.random() * 4 + 1);
    x2_a3 = x1_a3 + 3;
    a_a3 = get_a(x1_a3, x2_a3);
    b_a3 = get_b(x1_a3, x2_a3);
    x_u1_a3 = a_a3 * u1_a1 + b_a3;
    x_u2_a3 = a_a3 * u2_a1 + b_a3;
    I_a3 = a_a3 * (f3(x_u1_a3) + f3(x_u2_a3));
    start_act3();
}
function a3_verify_a_b() {
    let a_inp = (document.getElementById('act3-a-inp'));
    let b_inp = (document.getElementById('act3-b-inp'));
    console.log(a_a3, b_a3);
    if (!verify_values(parseFloat(a_inp.value), a_a3)) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect a value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    if (!verify_values(parseFloat(b_inp.value), b_a3)) {
        b_inp.style.border = '1px solid red';
        alert('Incorrect b value');
        return;
    }
    else {
        b_inp.style.border = '1px solid #ced4da';
        b_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-ab-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center">
         <div class="col-md-5">
            $$ a = \\frac{x2-x1}{2} = ${a_a3}  $$
         </div>
         <div class="col-md-5">
            $$ b = \\frac{x2+x1}{2} = ${b_a3} $$
         </div>
      </div>
      <button class='btn btn-info std-btn' onclick='a3_load_I();' style='position: relative; left: 0w;' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_load_I() {
    let outer_div = (document.getElementById('act3-div'));
    let btn = (document.getElementById('act3-btn1'));
    btn && btn.remove();
    outer_div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">Calculate,</p>
      <div>
         $$a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(\\frac{1}{\\sqrt{3}} \\right)+ f\\left(\\frac{-1}{\\sqrt{3}}\\right)\\right)$$
      </div>
      <br>

      <div id="act3-I-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-8">
               $$ I = a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(a\× \\frac{1}{\\sqrt{3}} +b \\right)+ f\\left(a \\times\\frac{-1}{\\sqrt{3}}+ b\\right)\\right)  = $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act3-I-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a3_verify_I();' style='position: relative; left: 0w;' id='act3-vf-I-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_verify_I() {
    let I_inp = (document.getElementById('act3-I-inp'));
    console.log(I_a3);
    if (!verify_values(parseFloat(I_inp.value), parseFloat(I_a3.toFixed(3)))) {
        I_inp.style.border = '1px solid red';
        alert('Incorrect I value');
        return;
    }
    else {
        I_inp.style.border = '1px solid #ced4da';
        I_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-I-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div>
      $$ I = a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(a\× frac{1}{\\sqrt{3}} +b \\right)+ f\\left(a \\times\\frac{-1}{\\sqrt{3}}+ b\\right)\\right)  = ${parseFloat(I_a3.toFixed(3))} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' onclick='exp_completed();' style='position: relative; left: 0w;' id='act3-btn2'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function exp_completed() {
    let btn = (document.getElementById('act3-btn2'));
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity3.js.map