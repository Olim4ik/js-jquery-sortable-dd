'use strict'
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);

}

function dragstart(event) {
    //console.log('dragstart', event.target);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    //console.log('dragend');
    //event.target.classList.remove('hold', 'hide');
    //event.target.classList.remove('hide');
    event.target.className = 'item';
}

function dragover(event){
    //console.log('d o');
    event.preventDefault();

}

function dragenter(event){
    event.target.classList.add('hovered');
    console.log('d e');
}

function dragleave(event){
    event.target.classList.remove('hovered');
    console.log('d l');
}

function dragdrop(event){
    event.target.classList.remove('hovered');
    event.target.append(item);
}

