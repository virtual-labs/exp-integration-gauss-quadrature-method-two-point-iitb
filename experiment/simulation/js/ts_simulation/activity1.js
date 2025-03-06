let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Integration: Gauss Quadrature Methods Two Point</h4>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='internal_calculations_1();' id='temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Equation 1', 'act1-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
         <p style="text-align:left;" class="fs-18px fb-500">Equation,</p>
         
            <div>
               $$
                  \\int_{${x1_a1}}^{${x2_a1}}{x^3 - x+1} = a \× \\int_{-1}^{1}{f(u)du} \⇒ x = au+b
               $$
            </div>
            <br>
            <div>
               $$
                  x1 = ${x1_a1} \\quad x2 = ${x2_a1}
               $$
            </div>
            <br>
            <div id="act1-ab-div">
            <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$ a = \\frac{x2-x1}{2} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act1-a-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$ b = \\frac{x2+x1}{2} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act1-b-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a1_verify_a_b();' style='position: relative; left: 0w;' id='act1-vf-ab-btn'>Verify</button>
            </div>
      </div>
   `;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculations_1() {
    x1_a1 = 0;
    x2_a1 = 0;
    a_a1 = 0;
    b_a1 = 0;
    x_u1_a1 = 0;
    x_u2_a1 = 0;
    I_a1 = 0;
    x1_a1 = Math.round(Math.random() * 4 + 1);
    x2_a1 = x1_a1 + 3;
    a_a1 = get_a(x1_a1, x2_a1);
    b_a1 = get_b(x1_a1, x2_a1);
    x_u1_a1 = a_a1 * u1_a1 + b_a1;
    x_u2_a1 = a_a1 * u2_a1 + b_a1;
    I_a1 = a_a1 * (f1(x_u1_a1) + f1(x_u2_a1));
    start_act1();
}
function a1_verify_a_b() {
    let a_inp = (document.getElementById('act1-a-inp'));
    let b_inp = (document.getElementById('act1-b-inp'));
    console.log(a_a1, b_a1);
    if (!verify_values(parseFloat(a_inp.value), a_a1)) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect a value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    if (!verify_values(parseFloat(b_inp.value), b_a1)) {
        b_inp.style.border = '1px solid red';
        alert('Incorrect b value');
        return;
    }
    else {
        b_inp.style.border = '1px solid #ced4da';
        b_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-ab-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center">
         <div class="col-md-5">
            $$ a = \\frac{x2-x1}{2} = ${a_a1}  $$
         </div>
         <div class="col-md-5">
            $$ b = \\frac{x2+x1}{2} = ${b_a1} $$
         </div>
      </div>
      <button class='btn btn-info std-btn' onclick='a1_load_I();' style='position: relative; left: 0w;' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a1_load_I() {
    let outer_div = (document.getElementById('act1-div'));
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    outer_div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">Calculate,</p>
      <div>
         $$a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(\\frac{1}{\\sqrt{3}} \\right)+ f\\left(\\frac{-1}{\\sqrt{3}}\\right)\\right)$$
      </div>
      <br>

      <div id="act1-I-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-8">
               $$ I = a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(a\× \\frac{1}{\\sqrt{3}} +b \\right)+ f\\left(a \\times\\frac{-1}{\\sqrt{3}}+ b\\right)\\right)  = $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act1-I-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a1_verify_I();' style='position: relative; left: 0w;' id='act1-vf-I-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a1_verify_I() {
    let I_inp = (document.getElementById('act1-I-inp'));
    console.log(I_a1);
    if (!verify_values(parseFloat(I_inp.value), parseFloat(I_a1.toFixed(3)))) {
        I_inp.style.border = '1px solid red';
        alert('Incorrect I value');
        return;
    }
    else {
        I_inp.style.border = '1px solid #ced4da';
        I_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-I-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div>
      $$ I = a \× \\int_{-1}^{1}{f(u)du} = a \\left(f\\left(a\× frac{1}{\\sqrt{3}} +b \\right)+ f\\left(a \\times\\frac{-1}{\\sqrt{3}}+ b\\right)\\right)  = ${parseFloat(I_a1.toFixed(3))} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' onclick='activity2();' style='position: relative; left: 0w;' id='act1-btn2'>Activity 2</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
activity1();
//# sourceMappingURL=activity1.js.map