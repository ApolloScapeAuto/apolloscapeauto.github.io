# ECCV 2018: Vision-based Navigation for Autonomous Driving

[People](ECCV%202018%20Vision-based%20Navigation%20for%20Autonomous%20D%2090714aa024c741fc82df136319de7e5a/People%20a16b3860a47e42dc93772627dccfda07.md)

[Challenge](ECCV%202018%20Vision-based%20Navigation%20for%20Autonomous%20D%2090714aa024c741fc82df136319de7e5a/Challenge%2097323c84d46042a6ae35d43a66909471.md)

[Programs](ECCV%202018%20Vision-based%20Navigation%20for%20Autonomous%20D%2090714aa024c741fc82df136319de7e5a/Programs%204f4765bf9122477ab8631cda1a4a7c39.md)

[Papers](ECCV%202018%20Vision-based%20Navigation%20for%20Autonomous%20D%2090714aa024c741fc82df136319de7e5a/Papers%203aba8f4135444a95826ef44fa48d6380.md)

# **Abstract**

Autonomous driving has attracted tremendous attention, especially in the past few years. Many technologies are required but robust 3D perception is an essential prerequisite for interacting with the environment. Currently, the most standard approaches are based on LIDAR for detecting and recognizing objects, for discovering drivable road, and related tasks. But 3D perception from visual information, such as images or videos, is also important for reducing cost. Moreover, it raises interesting challenges which are of particular interest to the computer vision community. The prerequisite for building a successful 3D vision system is a large amount of training and testing data with annotations of the 3D ground truth, including depth, 3D object shapes, and semantic properties. But these quantities are typically very difficult to annotate, which hinders the development of computer vision algorithms to overcome these challenges.

# **Technical Information**

A successful self-driving vehicle must include three essential components. Firstly, a 3D semantic HD map at the back-end which precisely records the environment. Secondly, an on-the-fly self-localization system which puts the vehicles accurately inside the 3D HD map so that it can plot a path to every target location inside the map. Thirdly, a 3D perceptual system which detects other moving objects, and obstacles on the road, in order to avoid collisions. The prevailing approaches for solving those tasks from self-driving companies are mostly dependent on LIDAR and vision-based approaches, which potentially very low-cost, are still under research. This motivates us to propose this workshop to gather top researchers and engineers in this field targeting at solving the underlying computer vision challenges.

With support from the [Baidu Apollo](http://apollo.auto/) project, we have built and will release a realistic, large-scale and high-quality dataset for the computer vision community. In particular, this dataset targets automatically generating 3D semantic HD map, vision-based self-localization and 3D object perception. In order to collect such datasets, we spent a tremendous amount of time and effort to capture and annotate images and videos from different cities. We hope this workshop will exploit this new dataset to help advance the relative computer vision algorithms.

In the following sections, we will first elaborate several novel properties of our dataset, including the sensor setup and the labeled ground truth. Then, we will describe the details of the three challenges which correspond to the three critical components, i.e. building a 3D semantic map, self-localization. and 3D perception. We hope that this will lead to computer vision algorithms which are good enough for real self-driving car applications.

# **Challenge Track**

For all the [challenges](http://apolloscape.auto/ECCV/challenge.html), in addition to testing the accuracy (which we will use to rank the algorithms) we also require the participants to specify the speed of the algorithm, the platform they use, and implementation details. We will encourage algorithms which run in real-time, i.e. 30 fps, and will highlight them in the leader-board, since speed is a crucial property for practical applications.