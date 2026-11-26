const team = {
    name: "Frontend",
    members: ["Mehvash", "Ali"],
  
    printName() {
      console.log(this.name);
    },
  
    printMembersRegular() {
        console.log("this in printRegular", this);
      this.members.forEach(function (member) {
        console.log("this in printRegular forEach", this);
        console.log(member, "is in", this.name);
      });
    },
  
    printMembersArrow() {
        console.log("this in printRegular", this);
      this.members.forEach((member) => {
        console.log("this in printArrow forEach", this);
        console.log(member, "is in", this.name);
      });
    }
  };
  
//   team.printName();            // 1. Frontend
//   const fn = team.printName;
//   fn();                        // 2. Frontened
  team.printMembersRegular();  // 3. 
  const x = team.printMembersArrow;
  x();    // 4. ?