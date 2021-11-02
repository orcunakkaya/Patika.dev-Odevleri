const arguments = process.argv.slice(2);

const daireAlani = (r) => {
    let alan;
    alan = Math.PI * Math.pow(r, 2)
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
}

daireAlani(arguments[0]*1)
