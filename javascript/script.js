/* Skill Text Changer */
document.addEventListener('DOMContentLoaded', () => {
  var arr = ["Software Developer", "Web Developer", "Content creator", "Salesforce Developer", "Story Letter", "Tutor"];
  var colors = ["red", "#1564A3", "black", "#00b7ff", "orange", "#DD3333"];


  var i = 0;
  function slider() {

      let skill = document.getElementById("skill");
      let imgSlider = document.querySelector("#img-slider");
      let spanSkills = document.querySelector("#skill");

      let h2Text = skill.innerText = arr[i];
      skill.style.fontSize = "2.5vw";
      skill.style.fontFamily = "verdana";
      skill.style.fontWeight = "bold";
      skill.style.color = colors[i];

      //imgSlider.style.border = "10px groove " + colors[i]

      // console.log(img1Src);
      i++;
      if(i === arr.length) 
      i = 0;
  }

  setInterval(slider, 3000);   // runs each time of each of the 2s

});



document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.navbar');

  if(hamburger) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
      hamburger.classList.toggle('open');
      console.log('hamburger : open');
    });
  }

  const handleResize = () => {
    if(window.innerWidth > 768) {
      navbar.classList.remove('active');
      hamburger.classList.remove('open');
    }
  }

  // Add resize event listener
  window.addEventListener('resize', handleResize);
});




/* To print the resume element */
// document.addEventListener('DOMContentLoaded', () => {
//   let resume = document.getElementById('resume');
//   let printBtn = document.getElementById('printBtn');

//   printBtn.addEventListener('click', () => {
//     document.body.innerHTML= resume.innerHTML;
//     window.print();
//     console.log("docToPrint: ", docToPrint);
//   })
// })



document.addEventListener('DOMContentLoaded', () => {
  let resume = document.getElementById('resume');
  let printBtn = document.getElementById('printBtn');

  printBtn.addEventListener('click', () => {
    // save the current document body content
    const originalContent = document.body.innerHTML;

    // Replace the body content with the resume content
    document.body.innerHTML = resume.innerHTML;

    // Trigger the print dialog
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContent;

    // Reattach the script to ensure the functionality is restored
    location.reload(); // Reload the page to reinitialize JavaScript
    
  });
});
