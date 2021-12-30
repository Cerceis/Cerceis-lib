import { Generate } from "../Generate/generate.js";
import { GetArray } from "../GetArray/get-array.js";
export const KMeans = (k = 2, arr, attempts = 1) => {
    if (arr.length === 0)
        throw "Empty array.";
    const variations = [];
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    for (let attempt = 0; attempt < attempts; attempt++) {
        let clusters = [];
        //Generate initial clusters
        for (let i = 0; i < k; i++)
            clusters.push({
                id: i + 1,
                position: Generate.int(min, max + 1),
                childs: []
            });
        let previousCluster = [];
        let i = 0;
        while (CheckIfSameClusterPosition(clusters, previousCluster) === false) {
            previousCluster = clusters.map(a => { return Object.assign({}, a); });
            //Reset childs
            for (let cluster of clusters)
                cluster.childs = [];
            clusters = CalculteDistances(clusters, arr);
            clusters = RecalibrateClusterMean(clusters);
            i++;
        }
        variations.push(clusters);
    }
    //Determine best variactions
    if (variations.length === 1)
        return variations[0];
    const variationScores = [];
    for (let variant of variations) {
        let variantSum = 0;
        for (let c = 0; c < variant.length - 1; c++) {
            variantSum += Math.abs(variant[c + 1].childs.length - variant[c].childs.length);
        }
        variationScores.push(variantSum);
    }
    const smallestVariantScoreIndex = GetArray.smallest(variationScores, 1, true);
    return variations[smallestVariantScoreIndex[0]];
};
const CheckIfSameClusterPosition = (clusters, previousCluster) => {
    if (previousCluster.length === 0)
        return false;
    let isSame = true;
    for (let i in clusters) {
        if (previousCluster[i].position !== clusters[i].position) {
            isSame = false;
            break;
        }
    }
    return isSame;
};
const CalculteDistances = (clusters, arr) => {
    arr.forEach(point => {
        const distances = [];
        for (let cluster of clusters) {
            const distance = Math.abs(cluster.position - point);
            distances.push(distance);
        }
        const nearestPointIndex = GetArray.smallest(distances, 1, true);
        //Add point to the cluster
        clusters[nearestPointIndex[0]].childs.push(point);
    });
    return clusters;
};
const RecalibrateClusterMean = (clusters) => {
    for (let cluster of clusters) {
        if (cluster.childs.length === 0)
            continue;
        const sum = cluster.childs.reduce((a, b) => a + b, 0);
        const mean = Number((sum / cluster.childs.length).toFixed(2));
        cluster.position = mean;
    }
    return clusters;
};
//# sourceMappingURL=k-means.js.map