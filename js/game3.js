let btns = document.querySelectorAll('#butt');
for(let x of btns){
    x.addEventListener('click',function (){
        document.querySelector('.screen').innerHTML += this.innerHTML
    })
}

        btns[10].addEventListener('click',function(){
            document.querySelector('.screen').innerHTML = ' '
        })

             btns[11].addEventListener('click',function(){
           let a = document.querySelector('.screen').innerHTML.slice(0,-1);
           let b= a.slice(0,-1)
           document.querySelector('.screen').innerHTML = b ;
     
        })

        btns[16].addEventListener('click',function(){
            let m = document.querySelector('.screen').innerHTML ;
            let n = m.slice(0,-1);
            let o = n;
            let p= eval(o);
            document.querySelector('.screen').innerHTML = p;

        })

        

        
 
