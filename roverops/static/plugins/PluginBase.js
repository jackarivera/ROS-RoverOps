class TabbedPluginBase {
    constructor(sidebar_label, sidebar_icon, sidebar_href, sidebar_id) {
        this.name = 'Tabbed Plugin Base';
        this.description = 'This serves as a base class for tabbed plugins.';
        this.version = '0.0.0';
        this.sidebarItem = generateSidebarItem(this.name, this.getIcon(), this.getHref(), this.getID());
        this.sidebarLabel = sidebar_label;
        this.sidebarIcon = sidebar_icon;
        this.sidebarHref = sidebar_href;
        this.sidebarID = sidebar_id;
    }
    load() {
        // Logic to initialize the plugin
        console.log('[PluginManager] Loaded ' + this.name);
    }
    getName() {
        return this.name;
    }
    getIcon() {
        return this.sidebarIcon + " icon";
    }
    getHref() {
        return this.sidebarHref;
    }
    getID() {
        return this.sidebarID;
    }
    generateSidebarItem(name, icon, href, id) {
        const item = document.createElement('a');
        item.className = 'item';
        item.id = plugin.getID();
        item.href = plugin.getHref();
        item.innerHTML = `<i class="${this.getIcon()}"></i>${this.getName()}`;
        return
    }
    getSidebarElement() {
        return true;
    }   

}

