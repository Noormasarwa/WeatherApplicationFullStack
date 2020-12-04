class View{
    constructor(){
        //handlebars init
        this.weatherTemplate = $(`#weather-template`).html()
        this.weatherSelector = Handlebars.compile(this.weatherTemplate);
    }
    renderer(cities){
        const newHTML = this.weatherSelector({ cities });
        $('#weatherContainer').empty().append(newHTML);
    }
}