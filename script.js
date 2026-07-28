// JavaScript
// Add your code here

document.addEventListener('DOMContentLoaded', () => {
  const opportunities = [
    {
      id: 1,
      title: "Card Making Event",
      organization: "Sending Smiles",
      date: "August 3rd, 2026",
      time: "5:00–7:00 PM",
      link: "opportunity.html"
    },
    {
      id: 2,
      title: "Park Cleanup",
      organization: "Green Earth",
      date: "August 10th, 2026",
      time: "9:00–11:00 AM",
      link: "opportunity.html"
    },
    {
      id: 3,
      title: "Food Drive",
      organization: "Community Helpers",
      date: "August 15th, 2026",
      time: "10:00 AM–1:00 PM",
      link: "opportunity.html"
    }
  ];

  const track = document.querySelector(".track");
  const subtitle = document.querySelector("#subtitle");

  if(opportunities.length > 0){
    opportunities.forEach((opportunity) => {
    const card = document.createElement("div");
    card.className = "card";
    track.appendChild(card);

    const title = document.createElement("p");
    title.className = "card-title";
    title.textContent = opportunity.title;
    card.appendChild(title);

    const organization = document.createElement("p");
    organization.className = "card-details";
    organization.textContent = "Organization: " + opportunity.organization;
    card.appendChild(organization);

    const date = document.createElement("p");
    date.className = "card-details";
    date.textContent = "Date: " + opportunity.date;
    card.appendChild(date);

    const time = document.createElement("p");
    time.className = "card-details";
    time.textContent = "Time: " + opportunity.time;
    card.appendChild(time);

    const link = document.createElement("a");
    link.className = "more-button";
    link.href = "opportunity.html?id=" + opportunity.id;
    link.textContent = "LEARN MORE";
    card.appendChild(link);
    });
  }

  else{
    subtitle.style.display = "none";
    const message = document.createElement("p");
    message.className = "empty-text";
    message.textContent = "Sorry, no opportunities are available right now!";
    track.appendChild(message);
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const selectedOpportunity = opportunities.find((opportunity) => opportunity.id == id);

  if(selectedOpportunity){

    document.querySelector(".details-title").textContent = selectedOpportunity.title;

    const details = document.querySelectorAll(".details-info");

    details[0].textContent = "Organization: " + selectedOpportunity.organization;
    details[1].textContent = "Date: " + selectedOpportunity.date;
    details[2].textContent = "Time: " + selectedOpportunity.time;

  }
});