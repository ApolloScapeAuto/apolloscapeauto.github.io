# 3D Lidar Object Detection and Tracking

The large-scale dataset for urban traffic includes sequential 3D Lidar point cloud with high-quality annotations. It can be used for 3D detection and tracking tasks.

[**1 · Introduction**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**2 · Data Download**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**3 · Data Structure**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**4 · Evaluation**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**5 · Metric formula**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**6 · Rules of ranking**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**7 · Format of submission file**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**8 · Publication**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**9 · Reference**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

[**Q & A**](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284.md) 

# **1 · Introduction**

Our 3D Lidar object detection and tracking dataset consists of LiDAR scanned point clouds with high quality annotation. It is collected under various lighting conditions and traffic densities in Beijing, China. More specifically, it contains highly complicated traffic flows mixed with vehicles, cyclists, and pedestrians.

![3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284/intro_49a93e6.gif](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284/intro_49a93e6.gif)

# **2 · Data Download**

The 3D Lidar object detection and tracking benchmark consists of about 53min training sequences and 50min testing sequences. The data is captured at 10 frames per second and labeled at 2 frames per second. We provide all the raw data and labeled data.

**Sample** **Training data**

[detection_train_pcd_1](https://ad-apolloscape.cdn.bcebos.com/tracking_data/detection_train_pcd_1.zip) 

[detection_train_bin_1](https://ad-apolloscape.cdn.bcebos.com/tracking_data/detection_train_bin_1.zip) 

[detection_train_label](https://ad-apolloscape.cdn.bcebos.com/tracking_data/detection_train_label.zip) [tracking_train_label](https://ad-apolloscape.cdn.bcebos.com/tracking_data/tracking_train_label.zip) [tracking_train_pose](https://ad-apolloscape.cdn.bcebos.com/tracking_data/tracking_train_pose.zip)

**Sample Testing data**

[detection_test_pcd_1](https://ad-apolloscape.cdn.bcebos.com/tracking_data/detection_test_pcd_1.zip) 

[detection_test_bin_1](https://ad-apolloscape.cdn.bcebos.com/tracking_data/detection_test_bin_1.zip) 

[tracking_test_pose](https://ad-apolloscape.cdn.bcebos.com/tracking_data/tracking_test_pose.zip)

**Full data:** 

Please email apolloscape at baidu.com or [here](mailto:apolloscape@baidu.com) for downloading

# **3 · Data Structure**

The folder structure of the 3D Lidar object detection and tracking is as follows:

1) train.zip : training data for 3D Lidar object detection/ tracking. Lidar data is in PCD (Point Cloud Data) and bin file format in 2hz.

2) detection/ tracking_train_label.zip: labelled data for 3D Lidar object detection and tracking.
∙ Each file is a 1min sequence with 2fps.
∙ Each line in every file contains frame_id, object_id, object_type, position_x, position_y, position_z, object_length, object_width, object_height, heading. object_id is only for tracking.
∙ For object_type, 1 for small vehicles, 2 for big vehicles, 3 for pedestrian, 4 for motorcyclist and bicyclist, 5 for traffic cones and 6 for others. During the evaluation in this challenge, we treat the first two types, small vehicle and big vehicle, as one type (vehicle).
∙ Position is in the relative coordinate. The unit for the position and bounding box is meter.
∙ The heading value is the steering radian with respect to the direction of the object.

3) test.zip: testing data for 3D Lidar object detection and tracking.

4) pose.zip: lidar pose. Data in the format of: frame_index, lidar_time, position_(x, y, z), quaternion_(x, y, z ,w). This position is in the absolute coordinate, please use this position for tracking task.

# **4 · Evaluation**

The evaluation scripts are released on github [here](https://github.com/sibozhang/dataset-api/tree/master/3d_detection_tracking).

During the evaluation in this challenge, We do evaluation just for Car (type 1 small vehicles and type 2 big vehicles), Pedestrian (type 3) and Cyclist (type 4). However, please keep the original type IDs during the training and prediction, we will merge the first two types in our evaluation scripts.

# **5 · Metric formula**

1) 3D detection

We use similar metric defined in KITTI[2]. The goal in the 3D object detection task is to train object detectors for the classes 'vehicle', 'pedestrian', and 'bicyclist'. The object detectors must provide the 3D bounding box (3D dimensions and 3D position) and the detection score/confidence. We also note that not all objects in the point clouds have been labeled. We evaluate 3D object detection performance using mean average precision (mAP), based on IoU. Evaluation criterion similar to the 2D object detection benchmark (using 3D bounding box overlap). The final metric will be the mean of mAP of vehicles (mAPv), pedestrian (mAPp) and bicyclist (mAPb). We set IoU threshold for each type as 0.7 (Car), 0.5 (Pedestrian), 0.5(Cyclist).

2) 3D tracking

Follow the CLEARMOT [1], we use the multiple object tracking accuracy (MOTA) as the evaluation criterion.

![Untitled](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284/Untitled.png)

Where mt, fpt, mmet, and gt are the number of misses, of false positives, of mismatches, and of objects present respectively, for time .

For object  and tracker hypothese , we use the intersection-over-union ( IoU ) threshold to define.

![Untitled](3D%20Lidar%20Object%20Detection%20and%20Tracking%2041cdd1cc0b314da7b2dee97c1d6ce284/Untitled%201.png)

where Oi and Hj are the corresponding 3D bounding boxes for Oi and hj. We set IoU threshold for each type as 0.5. If IoU (Oi , hj) is less than 0.5, we think the tracker has missed the object.
The final score will be the mean MOTA of Car( MOTAv ), Pedestrian( MOTAp ) and Cyclist( MOTAb ).

# **6 · Rules of ranking**

1) 3D detection

Result benchmark will be:

| Rank | Method | mAP | AP(Car) | AP(Pedestrian) | AP(Cyclist) |
| --- | --- | --- | --- | --- | --- |
| xx |  |  |  |  |  |

Our ranking will determined by the mAP.

2) 3D tracking

Result benchmark will be:

| Rank | Method | MOTA | MOTA (Car) | MOTA (Pedestrian) | MOTA (Cyclist) |
| --- | --- | --- | --- | --- | --- |
| xx |  |  |  |  |  |

Our ranking will be determined by MOTA.

# **7 · Format of submission file**

1) 3D detection

Please submit one detection_result.zip file. In this zip file, you have one folder named detection_result, under this folder, you have multiple subfolders follow the same name in test_pcd, under each subfolder are result txt files of that sequence:

detection_result

├── 9048_2

├── ├── 2.txt

├── ├── 7.txt

…

├── ├── 462.txt

…

├── 9049_1

…

├── 9063_10

- Each line in every file contains object_type, position_x, position_y, position_z, object_length, object_width, object_height, heading, score. score indicates confidence in detection results.
- Each file name is frame_id name, which should be same as pcd frame id we provide in test_pcd. Each pcd file should have a corresponding result file. Total test result should be 5400 txt files.
- Please only keep type 1/2/3/4 in your result file. We do evaluation just for Car (type 1 and 2), Pedestrian (type 3) and Cyclist (type 4).

2) 3D tracking

Please submit one tracking_result.zip file. Folder and subfolders structure and file name are same to detection_result, but we need object_id in file.
- Each line in every file contains object_id, object_type, position_x, position_y, position_z, object_length, object_width, object_height, heading, score

# **8 · Publication**

Please cite our paper in your publications if our dataset is used in your research.

TrafficPredict: Trajectory Prediction for Heterogeneous Traffic-Agents [[PDF](https://arxiv.org/pdf/1811.02146.pdf)] [[BibTex]](https://ad-apolloscape.cdn.bcebos.com/TrafficPredict/trafficpredict_bibtex.txt)

Yuexin Ma, Xinge Zhu, Sibo Zhang, Ruigang Yang, Wenping Wang, and Dinesh Manocha.

*AAAI(oral), 2019*

# **9 · Reference**

[1] K. Bernardin, R. Stiefelhagen: Evaluating Multiple Object Tracking Performance: The CLEAR MOT Metrics. JIVP 2008.

[2]Geiger, Andreas, Philip Lenz, and Raquel Urtasun. "Are we ready for autonomous driving? the kitti vision benchmark suite." CVPR, 2012.

# **Q & A**

Q1. Is there corresponding image data included in the dataset?

We have not labeled the image data. Current challenge is just based on the Lidar data.

Q2. Is there any difference between .pcd file and .bin file?

They are just different in format. You can use any of them in your work.

Q3. Should I cut the lidar data like processing KITTI dataset?

No, you should use all the data.

Q4. What's data annotation rule for different type?

annotation is based on lidar point clouds not on actual object size

Small vehicles: small cars, SUVs.

Large vehicles: Motor vehicles with a height greater than 2 m or a length greater than 6 m.

Motorcyclist and Bicyclist: people riding motorcycles, electric cars, tricycles; bicycles (some people riding or pushing).

Pedestrians: include people who are carrying luggage, pushing a car (a type of car not covered above), and a person in a wheelchair.

Traffic cones : All traffic cones within 60 meters of ego car.

Q4: Summary of dataset

Object counts for cars, bicycles, and pedestrians are as follows: 16.2k, 5.5k, 60.1k

Please find details in paper ([https://arxiv.org/pdf/1811.02146.pdf](https://arxiv.org/pdf/1811.02146.pdf)
)

The dataset we released is desensitized street view for academic use only.