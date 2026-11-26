const team = {
    name: "Frontend",
    members: ["Mehvash", "Ali"],
  
    printName() {
      console.log(this.name);
    },
  
    printMembersRegular() {
      this.members.forEach(function (member) {
        console.log(member, "is in", this.name);
      });
    },
  
    printMembersArrow() {
      this.members.forEach((member) => {
        console.log(member, "is in", this.name);
      });
    },
  };
  
  team.printName();            // 1. Frontend
  const fn = team.printName;
  fn();                        // 2. Frontened
  team.printMembersRegular();  // 3. 
  team.printMembersArrow();    // 4. ?