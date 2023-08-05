// static/js/main.js

import PluginManager from './PluginManager.js';

// Theme Settings
// Cache the theme button
const themeButton = $('#theme-toggle-button');

// Function to switch the theme
function switchTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeButton.find('.icon').removeClass('sun').addClass('moon');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeButton.find('.icon').removeClass('moon').addClass('sun');
    }
}

// Listen for a click on the theme button
themeButton.on('click', switchTheme);

document.addEventListener("DOMContentLoaded", function() {

    const sidebar = $('#sidebar');
    const toggleButton = $('#toggle-button');
    const sidebarMenuIcon = toggleButton.find('.icon');

    sidebar.css('width', toggleButton.outerWidth() + "px");


    sidebar.sidebar({
        dimPage: false,
        transition: 'push',
        closable: false,
        onChange: function() {
            sidebarMenuIcon.toggleClass('close');
        },
        context: $('#main-container'),
    });

    toggleButton.on("click", function() {
        sidebar.sidebar('toggle');
    });

    const cachedTheme = localStorage.getItem('theme');
    if (cachedTheme) {
        if (cachedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            themeButton.find('.icon').removeClass('moon').addClass('sun');
        } else {
            document.documentElement.classList.remove('dark');
            themeButton.find('.icon').removeClass('sun').addClass('moon');
        }
    }

    const pluginManager = new PluginManager();
    pluginManager.loadAll();

});

$(document).ready(function() {
    function updateContainerHeight() {
        var topMenuHeight = $("#main-menu").outerHeight();
        var bodyHeight = $("body").height();
        var containerHeight = bodyHeight - topMenuHeight; 

        $("#main-container").css('height', containerHeight + "px");
    }

    updateContainerHeight();
    $(window).resize(updateContainerHeight);
});

$(document).ready(function() {
    function updateSidebarHeight() {
        var topMenuHeight = $("#main-menu").outerHeight();
        var viewportHeight = $(window).height();
        var settingMenuHeight = $("#sidebar-setting-menu").outerHeight();
        var pluginMenuHeight = viewportHeight - topMenuHeight - settingMenuHeight;

        $("#sidebar-plugin-menu").css('height', pluginMenuHeight + "px");
    }

    updateSidebarHeight();
    $(window).resize(updateSidebarHeight);
});

