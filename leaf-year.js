function isLeafyear(year){
    if(year %4==0){
        return true;
    }
    return false;
}
 const myYear = 2042;
 const thisIsLeafyear=isLeafyear(myYear)
 console.log('Is this year Leafyear??', thisIsLeafyear)