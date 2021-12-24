import { RandomInt } from "../RandomInt/random-int.js"
import { GetSmallest } from "../GetSmallest/get-smallest.js"

interface Cluster{
    id: number,
    position: number,
    childs: number[]
}

export const KMeans = (
    k: number = 2,
    arr: number[],
    attempts: number = 1
): Cluster[] => {
    if(arr.length === 0) throw "Empty array."
    const variations: any[] = [];
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    for(let attempt = 0; attempt < attempts; attempt++){
        let clusters: Cluster[] = []
        //Generate initial clusters
        for(let i = 0; i<k ; i++)
            clusters.push({
                id: i + 1,
                position: RandomInt(min , max+1),
                childs: []
            })
        let previousCluster: Cluster[] = []
        let i = 0;
        while(CheckIfSameClusterPosition(clusters, previousCluster) === false){
            previousCluster = clusters.map(a => {return {...a}});
            //Reset childs
            for(let cluster of clusters) cluster.childs = []
            clusters = CalculteDistances(clusters, arr);
            clusters = RecalibrateClusterMean(clusters)
            i++
        }
        variations.push(clusters)
    }
    //Determine best variactions
    if(variations.length === 1) return variations[0]
    
    const variationScores: number[] = [];
    for(let variant of variations) {
        let variantSum: number = 0;
        for(let c = 0; c<variant.length-1; c++){
            variantSum += Math.abs(variant[c+1].childs.length-variant[c].childs.length)
        }
        variationScores.push(variantSum);
    }
    const smallestVariantScoreIndex: number[] = GetSmallest(variationScores, 1, true);
    return variations[smallestVariantScoreIndex[0]]
}

const CheckIfSameClusterPosition = (clusters: Cluster[], previousCluster: Cluster[] | []): boolean =>{
    if(previousCluster.length === 0) return false
    let isSame: boolean = true;
    for(let i in clusters) {
        if(previousCluster[i].position !== clusters[i].position){
            isSame = false
            break
        }
    }
    return isSame;
}

const CalculteDistances = (clusters: Cluster[], arr: number[]): Cluster[] => {
    arr.forEach(point => {
        const distances: number[] = [];
        for(let cluster of clusters) {
            const distance: number = Math.abs(cluster.position - point);
            distances.push(distance);
        }
        const nearestPointIndex: number[] = GetSmallest(distances, 1, true);
        //Add point to the cluster
        clusters[nearestPointIndex[0]].childs.push(point)
    })
    return clusters
}

const RecalibrateClusterMean = (clusters: Cluster[] ): Cluster[] => {
    for(let cluster of clusters) {
        if(cluster.childs.length === 0) continue;
        const sum: number = cluster.childs.reduce((a, b) => a + b, 0);    
        const mean: number = Number((sum/cluster.childs.length).toFixed(2));
        cluster.position = mean;
    }
    return clusters
}