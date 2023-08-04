// static/js/main.js
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = $('#sidebar');
    const toggleButton = $('#toggle-button');
    const sidebarMenuIcon = toggleButton.find('.icon'); // Correctly select the icon

    // Style the sidebar to have correct padding and width
    sidebar.css('width', toggleButton.outerWidth() + "px");
    sidebar.css('paddingTop', $("#main-menu").outerHeight() + "px");

    // Initialize Semantic UI sidebar
    sidebar.sidebar({
        dimPage: false, // Dont dim the content behind the sidebar
        transition: 'push', // You can change this to a different transition, e.g. 'push', 'overlay', etc.
        closable: false, // Allow the sidebar to be closed by clicking on the main content
        // Add an event listener for when the sidebar is toggled
        onChange: function() {
            sidebarMenuIcon.toggleClass('close');
        }
    });

    // Event listener for sidebar button
    toggleButton.on("click", function() {
        sidebar.sidebar('toggle');
    });
});
