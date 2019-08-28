//jshint esversion:6


exports.getDate = function () {
    
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
    
    
    Date.prototype.toLocaleDateString = function () {
        return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;               
    };
    
    const day = today.toLocaleDateString('fr-FR', options);

    return day;
}
