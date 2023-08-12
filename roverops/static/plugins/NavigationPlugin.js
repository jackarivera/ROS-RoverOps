export default class NavigationPlugin {
    load() {
      // Logic to initialize the plugin
      console.log('Navigation Plugin Loaded');
    }
    getName() {
      return "Navigation";
    }
    getIcon() {
      return "compass outline icon";
    }
    getHref() {
      return "#navigation";
    }
    getID() {
      return "navigation-plugin"
    }
    getSidebarElement() {
        return true;
    }
}