Handlebars.registerHelper('displayIngredient', function() {
  if (this != "") {
    //debugger
     var result = '<li name="ingredients">' + this.text + '</li>';
    return new Handlebars.SafeString(result);
  }
})

function init() {
  let ingredientsValues = [];
  var ingr = document.getElementsByName("ingredients");
  for(i=0;i<ingr.length;i++){
  if(ingr[i].value != "") {
  ingredientsValues.push(ingr[i].value)
  }
  }
  //put any page initialization/handlebars initialization here
  // let recipe = {
  //     description: 'yummy chicken noodle soup',
  //     ingredients: [
  //       {quantity: "1 cup", name: 'chicken'},
  //       {quantity: "3 nanoliters", name: 'stock'},
  //       {quantity: "12", name: 'noodles'}
  //     ]
  //   }
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn();
  document.getElementsByTagName("main")[0].innerHTML += html;


    // Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
    // function renderMain() {
    //   let template = document.getElementById("recipe-template").innerHTML;
    //   let templateFunction = Handlebars.compile(template);
    //   let html = templateFunction({});
    //   }





}




document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


// <script id="my-template" type="text/x-handlebars-template">
//   <div id="recipe">
//     <p>{{description}}</p>
//     <ul>
//       {{#each ingredients}}
//       <li>{{name}}</li>
//       {{/each}}
//     </ul>
//   </div>
// </script>
