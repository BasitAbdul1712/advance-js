const nums = [1, 2, 3 , 4 , 5 , 6, 7 , 8];
 const part = nums.slice(2, 5); // position 2 the 5 er ag porjont porjonto dekjabe
 const removed = nums.splice(2,5, 78); // position 2 theke 5 ta value remove korbe

 console.log("removed array", removed);
 console.log("part", part);
 console.log("nums", nums); // nums e removed porer value gula dekhabe

 const together = nums.join(","); // "" er bhitpr ja dibe ta splace e bosabe
 console.log(together);
 