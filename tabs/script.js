const tabsData = [
  {
    id: "tab1",
    title: "tab1",
    content: "This is content for Tab1",
  },
  {
    id: "tab2",
    title: "tab2",
    content: "This is content for Tab2",
  },
  {
    id: "tab3",
    title: "tab3",
    content: "This is content for Tab3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabsData[0].id;
  function render() {
    const tabContainer = document.getElementById("tabContainer");
    const tabContentContainer = document.getElementById("tabContentContainer");

    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h4>${tab.title}</h4><p>${tab.content}</p>`;
      tabContentContainer.appendChild(tabContent);
    });

    tabContainer.addEventListener("click", function (event) {
      console.log(event.target, event);
      if (event.target.matches(".tabLinks")) {
        const tabId = event.target.getAttribute("data-tab");
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabs = document.querySelectorAll(".tabLinks");
    const tabContent = document.querySelectorAll(".tabContent");
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContent.forEach((tab) => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`button[data-tab=${tabId}]`).classList.add("active");
  }

  render();
  openTab(activeTab);
});
