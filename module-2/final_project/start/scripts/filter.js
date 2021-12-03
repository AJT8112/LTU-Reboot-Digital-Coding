console.log('Alex');

let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');
let textSearchInput = document.querySelector('.textSearchInput');

// console.log(buttons);
// console.log(images);
//console.log(textSearchInput);
let searchString;
let animal = 'all';

buttons.forEach(function(button){
   // console.log(button)
   button.addEventListener('click',function(event){
       //console.log(event.target);
       let clickedItem = event.target;
       let animal = clickedItem.getAttribute('animal');
    //    console.log(animal);
        images.forEach(function(image){
            // console.log(image);
            //Hide everything
            image.parentElement.classList.add('hide');
            if(image.classList.contains(animal) || animal == 'all'){
                //show current image
                // console.log(image);
                if(image.parentElement.classList.contains('hide')){
                    image.parentElement.classList.remove('hide');
                }
            }
        })
   })
});

textSearchInput.addEventListener('keyup',function(event){
    let searchString = event.target.value;
    //console.log(searchString);
    console.log(searchString);
    images.forEach(function(image){
        let captionElement = image.parentElement;
        //console.log(image.parentElement);
        let caption = captionElement.textContent.trim();
        // console.log(caption);
        image.parentElement.classList.add('hide');
        if(caption.indexOf(searchString) !== -1){
            console.log(caption.indexOf(searchString));
            //show current image
            //console.log(image);
            if(image.parentElement.classList.contains('hide')){
                image.parentElement.classList.remove('hide');
            }
        }
    });
});