# Challenge

# **Introduction**

This dataset is provided by Baidu Inc. We use an acquisition car to collect traffic data, including camera-based images and LiDAR-based point clouds, and trajectories of traffic-agents in the range of LiDAR. Our acquisition car runs in urban areas in rush hours. We provide 3D point cloud, and trajectory files in the dataset. Our new dataset with about 150min sequential data is a large-scale dataset for urban streets, which focuses on heterogeneous traffic-agents for 3D detection, tracking, trajectory prediction, motion planning, and simulation tasks.

# **Winners**

3D Lidar Object Detection task

● Rank 1: X-team, Youtu, Tencent Method: STD: Sparse-to-Dense 3D Object Detector for Point Cloud

● Rank 2: Ankobot Singapore Method: pointpillars_final

● Rank 3: IAI-BIT Method: pp_base

Trajectory Prediction task

● Rank 1: MeituanAD Method: StarNet: Pedestrian Trajectory Prediction using Deep Neural Network in Star Topology

● Rank 2: MeituanAD Method: basic_multitype

● Rank 3: MeituanAD Method: gogo

# **Datasets**

This dataset is provided by Baidu Inc. We use an acquisition car to collect traffic data, including camera-based images and LiDAR-based point clouds, and trajectories of traffic-agents in the range of LiDAR. Our acquisition car runs in urban areas in rush hours. We provide camera images, 3D point cloud, and trajectory files in the dataset. Our new dataset with 150min sequential data is a large-scale dataset for urban streets, which focuses on trajectories of heterogeneous traffic-agents for prediction, planning, simulation, and navigation tasks.

# **Tasks**

**Task 1: 3D Lidar object detection**

![Challenge%2098ea9b58e1524211befb6864e2d7fabf/task_1_580e2c0.png](Challenge%2098ea9b58e1524211befb6864e2d7fabf/task_1_580e2c0.png)

This task is to detect multi-class traffic-agents on urban streets, including vehicles, bicycles, and pedestrians. The dataset consists of 53min well-annotated training data and 50min testing data.

[Participate](https://web.archive.org/web/20210805154738/http://apolloscape.auto/tracking.html)

**Task 2: 3D Lidar object tracking**

![Challenge%2098ea9b58e1524211befb6864e2d7fabf/task_2_877686e.png](Challenge%2098ea9b58e1524211befb6864e2d7fabf/task_2_877686e.png)

This task is to detect and track the traffic-agents on the road, more specifically, the following classes of objects are to be tracked with bounding box: vehicles, bicycles, and pedestrians.

[Participate](https://web.archive.org/web/20210805154738/http://apolloscape.auto/tracking.html)

**Task 3: Trajectory prediction**

![Challenge%2098ea9b58e1524211befb6864e2d7fabf/task_3_1709ee4.png](Challenge%2098ea9b58e1524211befb6864e2d7fabf/task_3_1709ee4.png)

This task is to observe 3-seconds movement of traffic-agents and predict their following 3-second trajectories. There are three kinds of traffic-agents to be considered: vehicles, bicycles, and pedestrians.

[Participate](https://web.archive.org/web/20210805154738/http://apolloscape.auto/trajectory.html)