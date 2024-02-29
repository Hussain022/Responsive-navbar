let n = 1
const burger = () => {
    let x = document.querySelector('.navbar ul');
    let l1 = document.querySelector('.line1');
    let l2 = document.querySelector('.line2');
    let l3 = document.querySelector('.line3');
    if(n===0){
        x.style.left = '-200px';
        x.style.transition = '.4s ease-in';
        n = 1
        l1.style.transform = 'unset';
        l1.style.position = 'unset';
        l2.style.display = 'unset';
        l3.style.transform = 'unset';
        l3.style.position = 'unset';
    }else{
        x.style.left = '0px';
        x.style.transition = '.4s ease-out';
        n = 0
        l1.style.transform = 'rotate(45deg)';
        l1.style.position = 'absolute';
        l2.style.display = 'none';
        l3.style.transform = 'rotate(-45deg)';
        l3.style.position = 'absolute';
    }
}