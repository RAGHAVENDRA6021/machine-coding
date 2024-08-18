const accordionData = [
  {
    title: "Accordion 1",
    id: 1,
    content: "This is accordion 1",
  },
  {
    title: "Accordion 2",
    id: 2,
    content: "This is accordion 2",
  },
  {
    title: "Accordion 3",
    id: 3,
    content: "This is accordion 3",
  },
];


document.addEventListener('DOMContentLoaded',function(){
    const accordionSection = document.getElementById('accordionSection')
    accordionData.forEach((accordion)=>{
        const divElement = document.createElement('div');
        divElement.className= 'accordion'
        const accordionHeading = document.createElement('div');
        accordionHeading.innerText = accordion.title;
        accordionHeading.className = 'heading'
        console.log(accordion.title)
        const accordionContent = document.createElement('div');
        accordionContent.innerText = accordion.content;
        divElement.append(accordionHeading,accordionContent);
        accordionSection.appendChild(divElement)
    })
})