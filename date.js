function getCurrectDate(){
    const date = new Date()
    const day = date.getDate()
    const month = (date.getMonth() + 1) < 0? '0' + date.getMonth():date.getMonth(); 
    const year = date.getFullYear()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

module.exports = {
    getCurrectDate
}