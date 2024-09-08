var mobile = {
    apple: {

            iphone_13: {
                src: "./img/iphone13.jpeg" , 
                processor: "15 Chipset",
                camera: "64 Mpx",
                ram: "8GB",
                rom: "256GB",
                battery: "4000 Mah",
                color: ["black","white","blue"]
            },
            iphone_14: {
                src:"./img/iphone14.jpeg" ,
                processor: "16 Chipset",
                camera: "108 Mpx",
                ram: "12GB",
                rom: "256GB",
                battery: "4500 Mah",
                color: ["black","white","blue"]
            },
            iphone_15: {
                src:"img/iphone15.jpeg" ,
                processor: "17 Chipset",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah",
                color: ["black","white","blue"]
            }
    },

    samsung: {
            S_21: {
                src:"img/s21.jpeg" ,
                processor: "Snapdragon 8 Gen 1",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah"
            },
            S_22: {
                src:"img/s22.jpeg" ,
                processor: "Snapdragon 8 Gen 2",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah"
            },
            S_23: {
                src:"./img/s23.jpeg" ,
                processor: "Snapdragon 8 Gen 3",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah"
            }
        
    },

    onePlus: {
        oneplus_9: {
            src:"img/op9.jpeg",
            processor: "Snapdragon 8 Gen 1",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        oneplus_10: {
            src:"img/op10.jpeg" ,
            processor: "Snapdragon 8 Gen 2",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        oneplus_11: {
            src:"img/op11.jpeg" ,
            processor: "Snapdragon 8 Gen 3",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        }
    },

    googlePixel: {
        g_4: {
            src:"img/gp4.jpeg" ,
            processor: "Snapdragon 8 Gen 1",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        g_5: {
            src:"img/gp5.jpeg" ,
            processor: "Snapdragon 8 Gen 2",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        g_6: {
            src:"img/gp6.jpeg" ,
            processor: "Snapdragon 8 Gen 3",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        }
    },

    redmi: {
        redmi_11: {
            src:"img/r11.jpeg" ,
            processor: "Snapdragon 8 Gen 1",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        redmi_12: {
            src:"img/r12.jpeg" ,
            processor: "Snapdragon 8 Gen 2",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        redmi_13: {
            src:"img/r13.jpeg" ,
            processor: "Snapdragon 8 Gen 3",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        }
    },

}
// console.log(../img/iphone_13.jpg)         
var company = document.getElementById("company")
var model = document.getElementById("model")
var processor = document.getElementById("processor")
var rom = document.getElementById("rom")
var ram = document.getElementById("ram")
var camera = document.getElementById("camera")
var battery = document.getElementById("battery")
var show = document.getElementById("show")

for(var key in mobile){
    company.innerHTML += `<option value="${key}">${key}</option>`
} 

company.onchange = function(){
    model.innerHTML = `<option value="">select the model</option>`
    for(var key in mobile[company.value]){
        model.innerHTML += `<option value="${key}">${key}</option>` 
    }
}

model.onchange = function(){
    var verify = mobile[company.value][model.value]
    for(var key in verify){
        processor.childNodes[1].innerHTML = `<h1>${verify.processor}</h1>`
        ram.childNodes[1].innerHTML = `<h1>${verify.ram}</h1>`
        rom.childNodes[1].innerHTML = `<h1>${verify.rom}</h1>`
        battery.childNodes[1].innerHTML = `<h1>${verify.battery}</h1>`
        camera.childNodes[1].innerHTML = `<h1>${verify.camera}</h1>`
        show.setAttribute("src",`${verify.src}`)
        // show.src = ${verify.src}
// console.log(processor.childNodes[1],key,verify)
    }
}

// console.log(mobile)