const findMyState = () =>{
  const status =document.querySelector('.status');

const success = (position) =>{
  console.log(position)
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  
}
const error = () =>{
  status.textContent ='unable to retrive your location';
}


navigator.geolocation.getCurrentPosition(success, error);


}

document.querySelector('.find-state').addEventListener('click', findMyState);

