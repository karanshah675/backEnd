function hello(fn){
    fn()
}


hello(function fn1(e){
    console.log("hello"+e);
})