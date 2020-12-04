const model = new Model()
const view = new View()

$(`#searchBtn`).on('click',function(){
    const cityName = $('#textLine').val()
    if(!cityName)
        return
    model.getCityData(cityName).then(val => view.renderer(val))
})