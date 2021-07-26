function verifyProof(proof, node, root, concat) {
    for (let i = 0; i < proof.length; i++) {
        let proofElement = proof[i];
        if (proofElement.left) {
            node = concat(proofElement.data, node)
        }
        else {
            node = concat(node, proofElement.data)
        }
    }
    return root === node;
}

module.exports = verifyProof;