const merkleVerify = require('./merkleVerify');



class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }

    getProof(index ){
        let proof = [];

        let layer = this.leaves;
        while (layer.length > 1) {

            let newLayer = [];

            for (let i = 0; i < layer.length; i += 2) {
                const firstLeaf = layer[i];
                const secondLeaf = layer[i + 1];

                if (secondLeaf) {
                    newLayer.push(this.concat(firstLeaf, secondLeaf));

                    if (index === i) {
                        // The property should be called left
                        proof.push({
                            data: secondLeaf,
                            left: false
                        })
                    }
                    if (index === i + 1) {
                        proof.push({
                            data: firstLeaf,
                            left: true
                        });
                    }
                }
                else {
                    newLayer.push(firstLeaf);
                }
            }

            index = Math.floor(index / 2);
            layer = newLayer;
        }

        return proof;

    }
    
    getRoot(layer = this.leaves) {
        if (layer.length ===1) return layer [0];

    
        
        let newLayer = [];

        for (let i = 0; i < layer.length; i += 2) {
            const firstLeaf = layer[i];
            const secondLeaf = layer[i + 1];
            if (secondLeaf) {
                newLayer.push(this.concat(firstLeaf, secondLeaf));
            }
            else {
                newLayer.push(firstLeaf);
            }
        }

        return this.getRoot(newLayer);
        


        
    }
}

module.exports = MerkleTree;