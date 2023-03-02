//validation form input before submitting data

function  validateForm(){
     var name= document.getElementById("name").value;
     var email = document.getElementById("email").value;


     if(!name){
        alert("Name is required");
        return false;
     }

     if(email = ""){
        alert("Age is required");
        return false;
     }

     return true;
    


}

//function to show data

function showData(){
     var peopleList;
     if(localStorage.getItem("peopleList") == null){

     peopleList = [];

     }
     else{
         peopleList = JSON.parse(localStorage.getItem("peopleList"));
     }

     var abc = "";
     peopleList.forEach(function (element, index){

       abc += "<tr>";
       abc += "<td>" + element.name + "</td>";
       abc += "<td>" + element.email + "</td>";

       abc =+ '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger"> Delete </button><button onclick="upadteData(' + index + ')" class="btn btn-warning m-2" >Edit </button> </td>';

            abc =+ "</tr>";
       
     

        
     });

     document.querySelector("#todotable tbody").innerHTML = abc;

   }
   //load all data when document or page loaded
     document.onload =  showData();
  

     // function to add data to local storage

     function addData(){
        
        if(validateForm() == true){
              var name = document.getElementById('name').value;
              var email = document.getElementById('email').value;

               var peopleList;
               if(localStorage.getItem('peopleList') == null){
                peopleList = [];
               } else{
                peopleList = JSON.parse(localStorage.getItem("peopleList"));
               }

               peopleList.push({
                name : name,
                email:email,
               }
               );
               localStorage.setItem("peopleList", JSON.stringify(peopleList));
               showData();

               document.getElementById("name").value = "";
               document.getElementById("email").value = "";

        }

     }

     //function to delete data from local storage

     function deleteData(index){
        var peopleList;
        if(localStorage.getItem('peopleList') == null){
         peopleList = [];
        } else{
         peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.slice(index,1);
        localStorage.setItem('peopleList',JSON.stringify(peopleList));
        showData();



     }

     //function to  update or edit data

     function upadteData(index){
      //submit button will hide and update button will show for updatation of data in local storage
      document.getElementById("Submit").style.display ="none";
      document.getElementById("Update").style.display ="block";

      var peopleList;

      if(localStorage.getItem("peoppleList") == null){
         peopleList = [];
      }
      else{
         peopleList = JSON.parse(localStorage.getItem("peopleList"));
      }

      document.getElementById("name").value = peopleList[index].name;
      document.getElementById("email").value = peopleList[index].email;

      document.querySelector("#Update").onclick = function(){
         if(validateForm() == true)
         peopleList[index].name = document.getElementById("name").value;
         // document.getElementById("name").value = peopleList[index].name;
         peopleList[index].email = document.getElementById("email").value;

         localStorage.setItem("peopleList",JSON.stringify(peopleList));
         
         showData();
        
        
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";

        //update button will hide and submit button will show for updating of data in local storage
         document.getElementById("Submit").style.display ="none";
         document.getElementById("Update").style.display ="block";

      }

     }




