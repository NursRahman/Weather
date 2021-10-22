const body = document.body

VANTA.CLOUDS({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  speed: 0.60
})
  
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  let API='http://api.openweathermap.org/data/2.5/weather?q=';
  let HALF ='&appid=b067377a72c98ae6963cdae2e35408d9'
  const btn = document.getElementById('btn')
  const inp = document.getElementById('input')
  const out = document.getElementById('output')
  let h1 = document.getElementById('ml3')
  
  const search = (e)=>{
    h1.innerHTML = 'Weather'
    e.preventDefault()
    let url= API + input.value + HALF
    h1.innerHTML += ' in ' + input.value
    funksia(url)
    input.value = ''
  }

  const funksia = async(url)=>{
      let req = await fetch(url)
      let res = await req.json()
      out.innerHTML = ''
      // console.log(res)
      pokaji(res)
  }
  
  const pokaji = (data)=>{
      let city = document.createElement('h2')
      let country = document.createElement('h3')
      let temp = document.createElement('h3')
      let coordlon = document.createElement('h3')
      let coordlat = document.createElement('h3')

      city.innerHTML = data.name
      country.innerHTML = data.sys.country
      temp.innerHTML = data.main.temp
      coordlon.innerHTML = data.coord.lon
      coordlat.innerHTML = data.coord.lat

      out.append(country, temp, coordlon, coordlat)
  }
  // funksia()
  btn.addEventListener('click', funksia)