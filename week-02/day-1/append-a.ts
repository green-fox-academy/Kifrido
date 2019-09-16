

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

const animals: string[] = ["koal","pand", "zebr"];

animals.forEach(function(addch){
    addch = addch + "a";

console.log(addch);
})
