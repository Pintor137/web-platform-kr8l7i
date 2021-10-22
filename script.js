class Amenidades {
  constructor() {
    this.amenidades = [];
    this.count = 1;
  }

  coun()

  getCountClick() {
    this.count = 
    console.log(this.count + 1);
  }

  addAmenidades(amenidad) {
    this.amenidades.push(amenidad);
  }

  getAmenidades() {
    return this.amenidades;
  }

  showAmenidades(amenidades) {
    amenidades.forEach(function (data, index) {
      console.log(data);
    });
  }
}

const btnAdd = document.getElementById('addTask');
const amenidad = document.getElementById('amenidad');
const content = document.getElementById('content');

var data = new Amenidades();

btnAdd.addEventListener('click', () => {
  var templete = '';
  var a = { hotel_id: 1, hab_id: amenidad.value };
  data.addAmenidades(a);
  data.getCountClick()
  data.getAmenidades().forEach(function (data, index) {
    templete += `
      <input type="text" id="amenidad" value=${data.hab_id} />
      <br>
    `;
  });

  content.innerHTML = templete;
});
