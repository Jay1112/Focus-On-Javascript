- Event delegation is a technique in JavaScript where we delegate the responsibility of handling an event to a parent element. 

- Event Cpaturing : from window to main element ( defautl value is false ) 
- Event Bubbling  : from main element to window ( defautl value is true ) 

const superparent = document.querySelector('.superparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

superparent.addEventListener('click',(event)=>{
    console.log('superparent clicked');
},{capture:true});

parent.addEventListener('click',(event)=>{
    console.log('parent clicked');
    event.stopPropagation();
},{capture:false});

child.addEventListener('click',(event)=>{
    console.log('child clicked');
},{capture:true});

## - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

 <div class="superparent" style="padding: 10px;">
    <div name="class1" style="padding:10px;border: 2px solid black; margin: 10px 0;">class 1</div>
    <div name="class2" style="padding:10px;border: 2px solid black; margin: 10px 0;">class 2</div>
    <div name="class3" style="padding:10px;border: 2px solid black; margin: 10px 0;">class 3</div>
</div>

const superparent = document.querySelector('.superparent');

superparent.addEventListener('click',(event)=>{
    console.log(event.target.nodeName);
    if(event.target.nodeName === 'DIV'){
        window.location.replace(`#${event.target.getAttribute('name')}`)
    }
});