// exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions
    
//     const typeDefs = `
        
//         #The union name is arbitrary. However, I'm using the name that would have been generated by the schema inferer.
//         union ContentfulAssetContentfulRepeaterContentfulPostContentfulTagUnion = ContentfulAsset | ContentfulRepeater | ContentfulPost | ContentfulTag
//         # ContentfulPostRichBody does not implement node
//         type ContentfulPostRichBody {
//             references: [ContentfulAssetContentfulPageContentfulPostContentfulTagUnion] @link(by: "id", from: "references___NODE")
//         }
//     `
    
//     createTypes(typeDefs)

// }