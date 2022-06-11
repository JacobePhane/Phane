/* Get ids with less code */
function id(id_name){
	return document.getElementById(id_name);
}

/* Get select element choices with less code */
function opt(id_name){
	let ui = id(id_name);
	return ui.options[ui.selectedIndex];
}

/* Get query selector all with less code */
function qAll(q){
	return document.querySelectorAll(q);
}
	
/* Get all elements with class name c */
function cAll(class_name){
	return document.getElementsByClassName(class_name);
}

/* Get elements where className == the selected option's data-sub_menu_name */
function getSubMenuName(id_name){
	let sub_menu_name = opt(id_name).dataset.sub_menu_name;
	return sub_menu_name;
}
	
	
/* Get elements where className == the selected option's data-sub_menu_name */
function getSubMenuItems(id_name){
	let sub_menu_name = opt(id_name).dataset.sub_menu_name;
	return cAll(sub_menu_name);
}
	

let c_button = document.getElementsByClassName("collapsible_button");

for (let i = 0; i < c_button.length; i++) {
  c_button[i].addEventListener("click", function(e) {
	  e.preventDefault();
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
	  content.style.maxHeight = null;
    } else {
	  content.style.maxHeight = "100vh";
    }
  });
}


let c_toggle = document.getElementsByClassName("collapsible_toggle");

for (let i = 0; i < c_toggle.length; i++) {
  c_toggle[i].addEventListener("click", function(e) {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* For each select element, get it's menu name, and search all linked items
for each item check if it is an item of the selected options submenu*/
		
let s_menu = document.getElementsByTagName("select");

for (let i = 0; i < s_menu.length; i++) {
	s_menu[i].addEventListener("change", function(e) {
		console.log("change")
		let sub_menu_name = opt(this.id).dataset.sub_menu_name;
		let menu_name = s_menu[i].dataset.menu_name;
		let menu_items = cAll(menu_name);
		
		for (let j = 0; j < menu_items.length; j++) {
			
			var item = menu_items[j];
			/* I use class instead of another data set so items
			can easily be part of more than one sub menu */
			
			if (item.classList.contains(sub_menu_name)) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		}
	});
}

let shape_menu = id("change_shape_menu");
let sub_menu_name = opt(shape_menu.id).dataset.sub_menu_name;
let menu_name = shape_menu.dataset.menu_name;
let menu_items = cAll(menu_name);
for (let j = 0; j < menu_items.length; j++) {
	var item = menu_items[j];
	item.style.display = "block";
}
	
	
/*
id("change_bg_intensity").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_bg_intensity");
                console.log("Value is: " + id("change_bg_intensity").value);
                let item = id("change_bg_intensity");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_bg_intensity").value);
                //world.createScene();
                //spinnerHide();
                console.log("bg_intensity+ Changed!");
        });


id("change_red").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_red");
                console.log("Value is: " + id("change_red").value);
                let item = id("change_red");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_red").value);
                //world.createScene();
                //spinnerHide();
                console.log("red+ Changed!");
        });


id("change_green").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_green");
                console.log("Value is: " + id("change_green").value);
                let item = id("change_green");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_green").value);
                //world.createScene();
                //spinnerHide();
                console.log("green+ Changed!");
        });


id("change_blue").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_blue");
                console.log("Value is: " + id("change_blue").value);
                let item = id("change_blue");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_blue").value);
                //world.createScene();
                //spinnerHide();
                console.log("blue+ Changed!");
        });


id("change_threshhold").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_threshhold");
                console.log("Value is: " + id("change_threshhold").value);
                let item = id("change_threshhold");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_threshhold").value);
                //world.createScene();
                //spinnerHide();
                console.log("threshhold+ Changed!");
        });


id("change_black").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_black");
                console.log("Value is: " + id("change_black").value);
                let item = id("change_black");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_black").value);
                //world.createScene();
                //spinnerHide();
                console.log("black+ Changed!");
        });


id("change_white").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_white");
                console.log("Value is: " + id("change_white").value);
                let item = id("change_white");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_white").value);
                //world.createScene();
                //spinnerHide();
                console.log("white+ Changed!");
        });


id("change_brightness").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_brightness");
                console.log("Value is: " + id("change_brightness").value);
                let item = id("change_brightness");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_brightness").value);
                //world.createScene();
                //spinnerHide();
                console.log("brightness+ Changed!");
        });


id("change_contrast").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_contrast");
                console.log("Value is: " + id("change_contrast").value);
                let item = id("change_contrast");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_contrast").value);
                //world.createScene();
                //spinnerHide();
                console.log("contrast+ Changed!");
        });


id("change_exposure").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_exposure");
                console.log("Value is: " + id("change_exposure").value);
                let item = id("change_exposure");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_exposure").value);
                //world.createScene();
                //spinnerHide();
                console.log("exposure+ Changed!");
        });


id("change_blur").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_blur");
                console.log("Value is: " + id("change_blur").value);
                let item = id("change_blur");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_blur").value);
                //world.createScene();
                //spinnerHide();
                console.log("blur+ Changed!");
        });


id("change_rotation").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_rotation");
                console.log("Value is: " + id("change_rotation").value);
                let item = id("change_rotation");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_rotation").value);
                //world.createScene();
                //spinnerHide();
                console.log("rotation+ Changed!");
        });


id("change_crop_width").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_crop_width");
                console.log("Value is: " + id("change_crop_width").value);
                let item = id("change_crop_width");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_crop_width").value);
                //world.createScene();
                //spinnerHide();
                console.log("crop_width+ Changed!");
        });


id("change_crop_height").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_crop_height");
                console.log("Value is: " + id("change_crop_height").value);
                let item = id("change_crop_height");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_crop_height").value);
                //world.createScene();
                //spinnerHide();
                console.log("crop_height+ Changed!");
        });


id("change_shift_x").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_shift_x");
                console.log("Value is: " + id("change_shift_x").value);
                let item = id("change_shift_x");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_shift_x").value);
                //world.createScene();
                //spinnerHide();
                console.log("shift_x+ Changed!");
        });


id("change_shift_y").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_shift_y");
                console.log("Value is: " + id("change_shift_y").value);
                let item = id("change_shift_y");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_shift_y").value);
                //world.createScene();
                //spinnerHide();
                console.log("shift_y+ Changed!");
        });


id("change_scale").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_scale");
                console.log("Value is: " + id("change_scale").value);
                let item = id("change_scale");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_scale").value);
                //world.createScene();
                //spinnerHide();
                console.log("scale+ Changed!");
        });


id("change_scale_x").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_scale_x");
                console.log("Value is: " + id("change_scale_x").value);
                let item = id("change_scale_x");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_scale_x").value);
                //world.createScene();
                //spinnerHide();
                console.log("scale_x+ Changed!");
        });


id("change_scale_y").addEventListener("input", async function(e){
                //spinnerShow();
                console.log("Trigger For change_scale_y");
                console.log("Value is: " + id("change_scale_y").value);
                let item = id("change_scale_y");
                id(item.dataset.span_id).innerText = item.value;
                //model.changeImprintDepth(id("change_scale_y").value);
                //world.createScene();
                //spinnerHide();
                console.log("scale_y+ Changed!");
        });

*/