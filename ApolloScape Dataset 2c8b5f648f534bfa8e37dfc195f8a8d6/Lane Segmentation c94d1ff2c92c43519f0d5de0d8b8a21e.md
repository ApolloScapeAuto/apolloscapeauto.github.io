# Lane Segmentation

[1 · Introduction](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

[2 · Dataset Download](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

[3 · Dataset Structure](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

[4 · Scripts](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

[5 · Evaluation](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

[6 · Metric Formula](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

[7 · Rules of Ranking](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e.md) 

This repository contains the evaluation scripts for the landmark segmentation challenge of the ApolloScapes dataset.

This large - scale dataset contains a diverse set of stereo video sequences recorded in street scenes from different cities, with high quality pixel-level annotations of 110 000+ frames.

# 1 · Introduction

An accurate High Definition (HD) Maps with lane markings usually serves as the back-end for all commercial auto-drive vehicles for navigation. Currently, most HD maps are constructed manually by human labelers. In this challenge, we require participants to develop algorithms to extract all basic road elements from RGB image frames. The segmentation results can be directly used for HD Maps construction or updating process.

This repository contains the evaluation scripts for the landmark detection challenge of the ApolloScapes dataset. This large-scale dataset contains a diverse set of stereo video sequences recorded in street scenes from different cities, with high quality pixel-level annotations of 110 000+ frames.

![Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e/datasets-lanemark-segmentation_a06b9b1.gif](Lane%20Segmentation%20c94d1ff2c92c43519f0d5de0d8b8a21e/datasets-lanemark-segmentation_a06b9b1.gif)

# 2 · Dataset Download

**Sample data**

[lane_marking_examples.tar.gz](https://ad-apolloscape.cdn.bcebos.com/lane_marking_examples.tar.gz)

**Full data**

For full Training data and Testing data, Please email apolloscape at [baidu.com](http://baidu.com) to download

# 3 · Dataset Structure

The folder structure of the landmark detection challenge is as follows:

```
{root}/{type}_{road id}/{type}/{record id}/{camera id}/{timestamp}_{camera id}{ext}

```

The meaning of the individual elements is:

- `root` the root folder of the Apolloscapes dataset.
- `type` the type/modality of data, e.g. `ColorImage` and 'Labels'.
- `road id` an identifier specifying the road, e.g. road02.
- `record id` the folder name of a subset of images. Defined by the data collection system.
- `camera id` images are grouped by the cameras that capture them. In Apolloscape there are always two cameras: 'Camera 5' and 'Camera 6'.
- `timestamp` the time when each image is captured.
- `ext` the extension of the file. '.jpg' for RGB images and '.png' for groundtruths.

# 4 · Scripts

The evaluation scripts are released on github [here](https://github.com/ApolloScapeAuto/dataset-api). For lane segmentation, the codes are under */dataset-api/lane_segmentation/*. The structure of the script is described as below:

- `helpers` helper files which include usful information of using our evaluation files
- `evaluation` the main file for validating your approach
- `thirdParty` containing scripts from external libraries. We borrow some codes from [Cityscapes](https://github.com/mcordts/cityscapesScripts).

Note that all files have a short description at the top. Most important files are listed as below

- `helpers/laneMarkDetection.py` the main file defining the IDs of all lane classes and providing mapping between various class properties.
- `evaluation/evalPixelLevelSemanticLabeling.py` script to evaluate pixel-level lane labeling results on the test set.
- `install.sh` installation script of this library. Only tested for Ubuntu.

The scripts can be installed by running install.sh in the bash: `sudo bash install.sh`

This tool is dependent on the evaluation script from cityScape dataset, which is will be pulled recursively

# 5 · Evaluation

Once you want to test your method on the test set, please run your approach on the provided test images and submit your results to our ApolloScape [Challenge](javascript:void(0);):

For semantic labeling, we require the result format to match the format of our label images. Thus, your code should produce images where each pixel's value corresponds to a class ID as defined in `laneMarkDetection.py`. Note that our evaluation scripts are included in the scripts folder and can be used to test your approach. For further details regarding the submission process, please consult our website.

Run the following code for a sample evaluation:

```
cur_dir=`pwd`
export PYTHONPATH = PYTHONPATH:cur_dir
python evaluation/evalPixelLevelSemanticLabeling.py ./test_eval_data/ ./test_eval_data/pred_list.csv ./test_eval_data/ ./test_eval_data/gt_list.csv

```

# 6 · Metric Formula

We adopt the widely used mean IoU metric which is presented in [cityscape metric here](https://www.cityscapes-dataset.com/benchmarks/#scene-labeling-task). For each class, given the predicted masks  and ground truth  of image  and class , the metric for evaluation is defined as:

# 7 · Rules of Ranking

Result benchmark will be:

| --- | --- | --- | --- | --- |

Our ranking will determined by the mean iou of all lane classes.

****Submission of data format****

- Example dir tree of submitted zip file

```
├── test
│   ├── road_name_1
│   │   ├── image_name1.png
│   │   ├── image_name1.png
│   │    ...
│   ├── road_name_2
│   │   ├── image_name1.png
│   │   ├── image_name2.png
```

- Example format of `image_name1.png`
1. image_name1.png is a prediction label image, which should have the same name and same size as the testing image. In this image, each pixel encode the class IDs as defined in our labels description. Note that regular ID is used, not the train ID.
2. Each pixel is encoded as `uint8` format.

The dataset we released is desensitized street view for academic use only.