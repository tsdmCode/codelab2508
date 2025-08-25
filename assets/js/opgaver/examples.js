let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');
const evilExtras = document.getElementById('evilExtras');
myExtrasInput.addEventListener('change', function () {
  addExtra(myExtrasInput.value);
});

function addExtra(str) {
  myExtras.push(str);

  updateExtras();
}
const mySelect = document.createElement('select');
const empty = document.createElement('option');
empty.text = ' ';
empty.value = '1';
mySelect.add(empty);
evilExtras.append(mySelect);

function updateExtras() {
  /* din map kode her... I updateExtras skal du bruge map til at generere en text til .innerHTML. hvis du har kodet rigtigt, vises dine valg under input feltet.  */
  myExtrasListElement.innerHTML = myExtras.join(', ');

  mySelect.innerHTML = '';
  const empty = document.createElement('option');
  empty.text = 'Fjern extras her';
  mySelect.add(empty);
  myExtras.forEach((extra) => {
    const option = document.createElement('option');
    option.text = extra;
    mySelect.add(option);
  });
}

mySelect.addEventListener('change', function () {
  removeExtra(mySelect.value);
});

function removeExtra(str) {
  myExtras.splice(myExtras.indexOf(str), 1);

  updateExtras();
}
