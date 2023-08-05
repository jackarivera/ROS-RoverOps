// static/js/main.js

import PluginManager from './PluginManager.js';

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