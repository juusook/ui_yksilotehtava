'use strict';

const dialog = document.getElementById('dialog')
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.addEventListener('click', (e) => {dialog.showModal();});
closeButton.addEventListener('click', (e) => {dialog.close();});
