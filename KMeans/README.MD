# K-means-clustering
Identify list of values by user specified numbers of group (k).

# How does the algorithm works?
1. Specifiy K (Number of groups)(K > 1).
2. Randomly select K numbers of data points within the area (min, max of input data) as ***initial clusters***
3. Measure distance of data point to **each** cluster point, then assign the data point to the **nearest** cluster point. Then repeat the same step with **each** data point.
4. Calculate the mean of each cluster.
5. Repeat step **3** but instead of cluster point, we measure the distant of each point to the **mean** value we got from step **4**
6. If the cluster does not change, then we are done.

Extra: By peforming the algorithm once does not guaratee the perfect clustering, so additionally, ***attempt*** should also be specified. By redoing the K-means multiple times with different ***initial clusters***, it can then determine the best attempt by look at similar sum of count of **unique** values on each result culster.

Extra2: If input K is unspecified or unable to determined. The algorithm could auto run K starting from K = 1 untils it find the best variations in each culster.

## Determine best variant 
To determine the best variant as the result. We will look at the sum of difference of each child and take the lowest value (Most evenly distributed).
```
6 : 2 : 3 //Numbers of child of each cluster
4,3 4,1 3,1 = 7 + 5 + 4 = 16


4 : 3 : 4
1,0 1,1 0,1 = 1 + 2 + 1 = 4  Lowest the better
``` 

# Dependencies
- CLIB [GetSmallest]
- CLIB [RandomInt]



