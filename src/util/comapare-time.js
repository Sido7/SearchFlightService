function compareTime(timeStreing1,timeString2)
{
    const datatime1 = new Date(timeStreing1);
    const datatime2 =new Date(timeString2)

    return datatime1.getTime()>datatime2
}

module.exports = { compareTime }