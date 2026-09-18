const imgArr=[
  {
 photoUrl:"image/poster1.jpg"
},
{
  photoUrl:"image/poster2.jpg"
},
{
  photoUrl:"image/poster3.jpg",
},
{
  photoUrl:"image/poster5.jpg",
},
{
  photoUrl:"image/poster6.jpg",
},
{
  photoUrl:"image/poster7.jpg",
}
];

let bannerImg = document.querySelector(".bannerimg");
let myslidefade= document.querySelector(".mySlides-fade");
 let arrIndex =0;
 
 updatecontainer();
function updatecontainer() {
  const { photoUrl} = imgArr[arrIndex];
  bannerImg.src = photoUrl;
  arrIndex++;
  if(arrIndex === imgArr.length){
    arrIndex=0;
  }
  setTimeout(()=>{
    updatecontainer();
  },5000);
}
