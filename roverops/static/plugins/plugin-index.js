import RobotOverviewPlugin from './RobotOverviewPlugin.js';
import SLAMPlugin from './SLAMPlugin.js';
import NavigationPlugin from './NavigationPlugin.js';
import TeleopPlugin from './TeleopPlugin.js';

export const plugins = [
    new RobotOverviewPlugin(),
    new SLAMPlugin(),
    new NavigationPlugin(),
    new TeleopPlugin()
];