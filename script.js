// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // Simplified selector

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    // Small timeout to allow the display:flex to apply before adding class for animation
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to make YES btn grow
let yesScale = 1;

// Initial Setup for Yes Button
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2; // Increase scale factor

    // CRITICAL RESPONSIVE FIX:
    // If the Yes button isn't fixed yet, move it to the body.
    // This allows it to scale freely across the entire viewport 
    // without getting trapped inside the letter card's boundaries.
    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.zIndex = "100"; // Ensure it sits on top of everything
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        
        // Move the button to body so it escapes the transform context of the card
        document.body.appendChild(yesBtn);
    }
    
    // Apply the transform
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    const windowElement = document.querySelector(".letter-window");
    windowElement.classList.add("final");

    // Hide buttons container (handles No button)
    buttons.style.display = "none";
    
    // Explicitly hide Yes button (since we might have moved it to Body)
    yesBtn.style.display = "none";

    // Show the final message
    finalText.style.display = "block";
});