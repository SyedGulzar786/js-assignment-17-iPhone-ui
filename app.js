var mobile = {
    apple: {
        iphone_series: {
            iphone_13: {
                processor: "15 ChipSet",
                camera: "64 Mpx",
                ram: "8GB",
                rom: "256GB",
                battery: "4000 Mah",
                color: ["black","white","blue"]
            },
            iphone_14: {
                processor: "16 ChipSet",
                camera: "108 Mpx",
                ram: "12GB",
                rom: "256GB",
                battery: "4500 Mah",
                color: ["black","white","blue"]
            },
            iphone_15: {
                processor: "17 ChipSet",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah",
                color: ["black","white","blue"]
            }
            
        }
    },

    samsung: {
        s_series: {
            S_21: {
                processor: "Snapdragon 8 Gen 1",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah"
            },
            S_22: {
                processor: "Snapdragon 8 Gen 2",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah"
            },
            S_23: {
                processor: "Snapdragon 8 Gen 3",
                camera: "200 Mpx",
                ram: "16GB",
                rom: "256GB",
                battery: "5000 Mah"
            }
        }
    },

    onePlus: {
        onePlus_9: {
            processor: "Snapdragon 8 Gen 1",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        onePlus_10: {
            processor: "Snapdragon 8 Gen 2",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        onePlus_11: {
            processor: "Snapdragon 8 Gen 3",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        }
    },

    googlePixel: {
        g_4: {
            processor: "Snapdragon 8 Gen 1",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        g_5: {
            processor: "Snapdragon 8 Gen 2",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        g_6: {
            processor: "Snapdragon 8 Gen 3",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        }
    },

    redmi: {
        redmi_11: {
            processor: "Snapdragon 8 Gen 1",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        redmi_12: {
            processor: "Snapdragon 8 Gen 2",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        },
        redmi_13: {
            processor: "Snapdragon 8 Gen 3",
            camera: "200 Mpx",
            ram: "16GB",
            rom: "256GB",
            battery: "5000 Mah"
        }
    },

}

var company = document.getElementById("company")
var model = document.getElementById("model")
company.innerHTML = `<option value="select company">select company</option>` 
for(var key in mobile){
    company.innerHTML += `<option value="${key}">${key}</option>` 
}
function selectCompany(){
    console.log(company.value)
    model.innerHTML = `<option value="select model">select model</option>` 
    for(var key in mobile[company.value]){
        model.innerHTML += `<option value="${key}">${key}</option>` 
    }    
}
// console.log(mobile)