export default class SLAMPlugin {
    load() {
      // Logic to initialize the plugin
      console.log('SLAM Plugin Loaded');
    }
    getName() {
      return "SLAM";
    }
    getIcon() {
      return "map layout icon";
    }
    getHref() {
      return "#slam";
    }
    getID() {
      return "slam-plugin"
    }
    getSidebarElement() {
        return true;
    }
}