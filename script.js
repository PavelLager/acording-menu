debugger
const APP_acordions = document.querySelector('.acordions');

let item = [{id: 1, title: 'asdf', description: 'bla bla bla'},
{id: 2, title: 'asdf', description: 'bla bla bla'},
{id: 3, title: 'asdf', description: 'bla bla bla'}];
let logs = [{id: 0, count: 0}]

function addAco() {
    return `
    <div class="acordion">
    <div class="acordion_title">
        <button class="acordion_button" data-id='${item.id}'>O</button>

        ${item.title}
    </div>
    <div class="acordion_discription">${item.description}</div>
</div>`
}

function getAco() {
    return item.map(() => addAco()).join('');
  }


function main(){
    APP_acordions.innerHTML = getAco();
}
main();

let a = document.querySelectorAll('.acordion_button');
a.addEventListener('click', function(){
    document.querySelector('.acordion_discription').style.display = 'flex';
    document.querySelector('.acordion_button').style.display = 'none';
    document.querySelector('.acordion_button2').style.display = 'block';
})






document.querySelectorAll('.acordion_button').addEventListener('click', function(){
    document.querySelectorAll('.acordion_discription').style.display = 'flex';
    document.querySelectorAll('.acordion_button').style.display = 'none';
    document.querySelectorAll('.acordion_button2').style.display = 'block';

})

document.querySelectorAll('.acordion_button2').addEventListener('click', function(){
    document.querySelectorAll('.acordion_discription').style.display = 'none';
    document.querySelectorAll('.acordion_button').style.display = 'block';
    document.querySelectorAll('.acordion_button2').style.display = 'none';
})



