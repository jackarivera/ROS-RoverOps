
# RoverOps

RoverOps is aimed to bridge to gap in web control dashboard's available for ROS2 that are open source and feature rich. For now, I am aiming mainly at targeting mobile robotics that are used indoors. Phase 2 of implementation will include outdoor mobile robots.

RoverOps will implement a feature rich dashboard that is hosted locally on the robot's control computer or a dedicated computer to offload the processing requirements. It creates a visually stunning web dashboard that is fully customizable. 

*Please note while I plan to complete this project in a timely manner... I am a full time student with a busy schedule. I welcome all contributions from the community, simply fork and create pull requests. I will review them as I have time.*



## Planned Features

- **Visualization** - Support for visualization of a wide variety of ROS topics including maps, poses, LaserScans, URDF, Joint Positions, etc.
- **Lightweight** - Aimed to be very lightweight to not interfere with the control computer.
- **Visually Appealing** - If you're like me, you despise ancient looking UIs. I aim to make the interface modern, beautiful, and easily customizable.
- **Easy Integration** - Either through an install script or simple clone/build you will be able to have the dashboard set up in minutes.
- **Templates** - Every user will have the ability to export and import templates that the community builds to further reduce setup time for great looking dashboards.
- **Teleop Control / Other Publishers** - Easily publish to ROS topics through an easy to use interface. Teleop control with a simple joystick that can be overlayed on top of any other plugin.
- **Plugins and Modularity** - Each feature will be implemented as a "Plugin". So for visuallizing maps, you can just use the map plugin. This allows easy expandability for the community and custom, plugin support.


## Usage

Used Libraries:
- fastapi
- uvicorn

Run uvicorn server manually
```
uvicorn roverops_server:app --host 0.0.0.0
```

Then connect in your browser with localhost:8000


## Planned Framework

![RoverOps Framework](https://github.com/jackarivera/RoverOps/blob/main/images/ro_framework.png?raw=true)
