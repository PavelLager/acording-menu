debugger
const APP_acordions = document.querySelector('.acordions');

let item = [{id: 1, title: 'asdf', description: 'bla bla bla'}];

function addAco() {
    APP_acordions.innerHTML = `
    <div class="acordion">
    <div class="acordion_title">${item.title}
        <button class="acordion_button"></button>
    </div>
    <div class="acordion_discription">${item.description}</div>
</div>`
}

addAco();



document.querySelector('.acordion_button').addEventListener('click', function(){
    document.querySelector('.acordion_discription').style.display = 'flex';
})