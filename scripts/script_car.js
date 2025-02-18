const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'Все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

document.getElementById('order-action').addEventListener('click', function () {
  const fields = [carField, nameField, phoneField];

  let hasError = false;

  fields.forEach((field) => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      hasError = true;
    } else {
      field.style.borderColor = 'white';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.book-button');
    const carInput = document.getElementById('car');

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carDetails = button.closest('.car-ditailes');
            const carName = carDetails.querySelector('h4').textContent;

            carInput.value = carName;

            document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
        });
    });
});