// let show = {
//     show_name : "",
//     show_url : "",
//     image_url : ""
// };
//
// let shows = [
//     {
//         show_name : "Dragon3",
//         show_url : "",
//         image_url : "./../img/dragon3.jpg"
//     },
//     {
//         show_name : "Dragon3Dragon3Dragon3Dragon3Dragon3Dragon3Dragon3Dragon3Dragon3Dragon3Dragon3",
//         show_url : "",
//         image_url : "./../img/dragon3.jpg"
//     },
//     {
//         show_name : "trolls",
//         show_url : "",
//         image_url : "./../img/trolls2.jpg"
//     }
// ];
//
// function fetchShows(){
//     for(i=0; i<5; i++){
//         show = {
//             show_name : "index - " + i,
//             show_url : "",
//             image_url : ""
//         };
//         shows.push(show);
//     }
//
//     shows.sort(function (a, b) {
//         if(a.show_name>b.show_name){
//             return 1
//         }
//         else if(a.show_name>b.show_name){
//             return -1
//         }
//         else {
//             return 0
//         }
//     });
//
//     console.log("Shows: ", shows);
//     let div = document.getElementById("shows_div");
//     for(let i=0; i<shows.length; i+=3){
//         let row_div = document.createElement("div");
//         row_div.className = " " + "row";
//         console.log("Outer: ", i)
//         for(let j=i; j<i+3 && j<shows.length; j++){
//             console.log("Inner: ", j)
//             let column_div = document.createElement("div");
//             column_div.className = " " + "column";
//
//             let box_div = document.createElement("div");
//             let image_div = document.createElement("div");
//             let label_div = document.createElement("div");
//             let a_div = document.createElement("a");
//             box_div.className = " "+ "box";
//             if(shows[j].image_url && shows[j].image_url.trim()!==""){
//                 image_div.innerHTML = `<img src=${shows[j].image_url} alt="../img/not-available.jpg"/>`;
//                 label_div.innerHTML = `<label id="box_label">${shows[j].show_name}</label>`;
//                 // a_div.title = "my title text";
//                 a_div.href = "http://example.com";
//                 box_div.appendChild(image_div);
//                 box_div.appendChild(label_div);
//                 a_div.appendChild(box_div);
//                 // a_div.innerHTML = `<a href=${shows[j].show_name}> ${box_div} ${label_div} </a>`;
//             }
//             else {
//                 image_div.innerHTML = `<img src="../img/not-available.jpg" alt="../img/not-available.jpg"/>`;
//                 label_div.innerHTML = `<label id="box_label">${shows[j].show_name}</label>`;
//                 // a_div.title = "my title text";
//                 label_div.className = " " + "label_div";
//                 a_div.href = "http://example.com";
//                 box_div.appendChild(image_div);
//                 box_div.appendChild(label_div);
//                 a_div.appendChild(box_div);
//                 // box_div.innerHTML = `<img src=${shows[j].image_url}
//                 //         alt="${shows[j].show_name}"/>`;
//                 // label_div = `<label id="box_label">${shows[j].show_name}</label>`
//                 // a_div.innerHTML = `<a href="../img/not-available.jpg"> ${box_div} ${label_div} </a>`;
//             }
//             column_div.appendChild(a_div);
//             row_div.appendChild(column_div)
//         }
//         div.appendChild(row_div);
//     }
//
// }
//
//
//
//
