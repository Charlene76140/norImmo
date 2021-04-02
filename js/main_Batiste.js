function submit(){
  let roomsNumber = document.getElementById("bedrooms");
  let userRoom = roomsNumber.value;
  let surface = document.getElementById("surface");
  let userSurface = surface.value;
  let materials = document.getElementById("construct-material");
  let userMaterials = materials.value;
  let materialsPrice = {};
    if (userMaterials === "parpaing") {
      materialsPrice = 2;
    }
    else if (userMaterials === "bois") {
      materialsPrice = 4;
    }
    else {
      materialsPrice = 6;
    }

  let resultPrice = materialsPrice * ((userSurface*100)+(userRoom*100));

  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = resultPrice + "euros";


}




