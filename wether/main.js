const cityName =document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status= document.getElementById('temp_status')
const temp= document.getElementById('temp')
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal== ""){
        city_name.innerText = `Please Write the Name before serch`;

    }else{
        try{
            let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=29c42be4010db7926f8571602ea72976`;
            const response = await fetch(url);
            const data=await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText =arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood="clear"){
                temp_status.innerText=
                "<i class='fas fa-sun' style='color:#eccc686;'></i>"
            }else if(tempMood='Clouds'){
                temp_status.innerText=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMood='Rain'){
                temp_status.innerText=
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else {
                temp_status.innerText=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            

            

        }catch{
            // city_name.innerText = `Please enter City name properly`;
        }

    }

}
submitBtn.addEventListener('click',getInfo);