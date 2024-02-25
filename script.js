//JSON structure with doctor information and image URLs
const doctorArray = [
  {
    name: "Dr. Janny Smithi",
    role: "Pediatrician",
    image:
      "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY=",
  },
  {
    name: "Dr. John Doe",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Alex Johnson",
    role: "Orthopedic Surgeon",
    image:
      "https://media.istockphoto.com/id/1387249729/photo/portrait-of-female-doctor-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=UqkJVtoFxa8O0CjKPFzi_tsmvNfZNr1lSEnueUWRZIA=",
  },
  {
    name: "Dr. Jack Doe",
    role: "Orthodontist",
    image:
      "https://media.istockphoto.com/id/1049237020/photo/serious-attractive-young-male-doctor-with-stethoscope.webp?s=170667a&w=0&k=20&c=dOimtB8CboXJN8KxNSCNmLg1x6wHCq-zSXBAQdu7Rzc=",
  },
  {
    name: "Dr. Jack Doe",
    role: "Orthodontist",
    image:
      "https://media.istockphoto.com/id/1554765244/photo/portrait-of-cheerful-smiling-man-doctor-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=zL2DTjO-MMUSaExZkkSzw_rUcmwo7Jp9Fo5Ivi9-6gk=",
  },
  {
    name: "Dr. Janny Smithi",
    role: "Pediatrician",
    image:
      "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY=",
  },
  {
    name: "Dr. John Doe",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Dr. Alex Johnson",
    role: "Orthopedic Surgeon",
    image:
      "https://media.istockphoto.com/id/1387249729/photo/portrait-of-female-doctor-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=UqkJVtoFxa8O0CjKPFzi_tsmvNfZNr1lSEnueUWRZIA=",
  },
  {
    name: "Dr. Janny Smithi",
    role: "Pediatrician",
    image:
      "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY=",
  },
  {
    name: "Dr. John Doe",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Alex Johnson",
    role: "Orthopedic Surgeon",
    image:
      "https://media.istockphoto.com/id/1387249729/photo/portrait-of-female-doctor-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=UqkJVtoFxa8O0CjKPFzi_tsmvNfZNr1lSEnueUWRZIA=",
  },
  {
    name: "Dr. Jack Doe",
    role: "Orthodontist",
    image:
      "https://media.istockphoto.com/id/1049237020/photo/serious-attractive-young-male-doctor-with-stethoscope.webp?s=170667a&w=0&k=20&c=dOimtB8CboXJN8KxNSCNmLg1x6wHCq-zSXBAQdu7Rzc=",
  },
  {
    name: "Dr. Jack Doe",
    role: "Orthodontist",
    image:
      "https://media.istockphoto.com/id/1554765244/photo/portrait-of-cheerful-smiling-man-doctor-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=zL2DTjO-MMUSaExZkkSzw_rUcmwo7Jp9Fo5Ivi9-6gk=",
  },
  {
    name: "Dr. Janny Smithi",
    role: "Pediatrician",
    image:
      "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY=",
  },
  {
    name: "Dr. John Doe",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Dr. Alex Johnson",
    role: "Orthopedic Surgeon",
    image:
      "https://media.istockphoto.com/id/1387249729/photo/portrait-of-female-doctor-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=UqkJVtoFxa8O0CjKPFzi_tsmvNfZNr1lSEnueUWRZIA=",
  },
  {
    name: "Dr. Janny Smithi",
    role: "Pediatrician",
    image:
      "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY=",
  },
  {
    name: "Dr. John Doe",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Alex Johnson",
    role: "Orthopedic Surgeon",
    image:
      "https://media.istockphoto.com/id/1387249729/photo/portrait-of-female-doctor-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=UqkJVtoFxa8O0CjKPFzi_tsmvNfZNr1lSEnueUWRZIA=",
  },
  {
    name: "Dr. Jack Doe",
    role: "Orthodontist",
    image:
      "https://media.istockphoto.com/id/1049237020/photo/serious-attractive-young-male-doctor-with-stethoscope.webp?s=170667a&w=0&k=20&c=dOimtB8CboXJN8KxNSCNmLg1x6wHCq-zSXBAQdu7Rzc=",
  },
  {
    name: "Dr. Jack Doe",
    role: "Orthodontist",
    image:
      "https://media.istockphoto.com/id/1554765244/photo/portrait-of-cheerful-smiling-man-doctor-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=zL2DTjO-MMUSaExZkkSzw_rUcmwo7Jp9Fo5Ivi9-6gk=",
  },
  {
    name: "Dr. Janny Smithi",
    role: "Pediatrician",
    image:
      "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY=",
  },
  {
    name: "Dr. John Doe",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Dr. Alex Johnson",
    role: "Orthopedic Surgeon",
    image:
      "https://media.istockphoto.com/id/1387249729/photo/portrait-of-female-doctor-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=UqkJVtoFxa8O0CjKPFzi_tsmvNfZNr1lSEnueUWRZIA=",
  },
];

// Function to load doctor information and images dynamically
function loadDoctors() {
  const container = document.getElementById("doctorContainer");

  doctorArray.forEach((doctor) => {
    const doctorCard = document.createElement("div");
    doctorCard.className = "doctor-card";

    const imgElement = document.createElement("img");
    imgElement.src = doctor.image;

    const nameElement = document.createElement("h2");
    nameElement.textContent = doctor.name;

    const roleElement = document.createElement("p");
    roleElement.textContent = doctor.role;

    doctorCard.appendChild(imgElement);
    doctorCard.appendChild(nameElement);
    doctorCard.appendChild(roleElement);

    container.appendChild(doctorCard);
  });
}

// Measure the time it takes to load doctor information and images
const startTime = performance.now();
window.onload = function () {
  loadDoctors();
  const endTime = performance.now();
  console.log(
    `Time taken to load doctor information and images: ${
      endTime - startTime
    } milliseconds`
  );
};
