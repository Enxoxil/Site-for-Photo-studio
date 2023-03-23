export const sort = (a, b) => {
    if (a.id > b.id){
        return 1;
    } else {
        return -1;
    }
}