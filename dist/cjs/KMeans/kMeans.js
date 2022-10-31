"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KMeans = void 0;
const generate_js_1 = require("../Generate/generate.js");
const fromArray_js_1 = require("../FromArray/fromArray.js");
const KMeans = (k = 2, arr, attempts = 1) => {
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
                position: generate_js_1.Generate.int(min, max + 1),
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
    //Determine best variation
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
    const smallestVariantScoreIndex = fromArray_js_1.FromArray.getSmallest(variationScores, 1, true);
    return variations[smallestVariantScoreIndex[0]];
};
exports.KMeans = KMeans;
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
        const nearestPointIndex = fromArray_js_1.FromArray.getSmallest(distances, 1, true);
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
