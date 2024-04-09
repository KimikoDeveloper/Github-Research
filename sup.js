document.addEventListener("DOMContentLoaded", function() {
    // Dummy support list data
    const supportListData = [
        "1. Access to healthcare services",
        "2. Education on contraception",
        "3. Emotional support groups",
        "4. Parenting classes",
        "5. Financial assistance programs"
    ];

    const supportList = document.getElementById("support-list");

    // Populate support list
    supportListData.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        supportList.appendChild(listItem);
    });
});
