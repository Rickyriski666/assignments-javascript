let data = [];

function onClick() {
  const titleInput = document.getElementById('title');
  const priceInput = document.getElementById('price');
  const dateInput = document.getElementById('date');

  if (!titleInput.value || !priceInput.value || !dateInput.value) {
    alert('Masukkan Data');
  } else {
    const newData = {
      title: titleInput.value,
      price: priceInput.value,
      date: new Date(dateInput.value)
    };

    data.push(newData);
    displayData(newData);

    titleInput.value = '';
    priceInput.value = '';
    dateInput.value = '';

    const element = document.getElementById('noData');
    element.classList.add('hidden');

    total(data);
  }
}

function displayData(dataItem) {
  const container = document.getElementById('container-data');
  const listItem = document.createElement('li');
  listItem.classList.add('list-data');

  listItem.innerHTML = `
    <div class="date">
      <div class="date-value">${dataItem.date.getDate()}</div>
      <div class="date-value">${months[dataItem.date.getMonth()]}</div>
      <div class="date-value">${dataItem.date.getFullYear()}</div>
    </div>
    <div class="title">
      <p class="title-value">${dataItem.title}</p>
    </div>
    <div class="price">
      <div class="price-value">Rp.${dataItem.price}</div>
    </div>
  `;

  container.appendChild(listItem);
}

function total(datas) {
  const totalContainer = document.getElementById('total-expenses');
  totalContainer.classList.remove('hidden');

  const totalPrice = document.getElementById('total-price');

  if (datas.length < 2) {
    totalPrice.innerHTML = `Rp.${datas[0].price}`;
  } else {
    const total = datas.reduce((nilaiAwal, nilaiTambah) => {
      return nilaiAwal + parseInt(nilaiTambah.price);
    }, 0);

    totalPrice.innerHTML = `Rp.${total}`;
  }
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
