import React from 'react' 

function Contact() {
    

    return (
      <main class="contactme">
      <section>
        <h1 class="styled-text"><span>C</span>ontact me</h1>
      </section>
      <form>
        <div class="input-group">
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" required/>
        </div>
        <div class="input-group">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" required/>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" required/>
        </div>
        <div class="input-group">
          <label for="number">Phone Number</label>
          <input type="text" id="number" required/>
        </div>
        <div class="input-group">
          <label for="comment">Comment</label>
          <textarea id="comment"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>        
  </main>
      );
}

export default Contact;