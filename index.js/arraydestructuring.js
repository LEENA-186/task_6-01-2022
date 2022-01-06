//let names = ["nani","sindu","vishu","velu","nikki","silky"];
//let [a,b,c,d,e,f]=names;
//console.log(a);
//console.log([a,,d]);

//function getItems(){
  //  return[10,20];
//}
            //let Items = getItems();
           //let thirdItem = Items[2]!= undefined? Items[2]:0;
           //console.log(thirdItem);
//let [,,thirdItem=0] = getItems();
//console.log(thirdItem);
function getPara() {
    return [
        'vijju',
        ['Red', 'black', 'green']
    ];
}
let name,
 [col1,col2,col3] = getPara();
console.log(col1,col2,col3);