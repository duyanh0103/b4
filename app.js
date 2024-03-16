// setItem: Lưu một giá trị vào Local Storage
localStorage.setItem("username", "admin");
localStorage.setItem("password", "pwd123");

// getItem
var name = localStorage.getItem("username");
console.log(name);

// // removeItem
// localStorage.removeItem("username");
// console.log(name);

// // clearItem
// localStorage.clear();

// Lay số lượng phần tu trong Local Storage 
var len = localStorage. length ;
// Sử dụng phương thức key(index) để lấy khóa tương ứng 
for (var i = 0; i < len; i++) { 
    var key = localStorage.key(i); 
    console.log("Key: " + key + ", Value: " + localStorage.getItem(key)); 
}