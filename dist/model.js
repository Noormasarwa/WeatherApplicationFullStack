class Model{ 
    constructor(){
        this.cityData = []

    }

    async getDataFromDB(){
        const data = await $.get('/cities')
        return data
    }

    async getCityData(cityName){ 
        const data = await $.get(`/city/${cityName}`)
        
        this.cityData.push({
            name:data.name, 
            temperature:(data.main.temp - 273.15).toFixed(2),
            condition:data.weather[0].main,
            conditionPic:data.weather[0].icon
        })
        return this.cityData
    }

    async saveCity(cityObj){
        return $.post('/city',cityObj,function(response){
            console.log(response)
        })
        
    }

    async removeCity(cityName){
        return $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                console.log(result)
                return this.getDataFromDB()
            }
        });
    }

}
