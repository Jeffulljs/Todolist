//jshint esversion:6

module.exports = getDate;


function getDate() {
    
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
    
    
    Date.prototype.toLocaleDateString = function () {
        return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;               
    };
    
    let day = today.toLocaleDateString('fr-FR', options);

    return day;
}
