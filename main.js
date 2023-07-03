fetch('/data.json').then((response) => {
  if(response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch data')
  }
}).then((data) => {
  
const records= document.querySelectorAll(".record")
records.forEach((record,index) => {
    const recordvalue=record.querySelector(".record-value")
    recordvalue.innerText=data[index].category

    const img=record.querySelector("img")
    img.setAttribute("src",data[index].icon)

    const total=record.querySelector(".total-value")
    total.innerText=data[index].score
  })
})