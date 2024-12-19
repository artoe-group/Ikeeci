document.getElementById("customize-form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    const imageFile = document.getElementById("upload-image").files[0];
    const prompt = document.getElementById("prompt").value;
    const size = document.getElementById("size").value;
  
    if (imageFile) {
      formData.append("image", imageFile);
    }
    if (prompt) {
      formData.append("prompt", prompt);
    }
    formData.append("size", size);
  
    try {
      // Send data to your backend API for processing with OpenAI
      const response = await fetch("/process-image", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      // Show the result overlay
      document.getElementById("result-image").src = data.generated_image_url;
      document.getElementById("generated-name").textContent = data.generated_name;
      document.getElementById("result-overlay").style.visibility = "visible";
    } catch (error) {
      console.error("Error:", error);
    }
  });
  
  // Close the result overlay when the user clicks "Add To Bag"
  document.getElementById("add-to-bag").addEventListener("click", () => {
    document.getElementById("result-overlay").style.visibility = "hidden";
  });
  