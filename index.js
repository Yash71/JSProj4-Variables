const inputs=document.querySelectorAll('.controller input');
// let update=(e)=>{
//     console.log(e.target.value);
// }
function update(){
    const suffix= this.dataset.sizing || '';
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));