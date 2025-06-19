let users = []

const validateUser = ()=>{
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const found  = users.find(
    (value)=>value.email===email && value.password===password
  );
  if(found){
    showHome();
  }
  else{
    document.getElementById("errortxt").innerHTML = "Access denied";
  }
};

const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <p id='errortxt'></p>
    <input type='email' name='email' id='email' placeholder='Enter Your Email'/>
    <input type='password' name='password' id='password' placeholder='Enter Your Password'/>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    </div>
    `
    let userListStr = `<div>
    <h3>List of users</h3>
    <ul>`;

  users.forEach((user) => {
    userListStr += `<li>
      Name: ${user.name} 
      Password: ${user.password}
    </li>`;
  });

  userListStr += `</ul></div>`;
  root.innerHTML = str + userListStr;
};

const registerForm = () => {
     const str = `<div>
    <h3>Registration Form</h3>
    <input type='name' name='name' id='name' placeholder='name'/>
    <input type='email' name='email' id='email' placeholder='email'/>
    <input type='password' name='password' id='password' placeholder='password'/>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `
    root.innerHTML = str + "</div>"
};

const showHome = () => {
     const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>"
};

const saveUser = ()=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    users.push({
      name,
      email,
      password,
    });
    loginForm();
};