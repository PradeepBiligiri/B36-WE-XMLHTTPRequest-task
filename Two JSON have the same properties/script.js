// How to compare two JSON have the same properties without order?

var obj1 = { name: "Abhi", class: "Pradeep" };
var obj2 = { class: "Pradeep", name: "Abhi" };

var flag = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag = false;
}
console.log("Both obj1 and obj2 are equal: " + flag);
