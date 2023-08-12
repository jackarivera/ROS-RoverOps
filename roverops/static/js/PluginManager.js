import { plugins as pluginList } from '../plugins/plugin-index.js';

class PluginManager {
  constructor() {
    this.plugins = new Map();
  }

  register(plugin) {
    this.plugins.set(plugin.getName(), plugin);
    this.loadPlugin(plugin);
  }

  unregister(pluginName) {
    const plugin = this.plugins.get(pluginName);
    if (plugin) {
      // Optionally, you can have an unload method in the plugin to clean up
      // plugin.unload();
      this.plugins.delete(pluginName);
      const sidebar = document.getElementById('sidebar-plugin-menu');
      const item = document.querySelector(`a[href="${plugin.getHref()}"]`);
      sidebar.removeChild(item);
    }
  }

  loadPlugin(plugin) {
    const sidebar = document.getElementById('sidebar-plugin-menu');
    const item = document.createElement('a');
    item.className = 'item';
    item.id = plugin.getID();
    item.href = plugin.getHref();
    item.innerHTML = `<i class="${plugin.getIcon()}"></i>${plugin.getName()}`;
    sidebar.appendChild(item);
    plugin.load();
  }

  loadAll() {
    // Automatically registering certain plugins
    pluginList.forEach((plugin) => {
      this.register(plugin);
    });
  }

  // Get a plugin by their id
  getPlugin(pluginName) {
    return this.plugins.get(pluginName);
  }
}

export default PluginManager;
