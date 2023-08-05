export default class RobotOverviewPlugin {
    load() {
      // Logic to initialize the plugin
      console.log('Robot Overview Plugin Loaded');
    }
    getName() {
      return "Robot Overview";
    }
    getIcon() {
      return "home icon";
    }
    getHref() {
      return "#overview";
    }
    getSidebarElement() {
        return true;
    }
}