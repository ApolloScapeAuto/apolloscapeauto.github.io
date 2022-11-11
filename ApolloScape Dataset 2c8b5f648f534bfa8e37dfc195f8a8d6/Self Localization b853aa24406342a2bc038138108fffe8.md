# Self Localization

[1 · Introduction](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

[2 · Dataset Download](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

[3 · Dataset Structure](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

[4 · Evaluation](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

[5 · Metric formula](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

[6 · Rules of ranking](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

[7 · Submission of data format](Self%20Localization%20b853aa24406342a2bc038138108fffe8.md) 

This repository contains the evaluation scripts for the online self-localization challenge of the ApolloScapes dataset, Where we extended the dataset with more scenes and 100x large data including recorded videos under different lighting conditions, i.e. morning, noon and night. A test dataset for each new scene will be withheld for benchmark. (Notice we will not have point cloud for the very large data due to size of dataset)

# 1 · Introduction

This repository contains the evaluation scripts for the online self-localization challenge of the ApolloScapes dataset, Where we extended the dataset with more scenes and 100x large data including recorded videos under different lighting conditions, i.e. morning, noon and night, with stereo pair of images. A test dataset for each new scene will be withheld for benchmark. (Notice we will not have point cloud for the very large data due to size of dataset).

Details and download of data from different roads are available. Here are some interesting facts:

*For each road, we record it by driving from start-to-end and then end-to-start at different day times, which means at each site along the road, a scene will be looked at from two opposite directions. We provide the set of record id recorded from start-to-end and the set of record id from end-to-start in training set for each road at LoopDirection. One may discover the corresponding images from the camera pose we provided.*

*In this challenge, we record records from forward (start-to-end) and inverse (end-to-start) driving as records from two different roads, which means we will not have forward videos as training while have inverse driving as testing videos. However, it could be interesting to do that in your research as showed in the work of Semantic Visual Localization.*

![Self%20Localization%20b853aa24406342a2bc038138108fffe8/datasets-self-localization_b445704.gif](Self%20Localization%20b853aa24406342a2bc038138108fffe8/datasets-self-localization_b445704.gif)

# 2 · Dataset Download

**Sample data**

[self-localization-sample](https://ad-apolloscape.cdn.bcebos.com/self-localization-sample.tar.gz)

**Full Data**

For full Training data and Testing data, Please email apolloscape at [baidu.com](http://baidu.com) to download

# 3 · Dataset Structure

You may download the dataset from [self-localization](http://apolloscape.auto/ECCV/challenge.html). The sample data is used for paper

```
 @inproceedings{wang2018dels,
                   title={DeLS-3D: Deep Localization and Segmentation with a 3D Semantic Map},
                   author={Wang, Peng and Yang, Ruigang and Cao, Binbin and Xu, Wei and Lin, Yuanqing},
                   booktitle={CVPR},
                   pages={5860--5869},
                   year={2018}
                 }

```

`scene_names` include a sample scene:

- `Road_01`: which is a small dataset with 2242 train/756 val images recorded in the same scene

`data_type` includes:

- `image`: the RGB image from the dataset
- `pose`: the abosolute pose (roll,pitch,yall,x,y,z) of each image related to a map (Notice this is converted from the 4x4 pose matrix from Apolloscape dataset)
- `camera_params`: the intrinsic parameter of the camera
- `split`: the train val split used in the paper

`sequence_id`, each sequence, i.e. Recordxxx is a video sequence of the corresponding scene and the images are sorted numerically.

`camera_id`, each scene we provide images recorede by two camera facing front side.

- `zpark`: `Camera_1` and `Camera_2` There is a camera-name in-consistency of the device between the two scene, which will be fixed for the larger dataset later.

Here `split` include the train and val image names for each scene, where val images are recorded at different period with training images.

Similar data structure is described in apolloscape.auto/scene.html, while having the pose saved in a 4x4 matrix, a conversion code from 4x4 matrix to 6 DOF is provided in `utils` of this toolkit.

Later we will also release semantic labels, and semantic 3d point cloud python toolkit to render 3d point to 2d image for visualizing the semantic points.

# 4 · Evaluation

There are several scripts included with the dataset in a folder named `scripts`

- `eval_pose.py` Code for evalution pose accuracy based the commonly used eval metric of meidian translation and rotation error.

Code for test evaluation:

```
#!/bin/bash
                            python eval_pose.py --test_dir='./test_eval_data/pose_res' --gt_dir='./test_eval_data/pose_gt' --res_file='./test_eval_data/res.txt'
```

# 5 · Metric formula

For each image, given the predicted rotation  and translation  of image , and the ground truth  and , the metric for evaluation is defined as:

where  is the quaternions representation of the Euler angle `row, pitch, yall`

# 6 · Rules of ranking

Result benchmark will be:

Our ranking will determined by number of winning metrics from all scenes.

# 7 · Submission of data format

Please follow the data format under `test_eval_data/` for example.

- Example dir tree of submitted zip file

```
├── test
                │   ├── scene1
                │   │   ├── sequence1.txt
                │   │   ├── sequence2.txt
                │   │    ...
                │   ├── scene2
                │   │   ├── sequence1.txt
                │   │   ├── sequence2.txt
                ...
```

- Example format of `sequence1.txt`

```
image_name1 roll,pitch,yaw,x,y,z
                image_name2 roll,pitch,yaw,x,y,z
                image_name3 roll,pitch,yaw,x,y,z
                image_name4 roll,pitch,yaw,x,y,z
                image_name5 roll,pitch,yaw,x,y,z
```

Here `roll,pitch,yaw,x,y,z` are `float32` numbers

The dataset we released is desensitized street view for academic use only.