import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={form:document.querySelector(".feedback-form")},m="feedback-form-state";let e={email:"",message:""};const r=localStorage.getItem(m);r&&(e=JSON.parse(r),t.form.elements.email.value=e.email,t.form.elements.message.value=e.message);t.form.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))});t.form.addEventListener("submit",a=>{if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),e={email:"",message:""},t.form.reset()});
//# sourceMappingURL=2-form.js.map
