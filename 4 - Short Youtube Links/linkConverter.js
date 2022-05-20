// Youtube link shortening done with string methods
//https://www.youtube.com/watch?v=b7vfp5G4brE => long-link https://youtu.be/b7vfp5G4brE => short-link

let linkConvertor = function(links) {return links.slice(0,links.search("www")-1) + links.slice(links.search("www")+4, links.search("youtube")+ 5)+".be/" + links.slice(links.search("=")+1)}


const links = prompt("Enter the youtube link you want to shorten : ")
console.log(linkConvertor(links));