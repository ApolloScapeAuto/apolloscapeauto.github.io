# Challenge

[https://web.archive.org/web/20190613210607/http://wad.ai/2018/challenge.html](https://web.archive.org/web/20190613210607/http://wad.ai/2018/challenge.html)

Autonomous Driving has attracted tremendous attention in the last few years. Among the many enabling technologies for autonomous driving, environmental perception is the most relevant to the vision community. As such we host a challenge to understand the current status of computer vision algorithms in solving the environmental perception problems for autonomous driving. In this challenge, we have prepared a number of large scale datasets with fine annotation. Based on the datasets, we have define a set of realistic problems and encourage new algorithms and pipelines to be invented for autonomous driving, rather than applied on autonomous driving.

A total amount of 10000 USD cash prize will be awarded to top performers.

in each task will provide 2,500 USD

● 1st place - $1,200

● 2nd place - $800

● 3rd place - $500

Each winner must submit a paper describing their approaches after the competition is closed.

We have collected and annotated two large scale datasets.

The first is provided by [Berkeley DeepDrive (BDD)](https://web.archive.org/web/20190613210607/https://deepdrive.berkeley.edu/). The BDD database includes 100K HD 720P unqiue videos, which is currently the most diverse driving video dataset. All the videos come with GPS/IMU info for driving behavior study. Each video are tagged with weather, scene type and time of the day. The BDD team also extracts key frames from each of the video to label bounding boxes for all the road objects, lane markings, drivable areas and instance segmentation. More information can be found on [the BDD database website](https://web.archive.org/web/20190613210607/http://bdd-data.berkeley.edu/).

The second data set, [ApolloScape](https://web.archive.org/web/20190613210607/http://apolloscape.auto/scene.html) data set, is provide by Baidu. ApolloScape contain survey grade dense 3D points and registered multi-view RGB images at video rate, and every pixel and every 3D point are semantically labelled. In addition precise pose for each image is provided.

Our first task is drivable area segmentation. This task requires the system to find the road area that the vehicle is driving or it can potentially drive on.

[Participate](https://web.archive.org/web/20190613210607/http://bdd-data.berkeley.edu/)

![https://web.archive.org/web/20190613210607im_/http:/wad.ai/public/img/challenge/task2_1.png](https://web.archive.org/web/20190613210607im_/http:/wad.ai/public/img/challenge/task2_1.png)

This task is to detect the objects that are most relevant for driving policy, more specifically, the following classes of objects are to be detected with bounding box: vehicles, persons, and traffic signs/signals.

[Participate](https://web.archive.org/web/20190613210607/http://bdd-data.berkeley.edu/)

![Challenge%207faa9b9faad4490e83520785043ba6fe/task3_1.png](Challenge%207faa9b9faad4490e83520785043ba6fe/task3_1.png)

BDD dataset and ApolloScape combined have the advantage of covering diverse domains in weather, time of day, and geographic diversity. In this task the participants are given the annotation in one conditions and required to semantically segment test images captured under different conditions. Two types of adaption are to be evaluated. One is on the time/weather conditions; and the other is geographical adaption, more specially training/testing will be from California (USA) and Beijing (China).

[Participate](https://web.archive.org/web/20190613210607/http://bdd-data.berkeley.edu/)

In this task, participants are given a set of video sequences with fine per-pixel labeling, in particular instances of moving objects such as vehicles and pedestrians are also label. The goal is to evaluate the state of the art in video—based scene parsing, a task that has not been evaluated previously due to the lack of fine labeling. Some very challenging environments have been captured. The average moving instances per frame can be over 50, in comparisons, only up to 15 cars/pedestrians are labelled in the KITTI dataset.

[Participate](https://web.archive.org/web/20190613210607/https://www.kaggle.com/c/cvpr-2018-autonomous-driving)

Task 1: Drivable Area Segmentation.

Task 2: Road Object Detection.

Yang Zou

CMU-GM

54.59

Carnegie Mellon University and General Motors

We use ResNet-38 [1] which is pretrained on ImageNet as our base model. Then we firstly use labeled images in bdd100k/seg/images/train to train the model for segmentation. Therafter we use unlabeled Apollo training images (https://www.kaggle.com/c/cvpr-2018-autonomous-driving/data) mixed with bdd100k/seg/images/train to train our model in a semi-supervised way. We use a class-balanced self-training with spatial priors as our semi-supervised learning method to improve our model. More details will be posted on our poster in WAD.

Task 3: Domain Adaption of Semantic Segmentation

Sebastian Bayer

seb

20.66

Karlsruhe Institute of Technology

A Mask-RCNN network with Resnet-101 backbone. The backbone was initialized with ImageNet-pretrained Resnet-50 weights. The backbone uses batch-norm and everything else group-norm. To increase scores for rarer classes, images containing trains were sampled 20 times as often during training and images containing motorbikes, bicycles or riders were sampled twice as often as other images. The model was trained on 4 GPUs with 2 images per GPU. All weights except for the heads ​​were frozen for the first 1.5 epochs of training, followed by 0.5 epochs of warmup with a learning rate reduced by a factor of 1/100. After this warmup-phase, training resumed normally with a learning rate decrease by a factor of 10 shortly before ​the end of training.

Task 4: Instance-level Video Segmentation.