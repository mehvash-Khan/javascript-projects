async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      console.log("Number of users:", users.length);
      console.log(users[0]);
    } catch (error) {
      console.log("Failed:", error.message);
    }
  }
  
  getUsers();