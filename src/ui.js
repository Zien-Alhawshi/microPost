class UI {
    constructor() {
      this.post = document.querySelector('#posts');
      this.titleInput = document.querySelector('#title');
      this.bodyInput = document.querySelector('#body');
      this.idInput = document.querySelector('#id');
      this.postSubmit = document.querySelector('.post-submit');
      this.forState = 'add';
      this.clearAll = document.querySelector("#clearAll")
    }
  
    showPosts(posts) {
      if(posts.length>0){
        clearAll.style.display = "block";
      }
      else{
        clearAll.style.display = "none";
      }
      let output = '';
  
      posts.forEach((post) => {
        output += `
          <div class="card mt-3 mb-3 ">
            <div class="card-body col-md-6">
            <div class="ssk-group">
                <a href="" class="ssk ssk-facebook"></a>
                <a href="" class="ssk ssk-twitter"></a>
                <a href="" class="ssk ssk-google-plus"></a>
                <a href="" class="ssk ssk-pinterest"></a>
                <a href="" class="ssk ssk-tumblr"></a>
            </div>
              <h4 class="card-title">${post.title}</h4>
              <h6 class="">${post.date_}</h6>

              <p class="card-text">${post.body}</p>

              <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
              </a>
  
              <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
            </div>
          
          </div>
         
        `;
      });
  
      this.post.innerHTML = output;
    }
    showAlert(message, className){
        this.clearAllert();
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".postsContainer");
        const posts = document.querySelector("#posts");
        container.insertBefore(div, posts);
        setTimeout(() => {
            this.clearAllert()
        }, 3000);
    }
    clearAllert(){
        const currentAllert = document.querySelector(".alert");
        if(currentAllert){
            currentAllert.remove();
        }

    }
    clearFields(){
        this.titleInput.value = "";
        this.bodyInput.value = ""
    }
    fillForm(data){
        this.titleInput.value = data.title;
        this.bodyInput.value= data.body;
        this.idInput.value = data.id;
        this.changeFormState("edit")
    }
    changeFormState(type){
        if(type === "edit"){
            this.postSubmit.textContent = "Update Post";
            this.postSubmit.className = "post-submit btn btn-warning btn-block";
            //create cance button
            const button = document.createElement("button");
            button.className = "post-cancel btn bg-light btn-block";
            button.appendChild(document.createTextNode("Cancel Edit"));
            const cardForm = document.querySelector(".card-form");
            const formEnd = document.querySelector(".form-end");
            cardForm.insertBefore(button,formEnd);

        }
        else{
            this.postSubmit.textContent = "Post It";
            this.postSubmit.className = " btn btn-primary btn-block";
            if(document.querySelector(".post-cancel")){
                document.querySelector(".post-cancel").remove();
            }
            this.clearIdInput();
            this.clearFields();


        }
    }
    clearIdInput(){
        this.idInput.value = " "
    }
  
  }
  
  export const ui = new UI();